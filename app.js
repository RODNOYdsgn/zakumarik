// ZAKUMAR Vape Shop Application
class ZakumarApp {
    constructor() {
        this.products = {
            "Жидкости": [
                {
                    "id": 1,
                    "name": "Alchemist Mojito",
                    "price": 359,
                    "description": "Освежающий вкус лайма с мятой и сахаром",
                    "volume": "30мл",
                    "nicotine": "5%",
                    "stock": 25
                },
                {
                    "id": 2,
                    "name": "Chaser Special Berry",
                    "price": 139,
                    "description": "Микс лесных ягод с насыщенным вкусом",
                    "volume": "30мл",
                    "nicotine": "5%",
                    "stock": 30
                },
                {
                    "id": 3,
                    "name": "Elf Liq Strawberry Raspberry",
                    "price": 350,
                    "description": "Клубника и малина с освежающим льдом",
                    "volume": "30мл",
                    "nicotine": "5%",
                    "stock": 20
                },
                {
                    "id": 4,
                    "name": "Hype Орбит",
                    "price": 145,
                    "description": "Знакомый вкус жвачки с легкой свежестью",
                    "volume": "30мл",
                    "nicotine": "3%",
                    "stock": 15
                },
                {
                    "id": 5,
                    "name": "Eight by Katana Лимон-Мята",
                    "price": 180,
                    "description": "Яркие ноты лимона с прохладной мятой",
                    "volume": "10мл",
                    "nicotine": "5%",
                    "stock": 35
                },
                {
                    "id": 6,
                    "name": "Crazy Juice Salt Киви-Огурец",
                    "price": 175,
                    "description": "Необычное сочетание киви и освежающего огурца",
                    "volume": "30мл",
                    "nicotine": "5%",
                    "stock": 12
                }
            ],
            "Расходники": [
                {
                    "id": 7,
                    "name": "Картридж Voopoo VMATE V3",
                    "price": 150,
                    "description": "Оригинальный картридж 0.7 Ом для VMATE серии",
                    "compatibility": "Voopoo VMATE",
                    "resistance": "0.7 Ом",
                    "stock": 40
                },
                {
                    "id": 8,
                    "name": "SMOK NOVO 2 POD",
                    "price": 120,
                    "description": "Сменный картридж для SMOK NOVO 2",
                    "compatibility": "SMOK NOVO 2",
                    "resistance": "1.0 Ом",
                    "stock": 25
                },
                {
                    "id": 9,
                    "name": "Vaporesso GTX Pod",
                    "price": 175,
                    "description": "Универсальный картридж для GTX серии",
                    "compatibility": "Vaporesso GTX",
                    "resistance": "0.8 Ом",
                    "stock": 30
                },
                {
                    "id": 10,
                    "name": "Испаритель для бака",
                    "price": 90,
                    "description": "Универсальный испаритель из нержавеющей стали",
                    "compatibility": "Универсальный",
                    "resistance": "1.2 Ом",
                    "stock": 50
                },
                {
                    "id": 11,
                    "name": "Аккумулятор 18650",
                    "price": 250,
                    "description": "Литий-ионный аккумулятор 3000mAh",
                    "capacity": "3000mAh",
                    "voltage": "3.7V",
                    "stock": 20
                },
                {
                    "id": 12,
                    "name": "Зарядное устройство",
                    "price": 350,
                    "description": "Универсальное зарядное устройство USB",
                    "compatibility": "Универсальное",
                    "ports": "2 порта",
                    "stock": 15
                }
            ],
            "Поды": [
                {
                    "id": 13,
                    "name": "Vaporesso XROS 4",
                    "price": 1100,
                    "description": "Компактная POD-система с регулируемой мощностью",
                    "battery": "1000mAh",
                    "power": "30W",
                    "stock": 18
                },
                {
                    "id": 14,
                    "name": "Elf Bar ELFX",
                    "price": 660,
                    "description": "Стильная POD-система с автоматической затяжкой",
                    "battery": "500mAh",
                    "power": "20W",
                    "stock": 22
                },
                {
                    "id": 15,
                    "name": "Voopoo Vmate Pro",
                    "price": 900,
                    "description": "Мощная POD-система с большой батареей",
                    "battery": "900mAh",
                    "power": "40W",
                    "stock": 10
                },
                {
                    "id": 16,
                    "name": "Lost Vape Thelema Elite",
                    "price": 970,
                    "description": "Премиальная POD-система с дисплеем",
                    "battery": "1400mAh",
                    "power": "40W",
                    "stock": 8
                },
                {
                    "id": 17,
                    "name": "Geekvape Aegis Mini",
                    "price": 750,
                    "description": "Защищенная POD-система IP67",
                    "battery": "800mAh",
                    "power": "25W",
                    "stock": 16
                },
                {
                    "id": 18,
                    "name": "Smok Nord 50W",
                    "price": 590,
                    "description": "Классическая POD-система с кнопкой",
                    "battery": "1800mAh",
                    "power": "50W",
                    "stock": 25
                }
            ],
            "Одноразки": [
                {
                    "id": 19,
                    "name": "Elf Bar BC5000",
                    "price": 949,
                    "description": "Популярная одноразка с зарядкой, 5000 затяжек",
                    "puffs": "5000",
                    "battery": "650mAh",
                    "stock": 35
                },
                {
                    "id": 20,
                    "name": "Elf Bar 1500",
                    "price": 335,
                    "description": "Компактная одноразка, 1500 затяжек",
                    "puffs": "1500",
                    "battery": "850mAh",
                    "stock": 50
                },
                {
                    "id": 21,
                    "name": "Elf Bar BC20000 Touch",
                    "price": 959,
                    "description": "Премиальная одноразка с сенсорным экраном",
                    "puffs": "20000",
                    "battery": "650mAh",
                    "stock": 12
                },
                {
                    "id": 22,
                    "name": "Lost Mary BM5000",
                    "price": 849,
                    "description": "Стильная одноразка с насыщенными вкусами",
                    "puffs": "5000",
                    "battery": "650mAh",
                    "stock": 28
                },
                {
                    "id": 23,
                    "name": "Katana Disposable",
                    "price": 689,
                    "description": "Качественная одноразка от японского бренда",
                    "puffs": "3000",
                    "battery": "550mAh",
                    "stock": 20
                },
                {
                    "id": 24,
                    "name": "Vaporlax Nova",
                    "price": 559,
                    "description": "Надежная одноразка с долгим сроком службы",
                    "puffs": "2500",
                    "battery": "500mAh",
                    "stock": 42
                }
            ]
        };

        this.cart = [];
        this.orders = [];
        this.currentCategory = 'all';
        this.purchaseCount = 0;
        this.isLoggedIn = false;

        this.init();
    }

