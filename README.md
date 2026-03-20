# 🍄 MycoNurseries

**Promoting Sustainability Through Fungiculture**

MycoNurseries is a Montreal-based non-profit promoting sustainability through fungiculture — growing oyster mushrooms from discarded coffee grounds and fostering a community passionate about fungi. Based at McGill University.

🌐 **Live Site**: [myconurseries.org](https://www.myconurseries.org)

---

## 📁 Project Structure

```
MycoNurseries/
├── my-frontend/          # React frontend (Create React App)
│   ├── src/
│   │   ├── components/   # Reusable UI components (Header, Footer, etc.)
│   │   ├── pages/        # Page components (Home, About, Shop, Admin, etc.)
│   │   ├── hooks/        # Custom React hooks (useAnalytics)
│   │   ├── locales/      # i18n translations (English + French)
│   │   ├── App.js        # Main app with routing
│   │   └── GlobalStyle.js
│   ├── public/           # Static assets (images, logos)
│   └── package.json
├── my-backend/           # Express.js API server
│   ├── routes/
│   │   ├── analytics.js  # Behavioural tracking API
│   │   ├── content.js    # CMS content management API
│   │   └── subscribe.js  # Newsletter subscription API
│   ├── data/             # Runtime data (auto-created, not in git)
│   │   ├── analytics_events.json
│   │   └── content.json
│   ├── server.js         # Express server entry point
│   └── package.json
├── setup.sh              # One-command setup script
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Option 1: One-Command Setup

```bash
git clone https://github.com/EchoEcho-666/MycoNurseries.git
cd MycoNurseries
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup

```bash
# 1. Clone the repository
git clone https://github.com/EchoEcho-666/MycoNurseries.git
cd MycoNurseries

# 2. Install backend dependencies
cd my-backend
npm install

# 3. Install frontend dependencies
cd ../my-frontend
npm install

# 4. Start the backend server (port 3001)
cd ../my-backend
node server.js &

# 5. Start the frontend dev server (port 3000)
cd ../my-frontend
npm start
```

The site will open at **http://localhost:3000**

---

## 📦 Dependencies

### Frontend (`my-frontend/package.json`)

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | DOM rendering |
| react-router-dom | ^6.28.0 | Client-side routing |
| styled-components | ^6.1.15 | CSS-in-JS styling |
| react-i18next | ^12.3.1 | Internationalization (EN/FR) |
| i18next | ^21.10.0 | i18n core |
| react-icons | ^5.5.0 | Icon library |
| react-transition-group | ^4.4.5 | Page transition animations |
| react-scripts | 5.0.1 | Create React App toolchain |
| mdx-js/mdx | ^3.1.1 | MDX file compiler, MDX -> JS
| mdx-js/react | ^1.6.33 | For using react components in MDX
| remark-frontmatter | ^5.0.0 | Supplies metadata for markdown files
| remark-mdx-frontmatter | ^5.2.0 | Enables remark-frontmatter to work with mdx files

### Backend (`my-backend/package.json`)

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.21.1 | Web server framework |
| cors | ^2.8.5 | Cross-origin resource sharing |

---

## ✨ Features

### 🌐 Public Website
- **Homepage** with slideshow, about section, growing process, and team preview
- **About** page with story, sustainability pillars, and future plans
- **Shop** with Zeffy integration for handbook and mushroom purchases
- **Blog** with Substack/Supascribe integration
- **Team** page with member profiles
- **Growing Process** page with impact statistics
- **Partners & Donors** page
- **Educational Workshops** page (Vermicomposting, Fungi Frenzy)
- **Get Involved** page with Google Form
- **Bilingual** support (English + French)
- **Smooth page transitions** with animations

### 📊 Behavioural Analytics (`/#/analytics`)
Tracks user engagement automatically across all pages:
- **Page views** — which pages are visited and how often
- **Unique visitors** — distinct sessions counted
- **Click tracking** — what buttons and links users interact with
- **Scroll depth** — how far users scroll on each page
- **Session duration** — how long users stay
- **Device breakdown** — desktop vs. mobile vs. tablet
- **Traffic sources** — where visitors come from (referrers)
- **Bounce rate** — percentage of single-page sessions
- **Time-series chart** — page views over time (timezone-aware)
- **Real-time dashboard** — auto-refreshes every 30 seconds
- **Period selector** — filter by 24h, 7d, 30d, or 90d

Data stored in `my-backend/data/analytics_events.json` (auto-trimmed to 90 days, max 50k events).

### 🔐 Admin Content Editor (`/#/admin`)
Password-protected CMS for organizational users:
- **Login**: Password `letmein` (configurable via `ADMIN_PASSWORD` env var)
- **Page editor**: Edit content for all 8 site pages (titles, descriptions, text)
- **Announcements**: Create, view, and delete site-wide announcements with type badges (info, success, warning, error)
- **Save/Discard**: Sticky save bar with toast notifications
- **Dark-themed UI** matching the analytics dashboard

Data stored in `my-backend/data/content.json`.

---

## 🛠️ Available Scripts

### Frontend

```bash
cd my-frontend
npm start          # Start dev server (port 3000)
npm run build      # Build for production
npm run deploy     # Deploy to GitHub Pages
npm test           # Run tests
```

### Backend

```bash
cd my-backend
node server.js     # Start API server (port 3001)
```

---

## 🔧 Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3001` (backend), `3000` (frontend) | Server port |
| `ADMIN_PASSWORD` | `letmein` | Admin panel login password |
| `REACT_APP_API_URL` | `http://localhost:3001` | Backend API URL for frontend |

---

## 🌍 Deployment

The frontend is deployed to **GitHub Pages** via:

```bash
cd my-frontend
npm run deploy
```

For the backend (analytics + CMS), you need a server. Options:
- [Railway](https://railway.app) (free tier available)
- [Render](https://render.com) (free tier available)
- Any VPS with Node.js

---

## 📄 API Endpoints

### Analytics API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/analytics/events` | Receive batched tracking events |
| `GET` | `/api/analytics/dashboard?period=7d` | Aggregated dashboard data |
| `GET` | `/api/analytics/events?page=1&limit=50` | Paginated raw events |
| `DELETE` | `/api/analytics/events` | Clear all events |

### Content API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/content/auth` | Authenticate with password |
| `GET` | `/api/content/pages` | Get all editable content |
| `PUT` | `/api/content/pages/:pageId` | Update page content (auth required) |
| `DELETE` | `/api/content/pages/:pageId` | Reset page to defaults (auth required) |
| `GET` | `/api/content/announcements` | Get all announcements |
| `POST` | `/api/content/announcements` | Create announcement (auth required) |
| `DELETE` | `/api/content/announcements/:id` | Delete announcement (auth required) |

---

## 👥 Team

MycoNurseries is run by passionate students and young people at McGill University. See the [team page](https://www.myconurseries.org/#/team) for full bios.

## 📬 Contact

- 📧 myconurseries@gmail.com
- 📸 [Instagram](https://www.instagram.com/myconurseries)
- 💼 [LinkedIn](https://www.linkedin.com/company/myconurseries)

---

© 2025 MycoNurseries
