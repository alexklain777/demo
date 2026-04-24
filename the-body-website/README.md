# The Body — Website

Premium wellness studio landing page. Vite + React 18 + TypeScript + Tailwind v4.

## Setup

```bash
cd the-body-website
npm install
npm run dev
```

## Hero Frame Sequence (scroll-scrub video)

The hero uses a canvas frame sequence. To add the video:

```bash
# 1. Drop source video at input/source.mp4
mkdir -p input public/frames

# 2. Extract frames with ffmpeg
ffmpeg -i input/source.mp4 \
  -vf "fps=24,scale='min(1920,iw)':'-2':flags=lanczos" \
  -q:v 3 \
  public/frames/frame_%04d.jpg

# 3. Count frames and update FRAME_COUNT in src/lib/constants.ts
ls public/frames | wc -l
```

Without frames, the hero shows a warm gradient background. The site is fully functional.

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion (`motion/react`)
- Radix UI (accordion, slot)
- lucide-react
- Google Fonts: Cormorant Garamond + Montserrat
