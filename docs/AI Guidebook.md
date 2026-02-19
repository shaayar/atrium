# ATRIUM — AI Coding Agent Guidebook

This document defines how AI coding agents must operate when contributing to the Atrium codebase.

---

# 1. Core Philosophy

Atrium is architectural software.
Every UI decision must feel intentional.

Agents must prioritize:

* Clarity
* Performance
* Minimalism
* Consistency

Never introduce complexity without justification.

---

# 2. Design Rules for Code

## UI

* Dark-first aesthetic
* High contrast text
* Generous spacing
* No visual clutter

## Motion

* Subtle
* Scroll-based when possible
* No bounce effects
* No aggressive easing

---

# 3. Code Standards

## Structure

* Use functional components
* Keep components small and reusable
* Avoid deeply nested JSX

## Naming

* Clear, semantic names
* No abbreviations unless standard

## Styling

* Tailwind only
* No inline styles unless dynamic
* Avoid unnecessary custom CSS

---

# 4. Performance Rules

* Optimize images (WebP)
* Avoid large libraries for minor effects
* Avoid unnecessary re-renders
* Use lazy loading where appropriate

---

# 5. Animation Standards

* Use Framer Motion
* Motion must serve meaning
* Tie animation to scroll when experiential
* Avoid time-based autoplay unless essential

---

# 6. Architectural Consistency

Agents must ensure:

* Brand tone remains minimal
* Typography stays consistent
* No random UI patterns introduced

If unsure, default to simplicity.

---

# 7. Forbidden Patterns

* Neon colors
* Heavy gradients
* Glassmorphism
* Excessive drop shadows
* Overly rounded playful UI

Atrium is not playful.
It is calm and spatial.

---

# 8. Documentation

Every major feature must include:

* Purpose
* Scope
* Limitations

---

End of AI Guidebook.
