# SCL Portfolio

Personal portfolio site for Scott C. Lonis. It showcases projects, professional highlights, skills, and contact information in a responsive, accessible UI.

The app is built with Next.js (App Router) and TypeScript. All content is served via a local GraphQL API backed by JSON files, fetched on the client with Apollo Client. Styling uses Tailwind CSS and Radix UI components with light/dark theme support.

## Features

- Project portfolio with category filtering and rich project details (modal view)
- Professional highlights timeline with responsibilities and technologies
- Skills bar chart and tech specs
- Contact methods and form UI
- Theme toggle (light/dark), responsive layout, and accessible components
- Local GraphQL API at `/api/graphql` powered by Apollo Server
- Strong test setup with Vitest and jsdom

## Tech Stack

- Next.js 15 (App Router), React 19, TypeScript
- Apollo Client + Apollo Server (GraphQL on `/api/graphql`)
- Tailwind CSS v4, Radix UI
- TanStack Query (React Query) for selected client data needs
- Vitest, Testing Library, jsdom

## Requirements

- Node.js 18.18+ (or 20+ recommended)
- npm (or your preferred package manager)

## Installation

```bash
git clone <repo-url>
cd scl-portfolio
npm install
```

No environment variables are required for local development. All data is loaded from JSON in `src/app/api/data`.

## Running the app

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Basic operation

- Use the top navigation to browse the site
- Portfolio: filter by category and click a project to view details in a modal
- Professional Highlights: view career highlights and technologies
- Skills: view the skills bar chart and tech specs
- Contact: access contact methods and form UI

## GraphQL API

The app exposes a local GraphQL endpoint at:

- `GET/POST /api/graphql`

The schema and resolvers live in `src/app/graphql/`, with data backed by JSON in `src/app/api/data/`. The frontend Apollo Client is configured in `src/lib/graphql-client.ts` and provided via `src/components/providers/apollo-provider.tsx`.

Example query (used by the app):

```graphql
query GetPortfolioItems($categoryId: ID) {
    portfolioItems(categoryId: $categoryId) {
        _id
        projectTitle
        shortDesc
        previewImgUrl
    }
}
```

## Customizing content

Edit the JSON files in `src/app/api/data/` to change site content:

- `portfolio.json`, `categories.json`
- `professional_highlights.json`, `techspecs.json`
- `contactitems.json`, `contentsettings.json`

Changes are hot-reloaded in development.

## Scripts

- `npm run dev`: start the development server
- `npm run build`: build for production
- `npm start`: start the production server
- `npm run lint`: run linting
- `npm run format`: format with Prettier
- `npm test`: run tests
- `npm run test:ui`: open Vitest UI
- `npm run test:coverage` / `npm run coverage`: coverage report

## Testing

Vitest is configured with jsdom and Testing Library. Coverage thresholds are enforced via the Vitest config in `vite.config.ts`.

Run tests:

```bash
npm test
```

## Deployment

This app is optimized for deployment on Vercel. Build and start locally to verify:

```bash
npm run build
npm start
```

Then deploy via your preferred platform (e.g., Vercel) as a Next.js app. No secrets are required for the default static JSON-backed setup.
