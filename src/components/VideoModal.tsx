import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Upload,
  Link2,
  Film,
  Volume2,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { STORYBOARD_SCENES } from '../data/dossierData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'video' | 'reel' | 'url'>('video');
  const [videoSrc, setVideoSrc] = useState<string>('/ghumshudgi-film.mp4');
  const [customUrlInput, setCustomUrlInput] = useState<string>('');
  const [videoLoadError, setVideoLoadError] = useState<boolean>(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  // Storyboard Reel state (fallback / interactive screening)
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlayingReel, setIsPlayingReel] = useState(true);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // ESC key dismissal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Auto-advance storyboard screening reel when in 'reel' mode
  useEffect(() => {
    if (!isOpen || mode !== 'reel' || !isPlayingReel) return;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % STORYBOARD_SCENES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isOpen, mode, isPlayingReel]);

  const handleLocalFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setVideoSrc(objectUrl);
    setUploadedFileName(file.name);
    setVideoLoadError(false);
    setMode('video');
  };

  const handleCustomUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrlInput.trim()) return;
    setVideoSrc(customUrlInput.trim());
    setVideoLoadError(false);
    setMode('video');
  };

  const currentScene = STORYBOARD_SCENES[activeSlide];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-3 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-lg bg-[#121316] border border-[#2A2B30] shadow-dossier overflow-hidden my-auto"
          >
            {/* Top Modal Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3.5 bg-[#0A0A0C] border-b border-[#2A2B30]">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C2272D] animate-pulse" />
                <div>
                  <h3 className="font-mono text-xs sm:text-sm font-bold text-[#E3E1D9] tracking-wider">
                    GHUMSHUDGI (گمشدگی) // OFFICIAL SHORT FILM SCREENING ROOM
                  </h3>
                  <p className="font-mono text-[10px] text-[#9CA3AF]">
                    AICT OPEN ENDED LAB-1 • DUET BSCS SECTION A3 • SUPERVISOR: SIR IMRAN ALVI
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#121316] hover:bg-[#1a1c22] border border-[#2A2B30] hover:border-red-600/60 font-mono text-[11px] text-[#E3E1D9] transition-colors"
                  title="Load local MP4/WebM video file from your computer"
                >
                  <Upload className="w-3.5 h-3.5 text-[#C2272D]" />
                  <span>LOAD .MP4 FILE</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/webm,video/ogg,video/*"
                  onChange={handleLocalFileSelect}
                  className="hidden"
                />

                <button
                  onClick={() => setMode(mode === 'reel' ? 'video' : 'reel')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded border font-mono text-[11px] transition-colors ${
                    mode === 'reel'
                      ? 'bg-[#C2272D] text-white border-[#C2272D]'
                      : 'bg-[#121316] text-[#9CA3AF] hover:text-[#E3E1D9] border-[#2A2B30]'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>{mode === 'reel' ? 'VIDEO PLAYER' : 'STORYBOARD REEL'}</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close Video Modal (ESC)"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#121316] hover:bg-[#C2272D] text-[#E3E1D9] hover:text-white border border-[#2A2B30] font-mono text-xs transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">[ESC]</span>
                </button>
              </div>
            </div>

            {/* 16:9 Stage Area */}
            <div className="relative aspect-video w-full bg-[#0A0A0C] overflow-hidden">
              {mode === 'video' && !videoLoadError ? (
                <video
                  key={videoSrc}
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  onError={() => setVideoLoadError(true)}
                  className="w-full h-full object-contain bg-black"
                >
                  Your browser does not support HTML5 video playback.
                </video>
              ) : mode === 'video' && videoLoadError ? (
                /* Graceful Dossier Screening Fallback if /public/ghumshudgi-film.mp4 is not yet placed */
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-b from-[#14090b] via-[#0A0A0C] to-[#0A0A0C]">
                  <div className="flex items-center justify-between border-b border-[#2A2B30] pb-3 font-mono text-xs text-[#9CA3AF]">
                    <span className="flex items-center gap-2 text-[#C2272D]">
                      <AlertCircle className="w-4 h-4" />
                      EVIDENCE VIDEO STREAM STANDBY
                    </span>
                    <span>ASPECT: 16:9 WIDESCREEN</span>
                  </div>

                  <div className="my-auto max-w-xl mx-auto text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C2272D]/15 border border-[#C2272D]/50 font-mono text-xs text-[#C2272D]">
                      LOCAL FILE TARGET: /public/ghumshudgi-film.mp4
                    </div>
                    <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#E3E1D9]">
                      Connect Your Rendered Film File or Launch Interactive Reel
                    </h4>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                      Select your rendered <code className="text-[#E3E1D9]">.mp4</code> short film directly from your computer for instant 16:9 playback, drop it into <code className="text-[#E3E1D9]">public/ghumshudgi-film.mp4</code>, or launch the built-in 23-Scene Animated Director’s Storyboard Reel below.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#C2272D] hover:bg-[#a81f24] text-white font-mono text-xs font-bold tracking-wider transition-all"
                      >
                        <Upload className="w-4 h-4" />
                        [ SELECT .MP4 FROM COMPUTER ]
                      </button>

                      <button
                        onClick={() => setMode('reel')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#121316] hover:bg-[#1b1d24] text-[#E3E1D9] border border-[#2A2B30] hover:border-red-600/60 font-mono text-xs font-bold tracking-wider transition-all"
                      >
                        <Play className="w-4 h-4 text-[#C2272D] fill-current" />
                        [ PLAY INTERACTIVE STORYBOARD REEL ]
                      </button>
                    </div>

                    <form
                      onSubmit={handleCustomUrlSubmit}
                      className="pt-3 flex items-center gap-2 max-w-md mx-auto"
                    >
                      <div className="relative flex-1">
                        <Link2 className="w-3.5 h-3.5 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={customUrlInput}
                          onChange={(e) => setCustomUrlInput(e.target.value)}
                          placeholder="Or paste direct MP4 / stream URL..."
                          className="w-full pl-8 pr-3 py-1.5 rounded bg-[#0A0A0C] border border-[#2A2B30] font-mono text-xs text-[#E3E1D9] focus:outline-none focus:border-[#C2272D]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 font-mono text-xs text-[#E3E1D9]"
                      >
                        LOAD
                      </button>
                    </form>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-[#9CA3AF] border-t border-[#2A2B30] pt-3">
                    <span>CASE FILE: 26F-CS-A3</span>
                    <span>PRESS [ESC] OR CLICK OUTSIDE TO DISMISS</span>
                  </div>
                </div>
              ) : (
                /* Interactive 16:9 Director's Storyboard Screening Reel */
                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 bg-gradient-to-br from-[#19090c] via-[#0A0A0C] to-[#121316]">
                  <div className="pointer-events-none absolute inset-0 noir-scanlines opacity-55" />

                  {/* Top OSD Telemetry */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 font-mono text-xs border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#C2272D] text-white font-bold">
                        {currentScene.sceneNumber}
                      </span>
                      <span className="text-[#E3E1D9] font-bold">{currentScene.act}</span>
                      <span className="text-[#9CA3AF]">• {currentScene.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#9CA3AF]">
                      <span className="text-[#C2272D]">{currentScene.forensicFlag}</span>
                      <span>TC: {currentScene.timecode}</span>
                    </div>
                  </div>

                  {/* Center Dramatic Narrative Frame */}
                  <motion.div
                    key={currentScene.sceneNumber}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative z-10 my-auto max-w-3xl mx-auto text-center space-y-4 px-2"
                  >
                    <div className="font-mono text-xs uppercase tracking-widest text-[#C2272D]">
                      [ DIRECTOR&apos;S VISUAL &amp; NARRATIVE LOG ]
                    </div>
                    <h4 className="font-display text-2xl sm:text-4xl font-bold text-[#E3E1D9]">
                      {currentScene.title}
                    </h4>
                    <p className="text-sm sm:text-lg text-[#E3E1D9]/95 leading-relaxed bg-black/50 backdrop-blur-sm p-4 rounded border border-[#2A2B30]">
                      &ldquo;{currentScene.logline}&rdquo;
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left font-mono text-xs">
                      <div className="p-2.5 rounded bg-[#0A0A0C]/80 border border-[#2A2B30]">
                        <span className="text-[#9CA3AF] block text-[10px]">CAMERA &amp; LIGHTING:</span>
                        <span className="text-[#E3E1D9]">{currentScene.visualDirection}</span>
                      </div>
                      <div className="p-2.5 rounded bg-[#0A0A0C]/80 border border-[#2A2B30]">
                        <span className="text-[#9CA3AF] block text-[10px] flex items-center gap-1">
                          <Volume2 className="w-3 h-3 text-[#C2272D]" /> ACOUSTIC CUE:
                        </span>
                        <span className="text-[#E3E1D9]">{currentScene.soundCue}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom Transport Controls */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setActiveSlide(
                            (prev) => (prev - 1 + STORYBOARD_SCENES.length) % STORYBOARD_SCENES.length
                          )
                        }
                        className="p-2 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 text-[#E3E1D9]"
                        title="Previous Key Scene"
                      >
                        <SkipBack className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setIsPlayingReel(!isPlayingReel)}
                        className="px-3 py-2 rounded bg-[#C2272D] text-white font-mono text-xs font-bold flex items-center gap-1.5"
                      >
                        {isPlayingReel ? (
                          <>
                            <Pause className="w-3.5 h-3.5" /> PAUSE
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" /> AUTO-REEL
                          </>
                        )}
                      </button>
                      <button
                        onClick={() =>
                          setActiveSlide((prev) => (prev + 1) % STORYBOARD_SCENES.length)
                        }
                        className="p-2 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 text-[#E3E1D9]"
                        title="Next Key Scene"
                      >
                        <SkipForward className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex items-center gap-1.5">
                      {STORYBOARD_SCENES.map((s, idx) => (
                        <button
                          key={s.sceneNumber}
                          onClick={() => setActiveSlide(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === activeSlide
                              ? 'w-7 bg-[#C2272D]'
                              : 'w-2 bg-[#2A2B30] hover:bg-[#9CA3AF]'
                          }`}
                          title={s.sceneNumber}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status Footer */}
            <div className="px-4 sm:px-6 py-3 bg-[#0A0A0C] border-t border-[#2A2B30] flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                {uploadedFileName ? (
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    LOADED STREAM: {uploadedFileName}
                  </span>
                ) : (
                  <span>STREAM SOURCE: {videoSrc}</span>
                )}
              </div>
              <div>
                <span>TIP: PRESS [ESC] OR CLICK BACKDROP TO RETURN TO DOSSIER</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
