import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, Users, BadgeCheck, Terminal } from 'lucide-react';
import { TEAM_ROSTER } from '../data/dossierData';
import { DecodeText } from './DecodeText';

export const TeamSection: React.FC = () => {
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
              <DecodeText text="INVESTIGATIVE TASK FORCE" />
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
        <div className="mt-12 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-[#E3E1D9]">
            <Users className="w-4 h-4 text-[#C2272D]" />
            <span>PRODUCTION ROSTER // 6 CREDITED INVESTIGATORS</span>
          </div>
          <span className="font-mono text-[11px] text-[#9CA3AF]">CLEARANCE: VERIFIED</span>
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
              className={`group relative rounded-lg bg-[#121316] border transition-all duration-300 p-6 flex flex-col justify-between shadow-dossier ${
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
                    {member.clearance}
                  </span>

                  <span className="px-2.5 py-0.5 rounded bg-[#0A0A0C] border border-[#2A2B30] group-hover:border-[#C2272D]/60 font-mono text-xs font-bold text-[#E3E1D9]">
                    {member.rollNo}
                  </span>
                </div>

                {/* Member Name & Lead Badge */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#E3E1D9] group-hover:text-white">
                    <DecodeText text={member.name} />
                  </h3>
                  {member.isLead && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#C2272D] text-white font-mono text-[10px] font-bold tracking-wider shrink-0">
                      <BadgeCheck className="w-3 h-3" /> TEAM LEAD
                    </span>
                  )}
                </div>

                <p className="font-mono text-xs text-[#C2272D] mb-3">{member.role}</p>

                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  {member.specialization}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#2A2B30] flex items-center justify-between font-mono text-[11px] text-[#9CA3AF]">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-[#C2272D]" />
                  ID: {member.rollNo}
                </span>
                <span className="text-[#E3E1D9]">BSCS-26 (A3)</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
