import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Synopsis } from './components/Synopsis';
import { CharacterGrid } from './components/CharacterGrid';
import { StoryboardTimeline } from './components/StoryboardTimeline';
import { TechPipeline } from './components/TechPipeline';
import { TeamSection } from './components/TeamSection';
import { VideoModal } from './components/VideoModal';
import { FileWarning, Play, ArrowUpRight } from 'lucide-react';

export function App() {
  const [isFilmModalOpen, setIsFilmModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E3E1D9] relative selection:bg-[#C2272D] selection:text-white">
      {/* Global Atmospheric FX Overlays (pointer-events: none) */}
      <div className="pointer-events-none fixed inset-0 z-30 noir-scanlines opacity-25" />
      <div className="pointer-events-none fixed inset-0 z-30 noir-grain opacity-60" />

      {/* 1. Header & Navigation */}
      <Navbar onOpenFilm={() => setIsFilmModalOpen(true)} />

      {/* Main Content Stage */}
      <main className="relative z-10">
        {/* 2. Hero Stage */}
        <Hero onWatchFilm={() => setIsFilmModalOpen(true)} />

        {/* 3. The Forensic Case File / Synopsis */}
        <Synopsis />

        {/* 4. Character Dossier */}
        <CharacterGrid />

        {/* 5. Scene Progression & Storyboard Timeline */}
        <StoryboardTimeline />

        {/* 6. AI Generative Engineering Pipeline */}
        <TechPipeline />

        {/* 7. Production Team & Academic Credits */}
        <TeamSection />
      </main>

      {/* Classified Dossier Footer */}
      <footer className="relative z-10 bg-[#0A0A0C] border-t border-[#2A2B30] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#E3E1D9]">
              <FileWarning className="w-4 h-4 text-[#C2272D]" />
              <span>GHUMSHUDGI (گمشدگی) // OFFICIAL CASE DOSSIER PORTAL</span>
            </div>
            <p className="font-mono text-xs text-[#9CA3AF]">
              Dawood University of Engineering &amp; Technology (DUET) • BSCS Batch 2026 (Section A3) • AICT Open Ended Lab-1
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsFilmModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#C2272D] hover:bg-[#a61f24] text-white font-mono text-xs font-bold tracking-wider transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>[ WATCH SHORT FILM ]</span>
            </button>

            <a
              href="#top"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 font-mono text-xs text-[#E3E1D9] transition-colors"
            >
              <span>[ TOP OF FILE ]</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C2272D]" />
            </a>
          </div>
        </div>
      </footer>

      {/* Responsive 16:9 Cinematic Video Player Modal */}
      <VideoModal
        isOpen={isFilmModalOpen}
        onClose={() => setIsFilmModalOpen(false)}
      />
    </div>
  );
}

export default App;
