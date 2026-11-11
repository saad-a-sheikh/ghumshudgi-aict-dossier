import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  ShieldOff,
  Baby,
  Scale,
  FileKey2,
  Eye,
  MapPin,
} from 'lucide-react';
import { CHARACTER_PROFILES, CharacterProfile } from '../data/dossierData';
import { DecodeText } from './DecodeText';

export const CharacterGrid: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeProfile, setActiveProfile] = useState<CharacterProfile>(CHARACTER_PROFILES[0]);

  const getCharacterIcon = (id: string) => {
    switch (id) {
      case 'saman':
        return <UserCheck className="w-5 h-5 text-[#C2272D]" />;
      case 'farah-begum':
        return <ShieldOff className="w-5 h-5 text-[#C2272D]" />;
      case 'yusuf-ali-khan':
        return <Baby className="w-5 h-5 text-[#C2272D]" />;
      default:
        return <Scale className="w-5 h-5 text-[#C2272D]" />;
    }
  };

  return (
    <section
      id="characters"
      className="relative py-24 border-b border-[#2A2B30] bg-[#0A0A0C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#2A2B30]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C2272D] tracking-widest">
              <span>[02. CHARACTERS // SUBJECT DOSSIERS]</span>
              <span className="text-[#2A2B30]">•</span>
              <span className="text-[#9CA3AF]">4 PRIMARY SUBJECT FILES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#E3E1D9] tracking-tight">
              <DecodeText text="PERSONS OF INTEREST" />
            </h2>
          </div>
          <p className="font-mono text-xs text-[#9CA3AF] max-w-md">
            Hover over any subject card to trigger forensic cipher decoding or click to inspect psychological &amp; evidentiary profiles.
          </p>
        </div>

        {/* 4-Card Character Dossier Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHARACTER_PROFILES.map((char, index) => {
            const isHovered = hoveredId === char.id;
            const isSelected = activeProfile.id === char.id;

            return (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(char.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveProfile(char)}
                className={`group relative rounded-lg bg-[#121316] border transition-all duration-300 p-6 sm:p-7 cursor-pointer flex flex-col justify-between shadow-dossier ${
                  isSelected
                    ? 'border-[#C2272D] ring-1 ring-[#C2272D]/40'
                    : 'border-[#2A2B30] hover:border-red-600/60'
                }`}
              >
                {/* Top Card Header */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#2A2B30]">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#9CA3AF]">
                      {getCharacterIcon(char.id)}
                      <DecodeText text={char.code} trigger={isHovered} />
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider border ${
                        char.statusTone === 'danger'
                          ? 'bg-[#C2272D]/15 text-[#C2272D] border-[#C2272D]/50'
                          : char.statusTone === 'warning'
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/40'
                          : char.statusTone === 'victim'
                          ? 'bg-red-500/10 text-red-300 border-red-500/40'
                          : 'bg-[#0A0A0C] text-[#9CA3AF] border-[#2A2B30]'
                      }`}
                    >
                      {char.status}
                    </span>
                  </div>

                  {/* Subject Name + Urdu Name */}
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#E3E1D9] group-hover:text-white transition-colors">
                        <DecodeText text={char.name} trigger={isHovered} speed={28} />
                      </h3>
                      <p className="font-mono text-xs text-[#C2272D] mt-0.5">{char.role}</p>
                    </div>
                    <span
                      dir="rtl"
                      lang="ur"
                      className="font-urdu text-2xl sm:text-3xl text-[#E3E1D9]/80 group-hover:text-[#C2272D] transition-colors select-none"
                    >
                      {char.urduName}
                    </span>
                  </div>

                  {/* Origin Line */}
                  <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#9CA3AF] mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#C2272D]" />
                    <span>{char.origin}</span>
                  </div>

                  {/* Narrative Bio */}
                  <p className="text-sm text-[#E3E1D9]/90 leading-relaxed mb-5">
                    {char.summary}
                  </p>
                </div>

                {/* Attributes Telemetry Table */}
                <div className="space-y-3 pt-4 border-t border-[#2A2B30]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {char.attributes.map((attr) => (
                      <div
                        key={attr.label}
                        className="p-2.5 rounded bg-[#0A0A0C] border border-[#2A2B30] group-hover:border-[#2A2B30]/90"
                      >
                        <span className="font-mono text-[10px] text-[#9CA3AF] block">
                          {attr.label}
                        </span>
                        <span className="font-mono text-xs text-[#E3E1D9] font-medium">
                          {attr.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Psychological & Evidence Footer */}
                  <div className="p-3 rounded bg-[#0A0A0C]/80 border border-[#C2272D]/30 flex items-start justify-between gap-3">
                    <div className="font-mono text-xs">
                      <span className="text-[#C2272D] font-bold block text-[10px]">
                        KEY EVIDENTIARY NEXUS:
                      </span>
                      <span className="text-[#9CA3AF]">{char.keyEvidence}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#C2272D] shrink-0 flex items-center gap-1 pt-1">
                      <Eye className="w-3 h-3" /> PROFILE
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Active Subject Psychological Evaluation Banner */}
        <div className="mt-8 rounded-lg bg-[#121316] border border-[#2A2B30] p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs text-[#C2272D]">
              <FileKey2 className="w-4 h-4" />
              <span>PSYCHOLOGICAL &amp; INSTITUTIONAL ASSESSMENT // {activeProfile.name.toUpperCase()}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#E3E1D9]/90 max-w-4xl">
              {activeProfile.psychologicalProfile}
            </p>
          </div>
          <div className="font-mono text-xs text-[#9CA3AF] shrink-0 border-t lg:border-t-0 lg:border-l border-[#2A2B30] pt-3 lg:pt-0 lg:pl-6">
            <div className="text-[10px] uppercase">SUBJECT CODE</div>
            <div className="text-[#E3E1D9] font-bold">{activeProfile.code}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
