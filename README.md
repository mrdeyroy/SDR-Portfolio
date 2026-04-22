# Developer Portfolio

A modern, high-performance personal portfolio website built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Hero Section** - Animated typing effect with particle background
- **About Section** - Personal story with stats and highlights
- **Skills Section** - Categorized skills with progress bars
- **Projects Section** - Filterable project showcase with hover effects
- **Experience Timeline** - Work history and education timeline
- **Contact Section** - Functional contact form with validation
- **Dark/Light Mode** - Theme toggle with smooth transitions
- **Custom Cursor** - Animated custom cursor
- **Scroll Progress** - Progress indicator at top of page
- **Fully Responsive** - Mobile-first design
- **SEO Optimized** - Meta tags, semantic HTML, OG tags

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the repository:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 8** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Intersection Observer** - Scroll animations

## 📦 Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

### Option 1: Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Option 2: Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

2. Build and deploy:
```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

## 📝 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.jsx`
   - Change name: Look for "Alex Chen"
   - Update roles array for typing effect
   - Update description

2. **About Section** - Edit `src/components/About.jsx`
   - Update personal story
   - Update stats
   - Update highlights

3. **Skills Section** - Edit `src/components/Skills.jsx`
   - Modify skill categories
   - Update skill levels

4. **Projects Section** - Edit `src/components/Projects.jsx`
   - Replace project data with your own
   - Update images, descriptions, links

5. **Timeline** - Edit `src/components/Timeline.jsx`
   - Add your work experience
   - Update education
   - Add certifications

6. **Contact Section** - Edit `src/components/Contact.jsx`
   - Update email
   - Update location
   - Update social links

### Update Resume

Replace `public/resume.pdf` with your own resume.

### Update Colors

Edit `tailwind.config.js` to change the primary color scheme.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React + Vite + Tailwind CSS
