# AnatomiaViva - Educational Anatomy Platform

## Overview
AnatomiaViva is a Next.js 15 educational platform for anatomy designed for nursing students. The platform provides detailed content, commented questions, an expanded glossary, and interactive resources to enhance learning.

## Project Status
Successfully migrated from Vercel to Replit on October 24, 2025.

## Recent Changes
- **2025-10-24**: Migrated project from Vercel to Replit
  - Updated Next.js dev and start scripts to bind to 0.0.0.0:5000 for Replit environment
  - Configured workflow to run development server on port 5000
  - Set up autoscale deployment configuration for production
  - Installed all dependencies with pnpm

## Technology Stack
- **Framework**: Next.js 15.2.4
- **Runtime**: Node.js 20
- **Package Manager**: pnpm
- **UI Libraries**: Radix UI components, Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics

## Development
- Dev server runs on port 5000 bound to 0.0.0.0
- Start the development server: `pnpm run dev`
- Build for production: `pnpm run build`
- Run production server: `pnpm run start`

## Deployment
- **Target**: Autoscale (stateless web application)
- **Build command**: `pnpm run build`
- **Start command**: `pnpm run start`
- **Port**: 5000

## Project Architecture
- **app/**: Next.js App Router structure
  - `/`: Home page
  - `/topicos`: Topics listing page
  - `/topico/[id]`: Dynamic topic detail pages
  - `/glossario`: Glossary page
  - `/referencias`: References page
- **components/**: Reusable React components
- **lib/**: Utility functions and shared code
- **public/**: Static assets
- **styles/**: Global styles and CSS

## Security & Best Practices
- Client/server separation maintained through Next.js App Router
- No sensitive data or API keys in codebase
- TypeScript strict mode disabled during build (ignoreBuildErrors: true)
- ESLint disabled during builds (ignoreDuringBuilds: true)
- Images set to unoptimized mode for compatibility
