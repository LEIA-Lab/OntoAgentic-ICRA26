# ICRA 2026 Workshop Website - Complete File Mapping

## Overview
This document provides a comprehensive mapping of all files in the ICRA 2026 OntoAgentic Robotics Workshop website. The website is built as a static site optimized for GitHub Pages hosting.

## Website Structure

```
OntoAgentic-ICRA26/
├── Configuration Files
├── HTML Pages
├── Assets (CSS, JS, Images)
└── Documentation
```

---

## 📁 Configuration Files

### `_config.yml`
**Purpose**: Jekyll/GitHub Pages configuration
**Content**:
- Site metadata (title, description, baseurl)
- Build settings (markdown processor, highlighter, theme)
- Collections configuration for proceedings
- Navigation structure
- Social media links
- Plugin configuration (jekyll-feed, jekyll-sitemap)
- Exclude/include rules for build process

**Key Settings**:
- Title: "ICRA 2026 OntoAgentic Robotics Workshop"
- Theme: minima
- Email: workshop@icra2026.org
- Twitter: @icra2026workshop
- GitHub: icra2026workshop

---

## 📄 HTML Pages

### `index.html` - Homepage
**Purpose**: Main landing page
**Content**:
- Hero section with workshop title and basic info
- Abstract section explaining workshop goals
- Topics grid (11 topic cards covering cognitive robotics areas)
- Distinguished speakers preview (4 placeholder speakers)
- Organizing committee preview (3 members with photos)
- Footer with links and contact info

**Key Sections**:
- Hero: "Toward Human-Level Robotic Teammates"
- Topics: Cognitive architectures, neurosymbolic integration, planning, etc.
- Speakers: Placeholder content (TBD)
- Committee: Prof. Sergei Nirenburg, Prof. Luis Sentis, Dr. Sanjay Oruganti

### `404.html` - Error Page
**Purpose**: Custom 404 error handling
**Content**:
- Robot-themed 404 page
- Navigation to return to homepage
- Consistent styling with main site

### `call-for-contributions.html` - Submission Guidelines
**Purpose**: Call for papers and contributions
**Content**:
- Workshop format explanation
- Important dates timeline
- Submission types (Full Papers, Extended Abstracts, Demo Proposals)
- Topics of interest (4 main categories)
- Submission guidelines and review process
- Awards and recognition section
- FAQ section
- Submission portal links

**Key Dates**:
- Submission Deadline: March 15, 2026
- Notification: April 15, 2026
- Camera-Ready: May 1, 2026
- Workshop: TBD, 2026

### `distinguished-speakers.html` - Speaker Information
**Purpose**: Detailed speaker profiles and talks
**Content**:
- Keynote speakers section (2 speakers - TBD)
- Invited speakers grid (4 speakers - TBD)
- Panel discussion information
- Speaker resources (guidelines, technical setup, timing, contact)
- All content currently placeholder (TBD)

### `invited-talks.html` - Talk Details
**Purpose**: Detailed information about invited talks
**Content**:
- Distinguished speakers section
- Keynote speakers (2 - TBD)
- Panel discussion details
- Speaker resources
- Previous talks archive section
- Similar to distinguished-speakers.html but focused on talks

### `organizing-committee.html` - Committee Information
**Purpose**: Organizing committee and advisory board
**Content**:
- Main organizing committee (3 members with photos and contact info)
- Advisory board section (placeholder)
- Contact information for all members

**Committee Members**:
- Prof. Sergei Nirenburg (RPI, HARMONIC Agents Inc.)
- Prof. Luis Sentis (UT Austin, Apptronic, HARMONIC Agents Inc.)
- Dr. Sanjay Oruganti (RPI, HARMONIC Agents Inc.)

### `proceedings.html` - Workshop Proceedings
**Purpose**: Accepted papers and presentations
**Content**:
- "Coming Soon" banner (proceedings not yet available)
- Paper categories with filtering tabs
- Sample papers (4 placeholder papers)
- Download options for complete proceedings
- Interactive filtering by category

**Paper Categories**:
- All Papers
- Ontological Reasoning
- Multi-Agent Systems
- Embodied AI
- Applications

