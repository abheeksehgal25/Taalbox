# TaalBox Backend (Express + TypeScript + MongoDB)

This folder contains a minimal secure scaffold for the TaalBox backend.

Quick start (local development):

1. copy `.env.example` to `.env` and update `MONGODB_URI` and `CORS_ORIGIN`.
2. from `backend/` run:

```powershell
npm i
npm run dev
```

The server will start on `http://localhost:4000` by default.

Available endpoints (initial):
- GET /api/health
- GET /api/vendors
- GET /api/vendors/:id
- POST /api/vendors
- GET /api/costumes

Security:
- Helmet headers
- Rate limiting
- CORS restricted by env
- Basic input validation

Next steps:
- Add authentication for vendor dashboards
- Add seeding from frontend `src/data/costumes.ts`
- Integrate with the frontend: update Catalog to call `/api/costumes`
