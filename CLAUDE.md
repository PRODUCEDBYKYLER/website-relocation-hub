# Claude Code — Project Notes

## Git / Deployment

- **Correct remote:** `https://github.com/PRODUCEDBYKYLER/website-relocation-hub.git`
- **Branch:** `main`
- **Vercel** is connected to the `PRODUCEDBYKYLER/website-relocation-hub` repo and auto-deploys on push to `main`

Always verify the remote before pushing:
```
git remote -v
```
Expected output should show `PRODUCEDBYKYLER/website-relocation-hub`.

If it shows anything else (e.g. `chasestubb/kyler-chavez-audio`), correct it:
```
git remote set-url origin https://<token>@github.com/PRODUCEDBYKYLER/website-relocation-hub.git
```

## Track catalog

All Spotify track IDs live in `src/data/tracks.ts`. The first 3 entries show on the homepage; all entries show on the Productions masonry grid. Add new tracks to the top of the list to feature them on the homepage.

## Stack

React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui + React Router v6
