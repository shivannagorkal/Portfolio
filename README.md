# 👨‍💻 Shivanna Gorkal | Developer Portfolio

A sleek, responsive, and highly interactive hacker/terminal-themed personal portfolio website. Designed to showcase projects, skills, hackathon achievements, and certificates with a modern, premium aesthetic.

## 🚀 Live Demo
>
> **[View Live Portfolio](https://shivannagorkal.me/)**
---

## ✨ Features

- **Dynamic Hero Section:** Terminal-style typing effect with live local time integration.
- **3D Card Hover Effects:** Interactive project and certificate cards powered by custom `data-tilt` 3D perspective animations.
- **Project Showcase:** Detailed project grid with team avatars, achievement badges, and technical tags (e.g., TradeVault, AI Tools).
- **Achievements & Certifications Log:** Tab-based timeline tracking Hackathon wins, participations, and a dedicated modal viewer for certificates.
- **Custom Certificate Viewer (Lightbox):** Clicking on any certificate instantly opens the high-resolution image in a beautiful, blurred-background modal—without leaving the page.
- **Responsive Design:** Fully fluid layout using CSS Grid and Flexbox, ensuring a flawless experience on desktops, tablets, and mobile devices.
- **Working Contact Form:** Integrated with Formspree for immediate email delivery.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic and structured markup.
- **CSS3 (Vanilla):** Custom variables (`:root`), advanced flexbox/grid layouts, keyframe animations, glassmorphism, and responsive media queries.
- **JavaScript (Vanilla):** DOM manipulation, Intersection Observers for scroll reveals, 3D tilt engine, typing effects, and modal state management.
- **Formspree:** Contact form backend.

---

## 📁 File Structure

```text
portfolio/
├── index.html       ← Main structure and content
├── style.css        ← All styling, variables, and responsive rules
├── script.js        ← Animations, interactions, and modal logic
├── three-scene.js   ← Background 3D effects
├── assets/
│   ├── resume.pdf             ← Downloadable CV
│   └── Certificates/          ← Folder containing all certificate images
│       ├── GenAI-Mastery-Workshop.png
│       ├── HACKELITE-Certificate.jpg
│       └── ...
└── README.md
```

---

## ⚙️ Setup & Deploy (GitHub Pages)

It's incredibly easy to get this live:

1. Create a new repository on GitHub.
2. Upload all the files in this directory.
3. Go to your repository's **Settings → Pages**.
4. Set the Source to the **`main`** branch (or `master`).
5. Click **Save**.
6. Within a few minutes, your site will be live at: `https://<your-username>.github.io/<repo-name>`

---

## 📬 Contact Form Configuration

The contact form is already fully wired up!

- It uses **Formspree** (`https://formspree.io/f/xppqqwjd`).
- Submissions will automatically trigger the sending animation and deliver the message directly to the email associated with your Formspree account.

---

## ✏️ Customization Guide

- **Theme Colors:** Open `style.css` and modify the `:root` variables to instantly change the entire color scheme.
- **Adding Projects:** Simply copy an existing `<article class="project-card">` block in `index.html` and modify the text/tags.
- **Adding Certificates:** Add your new certificate image to `assets/Certificates/`, then copy an existing `<div class="cert-card">` block and update the `onclick` file path to match your new image.

---
*Built with passion by Shivanna Gorkal.*
