// ---------- Menu data ----------
const DISHES = [
  { id: "tteokbokki", category: "street", price: 180, vegan: true,
    name: { en: "Tteokbokki", ar: "توكبوكي" },
    description: { en: "Chewy rice cakes in a sweet, savoury sauce.", ar: "كعك أرز طري بصوص حلو ومالح." } },
  { id: "gimbap", category: "street", price: 150,
    name: { en: "Gimbap", ar: "كيمباب" },
    description: { en: "Seaweed rice rolls filled with vegetables, egg and beef.", ar: "لفائف أرز بالأعشاب البحرية محشية خضار وبيض ولحم." } },
  { id: "rice-dog", category: "street", price: 120,
    name: { en: "Rice Dog", ar: "رايس دوج" },
    description: { en: "Crispy Korean corn dog coated in rice batter.", ar: "هوت دوج كوري مقرمش بعجينة الأرز." } },
  { id: "potstickers", category: "street", price: 160, vegan: true,
    name: { en: "Vegan Potstickers", ar: "دامبلنج نباتي" },
    description: { en: "Pan-fried dumplings with a soy dipping sauce.", ar: "زلابية محمّرة في الطاسة مع صوص الصويا." } },
  { id: "bibimbap", category: "mains", price: 260,
    name: { en: "Bibimbap", ar: "بيبيمباب" },
    description: { en: "Rice bowl with beef, vegetables, egg and gochujang.", ar: "طبق أرز باللحم والخضار والبيض وصوص الجوتشوجانج." } },
  { id: "japchae", category: "mains", price: 220,
    name: { en: "Japchae", ar: "جابتشي" },
    description: { en: "Stir-fried glass noodles with vegetables and beef.", ar: "نودلز شفافة مقلية مع الخضار واللحم." } },
  { id: "gopchang", category: "mains", price: 300,
    name: { en: "Gopchang", ar: "جوبتشانج" },
    description: { en: "Grilled beef intestines with spicy vegetables.", ar: "مصارين لحم مشوية مع خضار حارة." } },
  { id: "sannakji", category: "mains", price: 380,
    name: { en: "Sannakji", ar: "سان ناكجي" },
    description: { en: "Fresh octopus with sesame oil, a Korean delicacy.", ar: "أخطبوط طازج بزيت السمسم، من أشهر الأكلات الكورية." } },
  { id: "makguksu", category: "mains", price: 200,
    name: { en: "Mak-guksu", ar: "ماك جوكسو" },
    description: { en: "Cold buckwheat noodles from Gangwon Province.", ar: "نودلز الحنطة السوداء الباردة من مقاطعة جانجوون." } },
  { id: "sundubu-jjigae", category: "soups", price: 240, vegan: true,
    name: { en: "Sundubu-jjigae", ar: "سوندوبو جيجي" },
    description: { en: "Spicy soft tofu stew with vegetables.", ar: "شوربة توفو طرية حارة بالخضار." } },
  { id: "samgyetang", category: "soups", price: 320,
    name: { en: "Samgyetang", ar: "سامجيتانج" },
    description: { en: "Whole chicken soup with ginseng and rice.", ar: "شوربة فراخ كاملة بالجينسنج والأرز." } },
  { id: "budae-jjigae", category: "soups", price: 340,
    name: { en: "Budae Jjigae", ar: "بوداي جيجي" },
    description: { en: "Korean army stew with noodles, sausage and kimchi.", ar: "يخنة الجيش الكورية بالنودلز والسجق والكيمتشي." } },
  { id: "kimchi", category: "sides", price: 90,
    name: { en: "Kimchi", ar: "كيمتشي" },
    description: { en: "Fresh, spicy fermented cabbage salad.", ar: "سلطة كرنب مخمّر طازجة وحارة." } },
  { id: "hotteok", category: "desserts", price: 80, vegan: true,
    name: { en: "Hotteok", ar: "هوتوك" },
    description: { en: "Sweet pancakes filled with brown sugar and nuts.", ar: "بان كيك حلو محشي سكر بني ومكسرات." } },
];

