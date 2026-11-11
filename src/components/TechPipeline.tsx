import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Film, Sparkles, Compass, AudioWaveform, CheckCircle2, Layers } from 'lucide-react';
import { TECH_PIPELINE } from '../data/dossierData';
import { DecodeText } from './DecodeText';

export const TechPipeline: React.FC = () => {
  const getPipelineIcon = (id: string) => {
    switch (id) {
      case 'video-diffusion':
        return <Film className="w-5 h-5 text-[#C2272D]" />;
      case 'prompt-architecture':
        return <Sparkles className="w-5 h-5 text-[#C2272D]" />;
      case 'spatial-alignment':
        return <Compass className="w-5 h-5 text-[#C2272D]" />;
      default:
        return <AudioWaveform className="w-5 h-5 text-[#C2272D]" />;
    }
  };

  return (
    <section
      id="pipeline"
      className="relative py-24 border-b border-[#2A2B30] bg-[#0A0A0C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#2A2B30]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C2272D] tracking-widest">
              <span>[04. PIPELINE // GENERATIVE AI ARCHITECTURE]</span>
              <span className="text-[#2A2B30]">•</span>
              <span className="text-[#9CA3AF]">AICT OPEN ENDED LAB-1</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#E3E1D9] tracking-tight">
              <DecodeText text="AI GENERATIVE ENGINEERING PIPELINE" />
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#121316] border border-[#2A2B30] font-mono text-xs text-[#9CA3AF]">
            <Cpu className="w-4 h-4 text-[#C2272D]" />
            <span>4-STAGE MULTIMODAL PRODUCTION STACK</span>
          </div>
        </div>

        {/* 4 Structured Technical Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_PIPELINE.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-lg bg-[#121316] border border-[#2A2B30] hover:border-red-600/60 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between shadow-dossier"
            >
              <div>
                {/* Top Step Code & Metric Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#2A2B30]">
                  <div className="flex items-center gap-2.5 font-mono text-xs text-[#E3E1D9]">
                    <span className="p-2 rounded bg-[#0A0A0C] border border-[#2A2B30] group-hover:border-[#C2272D]/60 transition-colors">
                      {getPipelineIcon(module.id)}
                    </span>
                    <span className="font-bold tracking-wider">{module.stepCode}</span>
                  </div>

                  <span className="px-2.5 py-1 rounded bg-[#0A0A0C] border border-[#2A2B30] font-mono text-[10px] text-[#C2272D] font-bold">
                    {module.metricValue}
                  </span>
                </div>

                {/* Title & Category */}
                <h3 className="font-display text-2xl font-bold text-[#E3E1D9] group-hover:text-white mb-1">
                  <DecodeText text={module.title} />
                </h3>
                <p className="font-mono text-xs text-[#9CA3AF] mb-4">{module.category}</p>

                {/* Tool Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {module.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded bg-[#C2272D]/15 border border-[#C2272D]/40 font-mono text-xs text-[#E3E1D9] font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-[#E3E1D9]/90 leading-relaxed mb-6">
                  {module.description}
                </p>
              </div>

              {/* Engineering Specifications List */}
              <div className="pt-4 border-t border-[#2A2B30] space-y-2">
                <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C2272D]" />
                  <span>TECHNICAL IMPLEMENTATION PARAMETERS:</span>
                </div>
                {module.engineeringSpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 font-mono text-xs text-[#9CA3AF] group-hover:text-[#E3E1D9]/90 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C2272D] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* End-to-End Architecture Flow Diagram Bar */}
        <div className="mt-10 rounded-lg bg-[#121316] border border-[#2A2B30] p-5 sm:p-6">
          <div className="font-mono text-xs text-[#9CA3AF] uppercase tracking-widest mb-4">
            SYNCHRONIZED PRODUCTION DATAFLOW // GEMINI → GOOGLE FLOW → AI STUDIO → CAPCUT AI &amp; ADOBE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 rounded bg-[#0A0A0C] border border-[#2A2B30]">
              <span className="text-[#C2272D] font-bold block">01. SCRIPT &amp; PROMPTS</span>
              <span className="text-[#E3E1D9]">Gemini 23-Scene Continuity Matrix</span>
            </div>
            <div className="p-3 rounded bg-[#0A0A0C] border border-[#2A2B30]">
              <span className="text-[#C2272D] font-bold block">02. SPATIAL LOCK</span>
              <span className="text-[#E3E1D9]">Reference Perspective Conditioning</span>
            </div>
            <div className="p-3 rounded bg-[#0A0A0C] border border-[#2A2B30]">
              <span className="text-[#C2272D] font-bold block">03. MOTION SYNTHESIS</span>
              <span className="text-[#E3E1D9]">Google Flow + CapCut AI Grading</span>
            </div>
            <div className="p-3 rounded bg-[#0A0A0C] border border-[#2A2B30]">
              <span className="text-[#C2272D] font-bold block">04. VOCAL &amp; SCORE</span>
              <span className="text-[#E3E1D9]">Google AI Studio + Adobe Mastering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
