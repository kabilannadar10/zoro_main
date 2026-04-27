**Repo Overview**
- **Type:** React SPA built with Vite and TailwindCSS.
- **Entry:** `src/main.jsx` → `src/App.jsx` (React Router drives routes).
- **UI patterns:** Function components, Tailwind utility classes, `framer-motion` for animations, `lottie` for animations, occasional MUI icons.

**Big Picture / Architecture**
- Single-page client that relies on a remote backend at `https://zoro-tech-website-backend.onrender.com/api` (see `src/components/api.js`).
- Routing: `react-router-dom` in `src/App.jsx`. Blog pages live under `src/blogPages/*` and are registered as individual routes.
- Authentication: token pair (`access`, `refresh`) stored in `localStorage` via `src/components/auth.js`. Axios instance in `src/components/api.js` attaches `Authorization: Bearer <access>` automatically.
- Protected routes: `src/components/ProtectedRoute.jsx` wraps admin/user/superuser dashboards. Look at how `App.jsx` passes `requireAdmin` / `requireSuperuser` props.

**Developer Workflows (commands)**
- Install and run dev server: `npm install` then `npm run dev` (starts Vite with HMR).
- Build for production: `npm run build`.
- Preview production build: `npm run preview`.
- Linting: `npm run lint` (ESLint configured; run before PRs).

**Key Patterns & Conventions**
- Components folder: `src/components/` — shared UI + pages like `Home`, `Navbar`, `Footer`, plus business pages and dashboards.
- Blog pages: add a new file under `src/blogPages/` and register the route in `src/App.jsx` with path `/blogs/<slug>`.
- API usage: import the shared axios instance:

  ```js
  import API from "../components/api";
  API.get('/jobs')
  ```

- Auth helpers: use `saveTokens`, `clearTokens`, `isLoggedIn` from `src/components/auth.js`.
- Styling: use Tailwind utility classes directly in JSX. Iconography via `react-icons` and `@mui/icons-material`.

**Integration Points & External Dependencies**
- Backend API: base URL hard-coded in `src/components/api.js`. Treat it as the primary integration point.
- Analytics: `@vercel/analytics` used in `App.jsx`.
- Third-party libs: `framer-motion`, `lottie-react`, `gsap`, `swiper`, `sweetalert2`, `exceljs` — searches for usage before changing or upgrading.

**Common Code Edits Examples**
- Add a new public page:
  1. Create `src/components/MyPage.jsx` (function component, Tailwind classes).
  2. Import and add a `<Route path="/my-page" element={<MyPage/>} />` in `src/App.jsx`.

- Add a new blog post:
  1. Create `src/blogPages/my-post.jsx` following the existing pages.
  2. Add a corresponding route in `src/App.jsx` under blog routes.

**Auth / Protected Route Example**
- To protect a route for admins, follow the pattern in `App.jsx`:

  ```jsx
  <Route path="/admin" element={<ProtectedRoute requireAdmin><AdminDashboard/></ProtectedRoute>} />
  ```

**Safety & Secrets**
- There are no `.env` files in the repo; API base is hard-coded. Avoid committing any secrets. If you need env variables, add `.env` and update `src/components/api.js` to read `import.meta.env.VITE_API_BASE`.

**What to check before PR / upgrade**
- Run `npm run dev` and test core flows: navigation, forms (Contact/Careers Apply buttons), and protected dashboard login flow.
- If upgrading React, Vite, or Tailwind, test all pages using `framer-motion` and `lottie` since animations are sensitive to breaking changes.

If anything here is unclear or you'd like more examples (e.g., how ProtectedRoute is implemented or the dashboard flows), tell me which area to expand and I will update this file.
