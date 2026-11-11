import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Pin,
  Fingerprint,
  Newspaper,
  ShieldAlert,
  ChevronRight,
  AlertOctagon,
  MapPin,
  Clock,
} from 'lucide-react';
import { EVIDENCE_DOCUMENTS, EvidenceDocument } from '../data/dossierData';
import { DecodeText } from './DecodeText';

export const Synopsis: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<EvidenceDocument>(EVIDENCE_DOCUMENTS[0]);

  const getDocIcon = (id: string) => {
    switch (id) {
      case 'cnic-lease':
        return <Fingerprint className="w-5 h-5 text-[#C2272D]" />;
      case 'newspaper-clipping':
        return <Newspaper className="w-5 h-5 text-[#C2272D]" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-[#C2272D]" />;
    }
  };

  return (
    <section
      id="dossier"
      className="relative py-24 border-b border-[#2A2B30] bg-[#0A0A0C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#2A2B30]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C2272D] tracking-widest">
              <span>[01. DOSSIER // FORENSIC CASE FILE]</span>
              <span className="text-[#2A2B30]">•</span>
              <span className="text-[#9CA3AF]">CLASSIFICATION: UNAUTHORIZED LEAK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#E3E1D9] tracking-tight">
              <DecodeText text="THE ANATOMY OF A FRAME-UP" />
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9CA3AF] flex items-center gap-2 bg-[#121316] px-3.5 py-2 rounded border border-[#2A2B30]">
            <AlertOctagon className="w-4 h-4 text-[#C2272D]" />
            <span>JURISDICTION: NAWABSHAH → CLIFTON / KARACHI SOUTH</span>
          </div>
        </div>

        {/* Two-Column Interactive Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: The Narrative Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="rounded-lg bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 transition-colors p-6 sm:p-8 shadow-dossier relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#2A2B30] pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#C2272D]" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#E3E1D9] tracking-wider">
                    INVESTIGATIVE NARRATIVE // CASE 26F-CS-A3
                  </span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#C2272D]/15 text-[#C2272D] border border-[#C2272D]/40">
                  VERIFIED ACCOUNT
                </span>
              </div>

              {/* Phase 1 */}
              <div className="space-y-5 text-sm sm:text-base text-[#E3E1D9]/90 leading-relaxed">
                <div className="pl-4 border-l-2 border-[#C2272D]">
                  <div className="font-mono text-xs text-[#C2272D] uppercase tracking-widest mb-1">
                    PHASE I • THE MEDICAL CRISIS &amp; THE KARACHI TRAP
                  </div>
                  <p className="text-[#9CA3AF]">
                    <strong className="text-[#E3E1D9]">Saman</strong>, an innocent village daughter from <strong className="text-[#E3E1D9]">Nawabshah</strong>, travels alone to <strong className="text-[#E3E1D9]">Karachi</strong> to work as a live-in caretaker for an affluent woman named <strong className="text-[#E3E1D9]">Farah Begum</strong>—desperate to fund her sick father <strong className="text-[#E3E1D9]">Baba’s</strong> life-saving medication. Upon arrival, Farah confiscates Saman’s original <strong className="text-[#E3E1D9]">CNIC</strong> under the guise of routine employment verification, secretly registering the residence’s tenancy lease directly in Saman’s name.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="pl-4 border-l-2 border-[#2A2B30] hover:border-[#C2272D] transition-colors">
                  <div className="font-mono text-xs text-[#E3E1D9] uppercase tracking-widest mb-1">
                    PHASE II • THE BIOMETRIC NURSERY &amp; THE RED CIRCLE
                  </div>
                  <p className="text-[#9CA3AF]">
                    Inside the mansion, Saman forms a deep maternal bond with Farah’s toddler, <strong className="text-[#E3E1D9]">Yusuf</strong>, yet gradually notices unsettling anomalies: double biometric deadbolts, exterior steel latches, and locked nursery doors. While searching a medical drawer to treat Yusuf’s minor fall, Saman uncovers old newspaper clippings circled in red—proving that &ldquo;Yusuf&rdquo; is actually <strong className="text-[#E3E1D9]">Ali Khan</strong>, a kidnapped child.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="pl-4 border-l-2 border-[#2A2B30] hover:border-[#C2272D] transition-colors">
                  <div className="font-mono text-xs text-[#E3E1D9] uppercase tracking-widest mb-1">
                    PHASE III • THE SACRIFICIAL CHOICE &amp; INSTITUTIONAL BETRAYAL
                  </div>
                  <p className="text-[#9CA3AF]">
                    Though Saman reaches the unlocked front door with a clear chance to flee, her conscience refuses to abandon the toddler. She turns back to save him—walking straight into Farah’s ambush. Farah triggers a corrupt police trap: officers accept a thick cash payoff, confiscate the newspaper clipping, and use the forged CNIC lease to frame Saman alongside an alleged accomplice named <strong className="text-[#E3E1D9]">Tariq</strong>.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="pl-4 border-l-2 border-[#C2272D] bg-[#0A0A0C]/70 p-3.5 rounded-r">
                  <div className="font-mono text-xs text-[#C2272D] uppercase tracking-widest mb-1">
                    PHASE IV • THE PRESS CONFERENCE &amp; THE LOCKUP
                  </div>
                  <p className="text-[#E3E1D9]/90">
                    The film culminates in a televised police press conference praising the &ldquo;kidnapping bust&rdquo; as Farah sits applauding in the back row. While Farah drives away down a Karachi highway in complete freedom, Saman is left sobbing on the floor of a cold Karachi lockup—haunted by who will buy her father’s medication now.
                  </p>
                </div>
              </div>

              {/* Bottom Dossier Quote Banner */}
              <div className="mt-6 pt-5 border-t border-[#2A2B30] flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#9CA3AF]">
                <span>EVIDENCE CHAIN: COMPROMISED BY PRECINCT BRIBE</span>
                <span className="text-[#C2272D] font-bold">[STATUS: UNJUST CONVICTION]</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Interactive Evidence Pin-Board */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#E3E1D9]">
                <Pin className="w-4 h-4 text-[#C2272D] rotate-45" />
                <span>THE EVIDENCE PIN-BOARD // SELECT STAMPED DOCUMENT TO INSPECT</span>
              </div>
              <span className="font-mono text-[11px] text-[#9CA3AF]">3 EXHIBITS LOGGED</span>
            </div>

            {/* 3 Stamped Document Cards */}
            <div className="space-y-3.5">
              {EVIDENCE_DOCUMENTS.map((doc, idx) => {
                const isSelected = selectedDoc.id === doc.id;
                return (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedDoc(doc)}
                    className={`group cursor-pointer rounded-lg p-5 border transition-all duration-200 relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#121316] border-[#C2272D] shadow-crimson'
                        : 'bg-[#121316]/75 border-[#2A2B30] hover:border-red-600/60 hover:bg-[#121316]'
                    }`}
                  >
                    {/* Red Forensic Thread Line on Active */}
                    <div
                      className={`absolute top-0 left-0 bottom-0 w-1 transition-colors ${
                        isSelected ? 'bg-[#C2272D]' : 'bg-transparent group-hover:bg-[#C2272D]/60'
                      }`}
                    />

                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded bg-[#0A0A0C] border border-[#2A2B30]">
                          {getDocIcon(doc.id)}
                        </div>
                        <div>
                          <div className="font-mono text-[11px] text-[#9CA3AF]">
                            STAMPED DOCUMENT 0{idx + 1} • {doc.exhibitCode}
                          </div>
                          <h3 className="font-display text-base sm:text-lg font-bold text-[#E3E1D9] group-hover:text-white">
                            <DecodeText text={doc.title} />
                          </h3>
                        </div>
                      </div>

                      {/* Forensic Rubber Stamp Badge */}
                      <span className="forensic-stamp px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-widest shrink-0 -rotate-2">
                        {doc.stampText}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#9CA3AF] line-clamp-2 pl-11">
                      {doc.summary}
                    </p>

                    <div className="mt-3 pl-11 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
                      <div className="flex items-center gap-3 text-[#9CA3AF]">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C2272D]" /> {doc.dateLogged}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#C2272D]" /> {doc.location}
                        </span>
                      </div>
                      <span className="text-[#C2272D] inline-flex items-center gap-1 font-bold">
                        {isSelected ? '[ACTIVE EXHIBIT]' : '[INSPECT]'}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expanded Forensic Document Inspector Drawer */}
            <motion.div
              key={selectedDoc.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-lg bg-[#0A0A0C] border border-[#C2272D]/60 p-5 sm:p-6 shadow-dossier"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2A2B30] pb-3 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-[#C2272D] uppercase tracking-widest block">
                    FORENSIC LAB ANALYSIS // {selectedDoc.classification}
                  </span>
                  <h4 className="font-mono text-sm sm:text-base font-bold text-[#E3E1D9]">
                    {selectedDoc.subtitle}
                  </h4>
                </div>
                <span className="forensic-stamp px-2 py-0.5 font-mono text-[10px] font-bold">
                  {selectedDoc.stampText}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#E3E1D9]/90 leading-relaxed mb-4">
                {selectedDoc.summary}
              </p>

              {/* Key Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                {Object.entries(selectedDoc.metadata).map(([k, v]) => (
                  <div
                    key={k}
                    className="p-2.5 rounded bg-[#121316] border border-[#2A2B30] font-mono text-xs"
                  >
                    <span className="text-[10px] text-[#9CA3AF] block">{k}</span>
                    <span className="text-[#E3E1D9] font-semibold">{v}</span>
                  </div>
                ))}
              </div>

              {/* Bullet Forensic Findings */}
              <div className="space-y-1.5 border-t border-[#2A2B30] pt-3">
                <div className="font-mono text-[10px] text-[#9CA3AF] uppercase">
                  VERIFIED FORENSIC OBSERVATIONS:
                </div>
                {selectedDoc.forensicNotes.map((note, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 font-mono text-xs text-[#E3E1D9]/90"
                  >
                    <span className="text-[#C2272D] font-bold">0{i + 1}.</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
