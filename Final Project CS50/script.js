// ---------- Menu data ----------
const DISHES = [
  { id: "tteokbokki", name: "Tteokbokki", category: "Street Food", price: 180, vegan: true, description: "Chewy rice cakes in a sweet, savoury sauce." },
  { id: "gimbap", name: "Gimbap", category: "Street Food", price: 150, description: "Seaweed rice rolls filled with vegetables, egg and beef." },
  { id: "rice-dog", name: "Rice Dog", category: "Street Food", price: 120, description: "Crispy Korean corn dog coated in rice batter." },
  { id: "potstickers", name: "Vegan Potstickers", category: "Street Food", price: 160, vegan: true, description: "Pan-fried dumplings with a soy dipping sauce." },
  { id: "bibimbap", name: "Bibimbap", category: "Main Dishes", price: 260, description: "Rice bowl with beef, vegetables, egg and gochujang." },
  { id: "japchae", name: "Japchae", category: "Main Dishes", price: 220, description: "Stir-fried glass noodles with vegetables and beef." },
  { id: "gopchang", name: "Gopchang", category: "Main Dishes", price: 300, description: "Grilled beef intestines with spicy vegetables." },
  { id: "sannakji", name: "Sannakji", category: "Main Dishes", price: 380, description: "Fresh octopus with sesame oil, a Korean delicacy." },
  { id: "makguksu", name: "Mak-guksu", category: "Main Dishes", price: 200, description: "Cold buckwheat noodles from Gangwon Province." },
  { id: "sundubu-jjigae", name: "Sundubu-jjigae", category: "Soups & Stews", price: 240, vegan: true, description: "Spicy soft tofu stew with vegetables." },
  { id: "samgyetang", name: "Samgyetang", category: "Soups & Stews", price: 320, description: "Whole chicken soup with ginseng and rice." },
  { id: "budae-jjigae", name: "Budae Jjigae", category: "Soups & Stews", price: 340, description: "Korean army stew with noodles, sausage and kimchi." },
  { id: "kimchi", name: "Kimchi", category: "Sides", price: 90, description: "Fresh, spicy fermented cabbage salad." },
  { id: "hotteok", name: "Hotteok", category: "Desserts", price: 80, vegan: true, description: "Sweet pancakes filled with brown sugar and nuts." },
];

const CATEGORIES = ["All", "Street Food", "Main Dishes", "Soups & Stews", "Sides", "Desserts", "Vegan"];
const CART_KEY = "seoulBitesCart";

function formatPrice(amount) {
  return amount.toLocaleString("en-US") + " EGP";
}

function findDish(id) {
  return DISHES.find((dish) => dish.id === id);
}

// ---------- Cart storage ----------
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // Storage can be blocked (private mode); the cart still works for this visit.
  }
}

