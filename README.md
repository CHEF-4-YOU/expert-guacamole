# Chef4You - Experiencias Gastronómicas Exclusivas

## 🍽️ About Chef4You

Chef4You is a luxury gastronomy experience platform showcasing the culinary expertise of Chef Franko Salgado. We offer exclusive, personalized dining experiences, private events, and luxury catering services in Nayarit, Mexico.

## ✨ Features

- **Multi-language Support**: Language selector with Spanish, English, and French options
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Interactive Menu**: Dynamic menu presentation with elegant animations
- **Gallery**: Stunning visual presentation of culinary creations
- **Contact Integration**: Direct WhatsApp integration for easy booking
- **SEO Optimized**: Complete meta tags and structured data for search engines
- **Social Media Ready**: Open Graph and Twitter Card integration

## 🚀 Installation

### Prerequisites

This is a static website built with HTML, CSS, and JavaScript. No build process or dependencies are required.

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/CHEF-4-YOU/expert-guacamole.git
cd expert-guacamole
```

2. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

3. For local development, use a simple HTTP server:
```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have npx)
npx http-server

# Then visit http://localhost:8000
```

## 📖 Usage

### Main Pages

- **index.html** - Main landing page with full experience showcase
- **inicio.html** - Alternative home page
- **menu-explosivo.html** - Special menu presentation
- **epicure-menu.html** - Gourmet menu showcase
- **language-selector-demo.html** - Language selector demonstration

### Language Selector

The website includes a custom language selector that integrates with Google Translate:

```html
<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<div id="google_translate_element" style="display: none;"></div>
<script src="language-selector.js"></script>
```

The language selector CSS can be customized in `language-selector.css`.

### Customization

1. **Colors**: Edit CSS variables in `index.html`:
```css
:root {
  --gold: #c9a962;
  --black: #0a0a0a;
  --white: #fafafa;
  /* ... other variables */
}
```

2. **Content**: Update text content directly in the HTML files

3. **Images**: Replace image URLs with your own

4. **Contact**: Update WhatsApp number in the floating button

## 📁 Folder Structure

```
expert-guacamole/
├── index.html                          # Main landing page
├── inicio.html                         # Alternative home page
├── menu-explosivo.html                 # Special menu page
├── epicure-menu.html                   # Gourmet menu page
├── language-selector-demo.html         # Language selector demo
├── language-selector.css               # Language selector styles
├── language-selector.js                # Language selector functionality
├── README.md                           # This file
├── LICENSE                             # MIT License
├── .gitignore                          # Git ignore rules
├── IMPLEMENTACION-FINAL.md             # Final implementation docs (Spanish)
├── IMPLEMENTACION-SELECTOR-IDIOMAS.md  # Language selector docs (Spanish)
├── INDICE-GENERAL.md                   # General index (Spanish)
├── LANGUAGE-SELECTOR-README.md         # Language selector detailed docs
└── *.html                              # Other HTML files
```

## 🤝 Contributing

We welcome contributions to improve Chef4You! Here's how you can help:

1. **Fork the Repository**
   ```bash
   git fork https://github.com/CHEF-4-YOU/expert-guacamole.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow existing code style
   - Test across different browsers
   - Ensure responsive design works

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: brief description of changes"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

### Code Style Guidelines

- Use semantic HTML5 elements
- Follow BEM naming convention for CSS classes
- Keep JavaScript vanilla (no frameworks required)
- Maintain consistent indentation (2 spaces)
- Add comments for complex logic
- Ensure accessibility (ARIA labels, semantic markup)

### Reporting Issues

Found a bug or have a suggestion? Please open an issue:
- Use a clear, descriptive title
- Provide steps to reproduce (for bugs)
- Include browser and device information
- Add screenshots when applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 CHEF 4 YOU

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 📞 Contact

- **Website**: [https://chef4you.com](https://chef4you.com)
- **WhatsApp**: +52 322 160 68743
- **Instagram**: [@frankosagrado](https://instagram.com/frankosagrado)
- **Facebook**: [Chef Franko Salgado](https://facebook.com/frankosalgado)

## 🙏 Acknowledgments

- Chef Franko Salgado for culinary excellence
- Google Fonts for Cormorant Garamond and Montserrat fonts
- All contributors and supporters of the project

---

**Made with ❤️ by Chef4You Team**

