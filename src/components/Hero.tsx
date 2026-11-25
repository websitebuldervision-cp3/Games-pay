import React, { useState, useEffect } from 'react';
import { Download, CheckCircle, ArrowDown } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface HeroProps {
  onOpenWithdraw: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWithdraw }) => {
  const { isInstalled, install } = usePWAInstall();
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');
  const [shortDate, setShortDate] = useState('');
  const [showPointer, setShowPointer] = useState(false);
  const [isPointerAnimating, setIsPointerAnimating] = useState(true);

  useEffect(() => {
    const now = new Date();
    const shortDay = now.toLocaleDateString('en-US', { weekday: 'short' });
    const shortMonth = now.toLocaleDateString('en-US', { month: 'short' });
    const dayNum = now.getDate();
    setShortDate(`${shortDay}, ${shortMonth} ${dayNum}`);

    try {
      const hasDownloaded = localStorage.getItem('gamepays_app_downloaded');
      if (!hasDownloaded && !isInstalled) {
        setShowPointer(true);
      }
    } catch {
      setShowPointer(true);
    }
  }, [isInstalled]);

  // Point every 3 seconds for first-time visitors who have not installed yet
  useEffect(() => {
    if (!showPointer) return;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const interval = setInterval(() => {
      setIsPointerAnimating(true);
      timeoutId = setTimeout(() => {
        setIsPointerAnimating(false);
      }, 1500);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showPointer]);

  const handleInstallClick = async () => {
    setDownloadState('downloading');

    try {
      localStorage.setItem('gamepays_app_downloaded', 'true');
    } catch {
      // ignore storage errors
    }
    setShowPointer(false);

    if (typeof document !== 'undefined') {
      const link = document.createElement('a');
      link.href = '/GAMES_PAY.apk';
      link.download = 'TENO_PLAY.apk';
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
    <section className="pt-2 pb-1.5 px-3.5 sm:px-6 max-w-5xl mx-auto text-center">
      
      {/* 1. Compact Top Row: Date + Install App with 👉 Pointer */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          TODAY GAMES · <span className="text-slate-200">{shortDate}</span>
        </div>

        <div className="inline-flex items-center gap-1.5">
          {showPointer && !isInstalled && downloadState !== 'completed' && (
            <span
              className={`text-base sm:text-lg select-none transition-transform duration-300 ${
                isPointerAnimating ? 'scale-125 translate-x-0.5' : 'scale-100 translate-x-0'
              }`}
              aria-hidden="true"
            >
              👉
            </span>
          )}

          <button
            onClick={handleInstallClick}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[11px] text-white bg-[#101933] hover:bg-[#162347] border border-cyan-500/40 transition-all transform active:scale-95 cursor-pointer uppercase tracking-wider min-h-[34px] ${
              showPointer && isPointerAnimating
                ? 'ring-2 ring-[#00f0ff] ring-offset-1 ring-offset-[#050814]'
                : ''
            }`}
          >
            {downloadState === 'downloading' ? (
              <>
                <ArrowDown className="w-3.5 h-3.5 text-[#00f0ff] animate-bounce" />
                <span>Downloading App...</span>
              </>
            ) : downloadState === 'completed' ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>App Installed!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>{isInstalled ? 'Installed' : 'Install App'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {downloadState === 'completed' && (
        <div className="text-[11px] text-emerald-300 font-semibold mb-1.5">
          ✓ TENO PLAY app downloaded! Open to install.
        </div>
      )}

      {/* 2. Simple Single-Line Headline */}
      <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug mb-2 text-balance">
        Play Games &amp; <span className="text-[#00f0ff]">Get Paid Instantly</span>
      </h1>

      {/* 3. Compact 3-Column Summary Cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto mb-2">
        <div className="rounded-xl bg-[#0c1326] border border-slate-800/90 py-2 px-1.5 sm:p-3 flex flex-col items-center justify-center">
          <div className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            NET PROFIT
          </div>
          <div className="text-xs sm:text-base font-extrabold text-white font-mono tabular-nums mt-0.5">
            TZS 0
          </div>
        </div>

        <div className="rounded-xl bg-[#0f1730] border border-cyan-500/40 py-2 px-1.5 sm:p-3 flex flex-col items-center justify-between gap-1">
          <div>
            <div className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              BALANCE
            </div>
            <div className="text-xs sm:text-base font-extrabold text-[#00f0ff] font-mono tabular-nums">
              TZS 0
            </div>
          </div>
          <button
            onClick={onOpenWithdraw}
            className="w-full py-1 px-2 rounded-lg bg-gradient-to-r from-[#ff007a] to-[#e11d48] hover:brightness-110 text-white text-[10px] sm:text-xs font-bold transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Toa Pesa
          </button>
        </div>

        <div className="rounded-xl bg-[#0c1326] border border-slate-800/90 py-2 px-1.5 sm:p-3 flex flex-col items-center justify-center">
          <div className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            WITHDRAWAL
          </div>
          <div className="text-xs sm:text-base font-extrabold text-white font-mono tabular-nums mt-0.5">
            TZS 0
          </div>
        </div>
      </div>

    </section>
  );
};
