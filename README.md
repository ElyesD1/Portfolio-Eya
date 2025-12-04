# Portfolio-Eya

A modern React portfolio built with powerful tools and libraries.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Headless UI** - Unstyled, accessible UI components
- **Radix UI** - Accessible component primitives
- **clsx** - Utility for constructing className strings
- **tailwind-merge** - Merge Tailwind CSS classes without conflicts
- **class-variance-authority** - For creating variant-based component APIs

## 📦 Installed Libraries

### Animation & Motion
- `framer-motion` - Powerful animations and gestures

### UI Components
- `@headlessui/react` - Completely unstyled, accessible UI components
- `@radix-ui/react-icons` - Icon library
- `@radix-ui/react-dropdown-menu` - Dropdown menu primitive
- `@radix-ui/react-dialog` - Modal dialog primitive
- `@radix-ui/react-tabs` - Tab component primitive

### Utilities
- `clsx` - Conditional className builder
- `tailwind-merge` - Merge Tailwind classes intelligently
- `class-variance-authority` - CVA for variant management

## 🛠️ Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio-Eya/
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── lib/            # Utility functions (cn helper)
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles with Tailwind directives
├── public/             # Static assets
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Utility Functions

The project includes a `cn()` utility function in `src/lib/utils.js` for merging Tailwind classes:

```javascript
import { cn } from './lib/utils'

<div className={cn('base-class', condition && 'conditional-class')} />
```

## 🎭 Custom Animations

Tailwind config includes custom animations:
- `fade-in` - Smooth fade in effect
- `slide-up` - Slide up with fade
- `slide-down` - Slide down with fade
- `bounce-slow` - Slower bounce animation

## 📚 Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Headless UI](https://headlessui.com/)
- [Radix UI](https://www.radix-ui.com/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## 📄 License

MIT
