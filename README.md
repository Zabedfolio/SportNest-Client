# SportNest

## Purpose

SportNest is a full-stack sports facility booking platform that helps players, teams, and organizers discover venues, reserve time slots, and manage bookings in one place. The client provides a modern web experience for browsing football turfs, badminton courts, swimming pools, and more—with secure authentication and a separate API server for facilities and bookings.

## Live URL

| App | URL |
|-----|-----|
| **Client (this repo)** | [https://sport-nest-zabedfolio.vercel.app/](https://sport-nest-zabedfolio.vercel.app/) |
| **Server API** | [https://sportnest-server-zabedfolio.vercel.app/](https://sportnest-server-zabedfolio.vercel.app/) |

## Repositories

- **Client:** [SportNest-Client](https://github.com/Zabedfolio/SportNest-Client)
- **Server:** [SportNest-Server](https://github.com/Zabedfolio/SportNest-Server)

## Features

- **Landing page** — Hero banner, sport category marquee, featured facilities, upcoming events, and contact section
- **Browse facilities** — List and filter sports venues; view details, pricing, capacity, and available time slots
- **Book facilities** — Reserve preferred time slots with real-time slot selection (authenticated users)
- **User authentication** — Register and login with session-based auth (Better Auth + MongoDB)
- **My Bookings** — View and manage your reservation history
- **Add facility** — Owners can list new sports facilities on the platform
- **Manage facilities** — Update or delete owned facilities
- **Protected routes** — Booking and facility management pages require login
- **Responsive UI** — Built with Next.js, Tailwind CSS, DaisyUI, and HeroUI components

## NPM Packages Used

### Dependencies

| Package | Description |
|---------|-------------|
| `next` | React framework for the web app (App Router, SSR, API routes) |
| `react` / `react-dom` | UI library for building components |
| `better-auth` | Authentication library (sessions, sign-in/sign-up) |
| `@better-auth/mongo-adapter` | MongoDB adapter for Better Auth |
| `mongodb` | Official MongoDB driver for Node.js |
| `jsonwebtoken` | JWT creation and verification |
| `@heroui/react` / `@heroui/styles` | HeroUI component library and styles |
| `react-icons` | Icon set for UI (e.g. Material Design icons) |
| `react-fast-marquee` | Scrolling marquee for sport categories on the home page |
| `react-hot-toast` | Toast notifications for user feedback |

### Dev Dependencies

| Package | Description |
|---------|-------------|
| `tailwindcss` | Utility-first CSS framework |
| `@tailwindcss/postcss` | PostCSS integration for Tailwind v4 |
| `daisyui` | Tailwind CSS component plugin |
| `eslint` / `eslint-config-next` | Linting and Next.js ESLint rules |
| `babel-plugin-react-compiler` | React Compiler for optimized renders |
| `@gravity-ui/icons` | Additional icon assets |

## Getting Started

1. Clone the client repository and install dependencies:

```bash
git clone https://github.com/Zabedfolio/SportNest-Client.git
cd SportNest-Client
npm install
```

2. Create a `.env.local` file with your MongoDB URI, auth secrets, and server URL (see `.env.example` if present).

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

For the backend API, clone and run [SportNest-Server](https://github.com/Zabedfolio/SportNest-Server) separately and point `NEXT_PUBLIC_SERVER_URL` at your server deployment.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
