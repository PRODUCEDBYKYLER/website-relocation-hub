# Claude Code — Project Notes

## Git / Deployment

- **Correct remote:** `https://github.com/PRODUCEDBYKYLER/website-relocation-hub.git`
- **Branch:** `main`
- **Vercel project:** `kyler-chavez-audio-main`
- **Vercel** auto-deploys on every push to `main` — no manual steps needed

**Always verify the remote before pushing:**
```
git remote -v
```
Expected output must show `PRODUCEDBYKYLER/website-relocation-hub`.

If it shows anything else (e.g. `chasestubb/kyler-chavez-audio`), correct it:
```
git remote set-url origin https://<token>@github.com/PRODUCEDBYKYLER/website-relocation-hub.git
```

**If Vercel shows "Deployment Blocked":** The repo is private on the Hobby plan, so Vercel only accepts commits whose author email matches the PRODUCEDBYKYLER GitHub account. Ask Kyler to confirm the correct email and update git config if needed:
```
git config user.email <producedbykyler-github-email>
```

**If the token expires:** Generate a new one at github.com → Profile → Settings → Developer settings → Personal access tokens → Tokens (classic) → check `repo` scope. Then:
```
git remote set-url origin https://<new-token>@github.com/PRODUCEDBYKYLER/website-relocation-hub.git
```

## Track catalog

All Spotify track IDs live in `src/data/tracks.ts`. The first 3 entries show on the homepage; all entries show on the Productions masonry grid. Add new tracks to the top of the list to feature them on the homepage.

## Stack

React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui + React Router v6
