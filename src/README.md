# 🧀 Cheese Finder

A comprehensive global cheese discovery platform featuring 568+ cheese varieties from 60+ countries and 17 milk sources. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Four Discovery Paths**
  - **Taste Track**: Filter by preferences (form, melt, funk, cuisine)
  - **Place Track**: Explore cheeses by regional origin
  - **Beast Track**: Filter by milk source (A2-only, goat, sheep, buffalo, yak, camel, and more)
  - **Name Track**: Direct lookup by cheese name

- **Smart Filtering**
  - A2 milk filter (automatically applied in Beast track)
  - Texture, rind type, and flavor profiles
  - Global cuisine compatibility
  - Melt and funk characteristics

- **Advanced Features**
  - Smart cheese substitution finder
  - Social sharing with dynamic SEO
  - PWA with offline support
  - Google Analytics integration (G-M84CMFKL2D)
  - Database admin portal (`?admin=cheese`)

## 🚀 Development

### Prerequisites

- Node.js 18+ and npm
- Modern browser with JavaScript enabled

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

This automatically:
1. Counts actual cheeses in the database
2. Updates all meta tag cheese counts
3. Compiles TypeScript
4. Builds optimized production assets

### Preview Production Build

```bash
npm run preview
```

## 🔧 Maintenance Commands

### Update Meta Tag Counts

```bash
npm run update-counts
```

**When to use:** After adding or removing cheeses from `lib/database.ts`, run this command to automatically update cheese counts in all SEO meta tags, including:

- Page title
- Meta description
- Open Graph tags
- Twitter Card
- JSON-LD structured data

**Note:** This command runs automatically during `npm run build`, so you typically don't need to run it manually unless you want to verify counts before building.

## 📁 Project Structure

```
/
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   └── *.tsx           # Feature components
├── lib/                # Core libraries
│   ├── database.ts     # Cheese database (568 entries)
│   ├── queries.ts      # Database queries
│   ├── analytics.ts    # Google Analytics
│   └── seo.ts          # SEO utilities
├── scripts/            # Build scripts
│   └── update-meta-counts.js  # Auto-update cheese counts
├── public/             # Static assets
│   ├── manifest.json   # PWA manifest
│   └── service-worker.js  # Offline support
└── types/              # TypeScript definitions
```

## 🗄️ Database

The cheese database (`lib/database.ts`) contains 568 curated cheese varieties with:

- Unique Cheese_ID (with gaps from removed branded cheeses)
- Name, description, and origin country
- Milk type (17 sources including cow, goat, sheep, buffalo, yak, camel, reindeer, moose, donkey, horse, zebu)
- A2 milk designation
- Texture, rind type, and flavor profiles

### Adding Cheeses

1. Add entry to `CHEESES` array in `lib/database.ts`
2. Run `npm run update-counts` to update meta tags
3. Test locally with `npm run dev`
4. Build and deploy with `npm run build`

## 🌐 Deployment

Deployed to GitHub Pages via GitHub Actions:
- **Live URL**: https://david-jackson-dotcom.github.io/cheese-finder/
- **Admin Portal**: Add `?admin=cheese` query parameter

### Deployment Workflow

1. Push to main branch
2. GitHub Actions automatically:
   - Updates cheese counts
   - Builds the app
   - Deploys to GitHub Pages

## 📊 Analytics

Google Analytics tracking is configured with ID `G-M84CMFKL2D` for:
- Page views
- Track selection (Taste, Place, Beast, Name)
- Filter interactions
- Social sharing events

## 🎨 Design

- **Typography**: Leckerli One (headings), Cabin (body)
- **Color Palette**: Vibrant yellow-orange with magenta accents
- **Style**: Cheerful, fat cursive with global cheese representation

## 📝 Version

Current version: **0.9.0** (pre-release)

Version number is tracked in:
- `package.json`
- `index.html` meta tags
- `lib/version.ts`

## 📄 License

Private project for cheese enthusiasts and potential licensing deals with cheese brands.

## 🔗 Additional Documentation

- [PWA Documentation](README-PWA.md)
- [Attributions](Attributions.md)
- [Development Guidelines](guidelines/Guidelines.md)