// ---------- Menu page ----------
function setupMenuPage() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  const search = document.getElementById("search");
  const categoriesBox = document.getElementById("categories");
  const noResults = document.getElementById("noResults");
  const cartPanel = document.getElementById("cart");
  const overlay = document.getElementById("overlay");
  const cartButton = document.getElementById("cartButton");
  const cartItems = document.getElementById("cartItems");
  const cartEmpty = document.getElementById("cartEmpty");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");
  const checkout = document.getElementById("checkout");
  const orderConfirmation = document.getElementById("orderConfirmation");

  let cart = loadCart();
  let activeCategory = "All";

  // Category buttons
  CATEGORIES.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = category;
    button.setAttribute("aria-pressed", category === activeCategory);
    button.addEventListener("click", () => {
      activeCategory = category;
      categoriesBox.querySelectorAll(".chip").forEach((chip) => {
        chip.setAttribute("aria-pressed", chip.textContent === category);
      });
      renderMenu();
    });
    categoriesBox.appendChild(button);
  });

  search.addEventListener("input", renderMenu);

  function renderMenu() {
    const query = search.value.trim().toLowerCase();
    const visible = DISHES.filter((dish) => {
      const inCategory =
        activeCategory === "All" ||
        (activeCategory === "Vegan" ? dish.vegan : dish.category === activeCategory);
      const matches =
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query);
      return inCategory && matches;
    });

    menu.innerHTML = "";
    visible.forEach((dish) => {
      const card = document.createElement("article");
      card.className = "dish";
      card.innerHTML = `
        <img src="img/${dish.id}.jpeg" alt="${dish.name}" loading="lazy" />
        <div class="dish-body">
          <div class="dish-title">
            <h2>${dish.name}</h2>
            ${dish.vegan ? '<span class="badge">Vegan</span>' : ""}
          </div>
          <p class="dish-description">${dish.description}</p>
          <div class="dish-footer">
            <span class="price">${formatPrice(dish.price)}</span>
            <button class="primary small" type="button" data-add="${dish.id}">Add to Cart</button>
          </div>
        </div>`;
      menu.appendChild(card);
    });
    noResults.classList.toggle("hidden", visible.length > 0);
  }

  menu.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");
    if (!button) return;
    const id = button.dataset.add;
    cart[id] = (cart[id] || 0) + 1;
    updateCart();
    button.textContent = "Added ✓";
    setTimeout(() => (button.textContent = "Add to Cart"), 900);
  });

  // Cart panel
  function openCart(open) {
    cartPanel.classList.toggle("open", open);
    overlay.classList.toggle("hidden", !open);
    cartPanel.setAttribute("aria-hidden", !open);
    cartButton.setAttribute("aria-expanded", open);
    if (open) document.getElementById("closeCart").focus();
  }

  cartButton.addEventListener("click", () => openCart(true));
  document.getElementById("closeCart").addEventListener("click", () => openCart(false));
  overlay.addEventListener("click", () => openCart(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") openCart(false);
  });

  cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("[data-change]");
    if (!button) return;
    const id = button.dataset.id;
    cart[id] += Number(button.dataset.change);
    if (cart[id] <= 0) delete cart[id];
    updateCart();
  });

  checkout.addEventListener("click", () => {
    const total = cartTotalAmount();
    if (total === 0) return;
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    orderConfirmation.textContent = `Order #${orderNumber} placed! Total: ${formatPrice(total)}. It will be ready in about 30 minutes.`;
    orderConfirmation.classList.remove("hidden");
    cart = {};
    updateCart(false);
  });

  function cartTotalAmount() {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const dish = findDish(id);
      return dish ? sum + dish.price * qty : sum;
    }, 0);
  }

  function updateCart(hideConfirmation = true) {
    // Drop items that no longer exist in the menu
    Object.keys(cart).forEach((id) => {
      if (!findDish(id)) delete cart[id];
    });
    saveCart(cart);
    if (hideConfirmation) orderConfirmation.classList.add("hidden");

    cartItems.innerHTML = "";
    let count = 0;
    Object.entries(cart).forEach(([id, qty]) => {
      const dish = findDish(id);
      count += qty;
      const item = document.createElement("li");
      item.innerHTML = `
        <img src="img/${dish.id}.jpeg" alt="" />
        <div class="cart-item-info">
          <strong>${dish.name}</strong>
          <span>${formatPrice(dish.price * qty)}</span>
        </div>
        <div class="quantity">
          <button type="button" data-id="${id}" data-change="-1" aria-label="Remove one ${dish.name}">−</button>
          <span>${qty}</span>
          <button type="button" data-id="${id}" data-change="1" aria-label="Add one ${dish.name}">+</button>
        </div>`;
      cartItems.appendChild(item);
    });

    cartCount.textContent = count;
    cartTotal.textContent = formatPrice(cartTotalAmount());
    cartEmpty.classList.toggle("hidden", count > 0);
    checkout.disabled = count === 0;
  }

  renderMenu();
  updateCart();
}

// ---------- Booking page ----------
function toDateInputValue(date) {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function setupBookingPage() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 60);
  form.date.min = toDateInputValue(today);
  form.date.max = toDateInputValue(maxDate);

  const rules = {
    name: (value) => (/^[\p{L} '.-]{2,}$/u.test(value.trim()) ? "" : "Please enter your full name."),
    email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Please enter a valid email address."),
    phone: (value) => (/^01[0125]\d{8}$/.test(value.replace(/\s/g, "")) ? "" : "Enter an Egyptian mobile number, e.g. 01012345678."),
    guests: (value) => {
      const n = Number(value);
      return Number.isInteger(n) && n >= 1 && n <= 12 ? "" : "Guests must be between 1 and 12. For bigger groups, please call us.";
    },
    date: (value) => {
      if (!value) return "Please choose a date.";
      if (value < form.date.min) return "Please choose today or a future date.";
      if (value > form.date.max) return "Bookings open up to 60 days ahead.";
      return "";
    },
    time: (value) => {
      if (!value) return "Please choose a time.";
      if (value < "12:00" || value > "23:00") return "We are open from 12:00 PM to 11:00 PM.";
      if (form.date.value === form.date.min) {
        const now = new Date();
        const current = now.toTimeString().slice(0, 5);
        if (value <= current) return "This time has already passed today.";
      }
      return "";
    },
  };

  function validateField(name) {
    const message = rules[name](form[name].value);
    document.getElementById(name + "Error").textContent = message;
    form[name].setAttribute("aria-invalid", message !== "");
    return message === "";
  }

  Object.keys(rules).forEach((name) => {
    form[name].addEventListener("blur", () => validateField(name));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const results = Object.keys(rules).map(validateField);
    if (results.includes(false)) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    const date = new Date(form.date.value + "T" + form.time.value);
    const when = date.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    const confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = `
      <strong>Booking confirmed!</strong>
      <p>Thank you, ${escapeHtml(form.name.value.trim())}. Your table for ${form.guests.value}
      ${form.guests.value === "1" ? "guest" : "guests"} is booked on ${when}.</p>
      <p>Please arrive 10 minutes early. See you soon!</p>`;
    confirmation.classList.remove("hidden");
    form.reset();
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#year").forEach((el) => (el.textContent = new Date().getFullYear()));
  setupMenuPage();
  setupBookingPage();
});
