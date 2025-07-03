// ZAKUMAR Vape Shop - Telegram WebApp
// Main application logic

// Initialize Telegram WebApp
let tg = window.Telegram?.WebApp;
if (tg) {
  tg.expand();
  tg.ready();
}

// Application state
let state = {
  currentView: 'store',
  currentCategory: 'Liquids',
  products: [
    {"id":1,"category":"Liquids","name":"Cloudy Berries 60ml","price":700,"stock":10},
    {"id":2,"category":"Liquids","name":"Mint Blast 30ml","price":500,"stock":15},
    {"id":3,"category":"Consumables","name":"Coil 0.3Ω","price":150,"stock":25},
    {"id":4,"category":"Consumables","name":"Cotton Bacon","price":200,"stock":12},
    {"id":5,"category":"Pods","name":"Z-Pod Ultra","price":1800,"stock":8},
    {"id":6,"category":"Pods","name":"Z-Pod Mini","price":1400,"stock":5},
    {"id":7,"category":"Disposables","name":"PuffMax 2000 Blueberry","price":900,"stock":20},
    {"id":8,"category":"Disposables","name":"PuffMax 2000 Mango","price":900,"stock":18}
  ],
  cart: [],
  purchaseCount: 0,
  isAdmin: false
};

// Categories mapping
const categories = {
  'Liquids': 'Жидкости',
  'Consumables': 'Расходники', 
  'Pods': 'Поды',
  'Disposables': 'Одноразовки'
};

// DOM elements
const app = document.getElementById('app');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const adminLink = document.getElementById('adminLink');
const modal = document.getElementById('modal');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Try to get purchase count from Telegram session storage
  if (tg?.sessionStorage) {
    state.purchaseCount = parseInt(tg.sessionStorage.getItem('purchaseCount') || '0');
  }
  
  renderStore();
  updateHeader();
  
  // Event listeners
  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderCart();
  });
  
  adminLink.addEventListener('click', (e) => {
    e.preventDefault();
    showAdminLogin();
  });
  
  // Close modal on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});

// Store view functions
function renderStore() {
  state.currentView = 'store';
  
  const tabs = Object.keys(categories).map(cat => 
    `<button class="tab-btn ${cat === state.currentCategory ? 'active' : ''}" 
             onclick="switchCategory('${cat}')">${categories[cat]}</button>`
  ).join('');
  
  const filteredProducts = state.products.filter(p => p.category === state.currentCategory);
  
  const products = filteredProducts.map(product => `
    <div class="product-card">
      <img src="https://via.placeholder.com/200x150/333333/00ffd5?text=${encodeURIComponent(product.name.substring(0, 10))}" 
           alt="${product.name}" class="product-image">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price">${product.price} ₽</div>
      <div class="product-stock ${product.stock > 0 ? 'stock-in' : 'stock-out'}">
        ${product.stock > 0 ? `В наличии: ${product.stock}` : 'Нет в наличии'}
      </div>
      <button class="btn btn--primary" 
              onclick="addToCart(${product.id})"
              ${product.stock === 0 ? 'disabled' : ''}>
        ${product.stock === 0 ? 'Нет в наличии' : 'Добавить в корзину'}
      </button>
    </div>
  `).join('');
  
  app.innerHTML = `
    <div class="tab-nav">
      ${tabs}
    </div>
    <div class="product-grid">
      ${products || '<div class="empty-state"><h3>Товары не найдены</h3><p>В этой категории пока нет товаров</p></div>'}
    </div>
  `;
}

function switchCategory(category) {
  state.currentCategory = category;
  renderStore();
}

function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product || product.stock === 0) return;
  
  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    if (existingItem.qty < product.stock) {
      existingItem.qty += 1;
    }
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }
  
  updateHeader();
  
  // Show feedback
  const button = event.target;
  const originalText = button.textContent;
  const originalColor = button.style.backgroundColor;
  button.textContent = 'Добавлено!';
  button.style.backgroundColor = '#00ff88';
  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = originalColor;
  }, 1000);
}

