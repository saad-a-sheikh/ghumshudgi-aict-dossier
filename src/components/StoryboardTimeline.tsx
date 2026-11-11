import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  MapPin,
  Volume2,
  Camera,
  Activity,
  AlertTriangle,
} from 'lucide-react';
import { STORYBOARD_SCENES, StoryboardScene } from '../data/dossierData';
import { DecodeText } from './DecodeText';

const ACT_FILTERS = ['ALL SCENES', 'ACT I', 'ACT II', 'ACT III', 'ACT IV'] as const;

export const StoryboardTimeline: React.FC = () => {
  const [selectedAct, setSelectedAct] = useState<string>('ALL SCENES');
  const [activeScene, setActiveScene] = useState<StoryboardScene>(STORYBOARD_SCENES[0]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const filteredScenes =
    selectedAct === 'ALL SCENES'
      ? STORYBOARD_SCENES
      : STORYBOARD_SCENES.filter((scene) => scene.act === selectedAct);

  const handleHorizontalScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="scenes"
      className="relative py-24 border-b border-[#2A2B30] bg-[#0A0A0C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Act Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#2A2B30]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C2272D] tracking-widest">
              <span>[03. SCENES // STORYBOARD PROGRESSION]</span>
              <span className="text-[#2A2B30]">•</span>
              <span className="text-[#9CA3AF]">23-SCENE CONTINUITY TIMELINE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#E3E1D9] tracking-tight">
              <DecodeText text="CHRONOLOGY OF ENTRAPMENT" />
            </h2>
          </div>

          {/* Tabbed Filtering + Scroll Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap items-center gap-1.5 bg-[#121316] p-1.5 rounded border border-[#2A2B30]">
              {ACT_FILTERS.map((act) => (
                <button
                  key={act}
                  onClick={() => {
                    setSelectedAct(act);
                    const nextList =
                      act === 'ALL SCENES'
                        ? STORYBOARD_SCENES
                        : STORYBOARD_SCENES.filter((s) => s.act === act);
                    if (nextList.length > 0) setActiveScene(nextList[0]);
                  }}
                  className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider transition-all ${
                    selectedAct === act
                      ? 'bg-[#C2272D] text-white font-bold'
                      : 'text-[#9CA3AF] hover:text-[#E3E1D9] hover:bg-[#0A0A0C]'
                  }`}
                >
                  {act}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 ml-auto sm:ml-2">
              <button
                onClick={() => handleHorizontalScroll('left')}
                aria-label="Scroll Storyboard Left"
                className="p-2.5 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 text-[#E3E1D9] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleHorizontalScroll('right')}
                aria-label="Scroll Storyboard Right"
                className="p-2.5 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 text-[#E3E1D9] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Card Reel */}
        <div
          ref={scrollContainerRef}
          className="mt-10 flex items-stretch gap-5 overflow-x-auto pb-6 snap-x snap-mandatory"
        >
          {filteredScenes.map((scene, idx) => {
            const isSelected = activeScene.sceneNumber === scene.sceneNumber;

            return (
              <motion.div
                key={scene.sceneNumber}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                onClick={() => setActiveScene(scene)}
                className={`snap-start shrink-0 w-[310px] sm:w-[360px] rounded-lg bg-[#121316] border transition-all duration-300 p-5 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#C2272D] shadow-crimson'
                    : 'border-[#2A2B30] hover:border-red-600/60'
                }`}
              >
                <div>
                  {/* Top Timecode & Scene Chip */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#2A2B30]">
                    <span className="px-2.5 py-0.5 rounded bg-[#C2272D]/15 border border-[#C2272D]/50 font-mono text-xs font-bold text-[#C2272D]">
                      {scene.sceneNumber}
                    </span>
                    <span className="font-mono text-[11px] text-[#9CA3AF]">
                      {scene.act} • TC {scene.timecode}
                    </span>
                  </div>

                  {/* Procedural 16:9 Storyboard Frame Preview */}
                  <div className="relative aspect-video w-full rounded bg-[#0A0A0C] border border-[#2A2B30] group-hover:border-[#C2272D]/50 overflow-hidden mb-4 p-3 flex flex-col justify-between">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 noir-scanlines opacity-40" />

                    <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#9CA3AF]">
                      <span className="flex items-center gap-1 text-[#E3E1D9]">
                        <Clapperboard className="w-3 h-3 text-[#C2272D]" />
                        SHOT {idx + 1} OF 7 KEY TURNING POINTS
                      </span>
                      <span className="text-[#C2272D] font-bold">TENSION {scene.tensionLevel}%</span>
                    </div>

                    {/* Tension Meter Bar inside Frame */}
                    <div className="relative z-10 space-y-1.5">
                      <div className="font-mono text-[10px] text-[#C2272D] tracking-wider uppercase">
                        {scene.forensicFlag}
                      </div>
                      <div className="w-full h-1.5 bg-[#2A2B30] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#C2272D] transition-all duration-500"
                          style={{ width: `${scene.tensionLevel}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Scene Title & Location */}
                  <h3 className="font-display text-xl font-bold text-[#E3E1D9] group-hover:text-white mb-1">
                    <DecodeText text={scene.title} />
                  </h3>

                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#9CA3AF] mb-3">
                    <MapPin className="w-3 h-3 text-[#C2272D] shrink-0" />
                    <span className="truncate">{scene.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#E3E1D9]/85 leading-relaxed">
                    {scene.logline}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-3 border-t border-[#2A2B30] flex items-center justify-between font-mono text-[11px]">
                  <span className="text-[#9CA3AF]">CAMERA &amp; SOUND LOG</span>
                  <span className="text-[#C2272D] font-bold">
                    {isSelected ? '[INSPECTING]' : '[SELECT SHOT →]'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Scene Director's Technical Breakdown Panel */}
        <motion.div
          key={activeScene.sceneNumber}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 rounded-lg bg-[#121316] border border-[#2A2B30] p-6 sm:p-8 shadow-dossier"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#2A2B30]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-[#C2272D] text-white font-mono text-xs font-bold tracking-widest">
                {activeScene.sceneNumber} // {activeScene.act}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#E3E1D9]">
                {activeScene.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C2272D]">
              <AlertTriangle className="w-4 h-4" />
              <span>{activeScene.forensicFlag}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="p-4 rounded bg-[#0A0A0C] border border-[#2A2B30]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C2272D] mb-2">
                <Activity className="w-4 h-4" />
                <span>NARRATIVE ACTION &amp; SUBTEXT</span>
              </div>
              <p className="text-xs sm:text-sm text-[#E3E1D9]/90 leading-relaxed">
                {activeScene.logline}
              </p>
            </div>

            <div className="p-4 rounded bg-[#0A0A0C] border border-[#2A2B30]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C2272D] mb-2">
                <Camera className="w-4 h-4" />
                <span>VISUAL &amp; LIGHTING DIRECTION</span>
              </div>
              <p className="text-xs sm:text-sm text-[#E3E1D9]/90 leading-relaxed">
                {activeScene.visualDirection}
              </p>
            </div>

            <div className="p-4 rounded bg-[#0A0A0C] border border-[#2A2B30]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C2272D] mb-2">
                <Volume2 className="w-4 h-4" />
                <span>ACOUSTIC &amp; SCORE DESIGN</span>
              </div>
              <p className="text-xs sm:text-sm text-[#E3E1D9]/90 leading-relaxed">
                {activeScene.soundCue}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
