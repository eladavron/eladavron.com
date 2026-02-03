# Elad Avron - Personal Website

A clean, modern personal website built with [11ty (Eleventy)](https://www.11ty.dev/) static site generator.

## Features

- ✨ Clean, modern design
- 📱 Fully responsive
- 🚀 Fast static site generation
- 🎨 Interactive navigation menu
- 📄 Multiple pages (Home, About, Projects, Contact)
- 🎯 No JavaScript frameworks needed
- 💻 Easy to customize

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm start
```

3. Open your browser to `http://localhost:8080`

4. Build for production:
```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```
├── src/
│   ├── _layouts/          # Page layouts
│   │   └── base.njk       # Base template with navigation
│   ├── css/               # Stylesheets
│   │   └── style.css      # Main styles
│   ├── index.md           # Home page
│   ├── about.md           # About page
│   ├── projects.md        # Projects page
│   └── contact.md         # Contact page
├── .eleventy.js           # 11ty configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Customization

### Update Your Information

1. **Personal Details**: Edit the content in `src/index.md`, `src/about.md`, etc.
2. **Contact Info**: Update links in `src/contact.md`
3. **Projects**: Add your projects to `src/projects.md`

### Styling

- Main styles are in `src/css/style.css`
- Color scheme is defined in CSS variables at the top of the file
- Responsive breakpoints can be adjusted in the media queries

### Adding New Pages

1. Create a new `.md` file in `src/`
2. Add frontmatter with layout and title:
```markdown
---
layout: base.njk
title: Your Page Title
---

# Your content here
```
3. Add a link to the navigation in `src/_layouts/base.njk`

## Technologies

- [11ty (Eleventy)](https://www.11ty.dev/) - Static site generator
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating engine
- Markdown - Content format
- CSS - Styling (no preprocessor needed)

## Deployment

This site can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repo and deploy automatically
- **Vercel**: Import your project and it will detect 11ty automatically
- **GitHub Pages**: Build locally and push the `_site` folder
- **Any static host**: Upload the contents of `_site` folder

## License

MIT

---

Built with ❤️ using 11ty
