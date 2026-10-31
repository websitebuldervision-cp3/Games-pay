import React from 'react';
import { Gamepad2, UserCheck, Trophy, Banknote, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { REGISTRATION_URL, REGISTRATION_FEE_TZS } from '../data/games';
import { formatTZS } from '../utils/date';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Chagua Gemu Lako',
      icon: Gamepad2,
      description:
        'Chagua moja kati ya magemu 12 rasmi yanayopatikana kwenye jukwaa kulingana na kategoria uipendayo kama Action, Racing, Adventure, au Sports.',
      highlight: 'Katalogi ya Magemu 12'
    },
    {
      number: '02',
      title: 'Tengeneza Profile Yako',
      icon: UserCheck,
      description:
        `Gusa kitufe cha usajili na ukamilishe ada ya profile ya TSh ${formatTZS(REGISTRATION_FEE_TZS)} kupitia Moxera Agencies Cp3 ili kuwezesha akaunti na utambulisho wako salama.`,
      highlight: `Ada: TSh ${formatTZS(REGISTRATION_FEE_TZS)}`
    },
    {
      number: '03',
      title: 'Cheza na Timiza Malengo',
      icon: Trophy,
      description:
        'Kamilisha misheni au vigezo vya ushindi vilivyotajwa kwenye gemu uliyochagua. Mfumo huthibitisha matokeo ya gemu kiotomatiki.',
      highlight: 'Ushindi wa Uwazi'
    },
    {
      number: '04',
      title: 'Pokea Zawadi Kwenye Simu',
      icon: Banknote,
      description:
        'Pindi unapothibitishwa kushinda, zawadi yako ya fedha inatumwa moja kwa moja kwenye akaunti yako ya M-Pesa, Tigo Pesa, HaloPesa, Azam Pesa au Airtel Money.',
      highlight: 'Dakika 5 - 15'
    }
  ];

  return (
    <section id="jinsi-inavyofanya-kazi" className="py-16 bg-[#080c16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Mchakato Rahisi wa Hatua 4</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Jinsi GAMES PAY Inavyofanya Kazi
          </h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Mfumo wa uwazi unaowezesha wachezaji wote kushiriki na kupokea zawadi kwa kuzingatia kanuni na masharti ya uchezaji.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-[#0d1322] border border-slate-800/90 p-5 flex flex-col justify-between hover:border-purple-500/50 transition-all group"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-700 group-hover:text-purple-400 transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-amber-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium">{step.highlight}</span>
                  <span className="text-purple-400 font-bold">Hatua {idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Action */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Uko Tayari Kuanza Safari Yako ya Michezo?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Tengeneza profile yako sasa kupitia kiungo rasmi cha usajili ili kufungua ufikiaji wa magemu yote na kupokea kitambulisho chako cha mchezaji.
            </p>
          </div>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center gap-2 shrink-0 shadow-md shadow-amber-500/20"
          >
            <span>TENGENEZA PROFILE (TSh 15,000)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
