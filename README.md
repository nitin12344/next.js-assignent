# Nitin Dekaliya - Full Stack Developer Portfolio

A professional portfolio website built with Next.js showcasing my skills, services, and projects as a B.Tech CSE student at Rai University.

## 👨‍💻 About Me

**Name:** Nitin Dekaliya  
**Education:** B.Tech Computer Science and Engineering  
**Institution:** Rai University  
**Location:** Gujarat, India  
**Specialization:** Full Stack Development with Next.js

## 🚀 Project Overview

This is a responsive Next.js application built for B.Tech 3rd semester CSE-IT Full Stack Development assignment. The project demonstrates modern web development practices with file-based routing, responsive design, and theme management.

## ✨ Features Implemented

### ✅ Core Requirements
- **Next.js Setup**: Complete Next.js project with proper file structure
- **Responsive Navigation Bar**: 
  - Sticky navbar with personal branding
  - Hamburger menu for mobile devices
  - Dropdown menus with submenus
  - Active page indicators
- **File-based Routing**: 
  - Home, About, Contact pages
  - Services with subpages (Web Development, SEO, Consulting)
  - Dynamic routing under Web Development (MERN, MEAN, .NET stacks)
- **Dark/Light Theme Toggle**:
  - Global theme switching
  - Persistent theme storage in localStorage
  - Smooth transitions between themes
- **Plain CSS Styling**:
  - No Tailwind CSS or CSS-in-JS
  - Organized CSS files (globals.css, navbar.css, pages.css)
  - CSS variables for theme management

### 🎨 Professional Features
- **Personal Branding**: Customized with Nitin Dekaliya's information
- **Professional Contact Form**: Enhanced with project details, budget, and timeline
- **Academic Background**: Highlighting B.Tech CSE education at Rai University
- **Technical Skills**: Comprehensive skill set display
- **Modern UI/UX**: Clean, professional design with hover effects
- **Mobile-First Design**: Optimized for all devices

### 📱 Mobile-First Approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly interface
- Optimized for mobile performance

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: Plain CSS with CSS Variables
- **State Management**: React Hooks
- **Routing**: Next.js File-based Routing

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.tsx          # Responsive navigation component
├── pages/
│   ├── index.tsx           # Home page with personal introduction
│   ├── about.tsx           # About page with academic background
│   ├── contact.tsx         # Professional contact form
│   ├── _app.tsx            # App wrapper
│   └── services/
│       ├── index.tsx       # Services overview
│       ├── web-development.tsx
│       ├── seo.tsx
│       ├── consulting.tsx
│       └── web-development/
│           ├── mern.tsx
│           ├── mean.tsx
│           └── dotnet.tsx
└── styles/
    ├── globals.css         # Global styles and theme variables
    ├── navbar.css          # Navigation styles
    └── pages.css           # Page-specific styles
```

## 🚀 How to Run the Project

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### 1. Personal Branding
- **Custom Navigation**: "Nitin Dekaliya" branding in navbar
- **Professional Introduction**: Personal background and academic information
- **Contact Details**: Professional contact information with project inquiry form

### 2. Enhanced Contact Form
- **Project Details**: Comprehensive form for project requirements
- **Budget Options**: Predefined budget ranges in Indian Rupees
- **Timeline Selection**: Project timeline options
- **Professional Fields**: Subject, project type, and detailed description

### 3. Academic Background
- **Education Section**: B.Tech CSE details from Rai University
- **Technical Skills**: Comprehensive skill set display
- **Professional Approach**: Personal development philosophy

### 4. Responsive Design
- **Mobile-First**: Designed for mobile devices first
- **Flexible Grids**: CSS Grid and Flexbox layouts
- **Breakpoints**: Optimized for different screen sizes
- **Touch-Friendly**: Proper touch targets for mobile

## 🎨 Theme System

The application uses CSS variables for theme management:

```css
:root {
  --primary-color: #007bff;
  --background-color: #ffffff;
  --text-color: #333333;
  /* ... more variables */
}

[data-theme="dark"] {
  --primary-color: #4dabf7;
  --background-color: #1a1a1a;
  --text-color: #ffffff;
  /* ... dark theme variables */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Hamburger menu)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (Full navigation)

## 🔧 Customization

### Adding New Pages
1. Create a new file in `src/pages/`
2. Import the Navbar component
3. Add your content with proper CSS classes

### Modifying Personal Information
1. Update personal details in respective page components
2. Modify contact information in `src/pages/contact.tsx`
3. Update academic background in `src/pages/about.tsx`

### Modifying Themes
1. Edit CSS variables in `src/styles/globals.css`
2. Add new theme colors to both `:root` and `[data-theme="dark"]`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full support for Next.js
- **Traditional Hosting**: Build with `npm run build`

## 📝 Assignment Requirements Checklist

- ✅ Next.js Setup with proper file structure
- ✅ Responsive navigation bar with hamburger menu
- ✅ File-based routing for all pages
- ✅ Dark/light theme toggle with localStorage persistence
- ✅ Plain CSS styling (no Tailwind/CSS-in-JS)
- ✅ Menu items: Home, About, Services, Contact
- ✅ Services submenu: Web Development, SEO, Consulting
- ✅ Dynamic routing under Web Development: MERN, MEAN, .NET
- ✅ Responsive design for all screen sizes
- ✅ Active page indicators in navigation
- ✅ Personal branding and professional presentation

## 🎉 Bonus Features Implemented

- ✅ Personal branding with Nitin Dekaliya's information
- ✅ Professional contact form with project details
- ✅ Academic background and technical skills display
- ✅ Enhanced UI/UX with professional styling
- ✅ Comprehensive project inquiry form
- ✅ Mobile-first responsive design
- ✅ Smooth transitions and hover effects
- ✅ Cross-browser compatibility

## 📞 Contact Information

**Name:** Nitin Dekaliya  
**Email:** nitin.dekaliya@example.com  
**Phone:** +91 98765 43210  
**Location:** Gujarat, India  
**Education:** B.Tech CSE, Rai University  
**Available for:** Freelance Projects, Internships, Collaborations

## 🤝 Professional Services

- **Web Development**: Custom web applications using modern technologies
- **Frontend Development**: React.js, Next.js, responsive design
- **Backend Development**: Node.js, Express.js, database integration
- **Full Stack Solutions**: Complete web application development
- **Consultation**: Technical guidance and project planning

## 📄 License

This project is created for educational purposes as part of B.Tech 3rd semester assignment at Rai University.

---

**Built with ❤️ by Nitin Dekaliya using Next.js and TypeScript**
