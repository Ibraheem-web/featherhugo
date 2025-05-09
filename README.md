# FeatherHugo
### [Demo](https://ibraheemguides.netlify.app/)

This is a standalone [Hugo](https://gohugo.io/) website powered by [Tailwind CSS](https://tailwindcss.com/) and includes enhanced interactivity via plugins like **Glider.js** and **FsLightbox**. It is designed for fast, responsive content-driven sites.

---

## 🚀 Features

- ⚡ Fast, static site generation with Hugo
- 🎨 TailwindCSS for utility-first styling
- 🖼️ Lightbox and carousel functionality with JavaScript plugins
- ✍️ Markdown-based content management
- 📁 Clean, organized folder structure
- 🔧 Easily customizable

---

## 📦 Installation

To run this Hugo site locally:

```bash
# Clone the repository
git clone https://github.com/Ibraheem-web/featherhugo.git
cd featherhugo

# Install dependencies
npm install

# Start Hugo development server
hugo server
```

Make sure you have both [Hugo](https://gohugo.io/getting-started/installing/) and [Node.js](https://nodejs.org/) installed.

**or**

Download the ZIP file from the GitHub repository.

Extract the ZIP file.

Open the extracted folder in your terminal.

Run the following commands:

```bash
# Install dependencies
npm install

# Start Hugo development server
hugo server
```

---

## 🗂️ Folder Structure

```
.
├── archetypes/         # Default content templates
├── assets/             # Tailwind CSS and JS assets
│   ├── css/
│   └── js/
├── content/            # Markdown content (articles, pages)
├── layouts/            # Template files
├── static/             # Static assets (images, favicon, etc.)
├── hugo.yaml           # Site configuration
├── tailwind.config.js  # Tailwind config
├── package.json        # JS dependencies
└── ...
```

---

## ✏️ Customization

- **Content**: Add new posts to `content/articles/` using Markdown. Each file supports front matter (YAML or TOML) for title, date, summary, and more.
- **Design (Colors & Fonts)**:  
  You can easily customize the site's look and feel by editing the CSS variables defined in `assets/css/main.css`.  
  Look for variables like:

  ```css
  @theme {
    --color-dark-primary: var(--color-gray-950);
    --color-light-primary: var(--color-gray-100);
    --color-brand: var(--color-emerald-400);
    /* ...other variables */
  }
  ```

  Note: Don't overwrite variables name, change the values instead.
---

## 📄 License

This project is open-source. You are free to customize, extend, and share.