// Cart view functions
function renderCart() {
  if (state.cart.length === 0) {
    showModal('Корзина пуста', `
      <div class="empty-state">
        <h3>Ваша корзина пуста</h3>
        <p>Добавьте товары из каталога</p>
        <button class="btn btn--primary" onclick="closeModal()">
          Продолжить покупки
        </button>
      </div>
    `);
    return;
  }
  
  const cartItems = state.cart.map(item => {
    const product = state.products.find(p => p.id === item.id);
    if (!product) return '';
    
    const subtotal = product.price * item.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-price">${product.price} ₽ × ${item.qty} = ${subtotal} ₽</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
          <span style="margin: 0 8px; min-width: 20px; text-align: center;">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
          <button class="btn btn--danger" onclick="removeFromCart(${item.id})" style="margin-left: 8px;">×</button>
        </div>
      </div>
    `;
  }).join('');
  
  const total = calculateTotal();
  const loyaltyProgress = 7 - (state.purchaseCount % 7);
  const hasDiscount = state.purchaseCount > 0 && state.purchaseCount % 7 === 0;
  const discountAmount = hasDiscount ? Math.round(total * 0.35) : 0;
  const finalTotal = total - discountAmount;
  
  const loyaltyInfo = hasDiscount ? 
    `<div class="loyalty-discount">СКИДКА ЛОЯЛЬНОСТИ –35% применена (-${discountAmount} ₽)</div>` :
    `<div>Покупок до скидки 35%: ${loyaltyProgress}/7</div>`;
  
  showModal('Корзина', `
    <div class="cart-content">
      ${cartItems}
      <div class="loyalty-info">
        ${loyaltyInfo}
      </div>
      <div class="cart-total">
        <div class="flex justify-between">
          <span>Итого:</span>
          <span class="font-bold">${finalTotal} ₽</span>
        </div>
        ${hasDiscount ? `<div class="flex justify-between text-success">
          <span>Сэкономлено:</span>
          <span>${discountAmount} ₽</span>
        </div>` : ''}
      </div>
      <button class="btn btn--primary" onclick="showCheckout()" style="width: 100%; margin-top: 16px;">
        Оформить заказ
      </button>
    </div>
  `);
}

function updateCartQty(productId, change) {
  const item = state.cart.find(item => item.id === productId);
  const product = state.products.find(p => p.id === productId);
  
  if (!item || !product) return;
  
  const newQty = item.qty + change;
  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }
  
  if (newQty <= product.stock) {
    item.qty = newQty;
    updateHeader();
    renderCart();
  }
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  updateHeader();
  
  if (state.cart.length === 0) {
    closeModal();
  } else {
    renderCart();
  }
}

function calculateTotal() {
  return state.cart.reduce((total, item) => {
    const product = state.products.find(p => p.id === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

// Checkout functions
function showCheckout() {
  const total = calculateTotal();
  const hasDiscount = state.purchaseCount > 0 && state.purchaseCount % 7 === 0;
  const discountAmount = hasDiscount ? Math.round(total * 0.35) : 0;
  const finalTotal = total - discountAmount;
  
  showModal('Оформление заказа', `
    <form id="checkoutForm" onsubmit="handleCheckout(event)">
      <div class="form-group">
        <label class="form-label">Имя *</label>
        <input type="text" id="customerName" class="form-control" required minlength="2">
      </div>
      <div class="form-group">
        <label class="form-label">Телефон *</label>
        <input type="tel" id="customerPhone" class="form-control" required 
               placeholder="+7 (900) 123-45-67">
      </div>
      <div class="cart-total">
        <div class="flex justify-between">
          <span>Итого к оплате:</span>
          <span class="font-bold">${finalTotal} ₽</span>
        </div>
      </div>
      <div class="flex gap-8" style="margin-top: 16px;">
        <button type="submit" class="btn btn--primary" style="flex: 1;">
          Подтвердить заказ
        </button>
        <button type="button" class="btn btn--secondary" onclick="renderCart()">
          Назад
        </button>
      </div>
    </form>
  `);
}

function handleCheckout(e) {
  e.preventDefault();
  
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  
  // Simple validation
  if (!name || name.length < 2) {
    alert('Пожалуйста, введите корректное имя (минимум 2 символа)');
    return;
  }
  
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  if (cleanPhone.length < 10) {
    alert('Пожалуйста, введите корректный номер телефона');
    return;
  }
  
  // Build order object
  const total = calculateTotal();
  const hasDiscount = state.purchaseCount > 0 && state.purchaseCount % 7 === 0;
  const discountAmount = hasDiscount ? Math.round(total * 0.35) : 0;
  const finalTotal = total - discountAmount;
  
  const orderItems = state.cart.map(item => {
    const product = state.products.find(p => p.id === item.id);
    return {
      name: product.name,
      qty: item.qty,
      price: product.price,
      subtotal: product.price * item.qty
    };
  });
  
  const order = {
    customer: { name, phone },
    items: orderItems,
    total: finalTotal,
    originalTotal: total,
    discountApplied: hasDiscount,
    discountAmount: discountAmount,
    purchaseCount: state.purchaseCount + 1,
    timestamp: new Date().toISOString()
  };
  
  // Send data via Telegram WebApp
  try {
    if (tg?.sendData) {
      tg.sendData(JSON.stringify(order));
    } else {
      // Fallback for testing without Telegram
      console.log('Order would be sent to Telegram bot:', order);
    }
  } catch (error) {
    console.error('Error sending order:', error);
  }
  
  // Update purchase count
  state.purchaseCount += 1;
  if (tg?.sessionStorage) {
    tg.sessionStorage.setItem('purchaseCount', state.purchaseCount.toString());
  }
  
  // Reduce stock
  state.cart.forEach(item => {
    const product = state.products.find(p => p.id === item.id);
    if (product) {
      product.stock = Math.max(0, product.stock - item.qty);
    }
  });
  
  // Clear cart
  state.cart = [];
  updateHeader();
  
  // Show thank you message
  const orderNumber = Date.now().toString().slice(-6);
  showModal('Заказ принят!', `
    <div class="text-center">
      <h3 class="text-success">Спасибо за покупку!</h3>
      <p>Ваш заказ №${orderNumber} принят в обработку.</p>
      <p>Мы свяжемся с вами в ближайшее время по номеру: ${phone}</p>
      <button class="btn btn--primary" onclick="closeModal()">
        Продолжить покупки
      </button>
    </div>
  `);
}

// Admin functions
function showAdminLogin() {
  showModal('Вход в админ-панель', `
    <form id="adminLoginForm" onsubmit="handleAdminLogin(event)">
      <div class="form-group">
        <label class="form-label">Пароль администратора</label>
        <input type="password" id="adminPassword" class="form-control" required placeholder="Введите пароль">
      </div>
      <button type="submit" class="btn btn--primary">Войти</button>
    </form>
  `);
}

function handleAdminLogin(e) {
  e.preventDefault();
  const password = document.getElementById('adminPassword').value;
  if (password === 'admin123') {
    state.isAdmin = true;
    renderAdmin();
  } else {
    alert('Неверный пароль. Попробуйте снова.');
    document.getElementById('adminPassword').focus();
  }
}

function renderAdmin() {
  const productRows = state.products.map(product => `
    <tr>
      <td><input type="text" value="${product.name}" onchange="updateProduct(${product.id}, 'name', this.value)"></td>
      <td>
        <select onchange="updateProduct(${product.id}, 'category', this.value)">
          ${Object.keys(categories).map(cat => 
            `<option value="${cat}" ${cat === product.category ? 'selected' : ''}>${categories[cat]}</option>`
          ).join('')}
        </select>
      </td>
      <td><input type="number" value="${product.price}" min="0" onchange="updateProduct(${product.id}, 'price', parseInt(this.value) || 0)"></td>
      <td><input type="number" value="${product.stock}" min="0" onchange="updateProduct(${product.id}, 'stock', parseInt(this.value) || 0)"></td>
      <td><button class="btn btn--danger" onclick="deleteProduct(${product.id})">Удалить</button></td>
    </tr>
  `).join('');
  
  showModal('Админ-панель', `
    <div style="max-height: 60vh; overflow-y: auto;">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Категория</th>
            <th>Цена (₽)</th>
            <th>Остаток</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          ${productRows}
          <tr id="newProductRow">
            <td><input type="text" id="newName" placeholder="Название товара"></td>
            <td>
              <select id="newCategory">
                ${Object.keys(categories).map(cat => 
                  `<option value="${cat}">${categories[cat]}</option>`
                ).join('')}
              </select>
            </td>
            <td><input type="number" id="newPrice" placeholder="Цена" min="0"></td>
            <td><input type="number" id="newStock" placeholder="Остаток" min="0"></td>
            <td><button class="btn btn--primary" onclick="addProduct()">Добавить</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex gap-8" style="margin-top: 16px;">
      <button class="btn btn--secondary" onclick="closeModal()">Закрыть</button>
    </div>
  `);
}

function updateProduct(id, field, value) {
  const product = state.products.find(p => p.id === id);
  if (product) {
    product[field] = value;
    // Re-render store if currently viewing it
    if (state.currentView === 'store') {
      renderStore();
    }
  }
}

function deleteProduct(id) {
  if (confirm('Вы уверены, что хотите удалить этот товар?')) {
    state.products = state.products.filter(p => p.id !== id);
    renderAdmin();
    // Re-render store if currently viewing it
    if (state.currentView === 'store') {
      renderStore();
    }
  }
}

function addProduct() {
  const name = document.getElementById('newName').value.trim();
  const category = document.getElementById('newCategory').value;
  const price = parseInt(document.getElementById('newPrice').value) || 0;
  const stock = parseInt(document.getElementById('newStock').value) || 0;
  
  if (!name || price <= 0) {
    alert('Пожалуйста, заполните название и укажите корректную цену');
    return;
  }
  
  const newId = Math.max(...state.products.map(p => p.id), 0) + 1;
  state.products.push({
    id: newId,
    name,
    category,
    price,
    stock
  });
  
  // Clear the form
  document.getElementById('newName').value = '';
  document.getElementById('newPrice').value = '';
  document.getElementById('newStock').value = '';
  
  renderAdmin();
  // Re-render store if currently viewing it
  if (state.currentView === 'store') {
    renderStore();
  }
}

// Utility functions
function updateHeader() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = `(${totalItems})`;
}

function showModal(title, content) {
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">${title}</h2>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        ${content}
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

// Global functions for inline handlers
window.switchCategory = switchCategory;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
window.showCheckout = showCheckout;
window.handleCheckout = handleCheckout;
window.handleAdminLogin = handleAdminLogin;
window.updateProduct = updateProduct;
window.deleteProduct = deleteProduct;
window.addProduct = addProduct;
window.closeModal = closeModal;
