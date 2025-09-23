# 🎨 Tomomi Era Portfolio Website

A modern, responsive portfolio website for UI/UX designer Tomomi Era, built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20for%20Production-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.15-blue)

## ✨ Features

- **📊 Interactive Dashboard** - Project statistics and quick overview
- **💼 Project Showcase** - Detailed project displays with impact metrics
- **🛠️ Skills Evaluation** - Comprehensive skills and expertise display
- **📱 Responsive Design** - Optimized for all devices
- **🎭 Smooth Animations** - Powered by Framer Motion
- **🚀 Fast Performance** - Built with Vite for optimal loading speeds
- **🎯 Single Page Application** - Smooth navigation with React Router

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.15
- **Animations**: Framer Motion 11.12.0
- **Routing**: React Router DOM 7.0.2
- **Icons**: Lucide React 0.468.0
- **Build Tool**: Vite 4.5.14
- **Code Quality**: ESLint + TypeScript ESLint

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd 惠良友美-ポートフォリオ

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   └── Sidebar.tsx     # Navigation sidebar
├── pages/              # Main application pages
│   ├── Dashboard.tsx   # Homepage with statistics
│   ├── Projects.tsx    # Project showcase
│   └── Skills.tsx      # Skills and expertise
├── main.tsx           # Application entry point
├── App.tsx            # Root component
└── index.css          # Global styles
```

## 🎯 Pages Overview

### Dashboard
- Project statistics (5 total projects, 4 completed, 1 in progress)
- Recent project highlights
- Skills evaluation preview
- Quick navigation to detailed sections

### Projects
- Detailed project showcase
- Impact metrics and achievements
- Technology stack for each project
- Project status indicators
- Responsive project cards

### Skills
- UI/UX Design expertise
- Technical proficiencies
- Design tools mastery
- Process and methodology skills

## 🚀 Deployment

The project is configured for easy deployment on multiple platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Surge.sh
```bash
npm run build
npx surge dist
```

## 📦 Build Configuration

- **Build Output**: `dist/` directory
- **SPA Configuration**: `vercel.json` included for proper routing
- **Asset Optimization**: Automatic code splitting and minification
- **Bundle Analysis**: Built-in Vite bundle analyzer

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient system
- **Success**: Green for completed projects
- **Warning**: Orange for in-progress items
- **Dark Mode**: Comprehensive dark theme support

### Typography
- **Primary Font**: Inter (system font)
- **Responsive**: Fluid typography scaling
- **Accessibility**: WCAG compliant contrast ratios

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📈 Performance Features

- ⚡ **Vite Build System** - Lightning fast builds
- 🎯 **Code Splitting** - Automatic bundle optimization
- 📦 **Tree Shaking** - Eliminate unused code
- 🖼️ **Asset Optimization** - Compressed images and assets
- 🚀 **Preloading** - Critical resource preloading

## 🌟 Key Highlights

### Project Statistics
- **Total Projects**: 5
- **Completed**: 4 projects
- **In Progress**: 1 project
- **Success Rate**: 100% client satisfaction

### Recent Achievements
- UI/UX optimization resulting in 40% conversion improvement
- Mobile-first design increasing engagement by 60%
- Accessibility improvements achieving WCAG 2.1 AA compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is private and proprietary to Tomomi Era.

## 📞 Contact

**Tomomi Era** - UI/UX Designer
- Portfolio: [Your deployed URL]
- Email: [your-email@example.com]
- LinkedIn: [Your LinkedIn profile]

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**