const CATEGORIES = ["all", "street", "mains", "soups", "sides", "desserts", "vegan"];
const CART_KEY = "seoulBitesCart";
const LANG_KEY = "seoulBitesLang";
const THEME_KEY = "seoulBitesTheme";
// Restaurant WhatsApp number in international format, without "+" or spaces.
const WHATSAPP_NUMBER = "201224003220";

// ---------- Translations ----------
const TEXT = {
  en: {
    "page.menu": "Seoul Bites | Korean Food Menu",
    "page.book": "Book a Table | Seoul Bites",
    "nav.menu": "Menu",
    "nav.book": "Book a Table",
    "nav.cart": "Cart",
    "toggle.lang": "عربي",
    "toggle.langLabel": "Switch to Arabic",
    "toggle.dark": "Switch to dark mode",
    "toggle.light": "Switch to light mode",
    "hero.title": "Authentic Korean food, made fresh",
    "hero.text": "Pick your favourite dishes, add them to your cart and order in seconds.",
    "search.label": "Search dishes",
    "search.placeholder": "Search dishes...",
    "menu.empty": "No dishes match your search.",
    "category.all": "All",
    "category.street": "Street Food",
    "category.mains": "Main Dishes",
    "category.soups": "Soups & Stews",
    "category.sides": "Sides",
    "category.desserts": "Desserts",
    "category.vegan": "Vegan",
    "dish.vegan": "Vegan",
    "dish.add": "Add to Cart",
    "dish.added": "Added ✓",
    "cart.title": "Your Cart",
    "cart.close": "Close cart",
    "cart.empty": "Your cart is empty.",
    "cart.total": "Total",
    "cart.checkout": "Order on WhatsApp",
    "cart.note": "Your order is sent to the restaurant on WhatsApp.",
    "cart.removeOne": "Remove one {name}",
    "cart.addOne": "Add one {name}",
    "cart.sent": "Order #{number} is ready to send on WhatsApp ({total}). Just press send in the chat.",
    "whatsapp.fallback": "WhatsApp didn't open?",
    "order.greeting": "Hello Seoul Bites! I'd like to place an order (#{number}):",
    "order.total": "Total: {total}",
    "currency": "EGP",
    "footer.rights": "All rights reserved.",
    "book.title": "Book a Table",
    "book.hours": "Open every day from 12:00 PM to 11:00 PM.",
    "book.name": "Full Name",
    "book.namePlaceholder": "Enter your name",
    "book.email": "Email",
    "book.phone": "Phone Number",
    "book.guests": "Number of Guests",
    "book.date": "Date",
    "book.time": "Time",
    "book.submit": "Book on WhatsApp",
    "book.note": "Your booking is sent to the restaurant on WhatsApp.",
    "book.guestOne": "1 guest",
    "book.guestMany": "{count} guests",
    "book.done": "Almost done!",
    "book.sent": "Thank you, {name}. Your booking for {guests} on {when} is ready in WhatsApp. Just press send and we'll confirm your table.",
    "booking.greeting": "Hello Seoul Bites! I'd like to book a table:",
    "booking.name": "Name: {value}",
    "booking.phone": "Phone: {value}",
    "booking.email": "Email: {value}",
    "booking.guests": "Guests: {value}",
    "booking.when": "Date & time: {value}",
    "error.name": "Please enter your full name.",
    "error.email": "Please enter a valid email address.",
    "error.phone": "Enter an Egyptian mobile number, e.g. 01012345678.",
    "error.guests": "Guests must be between 1 and 12. For bigger groups, please call us.",
    "error.dateEmpty": "Please choose a date.",
    "error.datePast": "Please choose today or a future date.",
    "error.dateFar": "Bookings open up to 60 days ahead.",
    "error.timeEmpty": "Please choose a time.",
    "error.timeClosed": "We are open from 12:00 PM to 11:00 PM.",
    "error.timePassed": "This time has already passed today.",
  },
  ar: {
    "page.menu": "سيول بايتس | منيو الأكل الكوري",
    "page.book": "احجز ترابيزة | سيول بايتس",
    "nav.menu": "المنيو",
    "nav.book": "احجز ترابيزة",
    "nav.cart": "السلة",
    "toggle.lang": "English",
    "toggle.langLabel": "Switch to English",
    "toggle.dark": "تشغيل الوضع الليلي",
    "toggle.light": "تشغيل الوضع النهاري",
    "hero.title": "أكل كوري أصلي، معمول طازة",
    "hero.text": "اختار أطباقك المفضلة، ضيفها للسلة واطلب في ثواني.",
    "search.label": "دوّر على طبق",
    "search.placeholder": "دوّر على طبق...",
    "menu.empty": "مفيش أطباق بالاسم ده.",
    "category.all": "الكل",
    "category.street": "أكل الشارع",
    "category.mains": "أطباق رئيسية",
    "category.soups": "شوربة ويخنات",
    "category.sides": "أطباق جانبية",
    "category.desserts": "حلويات",
    "category.vegan": "نباتي",
    "dish.vegan": "نباتي",
    "dish.add": "ضيف للسلة",
    "dish.added": "اتضاف ✓",
    "cart.title": "سلتك",
    "cart.close": "اقفل السلة",
    "cart.empty": "السلة فاضية.",
    "cart.total": "الإجمالي",
    "cart.checkout": "اطلب على واتساب",
    "cart.note": "طلبك بيتبعت للمطعم على واتساب.",
    "cart.removeOne": "شيل واحد {name}",
    "cart.addOne": "زوّد واحد {name}",
    "cart.sent": "طلب رقم #{number} جاهز يتبعت على واتساب ({total}). دوس إرسال في الشات.",
    "whatsapp.fallback": "الواتساب مافتحش؟",
    "order.greeting": "أهلاً سيول بايتس! عايز أطلب (طلب رقم #{number}):",
    "order.total": "الإجمالي: {total}",
    "currency": "ج.م",
    "footer.rights": "جميع الحقوق محفوظة.",
    "book.title": "احجز ترابيزة",
    "book.hours": "مفتوحين كل يوم من 12 الضهر لـ 11 بالليل.",
    "book.name": "الاسم بالكامل",
    "book.namePlaceholder": "اكتب اسمك",
    "book.email": "الإيميل",
    "book.phone": "رقم الموبايل",
    "book.guests": "عدد الأفراد",
    "book.date": "التاريخ",
    "book.time": "الميعاد",
    "book.submit": "احجز على واتساب",
    "book.note": "حجزك بيتبعت للمطعم على واتساب.",
    "book.guestOne": "فرد واحد",
    "book.guestMany": "{count} أفراد",
    "book.done": "خلاص قربنا!",
    "book.sent": "شكراً يا {name}. حجزك لـ {guests} يوم {when} جاهز على واتساب. دوس إرسال وهنأكدلك الحجز.",
    "booking.greeting": "أهلاً سيول بايتس! عايز أحجز ترابيزة:",
    "booking.name": "الاسم: {value}",
    "booking.phone": "الموبايل: {value}",
    "booking.email": "الإيميل: {value}",
    "booking.guests": "عدد الأفراد: {value}",
    "booking.when": "الميعاد: {value}",
    "error.name": "من فضلك اكتب اسمك بالكامل.",
    "error.email": "من فضلك اكتب إيميل صحيح.",
    "error.phone": "اكتب رقم موبايل مصري، زي 01012345678.",
    "error.guests": "عدد الأفراد من 1 لـ 12. للمجموعات الأكبر كلمنا.",
    "error.dateEmpty": "من فضلك اختار التاريخ.",
    "error.datePast": "اختار النهارده أو يوم جاي.",
    "error.dateFar": "الحجز متاح لحد 60 يوم قدام.",
    "error.timeEmpty": "من فضلك اختار الميعاد.",
    "error.timeClosed": "مواعيدنا من 12 الضهر لـ 11 بالليل.",
    "error.timePassed": "الميعاد ده عدى النهارده.",
  },
};

