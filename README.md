# Yasir Rahim — World-Class Futuristic Portfolio

A production-structured Next.js 16 App Router portfolio built with React 19, TypeScript, Tailwind CSS, GSAP, ScrollTrigger, Framer Motion, Lenis, Three.js, React Three Fiber, Drei, WebGL/GLSL, Canvas, Lottie-ready tooling, and React Icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Edit the site

Edit `src/lib/content.ts` for the primary content model: name, role, bio, social links, skills, experience, projects, education, services, testimonials, certificates, achievements, gallery, and FAQ.

Replace `public/images/profile-placeholder.svg` with your own portrait file and update the `src` in `src/components/ProfileCard.tsx` when you want a raster image or WebP/AVIF asset. The existing frame, tilt, glow, depth, and lighting treatments remain attached to the image container.

## Notes

- No phone number is rendered.
- The contact form validates on the client and falls back to `mailto:` when no endpoint is configured.
- `NEXT_PUBLIC_CONTACT_ENDPOINT` can be set for a real form endpoint.
- Reduced-motion users automatically get simplified motion behavior.
- The 3D hero uses a performance-conscious scene: limited particle counts, DPR clamping, no post-processing dependency, and a small shader surface.
