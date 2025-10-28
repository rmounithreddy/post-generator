# 🧠 Post Generator

A smart web app that tailors your content for different social media platforms — just enter your base text, select platforms like **Twitter**, **LinkedIn**, or **Instagram**, and get perfectly formatted posts powered by **Google Gemini**.

---

## 🚀 Features

- 📝 Generate platform-specific posts (LinkedIn, Instagram, Twitter)  
- ⚙️ Uses **Gemini API** for natural content adaptation  
- 💬 Automatically parses and structures multi-platform AI responses  
- 🎨 Clean, responsive UI built with **React + Vite**  
- 🔄 Reset and regenerate functionality  
- 💡 Graceful fallback if the AI returns unstructured text  

---

## 🧩 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS3 (custom, responsive)
- **AI Model:** Google Gemini API
- **Language:** JavaScript (ES6)

---

## 📁 Folder Structure

```

post-generator/
├── src/
│   ├── Components/
│   │   ├── HomePage.jsx
│   │   └── HomePage.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js

````

---

## ⚙️ Setup & Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-username>/post-generator.git
   cd post-generator
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```
   VITE_GEMINI_KEY=your_google_gemini_api_key
   ```

   > Replace your inline API key in `HomePage.jsx` with:
   >
   > ```js
   > const apiKey = import.meta.env.VITE_GEMINI_KEY;
   > ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   ```
   http://localhost:5173/
   ```

## 🔮 Future Improvements

* Add **copy-to-clipboard** button for each post
* Integrate **more social platforms** (YouTube, Threads, etc.)
* Add **tone/style selector** (professional, casual, witty)
* Save and export posts as **PDF or text file**
* Integrate **post scheduling** or social API sharing

---