    init() {
        this.bindEvents();
        this.renderProducts();
        this.updateLoyaltyStatus();
        this.updateCartCount();
    }

    bindEvents() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.currentCategory = e.target.dataset.category;
                this.setActiveNavButton(e.target);
                this.renderProducts();
            });
        });

        // Cart modal
        document.getElementById('cart-btn').addEventListener('click', () => {
            this.openModal('cart-modal');
            this.renderCart();
        });

        document.getElementById('close-cart').addEventListener('click', () => {
            this.closeModal('cart-modal');
        });

        // Checkout
        document.getElementById('checkout-btn').addEventListener('click', () => {
            if (this.cart.length === 0) {
                alert('Корзина пуста!');
                return;
            }
            this.closeModal('cart-modal');
            this.openModal('order-modal');
            this.renderOrderSummary();
        });

        // Order form
        document.getElementById('close-order').addEventListener('click', () => {
            this.closeModal('order-modal');
        });

        document.getElementById('order-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.processOrder();
        });

        // Admin panel
        document.getElementById('admin-btn').addEventListener('click', () => {
            this.openModal('admin-login-modal');
        });

        document.getElementById('close-admin-login').addEventListener('click', () => {
            this.closeModal('admin-login-modal');
        });

        document.getElementById('admin-login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.adminLogin();
        });

        document.getElementById('close-admin').addEventListener('click', () => {
            this.closeModal('admin-modal');
        });

        // Admin tabs
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveAdminTab(e.target.dataset.tab);
            });
        });

        // Success modal
        document.getElementById('close-success').addEventListener('click', () => {
            this.closeModal('success-modal');
        });

        document.getElementById('success-ok').addEventListener('click', () => {
            this.closeModal('success-modal');
        });

        // Close modals on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });
    }

    setActiveNavButton(activeBtn) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    renderProducts() {
        const grid = document.getElementById('products-grid');
        grid.innerHTML = '';

        const productsToShow = this.currentCategory === 'all' 
            ? this.getAllProducts() 
            : this.products[this.currentCategory] || [];

        productsToShow.forEach(product => {
            if (product.stock > 0) {
                const productCard = this.createProductCard(product);
                grid.appendChild(productCard);
            }
        });

        if (productsToShow.length === 0) {
            grid.innerHTML = '<div class="empty-state"><h3>Товары не найдены</h3><p>Попробуйте выбрать другую категорию</p></div>';
        }
    }

    getAllProducts() {
        const allProducts = [];
        Object.values(this.products).forEach(categoryProducts => {
            allProducts.push(...categoryProducts);
        });
        return allProducts;
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card fade-in';
        
        const category = this.getProductCategory(product.id);
        const specs = this.getProductSpecs(product);
        const stockClass = product.stock <= 5 ? 'low-stock' : '';
        
        card.innerHTML = `
            <div class="product-card__header">
                <div class="product-card__category">${category}</div>
                <div class="product-card__stock ${stockClass}">
                    ${product.stock > 0 ? `В наличии: ${product.stock}` : 'Нет в наличии'}
                </div>
            </div>
            <h3 class="product-card__name">${product.name}</h3>
            <div class="product-card__price">${product.price} ₽</div>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__specs">
                ${specs.map(spec => `<span class="product-card__spec">${spec}</span>`).join('')}
            </div>
            <div class="product-card__actions">
                <button class="btn btn--primary product-card__add-btn" 
                        onclick="app.addToCart(${product.id})"
                        ${product.stock === 0 ? 'disabled' : ''}>
                    ${product.stock === 0 ? 'Нет в наличии' : 'В корзину'}
                </button>
            </div>
        `;
        
        return card;
    }

    getProductCategory(productId) {
        for (const [category, products] of Object.entries(this.products)) {
            if (products.find(p => p.id === productId)) {
                return category;
            }
        }
        return 'Неизвестно';
    }

    getProductSpecs(product) {
        const specs = [];
        if (product.volume) specs.push(product.volume);
        if (product.nicotine) specs.push(product.nicotine);
        if (product.resistance) specs.push(product.resistance);
        if (product.battery) specs.push(product.battery);
        if (product.power) specs.push(product.power);
        if (product.puffs) specs.push(`${product.puffs} затяжек`);
        if (product.capacity) specs.push(product.capacity);
        if (product.voltage) specs.push(product.voltage);
        if (product.compatibility) specs.push(product.compatibility);
        if (product.ports) specs.push(product.ports);
        return specs;
    }

    addToCart(productId) {
        const product = this.findProductById(productId);
        if (!product || product.stock === 0) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            if (existingItem.quantity < product.stock) {
                existingItem.quantity++;
            } else {
                alert('Недостаточно товара на складе');
                return;
            }
        } else {
            this.cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }

        this.updateCartCount();
        this.showMessage('Товар добавлен в корзину!');
    }

    findProductById(id) {
        for (const categoryProducts of Object.values(this.products)) {
            const product = categoryProducts.find(p => p.id === id);
            if (product) return product;
        }
        return null;
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-count').textContent = count;
    }

    renderCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';

        if (this.cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-state"><h3>Корзина пуста</h3><p>Добавьте товары из каталога</p></div>';
            document.getElementById('checkout-btn').disabled = true;
            return;
        }

        document.getElementById('checkout-btn').disabled = false;

        this.cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item__info">
                    <div class="cart-item__name">${item.name}</div>
                    <div class="cart-item__price">${item.price} ₽</div>
                </div>
                <div class="cart-item__controls">
                    <button class="btn btn--sm btn--outline" onclick="app.updateCartQuantity(${item.id}, -1)">-</button>
                    <input type="number" class="cart-item__quantity" value="${item.quantity}" min="1" 
                           onchange="app.setCartQuantity(${item.id}, this.value)">
                    <button class="btn btn--sm btn--outline" onclick="app.updateCartQuantity(${item.id}, 1)">+</button>
                    <button class="cart-item__remove" onclick="app.removeFromCart(${item.id})">Удалить</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        this.updateCartSummary();
    }

    updateCartQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        const product = this.findProductById(productId);
        
        if (item && product) {
            const newQuantity = item.quantity + change;
            if (newQuantity <= 0) {
                this.removeFromCart(productId);
            } else if (newQuantity <= product.stock) {
                item.quantity = newQuantity;
                this.renderCart();
                this.updateCartCount();
            } else {
                alert('Недостаточно товара на складе');
            }
        }
    }

    setCartQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        const product = this.findProductById(productId);
        
        quantity = parseInt(quantity);
        if (quantity <= 0) {
            this.removeFromCart(productId);
        } else if (quantity <= product.stock) {
            item.quantity = quantity;
            this.renderCart();
            this.updateCartCount();
        } else {
            alert('Недостаточно товара на складе');
            this.renderCart();
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.renderCart();
        this.updateCartCount();
    }

    updateCartSummary() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const isLoyaltyDiscount = (this.purchaseCount + 1) % 7 === 0;
        const discountAmount = isLoyaltyDiscount ? subtotal * 0.35 : 0;
        const total = subtotal - discountAmount;

        document.getElementById('cart-subtotal').textContent = `${subtotal} ₽`;
        document.getElementById('cart-total').textContent = `${total} ₽`;
        
        const discountRow = document.getElementById('discount-row');
        if (isLoyaltyDiscount) {
            discountRow.style.display = 'flex';
            document.getElementById('discount-amount').textContent = `-${discountAmount} ₽`;
        } else {
            discountRow.style.display = 'none';
        }
    }

    renderOrderSummary() {
        const orderItems = document.getElementById('order-items');
        orderItems.innerHTML = '';

        this.cart.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <div>${item.name} × ${item.quantity}</div>
                <div>${item.price * item.quantity} ₽</div>
            `;
            orderItems.appendChild(orderItem);
        });

        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const isLoyaltyDiscount = (this.purchaseCount + 1) % 7 === 0;
        const discountAmount = isLoyaltyDiscount ? subtotal * 0.35 : 0;
        const total = subtotal - discountAmount;

        if (isLoyaltyDiscount) {
            const discountItem = document.createElement('div');
            discountItem.className = 'order-item';
            discountItem.innerHTML = `
                <div>Скидка лояльности (35%)</div>
                <div class="text-success">-${discountAmount} ₽</div>
            `;
            orderItems.appendChild(discountItem);
        }

        document.getElementById('order-total').textContent = `${total} ₽`;
    }

    processOrder() {
        const name = document.getElementById('customer-name').value.trim();
        const phone = document.getElementById('customer-phone').value.trim();

        if (!name || !phone) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const isLoyaltyDiscount = (this.purchaseCount + 1) % 7 === 0;
        const discountAmount = isLoyaltyDiscount ? subtotal * 0.35 : 0;
        const total = subtotal - discountAmount;

        // Create order
        const order = {
            id: Date.now(),
            date: new Date().toLocaleString('ru-RU'),
            customer: { name, phone },
            items: [...this.cart],
            subtotal,
            discount: discountAmount,
            total,
            isLoyaltyDiscount
        };

        this.orders.push(order);

        // Update stock
        this.cart.forEach(item => {
            const product = this.findProductById(item.id);
            if (product) {
                product.stock -= item.quantity;
            }
        });

        // Update purchase count
        this.purchaseCount++;

        // Clear cart
        this.cart = [];

        // Update UI
        this.updateCartCount();
        this.updateLoyaltyStatus();
        this.renderProducts();

        // Show success message
        document.getElementById('success-message').textContent = 
            `Заказ №${order.id} успешно оформлен! ${isLoyaltyDiscount ? 'Применена скидка лояльности 35%!' : ''}`;
        
        this.closeModal('order-modal');
        this.openModal('success-modal');

        // Reset form
        document.getElementById('order-form').reset();
    }

    updateLoyaltyStatus() {
        const purchasesLeft = 7 - (this.purchaseCount % 7);
        document.getElementById('purchases-left').textContent = purchasesLeft === 7 ? 7 : purchasesLeft;
    }

    adminLogin() {
        const password = document.getElementById('admin-password').value;
        if (password === 'admin123') {
            this.isLoggedIn = true;
            this.closeModal('admin-login-modal');
            this.openModal('admin-modal');
            this.renderAdminPanel();
        } else {
            alert('Неверный пароль');
        }
        document.getElementById('admin-password').value = '';
    }

    renderAdminPanel() {
        this.renderAdminProducts();
        this.renderAdminOrders();
        this.renderAdminStats();
    }

    renderAdminProducts() {
        const grid = document.getElementById('admin-products-grid');
        grid.innerHTML = '';

        const allProducts = this.getAllProducts();
        
        allProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'admin-product-item';
            productItem.innerHTML = `
                <div>
                    <strong>${product.name}</strong><br>
                    <small>ID: ${product.id}</small>
                </div>
                <div>
                    <input type="number" value="${product.price}" 
                           onchange="app.updateProductPrice(${product.id}, this.value)"
                           placeholder="Цена">
                </div>
                <div>
                    <input type="number" value="${product.stock}" 
                           onchange="app.updateProductStock(${product.id}, this.value)"
                           placeholder="Остаток">
                </div>
                <div class="admin-product-actions">
                    <button class="btn btn--sm btn--danger" onclick="app.deleteProduct(${product.id})">
                        Удалить
                    </button>
                </div>
            `;
            grid.appendChild(productItem);
        });
    }

    renderAdminOrders() {
        const ordersList = document.getElementById('admin-orders-list');
        ordersList.innerHTML = '';

        if (this.orders.length === 0) {
            ordersList.innerHTML = '<div class="empty-state"><h3>Заказов пока нет</h3></div>';
            return;
        }

        this.orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.className = 'admin-order-item';
            orderItem.innerHTML = `
                <div class="admin-order-header">
                    <div>
                        <strong>Заказ №${order.id}</strong>
                        <div class="admin-order-date">${order.date}</div>
                    </div>
                    <div class="admin-order-total">${order.total} ₽</div>
                </div>
                <div class="admin-order-customer">
                    <strong>Клиент:</strong> ${order.customer.name}<br>
                    <strong>Телефон:</strong> ${order.customer.phone}
                </div>
                <div class="admin-order-items">
                    <strong>Товары:</strong><br>
                    ${order.items.map(item => `• ${item.name} × ${item.quantity} = ${item.price * item.quantity} ₽`).join('<br>')}
                    ${order.isLoyaltyDiscount ? '<br><strong>Применена скидка лояльности 35%</strong>' : ''}
                </div>
            `;
            ordersList.appendChild(orderItem);
        });
    }

    renderAdminStats() {
        const totalOrders = this.orders.length;
        const totalRevenue = this.orders.reduce((sum, order) => sum + order.total, 0);
        const totalStock = this.getAllProducts().reduce((sum, product) => sum + product.stock, 0);

        document.getElementById('total-orders').textContent = totalOrders;
        document.getElementById('total-revenue').textContent = `${totalRevenue} ₽`;
        document.getElementById('total-stock').textContent = totalStock;
    }

    updateProductPrice(productId, newPrice) {
        const product = this.findProductById(productId);
        if (product) {
            product.price = parseInt(newPrice) || 0;
            this.renderProducts();
        }
    }

    updateProductStock(productId, newStock) {
        const product = this.findProductById(productId);
        if (product) {
            product.stock = parseInt(newStock) || 0;
            this.renderProducts();
        }
    }

    deleteProduct(productId) {
        if (confirm('Вы уверены, что хотите удалить этот товар?')) {
            for (const category of Object.values(this.products)) {
                const index = category.findIndex(p => p.id === productId);
                if (index !== -1) {
                    category.splice(index, 1);
                    break;
                }
            }
            this.renderProducts();
            this.renderAdminProducts();
        }
    }

    setActiveAdminTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            }
        });

        // Update tab content
        document.querySelectorAll('.admin-tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(`admin-${tabName}`).style.display = 'block';

        // Refresh data for the active tab
        if (tabName === 'products') {
            this.renderAdminProducts();
        } else if (tabName === 'orders') {
            this.renderAdminOrders();
        } else if (tabName === 'stats') {
            this.renderAdminStats();
        }
    }

    openModal(modalId) {
        document.getElementById(modalId).classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    showMessage(message) {
        // Simple message display - could be enhanced with toast notifications
        const existingMessage = document.querySelector('.temp-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = 'temp-message';
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-success);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: fadeIn 0.3s ease-out;
        `;
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// Initialize the application
const app = new ZakumarApp();

// Make app globally accessible for onclick handlers
window.app = app;
