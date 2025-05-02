# 🟠 ubuntu.dawidolko.pl  
_A Next.js + Tailwind CSS portfolio that re-creates the Ubuntu 20.04 desktop inside your browser_

[![Build](https://img.shields.io/github/actions/workflow/status/dawidolko/Simulaing-Ubuntu-System-GUI/Build.yml?label=build&logo=github)](https://github.com/dawidolko/Simulaing-Ubuntu-System-GUI/actions)
[![Website Status](https://img.shields.io/website?down_color=red&down_message=offline&up_message=online&url=https%3A%2F%2Fubuntu.dawidolko.pl)](https://ubuntu.dawidolko.pl)
[![Stars](https://img.shields.io/github/stars/dawidolko/Simulaing-Ubuntu-System-GUI?style=social)](https://github.com/dawidolko/Simulaing-Ubuntu-System-GUI/stargazers)

> **Live Demo:** <https://ubuntu.dawidolko.pl>  

---

## 📑 Table of Contents
1. [About](#about)
2. [Project Structure](#project-structure)
3. [Star History](#star-history)
4. [Getting Started](#getting-started)
5. [Customization Guide](#customization-guide)
6. [Scripts & Commands](#scripts--commands)
7. [Contributing](#contributing)
8. [License & Author](#license--author)

---

## About
`ubuntu.dawidolko.pl` is an **open-source, desktop-themed portfolio** that mimics Ubuntu 20.04’s GNOME shell: a dock, draggable windows, themed apps and a dark-orange palette.  
It’s built with **Next.js** (React), **Tailwind CSS**, and ships as a fully static site—perfect for free hosting on GitHub Pages. 🦄🖥️

Key features:

- ✅ **Next.js** for server-side rendering & static export  
- 🎨 **Tailwind CSS** for utility-first styling  
- ✉️ **EmailJS**-powered contact form (no backend needed)  
- ⚙️ **Config-driven apps** defined in `apps.config.js`  
- 📱 Responsive and PWA-ready

---

## Project Structure
```text
.
├── .next/               # Next.js build output
├── .github/             # Actions & issue templates
├── .vscode/             # Dev-container & tasks
├── components/          # Re-usable React components
├── files/               # Static sample documents
├── images/              # Icons & wallpapers
├── pages/               # Next.js pages & API routes
├── public/              # Public assets served at /
├── styles/              # Global Tailwind styles
├── themes/              # Theme tokens / CSS vars
├── apps.config.js       # Dock & window definitions
├── tailwind.config.js   # Tailwind setup
├── package.json         # NPM metadata & scripts
├── README.md            # You are here!
└── yarn.lock | package-lock.json
````

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=dawidolko/Simulaing-Ubuntu-System-GUI\&type=Date)](https://star-history.com/#dawidolko/Simulaing-Ubuntu-System-GUI&Date)

---

## Getting Started

> Requires **Node 18 +** and **npm** (or **yarn / pnpm**).

```bash
# 1 – Clone the repo
git clone https://github.com/dawidolko/Ubuntu-Simulaing-System-GUI
cd Ubuntu-Simulaing-System-GUI

# 2 – Install dependencies
npm install            # or yarn / pnpm

# 3 – Run the dev server
npm start              # opens http://localhost:3000
```

### Production build

```bash
npm run build          # generates an optimised /.next bundle
npm run export         # exports static HTML to /out for GitHub Pages
```

---

## Customization Guide

| What you want to change | File(s) to edit                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------- |
| **Apps & dock icons**   | `apps.config.js`                                                                    |
| **Theme colours**       | `themes/ubuntu.css` or Tailwind config                                              |
| **Contact-form keys**   | `.env` → `NEXT_PUBLIC_USER_ID`, `NEXT_PUBLIC_SERVICE_ID`, `NEXT_PUBLIC_TEMPLATE_ID` |
| **Portfolio texts**     | Components in `pages/` and `components/`                                            |
| **Favicons / logos**    | Replace images in `public/`                                                         |

> **EmailJS setup**
>
> 1. Create an account at [https://emailjs.com](https://emailjs.com)
> 2. Add a Gmail / Outlook service → grab **Service ID**
> 3. Create a template → grab **Template ID**
> 4. In your EmailJS dashboard copy **User ID**
> 5. Add them to a `.env` at the project root:
>
>    ```dotenv
>    NEXT_PUBLIC_USER_ID=xxxxxxxx
>    NEXT_PUBLIC_SERVICE_ID=xxxxxxxx
>    NEXT_PUBLIC_TEMPLATE_ID=template_fqqqb9g
>    ```

---

## Scripts & Commands

| Command          | What it does                                         |
| ---------------- | ---------------------------------------------------- |
| `npm start`      | Runs **Next.js** in development mode with hot-reload |
| `npm run build`  | Creates an optimised production build                |
| `npm run export` | Converts the site into static HTML in `/out`         |
| `npm run lint`   | Runs ESLint on source files                          |
| `npm run format` | Formats code with Prettier                           |

> If you prefer **yarn** simply replace `npm` with `yarn`.

---

## Contributing

All kinds of contributions are **warmly welcome**:

1. **Fork**   →   `git clone`
2. `git checkout -b feat/amazing-feature`
3. Code, test, `npm run lint`
4. `git commit -m "Add amazing feature"`
5. `git push origin feat/amazing-feature`
6. Open a **Pull Request** 🚀

Please attach screenshots or GIFs when altering the UI.

---

## License & Author

* **License:** MIT – free to use, tweak, and share 🔓
* **Author:** **Dawid Olko**

  * Portfolio [https://dawidolko.pl](https://dawidolko.pl)
  * GitHub [https://github.com/dawidolko](https://github.com/dawidolko)
  * LinkedIn [https://www.linkedin.com/in/dawidolko/](https://www.linkedin.com/in/dawidolko/)

> Crafted with ☕, 🎧 and a dash of open-source spirit in honour of Ubuntu’s friendly orange glow.
