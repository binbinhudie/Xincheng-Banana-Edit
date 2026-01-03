# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI-powered image editor built with Next.js 16, React 19, and TypeScript. The application features a dual-mode editor (text-to-image and image-to-image) that integrates with Google's Gemini API for AI image generation.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server (uses Turbopack)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Architecture

### Core Structure

- **App Router**: Uses Next.js 16 App Router (`app/` directory)
- **Main Page**: `app/page.tsx` - Composed of multiple section components
- **Editor Component**: `components/editor.tsx` - The main interactive editor with two modes:
  - Text-to-image: Generate images from text prompts
  - Image-to-image: Edit uploaded images with text prompts

### Key Components

- `components/editor.tsx` - Main editor interface with image upload, prompt input, and generation logic
- `components/ui/` - shadcn/ui component library (Radix UI primitives)
- `components/theme-provider.tsx` - Dark/light theme support via next-themes

### State Management

The editor uses React hooks for local state:
- `mode`: Toggle between "text" and "image" modes
- `images`: Array of uploaded image data URLs (max 9 images)
- `prompt`: User's text prompt for generation
- `isProcessing`: Loading state during API calls

### API Integration

The project integrates with Google Gemini API (`gemini-3-pro-image-preview` model):
- API endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent`
- API key stored in `.env.local` as `GEMINI_API_KEY`
- Request format includes `contents`, `generationConfig` with image settings (aspectRatio, imageSize)

### Styling

- **Tailwind CSS 4.x** with custom configuration
- **CSS Variables** for theming (defined in `styles/`)
- **Responsive Design** with mobile-first approach

## Important Notes

- TypeScript build errors are ignored in production (`ignoreBuildErrors: true`)
- Next.js image optimization is disabled (`unoptimized: true`)
- Uses pnpm as package manager (check `pnpm-lock.yaml`)
- Development server may use alternate ports if 3000 is occupied
