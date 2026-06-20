# AmeTV - World Cup Broadcasting Platform

A modern subscription-based streaming service for FIFA World Cup 2026 coverage. Featuring glassmorphism design, responsive layouts, and an intuitive booking system.

## 📋 Overview

AmeTV is an official World Cup 2026 broadcasting partner offering premium streaming experiences through three subscription tiers. The platform showcases legendary football players and provides seamless subscription management with automated pricing calculations.

## ✨ Features

- **Modern Glassmorphism Design** - Contemporary UI with backdrop blur effects and transparent layers
- **Responsive Layout** - Fully responsive design optimized for mobile, tablet, and desktop
- **Three Subscription Tiers** - Standard (RM 20), Deluxe (RM 50), Premium (RM 80)
- **Dynamic Pricing** - Automatic tax calculation (3%) with real-time total updates
- **Form Validation** - Required field checking with user-friendly error messages
- **Modal Notifications** - Success/error feedback with styled notification system
- **Interactive FAQ** - Accordion-style frequently asked questions section
- **Player Showcase** - Featured football legends (Ronaldo, Messi, Neymar Jr)
- **Hero Sections** - High-quality background images with gradient overlays

## 📁 Project Structure

```
ICT600/
├── index.html          # Home page with player showcase
├── about.html          # Subscription packages & FAQ
├── booking.html        # Subscription checkout form
├── style.css           # Root stylesheet (legacy, use css/style.css)
├── css/
│   └── style.css       # Complete styling system
├── js/
│   └── script.js       # Interactive functionality
├── images/
│   ├── argentina 2022 winner.jpg
│   ├── worldcup.jpg
│   ├── mbappe.jpg
│   ├── cristianoronaldo.jpg
│   ├── leomessi.jpg
│   └── neymarjr.jpg
└── README.md           # This file
```

## 🌐 Pages

### Home (index.html)
- Hero section with Argentina 2022 World Cup background
- "LAST DANCE" player showcase featuring:
  - Cristiano Ronaldo (Age 41, Portugal)
  - Lionel Messi (Age 38, Argentina)
  - Neymar Jr (Age 34, Brazil)
- Call-to-action buttons linking to subscription and packages

### About (about.html)
- Hero section with World Cup background
- **Subscription Plans:**
  - **Standard (RM 20)** - Live streaming, basic highlights, selected matches
  - **Deluxe (RM 50)** - All standard + extended highlights, full match coverage, 4K streaming
  - **Premium (RM 80)** - All deluxe + free authentic jersey, giveaway opportunities
- **FAQ Section** - Three accordion items covering cancellations, upgrades, and plan differences

### Booking (booking.html)
- Hero section with Kylian Mbappé background
- Subscription form with fields:
  - Full Name (required)
  - Email Address (required)
  - Phone Number (required)
  - Package Selection (optional)
- Real-time pricing calculation:
  - Subtotal (package price)
  - Tax (3% automatic calculation)
  - Total amount
- Submit button with modal notification feedback

## 🎨 Design System

### Color Palette
- **Background**: #08030b (dark purple)
- **Accent**: #ff4e7a (vibrant pink)
- **Text**: #f6f3f7 (light purple-white)
- **Muted**: #b9a3b8 (muted purple)

### Typography
- **Font Family**: System UI (system-ui, -apple-system, BlinkMacSystemFont, Segoe UI)
- **Hero Headings**: clamp(2.4rem, 4vw, 4.2rem) - responsive scaling
- **Section Headings**: 2.3rem
- **Body Text**: 1rem

### Glassmorphism Elements
- **Backdrop Filter**: blur(12px) or blur(18px)
- **Transparency**: rgba(255, 255, 255, 0.08) to 0.16) for surfaces
- **Border Radius**: 28px for major containers, 16px for form inputs
- **Hover Effects**: translateY(-6px) with enhanced shadow

### Responsive Breakpoints
- **980px**: Single column grid layouts
- **720px**: Navbar flex-direction column, adjusted padding
- **530px**: Hero h1 scaling, full-width buttons

## 💻 Technology Stack

- **HTML5** - Semantic markup with proper meta tags and DOCTYPE
- **CSS3** - Custom properties, Grid, Flexbox, media queries, transitions
- **JavaScript** - jQuery 3.7.1 for DOM manipulation and interactivity
- **No Build Tools** - Lightweight, runs directly in browser

## 🚀 How to Use

1. **Setup**
   - Ensure all image files are present in the `images/` folder
   - All files should be in the same directory structure as provided

2. **Opening**
   - Open `index.html` in a web browser
   - Navigate using the navbar (Home, About, Subscription)

3. **Making a Subscription**
   - Click "Subscribe Now" or navigate to Subscription page
   - Fill in your details (Name, Email, Phone)
   - Select your preferred package (optional)
   - Pricing updates automatically with 3% tax
   - Click Submit to see confirmation modal

4. **Viewing Packages**
   - Navigate to About page
   - View three subscription tiers with features
   - Scroll down for FAQ section

## 📱 Responsive Design

All pages are fully responsive:
- **Mobile (< 530px)**: Single column layouts, full-width buttons
- **Tablet (530px - 980px)**: Optimized spacing and font sizes
- **Desktop (> 980px)**: Multi-column grids, full navigation bar

## 🔧 JavaScript Features

### Form Validation
- Validates required fields: Name, Email, Phone
- Package selection is optional
- Shows error messages for incomplete forms

### Dynamic Pricing
- Real-time calculation when package changes
- Automatic 3% tax computation
- Formatted to 2 decimal places (RM format)

### Interactive Elements
- FAQ accordion with smooth expand/collapse
- Fade-in animations on page load
- Modal notifications with dismiss functionality

## 📦 Browser Compatibility

- Modern browsers with CSS Grid, Flexbox, and Backdrop Filter support
- Chrome/Edge 76+, Firefox 61+, Safari 9+
- Mobile browsers: iOS Safari 13+, Chrome Android 76+

## 📝 Form Submission

Currently, form submissions display a success notification. To integrate with a backend:
- Update the form submission handler in `js/script.js`
- Replace with actual API endpoint call
- Maintain the notification modal for user feedback

## 🎯 Future Enhancements

- Backend integration for form processing
- Payment gateway integration
- User account dashboard
- Additional player profiles
- Live match streaming interface
- User authentication system

## 📧 Support

For questions or issues, please contact the development team.

---

**AmeTV** © 2026 World Cup Broadcasting | All Rights Reserved
