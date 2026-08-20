# Assets Directory Guide

Welcome to the `assets` folder! This directory is dedicated to securely housing all local media for the Diana Heights website.

## Directory Structure

*   `assets/logo/` - Place your official vector or high-resolution `.png` logos here (e.g., `diana_logo_light.png`, `diana_logo_dark.png`).
*   `assets/images/` - Drop all your customized, high-end photography here (e.g., `hero-facade.jpg`, `deluxe-room.jpg`, `spa-therapy.jpg`).

## How to Apply Your Assets

Currently, the HTML files (`index.html`, `rooms.html`, etc.) are leveraging ultra-high-resolution placeholder images from Unsplash to ensure the layouts don't appear broken while you prepare your custom media. 

When you're ready to substitute the placeholders with your own authentic hotel assets, simply follow these steps:

1.  Drag your image file (e.g., `my_custom_hero.jpg`) into the `assets/images` directory.
2.  Open the relevant HTML file (e.g., `index.html`).
3.  Locate the `<img src="...">` tag you wish to update.
4.  Replace the long Unsplash URL with the path to your new local image. 

    **Example:**
    Change:
    `<img src="https://images.unsplash.com/photo-1566073771259...">`

    To:
    `<img src="assets/images/my_custom_hero.jpg">`

The website will immediately render your custom imagery locally.
