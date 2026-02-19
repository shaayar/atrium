# ATRIUM — Scrollytelling Main Landing Experience (Future Phase)

## Status

This document describes the cinematic scrollytelling experience planned for the **main Atrium launch site**.

It is NOT part of the current waitlist validation phase.

Current Phase: Simple waitlist landing page (live).
Future Phase: Immersive scroll-driven architectural entrance experience.

---

# Purpose of This Document

This specification preserves the creative direction for the full experiential landing page that will be built AFTER waitlist validation.

It should not influence the simplicity of the current validation page.

---

# Core Experience Philosophy (Future Main Site)

The user does not scroll a website.
They walk forward.

Each scroll movement = one step deeper into a space.

Tone:

* Calm
* Architectural
* Intentional
* Minimal
* Cinematic
* No startup buzzwords
* No luxury flashiness

The entire page should feel like a threshold.

---

# Visual Direction

## Color Palette

* Primary Background: Deep black (#000000 or near-black charcoal)
* Text: Soft white (#F5F5F5)
* Accent: Subtle warm light gradient during arch reveal

No gradients in logo.
No heavy shadows.
No glossy effects.

---

# Scroll Scene Breakdown (Future Main Experience)

---

## SCENE 1 — Stillness (Hero Opening)

Screen: Full viewport height
Background: Black

Centered Wordmark:
ATRIUM (All caps, spaced, refined sans serif)

No CTA initially.

After 1.5 seconds:
Subtext fades in softly:
"Some memories deserve more than a grid."

A subtle scroll indicator appears:
"Scroll to enter ↓"

Motion Rules:

* Fade-in duration: 800ms–1200ms
* Ease: ease-in-out
* No bounce

---

## SCENE 2 — Wordmark Drift

Triggered by scroll.

The word "ATRIUM" begins moving slowly to the right.
Movement is scroll-progress based.

Goal:
Position the first letter "A" exactly at screen center.

The other letters move partially off-screen.

Motion Characteristics:

* Heavy, deliberate movement
* Linear or gentle ease
* No acceleration spikes

---

## SCENE 3 — Isolation of "A"

As scroll continues:

* Letters T R I U M softly fade into black
* Only "A" remains

Fade timing: 400–600ms
Opacity transition only

The "A" must remain perfectly centered.

---

## SCENE 4 — Architectural Transformation

The letter "A" begins vertical expansion.

Rules:

* Scale vertically to fill screen height
* Maintain proportions
* Crossbar subtly lowers or fades
* Inner negative space widens

Goal:
The A begins to resemble an arch.

Animation tied to scroll progress.
Not time-based.

No distortion artifacts.
Smooth scaling only.

---

## SCENE 5 — Image Reveal Through Arch

The arch image (modern architectural arch — NOT gothic ornamental) begins appearing inside the negative space of the A.

Implementation suggestion:
Use clip-path or mask so image is revealed through the A shape.

The background transitions from black to warm architectural tones.

The A outline gradually fades.

The image expands to full screen.

We are now "inside".

Duration tied to scroll.

---

## SCENE 6 — Hero Text in Space

Overlay gradient (subtle dark overlay for readability).

Text fades in:

Headline:
"Your life deserves more than a grid."

Subtext:
"Atrium transforms your memories into immersive digital spaces."

Primary CTA Button:
Join the Waitlist or Enter Atrium (depending on launch phase)

---

# Interaction Principles

* All motion tied to scroll progress
* No autoplay sequences
* No flashy transitions
* No parallax exaggeration
* No unnecessary elements

The page must feel restrained.

---

# Technical Approach (Future Phase)

Stack: Next.js + Framer Motion

Key Concepts:

* useScroll() to track scroll progress
* useTransform() for position + opacity
* clip-path or CSS mask for arch reveal
* Intersection observers for staged sections

Performance Rules:

* Optimize hero image (WebP or AVIF)
* Avoid heavy blur filters
* Maintain smooth 60fps scroll performance

---

# Current Phase Reminder

We are currently in VALIDATION MODE.

Only:

* Simple landing page
* Clear value proposition
* Email capture

No immersive animations.
No complex transitions.
No overengineering.

Once waitlist traction is validated, this document becomes active.

---

End of Document.
