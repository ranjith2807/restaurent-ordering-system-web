/* ==========================================================================
   Moto Café - Core Application Logic & Interactive Engine
   Apple-Inspired Glassmorphism Interface
   ========================================================================== */

// --- 1. Dish Data Source ---
const DISHES_DATA = [
  {
    id: 101,
    name: "Highway Loaded Fries",
    category: "Starters",
    tag: "Garage Special",
    description: "Crispy golden wedges tossed in garlic-herb salt, molten cheddar, jalapeños, and smoky garage mayo.",
    price: 299,
    rating: 4.9,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 102,
    name: "Piston Fire Paneer Bites",
    category: "Starters",
    tag: "Fuel Boost",
    description: "Char-grilled cottage cheese marinated in Kashmiri chili, smoked paprika, yogurt, and fiery chipotle dip.",
    price: 329,
    rating: 4.7,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 103,
    name: "Kickstart Wings & Calamari",
    category: "Starters",
    tag: "Top Speed",
    description: "Crispy buttermilk chicken wings and calamari rings served with fiery habanero aioli and lemon.",
    price: 389,
    rating: 4.8,
    isVeg: false,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 104,
    name: "Pit-Stop Smokey BBQ Chicken",
    category: "Mains",
    tag: "Rider Pick",
    description: "Tender slow-roasted half chicken brushed with hickory bourbon BBQ glaze, served with buttered corn & slaw.",
    price: 499,
    rating: 4.9,
    isVeg: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 105,
    name: "Overdrive Black Lentil Curry",
    category: "Mains",
    tag: "Garage Special",
    description: "Slow-simmered rich black lentils finished with fresh cream, smoked butter, and garlic naan.",
    price: 399,
    rating: 4.8,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 106,
    name: "Roadster Lamb Ribs",
    category: "Mains",
    tag: "Top Speed",
    description: "Braised tender lamb ribs glazed with spicy honey-mustard, charred onions, and herb roasted potatoes.",
    price: 599,
    rating: 4.9,
    isVeg: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 107,
    name: "Roadster Margherita",
    category: "Pizza",
    tag: "Rider Pick",
    description: "Wood-fired sourdough crust topped with San Marzano tomatoes, fresh mozzarella, aromatic basil, and olive oil.",
    price: 549,
    rating: 4.8,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 108,
    name: "Piston Pepperoni Feast Pizza",
    category: "Pizza",
    tag: "Fuel Boost",
    description: "Artisanal crust overloaded with double spicy Italian pepperoni, molten mozzarella, and hot honey drizzle.",
    price: 579,
    rating: 4.9,
    isVeg: false,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 109,
    name: "Garage Grill Burger",
    category: "Burgers",
    tag: "Garage Special",
    description: "Double juicy Angus beef patty, smoked cheddar, crispy bacon, caramelized onions, and signature Moto sauce.",
    price: 449,
    rating: 4.9,
    isVeg: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 110,
    name: "Full-Throttle Veggie Burger",
    category: "Burgers",
    tag: "Rider Pick",
    description: "Crispy quinoa & black bean patty with avocado mash, grilled halloumi, pickled jalapeños on a brioche bun.",
    price: 369,
    rating: 4.7,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 111,
    name: "Midnight Mocha",
    category: "Drinks",
    tag: "Top Speed",
    description: "Rich double-shot espresso blended with dark Belgian chocolate, chilled milk, and whipped cream topping.",
    price: 249,
    rating: 4.8,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 112,
    name: "Rider’s Lava Cake",
    category: "Desserts",
    tag: "Garage Special",
    description: "Warm Belgian dark chocolate cake with a molten chocolate core, served with vanilla bean gelato.",
    price: 279,
    rating: 4.8,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 113,
    name: "Nitro Cold Brew",
    category: "Drinks",
    tag: "Fuel Boost",
    description: "Smooth nitrogen-infused dark roast coffee with a velvety cream head and subtle dark chocolate notes.",
    price: 229,
    rating: 4.9,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 114,
    name: "Turbo Espresso Tiramisu",
    category: "Desserts",
    tag: "Top Speed",
    description: "Dark roast Moto espresso soaked ladyfingers layered with whipped mascarpone cream and cocoa powder.",
    price: 299,
    rating: 4.9,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
  }
];

// --- 2. Application State ---
let cart = [];
let activeCategory = 'All';
let searchQuery = '';

const FREE_DELIVERY_THRESHOLD = 799;
const STANDARD_DELIVERY_CHARGE = 49;
const TAX_RATE = 0.05;

