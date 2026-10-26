import React, { useState, useEffect } from 'react';
import { Download, CheckCircle, ArrowDown } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { REGISTRATION_URL } from '../data/games';

interface HeroProps {
  countdown?: string;
}

export const Hero: React.FC<HeroProps> = ({ countdown }) => {
  const { isInstalled, install } = usePWAInstall();
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');
  const [shortDate, setShortDate] = useState('');

  useEffect(() => {
    // Dynamic real date format: e.g. "Mon, Oct 26"
    const now = new Date();
    const shortDay = now.toLocaleDateString('en-US', { weekday: 'short' });
    const shortMonth = now.toLocaleDateString('en-US', { month: 'short' });
    const dayNum = now.getDate();
    setShortDate(`${shortDay}, ${shortMonth} ${dayNum}`);
  }, []);

  const handleInstallClick = async () => {
    setDownloadState('downloading');

    // 1. Trigger Direct APK File Download immediately into user's phone
    if (typeof document !== 'undefined') {
      const link = document.createElement('a');
      link.href = './GAMES_PAY.apk';
      link.download = 'GAMES_PAY.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // 2. Also trigger native browser PWA install prompt if supported
    try {
      await install();
    } catch {
      // Ignored - APK download already active
    }

    // 3. Update feedback state
    setTimeout(() => {
      setDownloadState('completed');
    }, 1200);

    setTimeout(() => {
      setDownloadState('idle');
    }, 6000);
  };

  return (
    <section className="pt-2.5 pb-1 px-3 sm:px-6 max-w-4xl mx-auto">
      
      {/* 1. Small Boxy Direct Install App Button */}
      <div className="flex flex-col items-center justify-center mb-2">
        <button
          onClick={handleInstallClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-extrabold text-[11px] text-white bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-600 hover:from-purple-600 hover:to-cyan-500 shadow-md shadow-cyan-950/40 border border-cyan-400/40 transition-all transform active:scale-95 cursor-pointer uppercase tracking-wider"
        >
          {downloadState === 'downloading' ? (
            <>
              <ArrowDown className="w-3.5 h-3.5 text-[#00f0ff] animate-bounce" />
              <span>Inapakua App...</span>
            </>
          ) : downloadState === 'completed' ? (
            <>
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Imepakuliwa Kwenye Simu!</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>{isInstalled ? 'App Imewekwa' : 'Install App'}</span>
            </>
          )}
        </button>

        {downloadState === 'completed' && (
          <div className="text-[10px] text-emerald-300 font-bold mt-1 animate-in fade-in">
            ✓ Faili la GAMES PAY limeingia kwenye simu yako! Fungua uisakinishe.
          </div>
        )}
      </div>

      {/* 2. Main Hero Box Container with Surrounded Glow */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#070d1e] to-[#040814] border border-cyan-500/30 p-3.5 sm:p-4 shadow-[0_0_25px_rgba(0,240,255,0.15)] text-center overflow-hidden">
        
        {/* Ambient Top Glow Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-16 bg-gradient-to-b from-[#00f0ff]/20 to-transparent blur-2xl pointer-events-none" />

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-2">
          Play Games & <span className="text-[#ff007a] drop-shadow-[0_0_12px_rgba(255,0,122,0.8)]">Get Paid</span>{' '}
          <span className="text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]">Instantly</span>
        </h1>

        {/* Notice Box: In clear Swahili using 'reward' instead of 'zawadi' */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-[#091124]/90 border border-amber-500/40 text-xs sm:text-sm text-slate-200 leading-relaxed mb-3 text-center shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <span className="inline-block mr-1 text-base">💰</span>
          <span>
            Pata kuanzia <strong className="text-amber-300 font-extrabold font-mono">TSh 47,000/=</strong> na kuendelea kwa siku kama <strong className="text-cyan-300 font-extrabold">reward</strong> ya kucheza magemu, fungua profile yako uweze kuanza leo kwa <strong className="text-amber-300 font-extrabold font-mono">15,000</strong> pekee
          </span>
        </div>

        {/* Requested Button: GUSA HAPA TENGENEZA PROFILE YA GAMING */}
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-[#ff007a] via-[#e6006c] to-[#7928ca] hover:from-[#ff1a8c] hover:to-[#9333ea] shadow-[0_0_25px_rgba(255,0,122,0.5)] transition-all transform active:scale-[0.99] cursor-pointer tracking-wider uppercase border border-pink-400/30"
        >
          <span className="text-base font-black leading-none">↗</span>
          <span>GUSA HAPA TENGENEZA PROFILE YA GAMING</span>
        </a>

      </div>

      {/* 3. Professional Sleek Date Row with 30-Minute Rotation Countdown */}
      <div className="flex items-center justify-center my-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#070e22]/90 border border-cyan-500/30 text-xs shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_6px_#00f0ff]" />
          <span className="font-extrabold uppercase tracking-wider text-white text-[11px]">
            Today Games
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-[#00f0ff] font-bold font-mono text-[11px] tracking-tight">
            {shortDate}
          </span>
          {countdown && (
            <>
              <span className="text-slate-600">·</span>
              <span className="text-amber-400 font-mono text-[10px] font-bold tracking-tight" title="Magemu mapya yanabadilika kila baada ya nusu saa">
                Mpya: {countdown}
              </span>
            </>
          )}
        </div>
      </div>

    </section>
  );
};
