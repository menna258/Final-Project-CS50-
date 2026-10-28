# Seoul Bites

A responsive Korean restaurant website built with **HTML, CSS and vanilla JavaScript** as my final project for CS50.

**Live demo:** https://final-project-cs50.pages.dev (also on [GitHub Pages](https://menna258.github.io/Final-Project-CS50-/))

## Features

- **Menu** of 14 Korean dishes with photos, descriptions and prices (EGP)
- **Categories** (Street Food, Main Dishes, Soups & Stews, Sides, Desserts, Vegan) and **live search**
- **Shopping cart**: add dishes, change quantities, see the total and place an order. The cart is saved in `localStorage`, so it survives a page refresh
- **Table booking form** with validation:
  - name, email and Egyptian mobile number checks
  - 1 to 12 guests
  - no past dates, bookings up to 60 days ahead
  - only during opening hours (12:00 PM - 11:00 PM), and no times that have already passed today
  - a confirmation message with the booking details
- **Responsive design** for phones, tablets and desktops
- Accessible: labelled inputs, keyboard support (Esc closes the cart) and visible focus styles

## Project structure

```
Final Project CS50/
  index.html   Menu page (search, categories, cart)
  form.html    Book a Table page
  script.js    Menu data, cart logic and form validation
  style.css    All styles
  img/         Dish photos
```

## Run it locally

No build step is needed. Download the project and open `Final Project CS50/index.html` in a browser.

## Note

This is a front-end demo: orders and bookings are not sent to a real restaurant.
