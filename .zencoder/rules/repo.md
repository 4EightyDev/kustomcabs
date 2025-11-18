---
description: Repository Information Overview
alwaysApply: true
---

# Luxury Cabinetry - Next.js Project Information

## Summary
This is a luxury cabinetry showcase website built with Next.js 16, React 18, and Tailwind CSS. The project is a modern, responsive web application designed for premium kitchen design presentation. It features static export configuration for deployment on GitHub Pages, with components built using HeroUI for a polished user interface.

## Structure
The project follows Next.js App Router structure with the following organization:
- **`/app`**: Next.js App Router pages and layouts (home, about, gallery, services, showroom)
- **`/components`**: Reusable React components (Header, Navigation, Footer, CardStackSlider, ServiceCard)
- **`/public/images`**: Static image assets for the website
- **`/.next`**: Generated build output directory
- **Root configuration files**: Next.js, Tailwind, PostCSS, and build configurations

## Language & Runtime
**Language**: JavaScript (ES6+)
**Runtime**: Node.js (via npm scripts)
**Framework**: Next.js 16.0.1
**UI Library**: React 18.3.1
**Package Manager**: npm
**Build System**: Next.js built-in bundler

## Dependencies

**Main Dependencies**:
- `next@16.0.1` - React framework with SSR/SSG capabilities
- `react@18.3.1` - UI library
- `react-dom@18.3.1` - DOM renderer
- `tailwindcss@4.1.17` - Utility-first CSS framework
- `@tailwindcss/postcss@4.1.17` - PostCSS plugin for Tailwind
- `@heroui/react@2.8.5` - Premium React component library
- `@heroui/styles@3.0.0-beta.1` - HeroUI styling system
- `motion@12.23.24` - Animation library
- `tailwindcss-classnames@3.2.0` - Tailwind classnames utility
- `cn@0.1.1` - Class merging utility

**Development Dependencies**:
- `@tailwindcss/cli@4.1.17` - Tailwind CLI tools
- `postcss@8.5.6` - CSS transformation tool
- `autoprefixer@10.4.21` - CSS vendor prefix automation

## Build & Installation

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm build

# Start production server
npm start
```

## Configuration

**Next.js Config** (`next.config.mjs`):
- Output format: Static export for GitHub Pages deployment
- Image optimization disabled (incompatible with static export)
- Trailing slashes enabled
- React Strict Mode enabled

**Tailwind CSS Config** (`tailwind.config.js`):
- Scans `./app/**/*.{js,jsx}`, `./components/**/*.{js,jsx}`, `./pages/**/*.{js,jsx}` for class names
- Custom color palette with luxury theme (white, gray, dark, blue)
- Custom font family: neue-haas-grotesk-display
- CSS variable support for primary color

**PostCSS Config** (`postcss.config.js`):
- Tailwind CSS PostCSS plugin
- Autoprefixer for vendor compatibility

## Main Entry Points
- **`/app/layout.js`**: Root layout with metadata and global providers (Header, Providers wrapper)
- **`/app/page.js`**: Homepage component
- **`/app/about/page.js`**: About page
- **`/app/gallery/page.js`**: Gallery showcase page
- **`/app/services/page.js`**: Services page
- **`/app/showroom/page.js`**: Showroom page
- **`/app/globals.css`**: Global styles and CSS imports
- **`/components/Header.js`**: Header component with branding

## Development Workflow
- Uses npm as the package manager with `package-lock.json` for dependency locking
- VS Code configuration present (`.vscode/settings.json`)
- Git version control with minimal ignore list (only `node_modules`)
- TypeKit font integration for premium typography (neue-haas-grotesk-display)
