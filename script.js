let cart = {};
let products = [];
let categories = [];
let userPurchaseCount = 0;

// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// Загрузка данных при запуске
document.addEventListener('DOMContentLoaded', async () => {
    await loadCatalogData();
    updateCartDisplay();
    checkLoyaltyStatus();
});

async function loadCatalogData() {
    // Здесь должна быть загрузка данных с сервера
    // Для демонстрации используем моковые данные
    categories = [
        { id: 1, name: "📱 Электроника", description: "Смартфоны и гаджеты" },
        { id: 2, name: "👕 Одежда", description: "Модная одежда" },
        { id: 3, name: "🏠 Дом и сад", description: "Товары для дома" }
    ];
    
    products = [
        { id: 1, name: "iPhone 15", description: "Новейший смартфон Apple", price: 89990, stock_quantity: 5, category_id: 1, image_url: "https://via.placeholder.com/300x200" },
        { id: 2, name: "Samsung Galaxy S24", description: "Флагманский Android", price: 79990, stock_quantity: 3, category_id: 1, image_url: "https://via.placeholder.com/300x200" },
        { id: 3, name: "Футболка Nike", description: "Спортивная футболка", price: 2990, stock_quantity: 10, category_id: 2, image_url: "https://via.placeholder.com/300x200" },
        { id: 4, name: "Джинсы Levi's", description: "Классические джинсы", price: 5990, stock_quantity: 7, category_id: 2, image_url: "https://via.placeholder.com/300x200" },
        { id: 5, name: "Настольная лампа", description: "LED лампа для работы", price: 1590, stock_quantity: 15, category_id: 3, image_url: "https://via.placeholder.com/300x200" }
    ];
    
    // Симулируем количество покупок пользователя
    userPurchaseCount = Math.floor(Math.random() * 10);
    
    renderCategories();
    renderProducts();
}

function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = '';
    
    // Добавляем кнопку "Все товары"
    const allBtn = document.createElement('div');
    allBtn.className = 'category-item active';
    allBtn.innerHTML = '🛍️ Все товары';
    allBtn.onclick = () => selectCategory(null);
    categoriesContainer.appendChild(allBtn);
    
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category-item';
        categoryElement.innerHTML = category.name;
        categoryElement.onclick = () => selectCategory(category.id);
        categoriesContainer.appendChild(categoryElement);
    });
}

function selectCategory(categoryId) {
    // Обновляем активную категорию
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderProducts(categoryId);
}

function renderProducts(categoryId = null) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    
    const filteredProducts = categoryId 
        ? products.filter(p => p.category_id === categoryId)
        : products;
    
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <img src="${product.image_url}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x200?text=Нет+фото'">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">${product.price.toLocaleString()} ₽</div>
                <div class="product-stock">Осталось: ${product.stock_quantity} шт.</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${product.stock_quantity === 0 ? 'disabled' : ''}>
                    ${product.stock_quantity === 0 ? 'Нет в наличии' : 'Добавить в корзину'}
                </button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock_quantity === 0) return;
    
    if (cart[productId]) {
        if (cart[productId].quantity < product.stock_quantity) {
            cart[productId].quantity++;
        } else {
            tg.showAlert('Недостаточно товара на складе!');
            return;
        }
    } else {
        cart[productId] = {
            ...product,
            quantity: 1
        };
    }
    
    updateCartDisplay();
    tg.HapticFeedback.impactOccurred('light');
}

function removeFromCart(productId) {
    if (cart[productId]) {
        cart[productId].quantity--;
        if (cart[productId].quantity <= 0) {
            delete cart[productId];
        }
    }
    updateCartDisplay();
    renderCartItems();
}

function updateCartDisplay() {
    const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
    } else {
        cartModal.style.display = 'block';
        renderCartItems();
    }
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    const cartArray = Object.values(cart);
    
    if (cartArray.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Корзина пуста</div>';
        document.getElementById('total-amount').textContent = '0';
        document.getElementById('discount-info').style.display = 'none';
        return;
    }
    
    let total = 0;
    
    cartArray.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} ₽ × ${item.quantity}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="removeFromCart(${item.id})">−</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="addToCart(${item.id})">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Рассчитываем скидку по программе лояльности
    const isLoyaltyPurchase = (userPurchaseCount + 1) % 7 === 0;
    let discount = 0;
    
    if (isLoyaltyPurchase && cartArray.length > 0) {
        const cheapestItem = cartArray.reduce((min, item) => 
            item.price < min.price ? item : min
        );
        discount = cheapestItem.price * 0.35;
        
        document.getElementById('discount-info').style.display = 'block';
        document.getElementById('discount-amount').textContent = discount.toLocaleString();
    } else {
        document.getElementById('discount-info').style.display = 'none';
    }
    
    const finalTotal = total - discount;
    document.getElementById('total-amount').textContent = finalTotal.toLocaleString();
}

function checkLoyaltyStatus() {
    const isNextLoyalty = (userPurchaseCount + 1) % 7 === 0;
    const loyaltyBanner = document.getElementById('loyalty-banner');
    
    if (isNextLoyalty) {
        loyaltyBanner.style.display = 'block';
    }
}

function placeOrder() {
    const fullName = document.getElementById('full-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    if (!fullName || !phone) {
        tg.showAlert('Пожалуйста, заполните все поля!');
        return;
    }
    
    if (Object.keys(cart).length === 0) {
        tg.showAlert('Корзина пуста!');
        return;
    }
    
    const orderData = {
        action: 'place_order',
        cart: Object.values(cart),
        phone: phone,
        full_name: fullName
    };
    
    tg.sendData(JSON.stringify(orderData));
    tg.close();
}

// Обработка кнопки "Назад" в Telegram
tg.BackButton.show();
tg.BackButton.onClick(() => {
    tg.close();
});
