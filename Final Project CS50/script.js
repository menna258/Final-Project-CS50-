function showPrice(element, price) {
  if (element.textContent === "Click to show price") {
    element.textContent = price;
  } else {
    element.textContent = "Click to show price";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      document.getElementById("confirmation").classList.remove("hidden");
      form.reset();
    });
  }
});
