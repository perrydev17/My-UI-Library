# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR
npm run build      # Type-check + build for production (tsc -b && vite build)
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

## Architecture

This is a component library playground built with React 19, TypeScript, Vite, and Tailwind CSS v4.

**Component pattern:** Components in `src/components/` are built using [`@base-ui/react`](https://base-ui.com) primitives (`useRender`, `mergeProps`) for polymorphic rendering support (the `render` prop lets callers swap the underlying HTML element). Variants are defined with `class-variance-authority` (CVA) and class merging uses `tailwind-merge`.

**Styling:** Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin — no `tailwind.config.js`). Design tokens are defined in `src/index.css` under `@theme`, including custom colors (`background`, `foreground`, `primary`, `destructive`, `warning`) and two shadow tokens (`shadow-raised` for neumorphic raised state, `shadow-inset` for pressed state). Dark mode tokens are in `@layer theme .dark`.

**Adding a new component:** Follow the Button pattern — define CVA variants, extend `useRender.ComponentProps<"tagName">` and `VariantProps`, use `mergeProps` + `twMerge` to merge incoming className/props, then render via `useRender`.
