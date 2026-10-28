import React, { useState, useEffect } from 'react';
import { Download, CheckCircle, ArrowDown } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const Hero: React.FC = () => {
  const { isInstalled, install } = usePWAInstall();
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');
  const [shortDate, setShortDate] = useState('');
  const [showPointer, setShowPointer] = useState(false);
  const [isPointerAnimating, setIsPointerAnimating] = useState(true);

  useEffect(() => {
    // Dynamic real date format: e.g. "Wed, Oct 28"
    const now = new Date();
    const shortDay = now.toLocaleDateString('en-US', { weekday: 'short' });
    const shortMonth = now.toLocaleDateString('en-US', { month: 'short' });
    const dayNum = now.getDate();
    setShortDate(`${shortDay}, ${shortMonth} ${dayNum}`);

    // Angalia kama mtumiaji tayari amedownload app au ni mara yake ya kwanza
    try {
      const hasDownloaded = localStorage.getItem('gamepays_app_downloaded');
      if (!hasDownloaded && !isInstalled) {
        setShowPointer(true);
      }
    } catch {
      setShowPointer(true);
    }
  }, [isInstalled]);

  // Kila baada ya sekunde 3, fanya pointer i-point kwa nguvu kuvuta umakini
  useEffect(() => {
    if (!showPointer) return;
    const interval = setInterval(() => {
      setIsPointerAnimating(true);
      const timer = setTimeout(() => {
        setIsPointerAnimating(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, 3000);

    return () => clearInterval(interval);
  }, [showPointer]);

  const handleInstallClick = async () => {
    setDownloadState('downloading');

    // Hifadhi ili pointer isitokee tena akishadownload
    try {
      localStorage.setItem('gamepays_app_downloaded', 'true');
    } catch {}
    setShowPointer(false);

    // Trigger Direct APK File Download immediately into user's phone
    if (typeof document !== 'undefined') {
      const link = document.createElement('a');
      link.href = '/GAMES_PAY.apk';
      link.download = 'GAMES_PAY.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    try {
      await install();
    } catch {
      // Ignored
    }

    setTimeout(() => {
      setDownloadState('completed');
    }, 1200);

    setTimeout(() => {
      setDownloadState('idle');
    }, 6000);
  };

  return (
    <section className="pt-2 pb-1 px-3 sm:px-6 max-w-4xl mx-auto text-center">
      
      {/* 1. Small Boxy Direct Install App Button with Animated 👉 Pointer for first-time visitors */}
      <div className="flex flex-col items-center justify-center mb-2">
        <div className="relative inline-flex items-center justify-center gap-2">
          
          {/* Pointer 👉 ikipoint kitufe cha Install App kila baada ya sekunde 3 */}
          {showPointer && !isInstalled && downloadState !== 'completed' && (
            <div className={`flex items-center gap-1 transition-transform duration-300 ${isPointerAnimating ? 'scale-125 translate-x-1' : 'scale-100 translate-x-0'}`}>
              <span className="text-xl sm:text-2xl filter drop-shadow-[0_0_10px_rgba(255,215,0,0.9)] animate-bounce select-none">
                👉
              </span>
              <span className="text-[10px] font-black text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.4)] whitespace-nowrap hidden xs:inline-block">
                Download Hapa
              </span>
            </div>
          )}

          <button
            onClick={handleInstallClick}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-extrabold text-[11px] text-white bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-600 hover:from-purple-600 hover:to-cyan-500 shadow-md shadow-cyan-950/40 border border-cyan-400/40 transition-all transform active:scale-95 cursor-pointer uppercase tracking-wider ${showPointer && isPointerAnimating ? 'ring-2 ring-[#00f0ff] ring-offset-1 ring-offset-[#030712]' : ''}`}
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
        </div>

        {downloadState === 'completed' && (
          <div className="text-[10px] text-emerald-300 font-bold mt-1 animate-in fade-in">
            ✓ Faili la GAMES PAY limeingia kwenye simu yako! Fungua uisakinishe.
          </div>
        )}
      </div>

      {/* 2. Sleek, Professional Header Headline */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#070d1e] to-[#040814] border border-cyan-500/25 py-3 px-4 shadow-[0_0_20px_rgba(0,240,255,0.12)] mb-2 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-10 bg-gradient-to-b from-[#00f0ff]/15 to-transparent blur-xl pointer-events-none" />
        
        <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-tight">
          Play Games & <span className="text-[#ff007a] drop-shadow-[0_0_12px_rgba(255,0,122,0.8)]">Get Paid</span>{' '}
          <span className="text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]">Instantly</span>
        </h1>
        <p className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">
          Chagua gemu lolote hapa chini, bonyeza <strong className="text-white">PLAY GAME</strong> kuanza kucheza na kulipwa moja kwa moja kwenye simu yako.
        </p>
      </div>

      {/* 3. Professional Sleek Date Row (Bila maneno ya countdown, inabadilika automatically) */}
      <div className="flex items-center justify-center my-1.5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#070e22]/90 border border-cyan-500/30 text-xs shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_6px_#00f0ff]" />
          <span className="font-extrabold uppercase tracking-wider text-white text-[11px]">
            Today Games
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-[#00f0ff] font-bold font-mono text-[11px] tracking-tight">
            {shortDate}
          </span>
        </div>
      </div>

    </section>
  );
};
