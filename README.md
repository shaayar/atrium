# ATRIUM

A personal digital museum where your memories become immersive architectural spaces.

## Features

- **Waitlist System**: Email capture with confirmation emails
- **Immersive Preloader**: Animated entrance experience
- **Responsive Design**: Mobile-first architectural aesthetic
- **Modern Stack**: Next.js, Tailwind CSS, Framer Motion
- **Database**: Supabase for waitlist management
- **Email**: Nodemailer with Gmail integration

## Tech Stack

- **Frontend**: Next.js 16.1.6 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Database**: Supabase
- **Email**: Nodemailer (Gmail)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- Gmail account with App Password
- Supabase project

### Installation

1. Clone and install:
```bash
git clone <repository-url>
cd atrium
npm install
```

2. Environment Setup (.env.local):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_key
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

3. Gmail Setup:
- Enable 2FA on Gmail
- Create App Password at [Google App Passwords](https://myaccount.google.com/apppasswords)
- Use 16-character password in env

4. Database Setup:
```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Development

```bash
npm run dev
# Visit http://localhost:3000
```

### Build

```bash
npm run build
```

## Project Structure

```
├── app/
│   ├── api/waitlist/     # Email signup API
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Preloader.jsx     # Loading animation
│   ├── Navbar.tsx        # Navigation
│   ├── Hero.tsx          # Hero section
│   ├── Manifesto.tsx     # Brand manifesto
│   ├── Process.tsx       # Process explanation
│   ├── Philosophy.tsx     # Brand philosophy
│   ├── Waitlist.tsx      # Email signup form
│   └── Footer.tsx        # Footer
├── lib/
│   ├── supabase.ts       # Database client
│   └── nodemailer.ts     # Email service
└── docs/
    ├── PRD.md            # Product requirements
    └── LandingPage.md    # Future design specs
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

**Environment Variables for Production:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`

## Current Status

**Phase 1: Waitlist Validation** ✅

- Landing page with waitlist signup
- Email confirmation system
- Responsive design
- Production-ready build

**Next Phase: MVP Gallery** (Future)

- Photo upload system
- Immersive gallery generation
- Scroll-based navigation

---

© 2026 ATRIUM. A personal digital museum where memories become architecture.