### `schedule.html` - Workshop Schedule
**Purpose**: Detailed workshop timeline
**Content**:
- Full-day schedule (09:00-17:30)
- Paper sessions with specific topics
- Coffee breaks and networking
- Two main panel discussions
- Important notes and guidelines
- Download schedule option

**Schedule Highlights**:
- 3 paper sessions (Cognitive Architectures, Neurosymbolic Integration, Human-Robot Teaming)
- 2 panel discussions (Assessment Panel, Community-Building Panel)
- Poster session and networking breaks

---

## 🎨 Assets

### CSS Files

#### `assets/css/style.css`
**Purpose**: Main stylesheet for entire website
**Content**:
- Reset and base styles
- Navigation styling (fixed navbar, mobile hamburger menu)
- Hero section styling
- Grid layouts for topics, speakers, committee
- Page-specific styles for all sections
- Responsive design (mobile-first approach)
- Animation and transition effects
- Footer styling
- Print styles

**Key Features**:
- Modern, clean design
- Responsive navigation
- Smooth animations
- Professional color scheme
- Typography using Inter font

### JavaScript Files

#### `assets/js/script.js`
**Purpose**: Core website functionality
**Content**:
- Mobile navigation toggle
- Smooth scrolling for anchor links
- Active page highlighting in navigation
- Navbar scroll effects
- General interactive features

#### `assets/js/proceedings.js`
**Purpose**: Proceedings page specific functionality
**Content**:
- Category filtering for papers
- Search functionality
- Animation effects for paper filtering
- Export functionality for proceedings

### Image Assets

#### `assets/images/`
**Purpose**: Visual assets for the website

**Files**:
- `icra-logo.png` - ICRA 2026 conference logo
- `icra-logo-white.png` - White version for footer
- `ieee-ras-logo.png` - IEEE RAS logo
- `sergei-nirenburg.jpg` - Committee member photo
- `luis-sentis.jpg` - Committee member photo
- `sanjay-oruganti.jpg` - Committee member photo
- `advisory-placeholder.jpg` - Placeholder for advisory board
- `Header.png`, `Header3.png`, `Header4.png` - Header images
- `icra-logo-placeholder.txt` - Placeholder text file

---

## 📚 Documentation

### `README.md`
**Purpose**: Project documentation and setup guide
**Content**:
- Project overview and features
- File structure explanation
- GitHub Pages setup instructions
- Customization guidelines
- Technical details (technologies used, browser support)
- Content guidelines
- Contributing instructions
- License and support information

---

## 🔗 Navigation Structure

The website uses a consistent navigation structure across all pages:

1. **Home** (`index.html`)
2. **Schedule** (`schedule.html`)
3. **Speakers** (`distinguished-speakers.html`)
4. **Committee** (`organizing-committee.html`)
5. **Call for Contributions** (`call-for-contributions.html`)
6. **Proceedings** (`proceedings.html`)

---

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Flexible grid layouts
- Touch-friendly interface elements

### Interactive Elements
- Paper filtering in proceedings
- Smooth scrolling navigation
- Animated transitions
- Search functionality

### Content Management
- Placeholder content for speakers (TBD)
- Sample papers in proceedings
- Detailed schedule with timing
- Comprehensive submission guidelines

### Professional Styling
- Modern, academic design
- Consistent branding
- Professional color scheme
- Clean typography

---

## 🚀 Deployment

The website is configured for GitHub Pages deployment with:
- Jekyll configuration in `_config.yml`
- Static HTML files
- Optimized assets
- SEO-friendly structure

---

## 📝 Content Status

### Completed Content
- ✅ Website structure and navigation
- ✅ Organizing committee information
- ✅ Call for contributions guidelines
- ✅ Workshop schedule
- ✅ Topics and abstract
- ✅ Styling and responsive design

### Pending Content (TBD)
- ❌ Speaker information and bios
- ❌ Actual paper submissions
- ❌ Workshop date and location
- ❌ Advisory board members
- ❌ Final proceedings

---

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox/Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter typography
- **Jekyll**: Static site generation
- **GitHub Pages**: Hosting platform

This comprehensive file mapping provides a complete overview of the ICRA 2026 Workshop website structure, content, and functionality.
