# 🍽️ Recipedia

A modern food and recipe browsing app built with React, Tailwind CSS, and Swiggy API.

---

## 🌐 Live Demo
Check it out live:  
https://transcendent-lokum-d0fa81.netlify.app

---

## 🖼️ Full-page Website Preview

![Recipedia Preview](https://raw.githubusercontent.com/shubhamsharma39/Recipedia/main/public/recipedia-preview.png)

---

## 🚀 Tech Stack

- **React** (Create React App) – Core UI framework  
- **Tailwind CSS** – Rapid, utility-first styling  
- **Redux Toolkit** – State management for cart, items, etc.  
- **React Router v6** – Navigation between pages  
- **FontAwesome / React Icons** – Scalable UI icons  
- **EmailJS** – Contact form submission via email  
- **Swiggy Public API** – Restaurant and menu data fetching  
- **ESLint + Airbnb config** – Clean and consistent code  
- **Jest + React Testing Library** – Component testing  
- **Netlify** – Automated CI/CD deployment

---

## 🎯 Key Features

- 🏬 **Browse Restaurants** based on location  
- 📋 **Explore Menu** of each restaurant  
- 🛒 **Add Items** via Redux-based cart  
- ✉️ **Contact Form** using EmailJS  
- 💡 **Loader Components** (`Shimmer` effects during fetch)  
- ✅ **Linting & Clean Code** – ESLint checks on each commit  
- 🚀 **CI/CD Workflow** – Auto-deploy to Netlify on push to `main`

---

## 💡 Installation & Local Setup

```bash
# Clone the repo
git clone https://github.com/shubhamsharma39/Recipedia.git
cd Recipedia

# Install dependencies
npm install

# Run locally
npm start

# Run lint
npm run lint

# Test components
npm test

🧩 Folder Structure
bash
Copy
Edit
Recipedia/
├── src/
│   ├── components/        # Reusable visual components
│   ├── utils/             # Custom hooks and helper functions
│   ├── CSS/               # Tailwind and custom styles
│   ├── mocks/             # Mocked API data (if used)
│   └── App.js, index.js   # Entry points
├── public/
│   ├── recipedia-preview.png  # Screenshot used above
│   └── index.html
├── .eslintrc.js           # Linting config
├── .gitHub/workflows/     # CI/CD pipeline YAML
└── README.md

✅ CI/CD & Deployment
Every push to the main branch triggers:

Lint check (npm run lint)

Production build (npm run build)

Netlify Deployment using GitHub Actions

Your site URL updates automatically after each successful build.

🛠️ Developer Tips
To disable lint warnings for debugging, add:

js
Copy
Edit
// eslint-disable-next-line no-console
console.log(...)
Add your own Swiggy API key in useRestaurantMenu.js (or local .env)

Debug mock data by toggling network requests

📧 Contribute or Reach Out
Contributions, improvements, or bug reports are welcome!

Connect with me:
Email- sharmashubham99745@gmail.com.com
LinkedIn - www.linkedin.com/in/shubham-sharma-352576259
GitHub - https://github.com/shubhamsharma39


### 🔧 Next Steps for You:
1. Copy this into your `README.md`
2. Add the `public/recipedia-preview.png` image to GitHub
3. Make sure contact section & links reflect your details
4. Commit & push; your repo will instantly look more professional ☄️
5. Share it as your portfolio or on social platforms!

Need help adjusting or customizing any part? Bol do bog!