// --- 3. DOM Elements Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromLocalStorage();
  renderPopularDishes();
  renderMenu();
  renderCart();
  updateCartBadge();
  setupEventListeners();
});

// --- 4. Render Popular Dishes Section ---
function renderPopularDishes() {
  const popularGrid = document.getElementById('popularGrid');
  if (!popularGrid) return;

  const popularDishes = DISHES_DATA.filter(dish => dish.isPopular);
  popularGrid.innerHTML = popularDishes.map(dish => createFoodCardHTML(dish)).join('');
}

// --- 5. Render Menu & Filter Logic ---
function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  const filtered = DISHES_DATA.filter(dish => {
    const matchesCategory = activeCategory === 'All' || dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div class="col-12">
        <div class="no-results glass-card text-center py-5">
          <div class="no-results-icon mb-3">
            <i class="bi bi-speedometer2 text-orange display-3"></i>
          </div>
          <h4 class="text-white text-uppercase font-heading fs-3">No fuel found on this route.</h4>
          <p class="text-muted mx-auto" style="max-width: 500px;">We couldn't find any garage specials matching "${searchQuery}". Try searching for another fuel item or reset your route filters!</p>
          <button class="btn glass-btn-primary mt-3" onclick="resetFilters()">
            <i class="bi bi-arrow-counterclockwise me-1"></i> Reset Route Filters
          </button>
        </div>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map(dish => createFoodCardHTML(dish)).join('');
}

// Helper: Generate Food Card HTML markup
function createFoodCardHTML(dish) {
  const dietBadgeClass = dish.isVeg ? 'veg' : 'nonveg';
  const dietTitle = dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian';
  const tagMarkup = dish.tag ? `<span class="glass-badge-tag"><i class="bi bi-lightning-fill me-1"></i>${dish.tag}</span>` : '';

  return `
    <div class="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">
      <div class="food-card glass-card h-100">
        <div class="food-card-img-wrapper">
          <span class="diet-badge ${dietBadgeClass}" title="${dietTitle}"></span>
          ${tagMarkup}
          <span class="glass-rating-badge">
            <i class="bi bi-star-fill text-orange me-1"></i> ${dish.rating}
          </span>
          <img src="${dish.image}" alt="${dish.name}" class="food-card-img" loading="lazy" />
        </div>
        <div class="food-card-body">
          <span class="food-category">${dish.category}</span>
          <h5 class="food-title">${dish.name}</h5>
          <p class="food-desc">${dish.description}</p>
          <div class="food-card-footer">
            <span class="food-price">₹${dish.price}</span>
            <button class="btn-add-cart glass-btn-add" onclick="addToCart(${dish.id})">
              <i class="bi bi-plus-lg me-1"></i> Add to Ride
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Category Filter Switch
function filterMenu(category, element) {
  activeCategory = category;
  
  // Update active pill button
  const filterBtns = document.querySelectorAll('.btn-filter');
  filterBtns.forEach(btn => btn.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }

  renderMenu();
}

// Live Search Input Handler
function handleSearch(query) {
  searchQuery = query.trim();
  renderMenu();
}

// Reset Filters Action
function resetFilters() {
  activeCategory = 'All';
  searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  
  const filterBtns = document.querySelectorAll('.btn-filter');
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === 'All');
  });

  renderMenu();
}

// --- 6. Shopping Cart Operations ---
function addToCart(dishId) {
  const dish = DISHES_DATA.find(item => item.id === dishId);
  if (!dish) return;

  const existingItem = cart.find(item => item.id === dishId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      quantity: 1
    });
  }

  saveCartToLocalStorage();
  renderCart();
  updateCartBadge();
  animateCartBadge();
  showToast(`Added <strong>${dish.name}</strong> to your fuel cart!`);
}

function updateQuantity(dishId, change) {
  const item = cart.find(item => item.id === dishId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(dishId);
    return;
  }

  saveCartToLocalStorage();
  renderCart();
  updateCartBadge();
}

function removeFromCart(dishId) {
  cart = cart.filter(item => item.id !== dishId);
  saveCartToLocalStorage();
  renderCart();
  updateCartBadge();
}

function clearCart() {
  cart = [];
  localStorage.removeItem('moto_cart');
  renderCart();
  updateCartBadge();
}

// Calculate Cart Totals
function calculateTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : STANDARD_DELIVERY_CHARGE;
  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + deliveryCharge + tax;

  return { subtotal, deliveryCharge, tax, total };
}

// Render Cart Drawer
function renderCart() {
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSummaryBox = document.getElementById('cartSummaryBox');
  const cartDeliveryProgress = document.getElementById('cartDeliveryProgress');

  if (!cartItemsContainer || !cartSummaryBox) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-state text-center py-5">
        <div class="empty-icon-wrapper mb-3">
          <i class="bi bi-speedometer2 text-orange display-3"></i>
        </div>
        <h5 class="text-white font-heading text-uppercase fs-4">Your garage is empty.</h5>
        <p class="text-muted small">Add some fuel for the road to get your ride started.</p>
        <button class="btn glass-btn-primary mt-3" data-bs-dismiss="offcanvas" onclick="scrollToMenu()">
          <i class="bi bi-fuel-pump-fill me-1"></i> Explore Fuel Menu
        </button>
      </div>
    `;
    cartSummaryBox.classList.add('d-none');
    if (cartDeliveryProgress) cartDeliveryProgress.classList.add('d-none');
    return;
  }

  // Render items list
  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item glass-cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h6 class="cart-item-title">${item.name}</h6>
        <span class="cart-item-price">₹${item.price}</span>
      </div>
      <div class="qty-control glass-qty-control">
        <button class="btn-qty" onclick="updateQuantity(${item.id}, -1)">-</button>
        <span class="qty-value">${item.quantity}</span>
        <button class="btn-qty" onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
      <button class="btn-remove-item" onclick="removeFromCart(${item.id})" title="Remove">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `).join('');

  // Render totals & summary
  const { subtotal, deliveryCharge, tax, total } = calculateTotals();

  // Free delivery progress bar
  if (cartDeliveryProgress) {
    cartDeliveryProgress.classList.remove('d-none');
    const remainingForFree = FREE_DELIVERY_THRESHOLD - subtotal;
    const progressPercent = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

    const progressText = subtotal >= FREE_DELIVERY_THRESHOLD
      ? '⚡ <strong>FREE Roadside Delivery</strong> Unlocked!'
      : `Add <strong>₹${remainingForFree}</strong> more for FREE roadside delivery`;

    cartDeliveryProgress.innerHTML = `
      <div class="cart-delivery-text text-white small mb-1">${progressText}</div>
      <div class="progress progress-thin bg-dark-metal">
        <div class="progress-bar progress-bar-orange" role="progressbar" style="width: ${progressPercent}%;"></div>
      </div>
    `;
  }

  // Summary box
  cartSummaryBox.classList.remove('d-none');
  cartSummaryBox.innerHTML = `
    <div class="summary-line">
      <span>Subtotal</span>
      <span class="text-white">₹${subtotal}</span>
    </div>
    <div class="summary-line">
      <span>Delivery Fee</span>
      <span>${deliveryCharge === 0 ? '<strong class="text-orange">FREE</strong>' : '₹' + deliveryCharge}</span>
    </div>
    <div class="summary-line">
      <span>GST (5%)</span>
      <span class="text-white">₹${tax}</span>
    </div>
    <div class="summary-line total border-top border-metal pt-2">
      <span>Final Total</span>
      <span class="text-orange fs-4 font-heading">₹${total}</span>
    </div>
    <button class="btn glass-btn-primary w-100 mt-3 py-3 font-heading text-uppercase fs-5" onclick="openCheckoutModal()">
      Proceed to Checkout <i class="bi bi-arrow-right ms-2"></i>
    </button>
  `;
}

// Update Cart Badge Count
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalCount;
}

function animateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;

  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

// LocalStorage helpers
function saveCartToLocalStorage() {
  localStorage.setItem('moto_cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const saved = localStorage.getItem('moto_cart');
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch (e) {
      cart = [];
    }
  }
}

// --- 7. Checkout Modal & Order Processing ---
let currentOrderType = 'delivery';

function openCheckoutModal() {
  // Close cart offcanvas
  const cartOffcanvasEl = document.getElementById('cartOffcanvas');
  if (cartOffcanvasEl) {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(cartOffcanvasEl);
    if (bsOffcanvas) bsOffcanvas.hide();
  }

  // Reset checkout form view
  resetCheckoutForm();

  // Populate order summary inside modal
  const modalSummaryContainer = document.getElementById('modalOrderSummary');
  if (modalSummaryContainer) {
    const { subtotal, deliveryCharge, tax, total } = calculateTotals();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    modalSummaryContainer.innerHTML = `
      <div class="d-flex justify-content-between mb-2 fs-7 text-muted">
        <span>Items Count (${totalCount}):</span>
        <span class="fw-bold text-white">₹${subtotal}</span>
      </div>
      <div class="d-flex justify-content-between mb-2 fs-7 text-muted">
        <span>Delivery Fee:</span>
        <span class="fw-bold text-white">${deliveryCharge === 0 ? 'FREE' : '₹' + deliveryCharge}</span>
      </div>
      <div class="d-flex justify-content-between mb-2 fs-7 text-muted">
        <span>Taxes (5%):</span>
        <span class="fw-bold text-white">₹${tax}</span>
      </div>
      <div class="d-flex justify-content-between border-top border-metal pt-2 fw-bold text-white">
        <span>Total Payable:</span>
        <span class="text-orange fs-4 font-heading">₹${total}</span>
      </div>
    `;
  }

  // Show checkout modal
  const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
  checkoutModal.show();
}

function toggleOrderType(type) {
  currentOrderType = type;
  const deliveryBtn = document.getElementById('btnTypeDelivery');
  const pickupBtn = document.getElementById('btnTypePickup');
  const addressContainer = document.getElementById('addressContainer');
  const addressInput = document.getElementById('checkoutAddress');

  if (type === 'delivery') {
    deliveryBtn.classList.add('active');
    pickupBtn.classList.remove('active');
    addressContainer.classList.remove('d-none');
    addressInput.setAttribute('required', 'true');
  } else {
    pickupBtn.classList.add('active');
    deliveryBtn.classList.remove('active');
    addressContainer.classList.add('d-none');
    addressInput.removeAttribute('required');
  }
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('checkoutForm');

  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add('was-validated');
    return;
  }

  // Process order
  const fullName = document.getElementById('checkoutName').value;
  const phone = document.getElementById('checkoutPhone').value;
  const email = document.getElementById('checkoutEmail').value;
  const address = currentOrderType === 'delivery' ? document.getElementById('checkoutAddress').value : 'Self-Pickup at Moto Café Garage';
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  const orderId = 'MC-' + Math.floor(10000 + Math.random() * 90000);
  const { total } = calculateTotals();

  // Show Success View in Modal
  const modalBody = document.getElementById('checkoutModalBody');
  modalBody.innerHTML = `
    <div class="order-success-view text-center py-4">
      <div class="success-checkmark-wrapper glass-success-icon mb-3 mx-auto">
        <i class="bi bi-speedometer2 text-orange"></i>
      </div>
      <h3 class="font-heading text-white text-uppercase fs-2">Your Ride Order Is Confirmed!</h3>
      <p class="text-muted">Thank you, <strong>${fullName}</strong>. Your fuel order has been placed successfully.</p>
      
      <div class="card glass-card p-4 my-4 text-start">
        <div class="d-flex justify-content-between mb-2">
          <span class="text-muted">Order Ref:</span>
          <span class="fw-bold text-orange font-heading fs-5">${orderId}</span>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <span class="text-muted">Estimated Time:</span>
          <span class="fw-bold text-success"><i class="bi bi-clock-history me-1"></i>Your fuel will arrive in 30–40 minutes.</span>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <span class="text-muted">Total Paid:</span>
          <span class="fw-bold text-white">₹${total} (${paymentMethod})</span>
        </div>
        <div class="d-flex justify-content-between">
          <span class="text-muted">${currentOrderType === 'delivery' ? 'Delivery Destination:' : 'Fulfillment:'}</span>
          <span class="fw-semibold text-end ms-3 text-white">${address}</span>
        </div>
      </div>

      <p class="fst-italic text-orange font-heading fs-5 mb-4">Ride safe. Eat well.</p>

      <button class="btn glass-btn-primary px-5 py-2 font-heading text-uppercase fs-5" data-bs-dismiss="modal">Done</button>
    </div>
  `;

  // Clear Cart
  clearCart();
}

function resetCheckoutForm() {
  const modalBody = document.getElementById('checkoutModalBody');
  modalBody.innerHTML = `
    <form id="checkoutForm" class="needs-validation" novalidate onsubmit="handleCheckoutSubmit(event)">
      <!-- Order Type Selector (iOS Segmented Control Style) -->
      <div class="order-type-selector glass-segmented-control mb-4">
        <div class="order-type-btn active" id="btnTypeDelivery" onclick="toggleOrderType('delivery')">
          <i class="bi bi-speedometer2 me-2"></i> Roadside Delivery
        </div>
        <div class="order-type-btn" id="btnTypePickup" onclick="toggleOrderType('pickup')">
          <i class="bi bi-geo-alt-fill me-2"></i> Ride-by Pickup
        </div>
      </div>

      <!-- Customer Details -->
      <div class="row g-3">
        <div class="col-12">
          <label class="form-label fw-bold text-white">Full Name *</label>
          <input type="text" class="form-control glass-input text-white" id="checkoutName" placeholder="e.g. Rahul Sharma" required />
          <div class="invalid-feedback">Please provide your full name.</div>
        </div>
        <div class="col-md-6">
          <label class="form-label fw-bold text-white">Phone Number *</label>
          <input type="tel" class="form-control glass-input text-white" id="checkoutPhone" placeholder="e.g. 9876543210" pattern="[0-9]{10}" required />
          <div class="invalid-feedback">Please enter a valid 10-digit phone number.</div>
        </div>
        <div class="col-md-6">
          <label class="form-label fw-bold text-white">Email Address *</label>
          <input type="email" class="form-control glass-input text-white" id="checkoutEmail" placeholder="name@example.com" required />
          <div class="invalid-feedback">Please enter a valid email address.</div>
        </div>

        <!-- Address (Conditional) -->
        <div class="col-12" id="addressContainer">
          <label class="form-label fw-bold text-white">Delivery Address *</label>
          <textarea class="form-control glass-input text-white" id="checkoutAddress" rows="2" placeholder="House/Flat No., Street, Landmark, City" required></textarea>
          <div class="invalid-feedback">Please enter your delivery address.</div>
        </div>

        <!-- Payment Method -->
        <div class="col-12">
          <label class="form-label fw-bold text-white mb-2 fs-6">Choose Your Fuel Payment *</label>
          <div class="d-flex flex-column gap-2">
            <div class="form-check p-3 glass-setting-row rounded-3">
              <input class="form-check-input" type="radio" name="paymentMethod" id="payCOD" value="Cash on Delivery" checked />
              <label class="form-check-label fw-semibold text-white ms-2" for="payCOD">
                <i class="bi bi-cash-stack me-2 text-success"></i> Cash on Delivery / Pay on Pickup
              </label>
            </div>
            <div class="form-check p-3 glass-setting-row rounded-3">
              <input class="form-check-input" type="radio" name="paymentMethod" id="payUPI" value="UPI" />
              <label class="form-check-label fw-semibold text-white ms-2" for="payUPI">
                <i class="bi bi-qr-code-scan me-2 text-primary"></i> UPI (Google Pay, PhonePe, Paytm)
              </label>
            </div>
            <div class="form-check p-3 glass-setting-row rounded-3">
              <input class="form-check-input" type="radio" name="paymentMethod" id="payCard" value="Credit / Debit Card" />
              <label class="form-check-label fw-semibold text-white ms-2" for="payCard">
                <i class="bi bi-credit-card me-2 text-orange"></i> Credit / Debit Card
              </label>
            </div>
          </div>
        </div>

        <!-- Special Instructions -->
        <div class="col-12">
          <label class="form-label fw-semibold text-white">Special Pit-Stop Instructions (Optional)</label>
          <input type="text" class="form-control glass-input text-white" id="checkoutNotes" placeholder="e.g. Extra spicy, call upon arrival..." />
        </div>
      </div>

      <!-- Order Total Summary -->
      <div class="card glass-card p-3 my-4" id="modalOrderSummary">
        <!-- Injected via JavaScript -->
      </div>

      <button type="submit" class="btn glass-btn-primary w-100 py-3 font-heading text-uppercase fs-5">
        Confirm My Order
      </button>
    </form>
  `;
}

// --- 8. Event Listeners & UI Utilities ---
function setupEventListeners() {
  // Sticky Navbar background change on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-moto');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // ScrollSpy active link toggle
    highlightActiveNavLink();
  });
}

function highlightActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollPosition = window.scrollY + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

function scrollToMenu() {
  const menuSection = document.getElementById('menu');
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Toast notification display
function showToast(message) {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  const toastId = 'toast-' + Date.now();
  const toastHTML = `
    <div id="${toastId}" class="moto-toast glass-card" role="alert">
      <i class="bi bi-speedometer2 text-orange fs-5"></i>
      <span>${message}</span>
    </div>
  `;

  toastContainer.insertAdjacentHTML('beforeend', toastHTML);
  const toastElement = document.getElementById(toastId);

  setTimeout(() => {
    if (toastElement) {
      toastElement.style.opacity = '0';
      toastElement.style.transition = 'opacity 0.4s ease';
      setTimeout(() => toastElement.remove(), 400);
    }
  }, 2500);
}
