# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/fcccb19f-50bc-4406-86e4-c98c5e5b2177

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fcccb19f-50bc-4406-86e4-c98c5e5b2177) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deploying: Backend on Render, Frontend on Vercel

This project is split into two apps:

- Backend: Express + TypeScript in `backend/`
- Frontend: Vite + React in root

### 1) Backend on Render

Option A — Auto deploy from GitHub:

1. Push this repo to GitHub (private/public).
2. In Render, create a new Web Service from this repo.
3. Configure:
	- Root Directory: `backend`
	- Build Command: `npm ci && npm run build`
	- Start Command: `node dist/index.js`
	- Runtime: Node
4. Environment variables (required):
	- `PORT` (Render sets automatically; you can omit)
	- `NODE_ENV=production`
	- `MONGODB_URI=...`
	- `CORS_ORIGIN=https://<your-frontend>.vercel.app`
	- `API_URL=https://<this-service>.onrender.com`
	- Optional Cloudinary:
	  - `CLOUDINARY_CLOUD_NAME`
	  - `CLOUDINARY_API_KEY`
	  - `CLOUDINARY_API_SECRET`
	  - `CLOUDINARY_FOLDER=nritya-ready-sets`
	- Optional Razorpay (for payments):
	  - `RAZORPAY_KEY_ID`
	  - `RAZORPAY_KEY_SECRET`
	  - `RAZORPAY_WEBHOOK_SECRET`

Option B — Use a config file:

See `render.example.yaml` for a starting point. You can rename to `render.yaml` and adjust values.

After first deploy, note the Render service URL (e.g., `https://taalbox-backend.onrender.com`). Update `API_URL` if needed.

### 2) Frontend on Vercel

1. Import the repo into Vercel.
2. Framework Preset: Vite
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Environment variable:
	- `VITE_API_BASE_URL=https://<your-backend>.onrender.com`

On successful deployment, your frontend will call the backend via `VITE_API_BASE_URL`.

### Local development

- Backend: `cd backend && npm i && npm run dev`
- Frontend (root): `npm i && npm run dev`

Ensure `CORS_ORIGIN` in backend `.env` allows your Vite dev server (default `http://localhost:5173`).

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
