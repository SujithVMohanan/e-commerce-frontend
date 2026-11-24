# 🚀 Complete React Setup Guide & Modern Blue E-Commerce Tutorial

A comprehensive, beginner-friendly step-by-step guide to installing, configuring, understanding, and running a modern React project from scratch — integrated with the **Modern Blue ("Royal Commerce") Design System** (`D:\e-commerce\stitch_modern_blue_e_commerce_platform`).

---

## 📌 Table of Contents
1. [Prerequisites: What You Need & Why](#1-prerequisites-what-you-need--why)
2. [Step 1: Check or Install Node.js & npm](#step-1-check-or-install-nodejs--npm)
3. [Step 2: Choose Your React Setup Tool (Vite vs CRA)](#step-2-choose-your-react-setup-tool-vite-vs-cra)
4. [Step 3: Create Your React Application](#step-3-create-your-react-application)
5. [Step 4: Install Dependencies](#step-4-install-dependencies)
6. [Step 5: Run the Development Server](#step-5-run-the-development-server)
7. [Step 6: Understanding the Folder Structure ("What is this for?")](#step-6-understanding-the-folder-structure-what-is-this-for)
8. [Step 7: Making Your First Code Change (Hello World)](#step-7-making-your-first-code-change-hello-world)
9. [Step 8: Modern Blue Design System Setup (Common CSS & Common JS)](#step-8-modern-blue-design-system-setup-common-css--common-js)
   - [8.1 Design System Overview](#81-design-system-overview)
   - [8.2 Common CSS Setup (Fonts, Tailwind Tokens & Global Styles)](#82-common-css-setup)
   - [8.3 Common JS Architecture (Utilities, Formatters & Navigation)](#83-common-js-architecture)
   - [8.4 How Common CSS/JS Connect to React Components](#84-how-common-cssjs-connect-to-react-components)
10. [Step 9: Recommended Dependencies for E-Commerce](#step-9-recommended-dependencies-for-e-commerce)
11. [Step 10: Daily Commands Cheat Sheet](#step-10-daily-commands-cheat-sheet)
12. [Troubleshooting & Common Errors](#troubleshooting--common-errors)

---

## 1. Prerequisites: What You Need & Why

Before writing any React code, your computer needs a few core tools:

| Tool | What it is | Why you need it ("This is for that") |
| :--- | :--- | :--- |
| **Node.js** | A JavaScript runtime engine | React uses modern JavaScript, build tools, and local servers that need Node.js to run outside the browser on your computer. |
| **npm** (Node Package Manager) | The default package manager bundled with Node.js | Used to install, share, and manage external libraries/packages (like React, Tailwind CSS, React Router, Axios, etc.). |
| **VS Code** | Code editor | Provides syntax highlighting, auto-completion, and terminal access to write code smoothly. |
| **Web Browser** | Chrome, Edge, Brave, Firefox | Used to preview, test, and debug your application. |

---

## Step 1: Check or Install Node.js & npm

### 1. Check if Node.js is already installed
Open PowerShell or your terminal and run:

```bash
node -v
npm -v
```

- If you see versions like `v20.x.x` or higher and `10.x.x`, you are ready!
- If you see `"command not found"` or `"not recognized"`, follow the installation below.

### 2. Installing Node.js (If not installed)
1. Go to the official website: [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version (recommended for most users).
3. Run the installer and click **Next** through default settings.
4. Restart your terminal/command prompt and verify with `node -v`.

---

## Step 2: Choose Your React Setup Tool (Vite vs CRA)

Modern React development has shifted:
- ❌ **Create React App (CRA):** Deprecated, slow startup, huge bundle size, no longer actively maintained.
- ✅ **Vite (Recommended):** Extremely fast, starts in milliseconds, uses native ES modules, lightweight, and is the industry-standard choice recommended by the official React team.

We will use **Vite + React**.

---

## Step 3: Create Your React Application

You can create a new React project in an existing folder or in a sub-folder.

### Option A: Create in a new project subfolder
Run the following command in your terminal:

```bash
npm create vite@latest my-app -- --template react
```

#### 🔍 Breaking down this command ("What is each part for?"):
- `npm`: Uses Node Package Manager to run tools.
- `create vite@latest`: Downloads and executes the latest version of the Vite project creation wizard.
- `my-app`: The folder name where your project will be generated.
- `-- --template react`: Tells Vite directly to configure the project for plain JavaScript React (use `react-ts` if you prefer TypeScript).

### Option B: Create directly inside the current folder
If you are already inside your target project directory (e.g., `e-commerce-frontend`):

```bash
npm create vite@latest . -- --template react
```
*(Notice the `.` dot, which means "current folder").*

---

## Step 4: Install Dependencies

After creating the project template, you must download the actual code libraries (React, ReactDOM, Vite build tools).

Navigate into your project folder (if not already there):
```bash
cd my-app
```

Then install all required packages:
```bash
npm install
```

#### 🔍 What does `npm install` do?
It reads `package.json`, finds all listed dependencies (`react`, `react-dom`, `vite`), downloads them from the npm registry, and saves them into a local folder named `node_modules/`.

---

## Step 5: Run the Development Server

Start your local React dev server with:

```bash
npm run dev
```

You will see output similar to:

```text
  VITE v5.x.x  ready in 240 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Now hold `Ctrl` and click `http://localhost:5173/` (or copy-paste it into your browser). You will see the default Vite + React landing page! 🎉

To stop the development server anytime, press `Ctrl + C` in your terminal.

---

## Step 6: Understanding the Folder Structure ("What is this for?")

Here is an explanation of every file generated in your React project:

```text
my-app/
├── node_modules/       # Downloaded libraries (Never touch or commit to git!)
├── public/             # Static assets (favicons, public images, robots.txt)
│   └── vite.svg        # Vite logo icon
├── src/                # ALL YOUR REACT CODE LIVES HERE
│   ├── assets/         # Images, fonts, SVGs used inside components
│   │   └── react.svg
│   ├── App.css         # Styling specifically for App component
│   ├── App.jsx         # The main root React component (Your homepage UI)
│   ├── index.css       # Global styles (reset rules, font families, Tailwind)
│   └── main.jsx        # The JavaScript entry point that mounts React to DOM
├── .gitignore          # Tells Git which files/folders NOT to upload (e.g. node_modules, .env)
├── index.html          # The single HTML page loaded by the browser (<div id="root"></div>)
├── package.json        # Manifest file: project name, scripts, list of dependencies
├── package-lock.json   # Locks exact versions of dependencies for consistency
└── vite.config.js      # Configuration file for Vite plugins and dev server settings
```

### Key Concept: How React connects to the browser
1. Browser opens `index.html`.
2. `index.html` has `<div id="root"></div>` and loads `<script type="module" src="/src/main.jsx"></script>`.
3. `main.jsx` uses `ReactDOM.createRoot(document.getElementById('root'))` to insert the `<App />` component into that HTML div.
4. `App.jsx` renders all your headers, buttons, cards, and pages.

---

## Step 7: Making Your First Code Change (Hello World)

Open `src/App.jsx` in your code editor. Replace the contents with:

```jsx
import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🛒 Welcome to My E-Commerce Store!</h1>
      <p>This is my first React application running with Vite.</p>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Cart Items: {count}
        </button>
      </div>
    </div>
  );
}
```

Save the file (`Ctrl + S`). Check your browser — thanks to Vite's **Hot Module Replacement (HMR)**, the page updates instantly without needing a full browser reload!

---

## Step 8: Modern Blue Design System Setup (Common CSS & Common JS)

> **Source Design System:** `D:\e-commerce\stitch_modern_blue_e_commerce_platform` (Royal Commerce / Aura Commerce)
> 
> **Architecture Principle:** Rather than copying large chunks of raw HTML, we configure the **Common CSS tokens** and **Common JS architecture** once. Every React component then reuses these common styles and utilities automatically.

---

### 8.1 Design System Overview

The **Modern Blue** storefront design uses high-contrast luminous layering:
- **Primary Accent:** Deep Royal Blue (`#00288e` / `#1e40af`) for navigation, conversion buttons, and active states.
- **Secondary Accent:** Electric Cyan (`#006398` / `#5bb8fe`) for highlights and category filters.
- **Surfaces:** Clean layered slate tones (`surface: #faf8ff`, `surface-container-low: #f2f3ff`, `surface-container-lowest: #ffffff`).
- **Typography:** **Plus Jakarta Sans** (Headlines & Prices) + **Inter** (Body & Labels).
- **Icons:** **Google Material Symbols Outlined** (e.g. `shopping_bag`, `favorite`, `search`, `tune`).

---

### 8.2 Common CSS Setup

#### 1. Link Common Fonts & Icons in `index.html`
In your project's `index.html`, add the Google Fonts and Material Symbols link tags inside the `<head>` section:

```html
<!-- Google Fonts: Inter & Plus Jakarta Sans -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
  rel="stylesheet"
/>

<!-- Google Material Symbols Outlined for UI Icons -->
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  rel="stylesheet"
/>
```

---

#### 2. Configure Tailwind CSS with the Exact Modern Blue Tokens
Install Tailwind:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js` to include the design tokens from `DESIGN.md`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Surfaces & Backgrounds
        "surface": "#faf8ff",
        "surface-dim": "#d2d9f4",
        "surface-bright": "#faf8ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f3ff",
        "surface-container": "#eaedff",
        "surface-container-high": "#e2e7ff",
        "surface-container-highest": "#dae2fd",
        "on-surface": "#131b2e",
        "on-surface-variant": "#444653",
        "inverse-surface": "#283044",
        "inverse-on-surface": "#eef0ff",

        // Primary Brand Tier (Deep Royal Blue)
        "primary": "#00288e",
        "on-primary": "#ffffff",
        "primary-container": "#1e40af",
        "on-primary-container": "#a8b8ff",
        "primary-fixed": "#dde1ff",
        "primary-fixed-dim": "#b8c4ff",
        "on-primary-fixed": "#001453",
        "on-primary-fixed-variant": "#173bab",

        // Secondary Accent Tier (Cyan / Blue)
        "secondary": "#006398",
        "on-secondary": "#ffffff",
        "secondary-container": "#5bb8fe",
        "on-secondary-container": "#00476e",
        "secondary-fixed": "#cce5ff",
        "secondary-fixed-dim": "#93ccff",
        "on-secondary-fixed": "#001d31",
        "on-secondary-fixed-variant": "#004b73",

        // Tertiary (Warm Accents & Highlights)
        "tertiary": "#4c2e00",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#6b4200",
        "on-tertiary-container": "#ffa929",
        "tertiary-fixed": "#ffddb8",
        "tertiary-fixed-dim": "#ffb95f",

        // Status & Alerts
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // Borders & Outlines
        "outline": "#757684",
        "outline-variant": "#c4c5d5",
        "surface-tint": "#3755c3",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        headline: ["Plus Jakarta Sans", "sans-serif"],
        "display-xl": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
        "price-display": ["Plus Jakarta Sans", "sans-serif"],
      },
      spacing: {
        "space-xs": "0.25rem",  // 4px
        "space-sm": "0.5rem",   // 8px
        "space-md": "1rem",     // 16px
        "space-lg": "1.5rem",   // 24px
        "space-xl": "2.5rem",   // 40px
        "gutter-sm": "1rem",    // 16px
        "gutter": "1.5rem",     // 24px
        "gutter-lg": "2rem",    // 32px
        "margin-sm": "1rem",    // 16px
        "margin": "1.5rem",     // 24px
        "margin-lg": "3rem",    // 48px
      },
      borderRadius: {
        sm: "0.5rem",
        DEFAULT: "1rem",        // 16px
        md: "1.5rem",
        lg: "2rem",             // 32px
        xl: "3rem",             // 48px
        full: "9999px",
      },
    },
  },
  plugins: [],
};
```

---

#### 3. Global CSS Rules in `src/index.css`
Update `src/index.css` to inject the global reset, font base, and smooth scrollbar behavior:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #faf8ff;
    color: #131b2e;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    overscroll-behavior: none;
  }

  /* Numeric price displays use tabular figures to prevent layout shift */
  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }
}

/* Hidden sleek scrollbars */
::-webkit-scrollbar {
  display: none;
}
```

---

### 8.3 Common JS Architecture

Instead of hardcoding text, navigation items, and helper functions in every file, organize common JavaScript logic in dedicated modules under `src/`:

```text
src/
├── constants/
│   ├── navigation.js     # Nav links, category tabs, and header options
│   └── themeTokens.js    # Design tokens and color maps for JS usage
└── utils/
    ├── formatters.js     # Currency ($), discounts (-35%), and numbers
    └── cartStorage.js    # LocalStorage helper for cart state
```

#### 1. Navigation Constants (`src/constants/navigation.js`)
Stores common navigation items, categories, and top-bar settings:

```javascript
export const TOP_NAV_CATEGORIES = [
  { id: "electronics", label: "Electronics & Tech", path: "/catalog?category=electronics" },
  { id: "audio", label: "Audio & Wearables", path: "/catalog?category=audio" },
  { id: "fashion", label: "Fashion & Apparel", path: "/catalog?category=fashion" },
  { id: "home", label: "Home & Living", path: "/catalog?category=home" },
  { id: "gaming", label: "Computing & Gaming", path: "/catalog?category=gaming" },
  { id: "deals", label: "Daily Deals", path: "/catalog?deals=true" },
  { id: "new", label: "New Arrivals", path: "/catalog?sort=new" },
  { id: "clearance", label: "Clearance Sale", path: "/catalog?deals=clearance" },
];

export const TOP_BAR_CONFIG = {
  supportPhone: "+1 800 287 2367",
  promoBanner: "FREE Express Shipping on orders over $50 | Use code: AURAFIRST for 15% OFF",
  defaultCurrency: "USD",
  defaultLanguage: "English",
};
```

---

#### 2. Reusable Utility Formatters (`src/utils/formatters.js`)
Handles formatting currency, discounts, and tabular price representations cleanly:

```javascript
/**
 * Formats a number to USD currency (e.g. 349 -> "$349.00")
 */
export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Calculates discount percentage string (e.g. 500, 350 -> "-30%")
 */
export function getDiscountPercentage(originalPrice, salePrice) {
  if (!originalPrice || originalPrice <= salePrice) return null;
  const percent = Math.round(((originalPrice - salePrice) / originalPrice) * 100);
  return `-${percent}%`;
}
```

---

#### 3. Material Symbol Icon Helper Component (`src/components/common/Icon.jsx`)
Wrap Google Material Symbols into a clean, reusable React component:

```jsx
export default function Icon({ name, className = '', size = 20, fill = false }) {
  return (
    <span
      className={`material-symbols-outlined select-none inline-flex items-center justify-center ${className}`}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: fill ? "'FILL' 1" : "'FILL' 0",
      }}
    >
      {name}
    </span>
  );
}
```

---

### 8.4 How Common CSS/JS Connect to React Components

With the common CSS and JS in place:
1. **No repetitive styling:** Any React component can use `bg-surface-container-low`, `text-primary`, `rounded-full`, and `p-space-md`.
2. **Easy Icon Usage:** `<Icon name="shopping_bag" size={24} className="text-primary" />`.
3. **Consistent Data Flow:** Components iterate over `TOP_NAV_CATEGORIES` rather than repeating links across pages.
4. **Clean Component Porting:** When translating views (Home, Audio Catalog, Product Details, Checkout) from `stitch_modern_blue_e_commerce_platform`, you simply reference the common styles without touching raw global HTML.

---

## Step 9: Recommended Dependencies for E-Commerce

Install the standard packages used across the storefront:

```bash
# Multi-page routing (/cart, /checkout, /catalog)
npm install react-router-dom

# API data fetching (for orders and products)
npm install axios
```

---

## Step 10: Daily Commands Cheat Sheet

| Command | What it does | When to use it |
| :--- | :--- | :--- |
| `npm run dev` | Starts the local development server | Every time you start working on your project |
| `npm install <package>` | Installs a new library (e.g. `npm install axios`) | When you need extra tools or icons |
| `npm run build` | Bundles and minifies code into a `/dist` folder | When you are ready to deploy to production |
| `npm run preview` | Previews the production build locally | Before deploying to verify production build works |
| `npm update` | Updates packages to latest compatible versions | Maintenance |

---

## Troubleshooting & Common Errors

### 1. `File cannot be loaded because running scripts is disabled on this system` (PowerShell error)
**Reason:** Windows PowerShell execution policy restricts running unsigned scripts.
**Fix:** Run this once in PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### 2. `Port 5173 is in use`
**Reason:** Another instance of Vite is already running.
**Fix:** Vite will automatically suggest using port 5174 instead. Or close the other terminal running Vite.

### 3. Material Symbols Not Showing Up
**Reason:** The Google Fonts `<link>` tag in `index.html` was missing or blocked.
**Fix:** Verify that the Material Symbols stylesheet is present inside the `<head>` of `index.html`.

---

Happy Coding! 🚀 Your React project is set up with the Modern Blue E-Commerce Design System foundation.
