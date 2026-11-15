import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Users,
  BadgeCheck,
  Terminal,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Fingerprint,
  Layers,
} from 'lucide-react';
import { TEAM_ROSTER, TeamMember } from '../data/dossierData';

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // ESC key listener to close member profile modal
  useEffect(() => {
    if (!selectedMember) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      } else if (e.key === 'ArrowRight') {
        const idx = TEAM_ROSTER.findIndex((m) => m.id === selectedMember.id);
        setSelectedMember(TEAM_ROSTER[(idx + 1) % TEAM_ROSTER.length]);
      } else if (e.key === 'ArrowLeft') {
        const idx = TEAM_ROSTER.findIndex((m) => m.id === selectedMember.id);
        setSelectedMember(TEAM_ROSTER[(idx - 1 + TEAM_ROSTER.length) % TEAM_ROSTER.length]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMember]);

  const handleNavigateMember = (direction: 'prev' | 'next') => {
    if (!selectedMember) return;
    const currentIndex = TEAM_ROSTER.findIndex((m) => m.id === selectedMember.id);
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % TEAM_ROSTER.length
        : (currentIndex - 1 + TEAM_ROSTER.length) % TEAM_ROSTER.length;
    setSelectedMember(TEAM_ROSTER[nextIndex]);
  };

  return (
    <section
      id="credits"
      className="relative py-24 bg-[#0A0A0C] border-b border-[#2A2B30]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#2A2B30]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C2272D] tracking-widest">
              <span>[05. CREDITS // PRODUCTION TEAM &amp; ACADEMIC SUPERVISION]</span>
              <span className="text-[#2A2B30]">•</span>
              <span className="text-[#9CA3AF]">DUET KARACHI</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#E3E1D9] tracking-tight">
              INVESTIGATIVE TASK FORCE
            </h2>
          </div>

          <div className="font-mono text-xs text-[#9CA3AF] flex items-center gap-2 bg-[#121316] px-3.5 py-2 rounded border border-[#2A2B30]">
            <GraduationCap className="w-4 h-4 text-[#C2272D]" />
            <span>BSCS BATCH 2026 • SECTION A3</span>
          </div>
        </div>

        {/* Academic Supervision & Course Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-lg bg-gradient-to-r from-[#121316] via-[#171215] to-[#121316] border border-[#C2272D]/50 p-6 sm:p-8 shadow-dossier"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C2272D]/15 border border-[#C2272D]/40 font-mono text-xs text-[#C2272D] font-bold">
                <Award className="w-3.5 h-3.5" />
                ACADEMIC SUPERVISION &amp; COURSE EVALUATION
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#E3E1D9]">
                Supervised by <span className="text-[#C2272D]">Sir Imran Alvi</span>
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                Submitted in fulfillment of the <strong className="text-[#E3E1D9]">AICT Open Ended Lab-1</strong> curriculum for the <strong className="text-[#E3E1D9]">Department of Computer Science (BSCS Batch 2026 — Section A3)</strong> at <strong className="text-[#E3E1D9]">Dawood University of Engineering &amp; Technology (DUET), Karachi</strong>.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded bg-[#0A0A0C] border border-[#2A2B30]">
                <span className="text-[10px] text-[#9CA3AF] block">COURSE MODULE</span>
                <span className="text-[#E3E1D9] font-bold">AICT Open Ended Lab-1</span>
              </div>
              <div className="p-3.5 rounded bg-[#0A0A0C] border border-[#2A2B30]">
                <span className="text-[10px] text-[#9CA3AF] block">COHORT &amp; SECTION</span>
                <span className="text-[#E3E1D9] font-bold">BSCS Batch 2026 (Sec A3)</span>
              </div>
              <div className="p-3.5 rounded bg-[#0A0A0C] border border-[#2A2B30] sm:col-span-2">
                <span className="text-[10px] text-[#9CA3AF] block">INSTITUTION</span>
                <span className="text-[#E3E1D9] font-bold">
                  Dawood University of Engineering &amp; Technology (DUET)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Roster Header */}
        <div className="mt-12 mb-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[#E3E1D9]">
            <Users className="w-4 h-4 text-[#C2272D]" />
            <span>PRODUCTION ROSTER // CLICK ANY MEMBER CARD TO OPEN OPERATIVE PROFILE</span>
          </div>
          <span className="font-mono text-[11px] text-[#C2272D] font-bold">
            [ INTERACTIVE DOSSIER PROFILES ENABLED ]
          </span>
        </div>

        {/* 6-Member Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM_ROSTER.map((member, index) => (
            <motion.div
              key={member.rollNo}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedMember(member)}
              className={`group cursor-pointer relative rounded-lg bg-[#121316] border transition-all duration-300 p-6 flex flex-col justify-between shadow-dossier ${
                member.isLead
                  ? 'border-[#C2272D]/80 hover:border-[#C2272D] shadow-crimson'
                  : 'border-[#2A2B30] hover:border-red-600/60'
              }`}
            >
              <div>
                {/* Top Clearance & Roll Number Bar */}
                <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-[#2A2B30]">
                  <span className="font-mono text-[10px] text-[#9CA3AF] tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C2272D]" />
                    {member.badgeNumber}
                  </span>

                  <span className="px-2.5 py-0.5 rounded bg-[#0A0A0C] border border-[#2A2B30] group-hover:border-[#C2272D]/60 font-mono text-xs font-bold text-[#E3E1D9]">
                    {member.rollNo}
                  </span>
                </div>

                {/* Member Name & Lead Badge */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#E3E1D9] group-hover:text-white">
                    {member.name}
                  </h3>
                  {member.isLead && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#C2272D] text-white font-mono text-[10px] font-bold tracking-wider shrink-0">
                      <BadgeCheck className="w-3 h-3" /> TEAM LEAD
                    </span>
                  )}
                </div>

                <p className="font-mono text-xs text-[#C2272D] font-semibold mb-3">
                  {member.role}
                </p>

                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-4">
                  {member.specialization}
                </p>

                {/* Preview of first 2 contributions */}
                <div className="space-y-1.5 bg-[#0A0A0C]/80 p-3 rounded border border-[#2A2B30] group-hover:border-[#C2272D]/40 transition-colors">
                  <div className="font-mono text-[10px] text-[#9CA3AF] flex items-center justify-between">
                    <span>KEY ROLES ({member.contributions.length} LOGGED)</span>
                    <span className="text-[#C2272D]">CLICK TO EXPAND</span>
                  </div>
                  {member.contributions.slice(0, 2).map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 font-mono text-[11px] text-[#E3E1D9]/90 truncate"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2272D] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                  {member.contributions.length > 2 && (
                    <div className="font-mono text-[10px] text-[#9CA3AF] pl-3">
                      + {member.contributions.length - 2} more operational roles...
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#2A2B30] flex items-center justify-between font-mono text-[11px]">
                <span className="flex items-center gap-1 text-[#9CA3AF]">
                  <Terminal className="w-3 h-3 text-[#C2272D]" />
                  ID: {member.rollNo}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#C2272D] font-bold group-hover:translate-x-0.5 transition-transform">
                  <FolderOpen className="w-3.5 h-3.5" />
                  [ OPEN PROFILE → ]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP PROFILE DOSSIER MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
          >
            <motion.div
              key={selectedMember.id}
              initial={{ scale: 0.93, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-lg bg-[#121316] border border-[#C2272D]/80 shadow-dossier overflow-hidden my-auto"
            >
              {/* Top Classified Modal Bar */}
              <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 bg-[#0A0A0C] border-b border-[#2A2B30]">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#C2272D]/15 border border-[#C2272D]/50 text-[#C2272D]">
                    <Fingerprint className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="font-mono text-xs font-bold text-[#E3E1D9] tracking-wider">
                      PERSONNEL DOSSIER // {selectedMember.badgeNumber}
                    </div>
                    <div className="font-mono text-[10px] text-[#9CA3AF]">
                      {selectedMember.clearance} • DUET BSCS SECTION A3
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleNavigateMember('prev')}
                    className="p-1.5 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 text-[#E3E1D9]"
                    title="Previous Team Member (Left Arrow)"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleNavigateMember('next')}
                    className="p-1.5 rounded bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 text-[#E3E1D9]"
                    title="Next Team Member (Right Arrow)"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#C2272D] hover:bg-[#a61f24] text-white font-mono text-xs font-bold transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>[ESC]</span>
                  </button>
                </div>
              </div>

              {/* Profile Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Identity Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#2A2B30]">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#0A0A0C] border border-[#2A2B30] text-[#E3E1D9] font-bold">
                        ROLL NO: {selectedMember.rollNo}
                      </span>
                      {selectedMember.isLead && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#C2272D] text-white font-mono text-[10px] font-bold tracking-wider">
                          <BadgeCheck className="w-3 h-3" /> TEAM LEAD &amp; PRODUCTION SUPERVISOR
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#E3E1D9] pt-1">
                      {selectedMember.name}
                    </h3>
                    <p className="font-mono text-sm text-[#C2272D] font-bold">
                      {selectedMember.role}
                    </p>
                  </div>

                  <div className="forensic-stamp px-3 py-1 font-mono text-xs font-bold -rotate-2">
                    VERIFIED CREDIT
                  </div>
                </div>

                {/* Operational Unit & Summary */}
                <div className="p-4 rounded bg-[#0A0A0C] border border-[#2A2B30] space-y-1.5">
                  <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">
                    ASSIGNED UNIT // {selectedMember.departmentUnit}
                  </div>
                  <p className="text-xs sm:text-sm text-[#E3E1D9]/90 leading-relaxed">
                    {selectedMember.specialization}
                  </p>
                </div>

                {/* Detailed Contributions Checklist */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs text-[#E3E1D9]">
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#C2272D]" />
                      <span className="font-bold tracking-wider">
                        OPERATIONAL CONTRIBUTIONS &amp; PRODUCTION CREDITS
                      </span>
                    </span>
                    <span className="text-[#9CA3AF] text-[11px]">
                      {selectedMember.contributions.length} VERIFIED TASKS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedMember.contributions.map((contribution, idx) => (
                      <motion.div
                        key={contribution}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                        className="flex items-center justify-between gap-3 p-3.5 rounded bg-[#0A0A0C] border border-[#2A2B30] hover:border-[#C2272D]/60 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded bg-[#C2272D]/15 border border-[#C2272D]/40 font-mono text-[11px] font-bold text-[#C2272D]">
                            0{idx + 1}
                          </span>
                          <span className="text-sm sm:text-base text-[#E3E1D9] font-medium">
                            {contribution}
                          </span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#C2272D] shrink-0" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Roster Switcher Pills */}
                <div className="pt-4 border-t border-[#2A2B30] space-y-2">
                  <div className="font-mono text-[10px] text-[#9CA3AF] uppercase">
                    QUICK SWITCH INVESTIGATOR PROFILE:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {TEAM_ROSTER.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedMember(m)}
                        className={`px-2.5 py-1 rounded font-mono text-[11px] border transition-all ${
                          m.id === selectedMember.id
                            ? 'bg-[#C2272D] text-white border-[#C2272D] font-bold'
                            : 'bg-[#0A0A0C] text-[#9CA3AF] border-[#2A2B30] hover:text-[#E3E1D9] hover:border-red-600/60'
                        }`}
                      >
                        {m.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Modal Footer */}
              <div className="px-6 py-3 bg-[#0A0A0C] border-t border-[#2A2B30] flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[#9CA3AF]">
                <span>PROJECT: GHUMSHUDGI (گمشدگی) • AICT LAB-1</span>
                <span>SUPERVISOR: SIR IMRAN ALVI</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