function readSetting(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function saveSetting(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be blocked (private mode); the setting still works for this visit.
  }
}

let lang = readSetting(LANG_KEY) === "ar" ? "ar" : "en";

function t(key, vars = {}) {
  const text = TEXT[lang][key] ?? TEXT.en[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
}

function dateLocale() {
  return lang === "ar" ? "ar-EG-u-nu-latn" : "en-US";
}

// Fills every element marked with data-i18n (text), data-i18n-placeholder or data-i18n-aria.
function translatePage() {
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => (el.placeholder = t(el.dataset.i18nPlaceholder)));
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  const titleKey = document.body.dataset.title;
  if (titleKey) document.title = t(titleKey);
  const langToggle = document.getElementById("langToggle");
  langToggle.textContent = t("toggle.lang");
  langToggle.setAttribute("aria-label", t("toggle.langLabel"));
  updateThemeButton();
}

// Pages register here to re-render their dynamic parts when the language changes.
const onLanguageChange = [];

function setupLanguageToggle() {
  document.getElementById("langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "ar" : "en";
    saveSetting(LANG_KEY, lang);
    translatePage();
    onLanguageChange.forEach((render) => render());
  });
}

// ---------- Dark mode ----------
function currentTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function updateThemeButton() {
  const button = document.getElementById("themeToggle");
  const dark = currentTheme() === "dark";
  button.textContent = dark ? "☀️" : "🌙";
  button.setAttribute("aria-label", t(dark ? "toggle.light" : "toggle.dark"));
}

