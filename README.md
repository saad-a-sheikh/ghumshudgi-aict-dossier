# GHUMSHUDGI (گمشدگی) — Classified Case Dossier & Short Film Portal

**Academic Project:** AICT Open Ended Lab-1  
**Institution:** Dawood University of Engineering & Technology (DUET), Karachi  
**Cohort:** BSCS Batch 2026 (Section A3)  
**Course Supervisor:** Sir Imran Alvi  

---

## Quick Start Options

### Option 1: Instant Zero-Build Preview (No Node.js Required)
Open [`live-preview.html`](./live-preview.html) directly in any modern browser (Chrome, Edge, Firefox) or serve the folder via Python:
```bash
python -m http.server 8080
# Then open http://localhost:8080/live-preview.html
```

### Option 2: Full React + Vite + Tailwind CSS Development Server
When Node.js (v18+) is installed:
```bash
npm install
npm run dev
```

---

## Connecting the Rendered Short Film Video (`.mp4`)
1. **Automatic Local File:** Place your rendered short film at `public/ghumshudgi-film.mp4` and it will automatically stream inside the 16:9 `[ WATCH SHORT FILM ]` modal.
2. **Live File Picker (During Lab Presentation):** Click `[ WATCH SHORT FILM ]` → click `LOAD .MP4 FILE` in the top bar of the modal to pick any `.mp4` / `.webm` video file directly from your computer.
3. **Interactive Storyboard Screening Reel:** Toggle `STORYBOARD REEL` inside the modal to present a 16:9 director's breakdown across the key turning points of the 23 scenes.
