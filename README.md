## Cracked Community

Modern Next.js app for the Cracked community website.

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint (Next config)
- **UI**: Heroicons, React Icons

### Requirements
- Node.js (LTS recommended)
- npm (or your preferred package manager)

### Getting Started
1. Install dependencies:
```bash
npm install
```
2. Start the dev server:
```bash
npm run dev
```
3. Open `http://localhost:3000` in your browser.

### Scripts
- `npm run dev`: Start development server (Turbopack)
- `npm run build`: Build for production (Turbopack)
- `npm start`: Run production build
- `npm run lint`: Run ESLint

### Project Structure
```text
src/
  app/               # App Router pages (home, about, community, contact)
  components/        # UI and feature components
    features/        # Page-specific sections (home/about/community/contact)
    layout/          # Header, Footer
    ui/              # Reusable UI primitives (animations, transitions)
  hooks/             # Custom hooks
  lib/               # Shared utilities (e.g., colors)
public/              # Static assets (images, fonts, videos)
```

Key entry points:
- `src/app/page.tsx`: Home page
- `src/app/about/page.tsx`: About page
- `src/app/community/page.tsx`: Community page
- `src/app/contact/page.tsx`: Contact page

### Styling
Tailwind CSS v4 is used throughout. Global styles live in `src/app/globals.css`.

### Deployment
This app is optimized for deployment on Vercel.
- Build locally: `npm run build`
- Start locally: `npm start`
- See Next.js deployment docs: https://nextjs.org/docs/app/building-your-application/deploying

### Contributing
1. Create a feature branch.
2. Commit with clear messages.
3. Ensure `npm run lint` passes.
4. Open a pull request.

### License
No license has been specified for this repository.
