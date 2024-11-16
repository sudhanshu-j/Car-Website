# Car Dealership Website

This project is a responsive and interactive car dealership website featuring various sections such as home, about, popular cars, featured products, offers, logos, footer, and a scroll-up button. It showcases a clean, modern design with animated elements, hover effects, and smooth transitions for an engaging user experience.

## Live Demo 

🔴 [Car Dealership Website](https://greenmotion.netlify.app)

## Table of Contents

1. [Project Description](#project-description)

2. [Features](#features)

3. [Installation](#installation)

4. [Usage](#usage)

5. [Folder Structure](#folder-structure)

6. [Technologies Used](#technologies-used)

7. [Contributing](#contributing)

## Project Description

This is a car dealership website built with HTML, CSS, and JavaScript. It showcases cars for sale, allows users to explore featured products, view offers, and interact with the website using smooth animations and dynamic interactions.

The website is fully responsive, meaning it adjusts gracefully to different screen sizes, including mobile, tablet, and desktop.

### Features:

- **Responsive Design**: Fully adaptable layout across devices (mobile, tablet, desktop).

- **Hover Animations**: Interactive hover effects for buttons and images.

- **Smooth Transitions**: Transitions for better user interaction (e.g., hover effects, button animations).

- **Scroll-Up Button**: A floating button that becomes visible when the user scrolls down, allowing for quick navigation to the top of the page.

- **Car Listings**: A section displaying popular and featured cars, with interactive buttons and pricing.

- **Sticky Footer with Social Media Links**: Provides users easy access to social media.

- **Back-Blur Effects**: Visual effects on some sections for a modern aesthetic.

## Features

1. **Home Section**: 

   - Displays car information with dynamic icons.

   - Includes buttons for user interaction.

3. **About Section**:

   - Displays a description of the website and services, along with images and animated cards.
  
5. **Popular Cars Section**:

   - Showcases popular cars with details like price, image, and specifications.

   - Cards are styled with hover effects.

7. **Featured Products**:

   - A grid of featured cars with interactive buttons.

   - Includes hover and animation effects for smooth user experience.

9. **Offer Section**:

   - Special car offers with a focus on high-value promotions.

   - Includes background image and text with a dynamic positioning of elements.

11. **Logo Section**:
   
   - Displays logos of car brands featured on the site with hover effects.

11. **Footer Section**:
   
   - Contains links for social media and general information.
   
   - Responsive and adapts based on the screen size.

11. **Scroll-Up Button**:
   
   - A fixed-position button appears when the user scrolls down.
   
   - It uses `backdrop-filter` for modern visual effects and allows easy navigation back to the top.

---

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- A modern web browser (Chrome, Firefox, Safari, etc.)

- A text editor or IDE (VS Code, Sublime Text, Atom)

- Basic knowledge of HTML, CSS, and JavaScript (if you intend to modify or contribute)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/car-dealership-website.git
   ```

 2. **Navigate to the project folder:**

   ```bash
   cd car-dealership-website
   ```
 
 3. **Open index.html in your preferred web browser.**

## Usage

### Viewing the Website
- Open `index.html` in any modern web browser to view the website.

### Interacting with the Page

- **Hover Effects**: Hover over buttons, car images, and cards to see interactive animations.

- **Scroll Functionality**: Scroll the page to see the floating "Scroll-Up" button appear when you scroll down.

- **Responsive Design**: The website is fully responsive, so try resizing the browser window or open it on different devices (phones, tablets, and desktops) to see how the layout adapts.

### Modifying the Website
If you wish to customize the content:

- **Edit Content**: Modify the content in the `index.html` file, particularly the car listings, prices, and descriptions.

- **Change Styles**: Adjust the styling by changing values in the `styles.css` file (e.g., fonts, colors, spacing).

- **Customize JavaScript**: Update the JavaScript logic in `app.js` for adding new features or modifying existing behavior.

## Folder Structure

```bash
car-dealership-website/
│
├── index.html            # Main HTML file for the website
├── styles.css            # Main stylesheet for the website
├── app.js                # JavaScript file for interactivity
├── images/               # Folder containing images (e.g., car photos, logos)
│   ├── car1.jpg
│   ├── car2.jpg
│   └── logo.png
├── fonts/                # Folder for custom fonts
├── assets/               # Folder for other assets like icons, etc.
└── README.md             # Project README file (this one!)
```

## Technologies Used

- **HTML**: Used for structuring the web page.

- **CSS**: Styling and responsive design, utilizing:

  - **Flexbox** and **Grid** for layout.

  - Advanced features such as `backdrop-filter`, `grid`, `flex`, and `@media` queries.

  - CSS variables (e.g., `var(--first-color)`, `var(--text-color)`) for consistent design.

- **JavaScript**: Adds interactivity, especially for the scroll-up button and other dynamic features.

  - Smooth scroll functionality for the "scroll-up" button.

  - Animated transitions using `@keyframes` for dynamic UI updates.

## Contributing
We welcome contributions to this project! If you'd like to contribute, please follow these steps:

1. **Fork the repository**.

2. **Create a new branch**: 
   ```bash
   git checkout -b feature-name
   ```

3. **Make your changes and commit them:**
   ```bash
   git commit -am 'Add feature'
   ```

4. **Push to your branch :**
   ```bash
   git push origin feature-name
   ```

5. **Open a pull request on GitHub.**

If you find a bug or issue, please open an issue in the repository with as much detail as possible.

## Acknowledgements

- **Google Fonts**: For providing custom font styles that enhance the typography of the website.

- **FontAwesome**: For offering a wide range of icons used throughout the site, improving visual communication.

- **SwiperJS**: For enabling smooth carousel transitions, enhancing the user experience when browsing through featured vehicles.


