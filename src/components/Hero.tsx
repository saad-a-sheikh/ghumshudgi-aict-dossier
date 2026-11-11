import React from 'react';
import { motion } from 'framer-motion';
import { Play, FileSearch, Lock, Radio, AlertTriangle, MapPin, Film } from 'lucide-react';
import { DecodeText } from './DecodeText';

interface HeroProps {
  onWatchFilm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchFilm }) => {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between overflow-hidden border-b border-[#2A2B30]"
    >
      {/* Background Noir Lighting & Grid */}
      <div className="pointer-events-none absolute inset-0 bg-dossier-grid bg-[size:48px_48px] opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-crimson-glow" />
      <div className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-[#C2272D]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#C2272D]/8 blur-[110px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Top Forensic Tag Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#121316] border border-[#2A2B30] font-mono text-[11px] text-[#E3E1D9] tracking-widest">
            <Lock className="w-3 h-3 text-[#C2272D]" />
            [CASE FILE: 26F-CS-A3]
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#C2272D]/15 border border-[#C2272D]/50 font-mono text-[11px] text-[#C2272D] font-semibold tracking-widest">
            <AlertTriangle className="w-3 h-3" />
            [EVIDENCE CLASSIFIED]
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#121316] border border-[#2A2B30] font-mono text-[11px] text-[#9CA3AF] tracking-widest">
            <Radio className="w-3 h-3 text-[#C2272D] animate-pulse" />
            [STATUS: COMPROMISED]
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#121316] border border-[#2A2B30] font-mono text-[11px] text-[#9CA3AF] tracking-widest">
            <MapPin className="w-3 h-3 text-[#C2272D]" />
            [JURISDICTION: NAWABSHAH → KARACHI]
          </span>
        </motion.div>

        {/* Academic Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mb-5"
        >
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121316]/90 border border-[#2A2B30] hover:border-red-600/60 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#C2272D]" />
            <span className="font-mono text-xs sm:text-sm text-[#E3E1D9] tracking-wide">
              Dawood University of Engineering &amp; Technology • BSCS Section A3
            </span>
            <span className="text-[#2A2B30]">|</span>
            <span className="font-mono text-xs text-[#9CA3AF]">
              AICT Open Ended Lab-1 • Supervisor: Sir Imran Alvi
            </span>
          </div>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Title, Urdu Script, Subtitle, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-[#E3E1D9] leading-none">
                  <DecodeText text="GHUMSHUDGI" speed={35} />
                </h1>
                <span
                  dir="rtl"
                  lang="ur"
                  className="font-urdu text-4xl sm:text-6xl text-[#C2272D] font-bold tracking-normal drop-shadow-[0_0_20px_rgba(194,39,45,0.45)] select-none"
                >
                  (گمشدگی)
                </span>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-[#C2272D] via-[#2A2B30] to-transparent" />
            </div>

            <p className="text-lg sm:text-2xl text-[#E3E1D9]/90 font-light italic leading-relaxed max-w-2xl">
              An AI-Generated Psychological Crime Thriller on Power, Betrayal, and Sacrifice.
            </p>

            <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-2xl">
              From a desperate village departure in <strong className="text-[#E3E1D9] font-medium">Nawabshah</strong> to a biometric-locked nursery in <strong className="text-[#E3E1D9] font-medium">Karachi</strong>—inspect the leaked investigation dossier detailing how caretaker <strong className="text-[#E3E1D9] font-medium">Saman</strong> uncovered the abduction of toddler <strong className="text-[#E3E1D9] font-medium">Ali Khan (Yusuf)</strong>, chose moral sacrifice over escape, and was framed by <strong className="text-[#E3E1D9] font-medium">Farah Begum</strong> through a confiscated CNIC and a bought police precinct.
            </p>

            {/* Primary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onWatchFilm}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded bg-[#C2272D] hover:bg-[#a91f24] text-white font-mono text-xs sm:text-sm font-bold tracking-widest shadow-crimson transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
                <span>[ WATCH SHORT FILM ]</span>
                <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-black/30 rounded border border-white/20">
                  16:9 HD
                </span>
              </button>

              <a
                href="#dossier"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded bg-[#121316] hover:bg-[#191B20] text-[#E3E1D9] border border-[#2A2B30] hover:border-red-600/60 font-mono text-xs sm:text-sm font-bold tracking-widest transition-all duration-200"
              >
                <FileSearch className="w-4 h-4 text-[#C2272D] transition-transform group-hover:translate-x-0.5" />
                <span>[ INSPECT CASE FILE ]</span>
              </a>
            </div>

            {/* Bottom Quick Metadata Row */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-xl border-t border-[#2A2B30]/80">
              <div>
                <div className="font-mono text-[10px] text-[#9CA3AF] uppercase">TOTAL SCENES</div>
                <div className="font-mono text-sm sm:text-base font-bold text-[#E3E1D9]">
                  23 SCENES <span className="text-[#C2272D] text-xs">// 4 ACTS</span>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-[#9CA3AF] uppercase">AI PIPELINE</div>
                <div className="font-mono text-sm sm:text-base font-bold text-[#E3E1D9]">
                  FLOW • GEMINI • AI STUDIO
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-[#9CA3AF] uppercase">VERDICT STATUS</div>
                <div className="font-mono text-sm sm:text-base font-bold text-[#C2272D]">
                  FRAME-UP // UNJUST
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Classified Dossier Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-lg bg-[#121316]/90 backdrop-blur-md border border-[#2A2B30] hover:border-red-600/60 transition-all duration-300 p-5 sm:p-6 shadow-dossier group">
              {/* Top Corner Stamp */}
              <div className="flex items-center justify-between border-b border-[#2A2B30] pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[#9CA3AF]">
                  <Film className="w-4 h-4 text-[#C2272D]" />
                  <span>EVIDENCE REEL // PREVIEW TERMINAL</span>
                </div>
                <span className="forensic-stamp px-2 py-0.5 font-mono text-[10px] font-bold">
                  LEAKED FILE
                </span>
              </div>

              {/* 16:9 Interactive Thumbnail Poster Trigger */}
              <div
                onClick={onWatchFilm}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onWatchFilm()}
                className="relative aspect-video w-full rounded overflow-hidden bg-[#0A0A0C] border border-[#2A2B30] group-hover:border-[#C2272D]/70 cursor-pointer mb-5"
              >
                {/* Noir Procedural Poster Art */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1b090b] via-[#0A0A0C] to-[#121316]" />
                <div className="absolute inset-0 noir-scanlines opacity-50" />

                {/* Architectural Silhouette / Split Motif */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#9CA3AF]">
                    <span className="flex items-center gap-1.5 text-[#C2272D]">
                      <span className="w-2 h-2 rounded-full bg-[#C2272D] animate-ping" />
                      REC // CAM-07 NURSERY CORRIDOR
                    </span>
                    <span>TC 05:59:18:04</span>
                  </div>

                  <div className="my-auto flex flex-col items-center text-center px-3">
                    <div className="w-14 h-14 rounded-full bg-[#C2272D]/20 border border-[#C2272D] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#C2272D] transition-all duration-300 shadow-crimson">
                      <Play className="w-6 h-6 text-[#E3E1D9] fill-current ml-0.5" />
                    </div>
                    <p className="font-display text-lg sm:text-xl tracking-widest text-[#E3E1D9] font-bold">
                      GHUMSHUDGI (گمشدگی)
                    </p>
                    <p className="font-mono text-[11px] text-[#9CA3AF] mt-0.5">
                      CLICK TO LAUNCH 16:9 CINEMATIC SCREENING ROOM
                    </p>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-[#9CA3AF] border-t border-white/10 pt-2">
                    <span>SUBJ: SAMAN • FARAH • YUSUF (ALI KHAN)</span>
                    <span className="text-[#C2272D]">[AUDIO: URDU / NOIR SCORE]</span>
                  </div>
                </div>
              </div>

              {/* Incident Summary Telemetry */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between py-1.5 px-3 rounded bg-[#0A0A0C] border border-[#2A2B30]">
                  <span className="text-[#9CA3AF]">EXHIBIT 01:</span>
                  <span className="text-[#E3E1D9]">Confiscated CNIC → Fraudulent House Lease</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-3 rounded bg-[#0A0A0C] border border-[#2A2B30]">
                  <span className="text-[#9CA3AF]">EXHIBIT 02:</span>
                  <span className="text-[#E3E1D9]">Red-Circled Clipping ("Yusuf" = Ali Khan)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-3 rounded bg-[#0A0A0C] border border-[#C2272D]/40">
                  <span className="text-[#C2272D]">EXHIBIT 03:</span>
                  <span className="text-[#E3E1D9]">Police Payoff &amp; Accomplice "Tariq" Frame-Up</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
