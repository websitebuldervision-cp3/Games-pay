import React from 'react';
import { Smartphone, Zap, ShieldCheck, Check } from 'lucide-react';
import { MOBILE_NETWORKS } from '../data/networks';

export const PaymentNetworks: React.FC = () => {
  return (
    <section id="mitandao" className="py-16 bg-[#0a0f1d] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Smartphone className="w-4 h-4" />
            <span>Mitandao ya Malipo Tanzania</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Pokea Zawadi Moja kwa Moja Kwenye Simu
          </h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            GAMES PAY inaunganishwa na mitandao yote 5 mikubwa ya mawasiliano nchini Tanzania kuhakikisha unapokea fedha zako kwa haraka na usalama.
          </p>
        </div>

        {/* 5 Network Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MOBILE_NETWORKS.map((net) => (
            <div
              key={net.name}
              className="rounded-xl bg-[#0d1322] border border-slate-800 p-4 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-200 group"
            >
              <div>
                {/* Network Header */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-white text-xs shadow-inner"
                    style={{ backgroundColor: net.brandColor }}
                  >
                    {net.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Imethibitishwa
                  </span>
                </div>

                {/* Network Name & Provider */}
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {net.name}
                </h3>
                <div className="text-xs text-slate-400 font-medium mb-3">
                  {net.provider}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {net.description}
                </p>
              </div>

              {/* Bottom Specs */}
              <div className="pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Muda wa Malipo:</span>
                  <span className="font-bold text-white flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    {net.speed}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Makato ya Kutoa:</span>
                  <span className="font-bold text-emerald-400">TSh 0 (Bure)</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Note Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              Malipo yote yanalindwa na mfumo wa usalama wa miamala na kuthibitishwa kwa SMS mara moja. Hakuna taarifa za siri (PIN) zinazohitajika.
            </span>
          </div>
          <div className="shrink-0 font-semibold text-purple-300">
            Mfumo wa Utoaji: Masaa 24/7
          </div>
        </div>

      </div>
    </section>
  );
};
