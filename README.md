# ICRA 2026 OntoAgentic Robotics Workshop Website

A modern, responsive website for the ICRA 2026 Workshop on "Advancing OntoAgentic Robotics through Novel Design, Sensing, Actuation, and AI". This website is designed to be hosted on GitHub Pages and provides a comprehensive platform for workshop information, proceedings, and participant engagement.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Proceedings**: Filterable paper categories and search functionality
- **Comprehensive Schedule**: Detailed timeline with session information
- **Speaker Profiles**: Detailed information about invited speakers and their talks
- **Call for Contributions**: Complete submission guidelines and important dates
- **GitHub Pages Ready**: Optimized for GitHub Pages hosting

## 📁 Project Structure

```
├── index.html                          # Homepage
├── proceedings.html                    # Proceedings page
├── schedule.html                       # Workshop schedule
├── invited-talks.html                  # Invited speakers and talks
├── call-for-contributions.html         # Call for contributions
├── 404.html                           # Custom 404 error page
├── _config.yml                        # Jekyll/GitHub Pages configuration
├── assets/
│   ├── css/
│   │   └── style.css                  # Main stylesheet
│   ├── js/
│   │   ├── script.js                  # Main JavaScript functionality
│   │   └── proceedings.js             # Proceedings-specific functionality
│   └── images/                        # Image assets directory
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites

- A GitHub account
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Setup for GitHub Pages

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/yourusername/icra2026-workshop-website.git
   cd icra2026-workshop-website
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Customize the Content**
   - Update speaker information in `invited-talks.html`
   - Modify workshop details in `index.html`
   - Add actual paper information in `proceedings.html`
   - Update dates and deadlines in `call-for-contributions.html`

4. **Deploy**
   - Push your changes to the main branch
   - GitHub Pages will automatically build and deploy your site
   - Your site will be available at `https://yourusername.github.io/icra2026-workshop-website`

## 🎨 Customization

### Updating Workshop Information

1. **Workshop Title and Description**: Edit the hero section in `index.html`
2. **Dates and Location**: Update the hero info section in `index.html`
3. **Topics**: Modify the topics grid in `index.html`
4. **Speakers**: Add speaker information in `invited-talks.html`

### Adding Papers to Proceedings

1. Open `proceedings.html`
2. Find the `.papers-list` section
3. Add new paper items following the existing structure:
   ```html
   <div class="paper-item" data-category="category-name">
       <div class="paper-header">
           <h4>Paper Title</h4>
           <span class="paper-type">Paper Type</span>
       </div>
       <div class="paper-authors">
           <p><strong>Authors:</strong> Author Names</p>
       </div>
       <div class="paper-abstract">
           <p><strong>Abstract:</strong> Paper abstract...</p>
       </div>
       <div class="paper-links">
           <a href="#" class="paper-link"><i class="fas fa-file-pdf"></i> PDF</a>
           <a href="#" class="paper-link"><i class="fas fa-video"></i> Video</a>
           <a href="#" class="paper-link"><i class="fas fa-presentation"></i> Slides</a>
       </div>
   </div>
   ```

### Styling Customization

The main stylesheet is located at `assets/css/style.css`. Key sections include:
- Navigation styles (`.navbar`)
- Hero section (`.hero`)
- Content sections (`.abstract`, `.topics`, etc.)
- Page-specific styles (`.proceedings`, `.schedule`, etc.)
- Responsive design (media queries)

### JavaScript Functionality

- `assets/js/script.js`: Core functionality (navigation, animations, etc.)
- `assets/js/proceedings.js`: Proceedings-specific features (filtering, search, export)

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Responsive navigation with hamburger menu
- Optimized typography for different screen sizes
- Touch-friendly interface elements

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font family)

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features

- Optimized CSS and JavaScript
- Lazy loading for images
- Minimal external dependencies
- Fast loading times

## 📝 Content Guidelines

### Writing Style

- Use clear, professional language
- Keep paragraphs concise
- Use bullet points for lists
- Include relevant technical details

### Images

- Use high-quality images
- Optimize file sizes for web
- Include alt text for accessibility
- Recommended formats: WebP, PNG, JPG

### Links

- Use descriptive link text
- Ensure all links work correctly
- Open external links in new tabs
- Use relative paths for internal links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support regarding this website template:

- Create an issue in the GitHub repository
- Contact the organizing committee
- Check the documentation in the code comments

## 🙏 Acknowledgments

- Template inspired by modern academic conference websites
- Icons provided by Font Awesome
- Typography by Google Fonts
- Responsive design patterns from modern web development practices

---

**Note**: This website template is designed specifically for the ICRA 2026 OntoAgentic Robotics Workshop. Please customize all content, dates, and contact information to match your specific workshop requirements.