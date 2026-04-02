# Professional Portfolio Website

A fully responsive personal portfolio website built with **Bootstrap 5** and modern web technologies. This portfolio showcases projects, skills, qualifications, and certifications with an elegant, professional design.

## 🎯 Features

### ✅ Multi-Page Website
- **Home Page**: Hero section with Jumbotron, carousel of featured projects, and call-to-action buttons
- **About Page**: Professional profile with cards, experience highlights, and core competencies
- **Qualifications Page**: Educational background with striped/bordered/hover tables and badges
- **Skills Page**: Technical expertise with progress bars, list groups, and soft skills
- **Certifications Page**: Professional certifications with cards, modals for preview, and filters
- **Contact Page**: Comprehensive contact form with validation, FAQ accordion, and contact info

### 🎨 Bootstrap 5 Components Used
- **Navbar**: Responsive navigation with active link highlighting and dropdown menus
- **Grid System**: Mobile-first responsive layout
- **Cards**: Multiple card layouts for various content sections
- **Buttons**: Styled call-to-action buttons with hover effects
- **Forms**: Input groups, validation, and custom styling
- **Tables**: Striped, bordered, and hover effects
- **Progress Bars**: Skill level visualization
- **Badges**: Grade and status indicators
- **Alerts**: Stats and notification boxes
- **Modal**: Certificate preview popups
- **Accordion**: FAQ and services sections
- **Carousel**: Featured projects slider
- **Dropdown**: Navigation menu items

### 🔐 Form Validation
- **HTML5 Validation**: `required`, `email` format validation
- **JavaScript Validation**:
  - Full name (minimum 3 characters)
  - Email format validation
  - Mobile number (exactly 10 digits)
  - Message length (minimum 10 characters)
  - Terms and conditions agreement
  - Real-time field validation with visual feedback

### 📱 Responsive Design
- Mobile-first approach
- Fully responsive on all screen sizes (mobile, tablet, desktop)
- Bootstrap utility classes for spacing, colors, typography
- Optimized performance and load times

### 💄 Premium UI/UX
- Gradient backgrounds and modern color scheme
- Smooth animations and transitions
- Hover effects on cards and buttons
- Professional typography
- Consistent spacing and alignment
- Dark mode-inspired navigation bar
- Social media links integration

## 📁 Project Structure

```
portfolio/
├── index.html                 # Home page
├── about.html                 # About page
├── qualifications.html        # Qualifications page
├── skills.html                # Skills page
├── certifications.html        # Certifications page
├── contact.html               # Contact page
├── css/
│   └── style.css             # Custom styles
├── js/
│   └── script.js             # JavaScript validation & functions
├── assets/
│   └── images/               # Image assets
└── README.md                 # This file
```

## 🚀 Features

### Navigation System
- Sticky responsive navbar with hamburger menu for mobile
- Active link highlighting
- Dropdown menu for secondary navigation
- Smooth scrolling

### Contact Form Validation
```javascript
// Client-side validation includes:
- Full name required (min 3 chars)
- Email format validation
- Phone number exactly 10 digits
- Message minimum 10 characters
- Terms acceptance required
- Real-time validation feedback
```

### Interactive Elements
- Modal popups for certificate previews
- Carousel for featured projects
- Accordion for FAQ and services
- Filters for certifications
- Progress bars with animations
- Smooth page transitions

## 💻 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.0
- **Icons**: Font Awesome 6.4.0
- **Placeholder Images**: Via.placeholder.com

## 📋 Requirements Met

✅ **Navigation System**
- Responsive Navbar with Bootstrap
- All menu items (Home, About, Qualifications, Skills, Certifications, Contact)
- Active link highlighting
- Dropdown menu for secondary links
- Collapsible mobile menu

✅ **Web Pages & Components**
- Home: Jumbotron, buttons, carousel, alerts, accordion
- About: Cards, images, grid system
- Qualifications: Tables with striped/bordered/hover, badges
- Skills: Progress bars, list groups, icons
- Certifications: Cards, badges, buttons, modals
- Contact: Forms, input groups, textarea, validation

✅ **Validation**
- HTML5 validation (required, email format)
- JavaScript validation for all fields
- Mobile number 10-digit validation
- Real-time field feedback

✅ **Bootstrap Components**
- Navbar, Grid System, Cards, Buttons, Forms
- Tables, Progress Bars, Badges, Alerts, Modal
- Accordion, Dropdown, Carousel

✅ **Styling & Responsiveness**
- Bootstrap utility classes (spacing, colors, typography)
- Mobile-first responsive design
- Proper alignment and spacing
- Professional gradient backgrounds

## 🔧 Installation & Setup

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Open in browser**
```bash
# Simply open index.html in your web browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

3. **No dependencies required!**
   - All libraries are loaded via CDN
   - No build process needed
   - Works in all modern browsers

## 🌐 Deployment to GitHub Pages

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Professional Portfolio Website"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `portfolio` or `your-username.github.io`
3. Follow the instructions to push your code

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Navigate to **Pages** section
3. Select **Deploy from a branch**
4. Choose **main** branch and **/root** folder
5. Click **Save**

### Step 4: View Your Live Website
Your portfolio will be live at:
- `https://yourusername.github.io/portfolio` (if repository name is "portfolio")
- `https://yourusername.github.io` (if repository name is "yourusername.github.io")

## 📝 Customization

### Update Contact Information
Edit the footer and contact page with your actual details:
- Email
- Phone number
- Social media links
- Location

### Replace Placeholder Images
Replace all `https://via.placeholder.com` URLs with your actual images:
1. Add your images to `assets/images/` folder
2. Update image URLs in HTML files

### Customize Content
- Update all text content to reflect your profile
- Add your actual projects to the carousel
- Update skills and proficiency levels
- Add your real certifications

### Modify Colors
Update the primary colors in `css/style.css`:
```css
:root {
    --primary-color: #007bff;
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🎓 Learning Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Font Awesome Icons](https://fontawesome.com/)

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork it and create your own version!

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Credits

- **Bootstrap 5**: Bootstrap framework
- **Font Awesome**: Icon library
- **Design**: Modern UI/UX principles
- **Inspiration**: Professional web design trends

## 📞 Contact

For questions or feedback about this portfolio:
- Email: hello@portfolio.com
- Phone: +1 (234) 567-890
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

**Made with ❤️ and Bootstrap 5**

Last Updated: April 2, 2026