function setupThemeToggle() {
  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    saveSetting(THEME_KEY, next);
    updateThemeButton();
  });
}

// ---------- WhatsApp ----------
function whatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Opens WhatsApp with a ready-made message and returns the link (used as a fallback).
function sendOnWhatsApp(message) {
  const url = whatsAppLink(message);
  window.open(url, "_blank", "noopener");
  return url;
}

function fallbackLink(url) {
  return `<a href="${url}" target="_blank" rel="noopener">${t("whatsapp.fallback")}</a>`;
}

function formatPrice(amount) {
  return amount.toLocaleString("en-US") + " " + t("currency");
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
  let activeCategory = "all";

  function renderCategories() {
    categoriesBox.innerHTML = "";
    CATEGORIES.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.textContent = t("category." + category);
      button.setAttribute("aria-pressed", category === activeCategory);
      button.addEventListener("click", () => {
        activeCategory = category;
        renderCategories();
        renderMenu();
      });
      categoriesBox.appendChild(button);
    });
  }

  search.addEventListener("input", renderMenu);

  function renderMenu() {
    const query = search.value.trim().toLowerCase();
    const visible = DISHES.filter((dish) => {
      const inCategory =
        activeCategory === "all" ||
        (activeCategory === "vegan" ? dish.vegan : dish.category === activeCategory);
      // Search matches both languages, so an English name still works on the Arabic page.
      const text = [dish.name.en, dish.name.ar, dish.description.en, dish.description.ar].join(" ").toLowerCase();
      return inCategory && text.includes(query);
    });

    menu.innerHTML = "";
    visible.forEach((dish) => {
      const card = document.createElement("article");
      card.className = "dish";
      card.innerHTML = `
        <img src="img/${dish.id}.jpeg" alt="${dish.name[lang]}" loading="lazy" />
        <div class="dish-body">
          <div class="dish-title">
            <h2>${dish.name[lang]}</h2>
            ${dish.vegan ? `<span class="badge">${t("dish.vegan")}</span>` : ""}
          </div>
          <p class="dish-description">${dish.description[lang]}</p>
          <div class="dish-footer">
            <span class="price">${formatPrice(dish.price)}</span>
            <button class="primary small" type="button" data-add="${dish.id}">${t("dish.add")}</button>
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
    button.textContent = t("dish.added");
    setTimeout(() => (button.textContent = t("dish.add")), 900);
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
    const lines = Object.entries(cart).map(([id, qty]) => {
      const dish = findDish(id);
      return `- ${qty} x ${dish.name[lang]} = ${formatPrice(dish.price * qty)}`;
    });
    const message = [
      t("order.greeting", { number: orderNumber }),
      "",
      ...lines,
      "",
      t("order.total", { total: formatPrice(total) }),
    ].join("\n");
    const url = sendOnWhatsApp(message);
    orderConfirmation.innerHTML = `${t("cart.sent", { number: orderNumber, total: formatPrice(total) })} ${fallbackLink(url)}`;
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
      const name = dish.name[lang];
      count += qty;
      const item = document.createElement("li");
      item.innerHTML = `
        <img src="img/${dish.id}.jpeg" alt="" />
        <div class="cart-item-info">
          <strong>${name}</strong>
          <span>${formatPrice(dish.price * qty)}</span>
        </div>
        <div class="quantity">
          <button type="button" data-id="${id}" data-change="-1" aria-label="${t("cart.removeOne", { name })}">−</button>
          <span>${qty}</span>
          <button type="button" data-id="${id}" data-change="1" aria-label="${t("cart.addOne", { name })}">+</button>
        </div>`;
      cartItems.appendChild(item);
    });

    cartCount.textContent = count;
    cartTotal.textContent = formatPrice(cartTotalAmount());
    cartEmpty.classList.toggle("hidden", count > 0);
    checkout.disabled = count === 0;
  }

  onLanguageChange.push(() => {
    renderCategories();
    renderMenu();
    updateCart(false);
  });

  renderCategories();
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

  // Each rule returns the key of an error message, or "" when the value is valid.
  const rules = {
    name: (value) => (/^[\p{L} '.-]{2,}$/u.test(value.trim()) ? "" : "error.name"),
    email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "error.email"),
    phone: (value) => (/^01[0125]\d{8}$/.test(value.replace(/\s/g, "")) ? "" : "error.phone"),
    guests: (value) => {
      const n = Number(value);
      return Number.isInteger(n) && n >= 1 && n <= 12 ? "" : "error.guests";
    },
    date: (value) => {
      if (!value) return "error.dateEmpty";
      if (value < form.date.min) return "error.datePast";
      if (value > form.date.max) return "error.dateFar";
      return "";
    },
    time: (value) => {
      if (!value) return "error.timeEmpty";
      if (value < "12:00" || value > "23:00") return "error.timeClosed";
      if (form.date.value === form.date.min) {
        const now = new Date();
        const current = now.toTimeString().slice(0, 5);
        if (value <= current) return "error.timePassed";
      }
      return "";
    },
  };

  function validateField(name) {
    const errorKey = rules[name](form[name].value);
    document.getElementById(name + "Error").textContent = errorKey ? t(errorKey) : "";
    form[name].setAttribute("aria-invalid", errorKey !== "");
    return errorKey === "";
  }

  Object.keys(rules).forEach((name) => {
    form[name].addEventListener("blur", () => validateField(name));
  });

  // Re-show any visible errors in the new language.
  onLanguageChange.push(() => {
    Object.keys(rules).forEach((name) => {
      if (form[name].hasAttribute("aria-invalid")) validateField(name);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const results = Object.keys(rules).map(validateField);
    if (results.includes(false)) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    const date = new Date(form.date.value + "T" + form.time.value);
    const when = date.toLocaleString(dateLocale(), {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    const guests = form.guests.value === "1" ? t("book.guestOne") : t("book.guestMany", { count: form.guests.value });
    const name = form.name.value.trim();
    const url = sendOnWhatsApp([
      t("booking.greeting"),
      "",
      t("booking.name", { value: name }),
      t("booking.phone", { value: form.phone.value.trim() }),
      t("booking.email", { value: form.email.value.trim() }),
      t("booking.guests", { value: guests }),
      t("booking.when", { value: when }),
    ].join("\n"));

    const confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = `
      <strong>${t("book.done")}</strong>
      <p>${t("book.sent", { name: escapeHtml(name), guests, when })}</p>
      <p>${fallbackLink(url)}</p>`;
    confirmation.classList.remove("hidden");
    form.reset();
    Object.keys(rules).forEach((field) => form[field].removeAttribute("aria-invalid"));
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#year").forEach((el) => (el.textContent = new Date().getFullYear()));
  translatePage();
  setupLanguageToggle();
  setupThemeToggle();
  setupMenuPage();
  setupBookingPage();
});
