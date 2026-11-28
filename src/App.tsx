import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GameCard } from './components/GameCard';
import { GameDetailModal } from './components/GameDetailModal';
import { WithdrawModal } from './components/WithdrawModal';
import { CommentSection } from './components/CommentSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LivePayoutTicker } from './components/LivePayoutTicker';
import { Game, GameCategory } from './types/game';
import {
  DEFAULT_EXCHANGE_RATE,
  GAME_CATEGORIES,
  getDailyPoolIndex,
  getActiveGamesForDay,
  ALL_DAILY_GAMES,
  INITIAL_GAMES,
} from './data/games';
import { RefreshCw, AlertCircle } from 'lucide-react';

export default function App() {
  const [exchangeRate] = useState<number>(DEFAULT_EXCHANGE_RATE);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'Zote' | GameCategory>('Zote');

  const [dayIndex, setDayIndex] = useState<number>(() => {
    try {
      return getDailyPoolIndex();
    } catch (e) {
      console.error('DailyPoolIndex initialization fallback:', e);
      return 0;
    }
  });

  const [isLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      if (params.has('url') || params.has('ref_url')) {
        params.delete('url');
        params.delete('ref_url');
        const cleanQuery = params.toString();
        const cleanUrl = window.location.pathname + (cleanQuery ? `?${cleanQuery}` : '') + window.location.hash;
        window.history.replaceState({}, '', cleanUrl);
      }
    }

    // Check once per minute so games switch automatically when a new day starts
    const timer = setInterval(() => {
      try {
        const nextDay = getDailyPoolIndex();
        setDayIndex((prev) => (prev !== nextDay ? nextDay : prev));
      } catch (err) {
        console.error('Error updating daily games:', err);
      }
    }, 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  const activeGames = useMemo<Game[]>(() => {
    try {
      const games = getActiveGamesForDay(dayIndex);
      if (games && games.length > 0) return games;
      return INITIAL_GAMES;
    } catch (err) {
      console.error('Failed to get active games for day:', err);
      return INITIAL_GAMES;
    }
  }, [dayIndex]);

  const displayedGames = useMemo<Game[]>(() => {
    if (selectedCategory === 'Zote') {
      return activeGames;
    }
    const matchingActive = activeGames.filter((g) => g.category === selectedCategory);
    if (matchingActive.length > 0) {
      return matchingActive;
    }
    // Deduplicate by image/name when pulling category matches from other days
    const matches = ALL_DAILY_GAMES.filter((g) => g.category === selectedCategory);
    const seen = new Set<string>();
    return matches.filter((g) => {
      if (seen.has(g.name)) return false;
      seen.add(g.name);
      return true;
    }).slice(0, 8);
  }, [activeGames, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#12122B] text-slate-100 flex flex-col pb-16 selection:bg-[#00f0ff] selection:text-black">
      
      {/* 1. Header with TENO PLAY & Toa Pesa */}
      <Header
        onOpenWithdraw={() => setWithdrawModalOpen(true)}
      />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Compact Hero: Date + Install App, Simple Headline, Summary Bar */}
        <Hero
          onOpenWithdraw={() => setWithdrawModalOpen(true)}
        />

        {/* 3. Michezo ya Leo + Interactive Category Filter Tabs */}
        <section className="px-3.5 sm:px-6 max-w-5xl mx-auto pt-1 pb-4" aria-label="Orodha ya Magemu Rasmi ya TENO PLAY">
          <div className="flex items-center gap-2.5 mb-2.5">
            <h2 className="text-sm sm:text-base font-extrabold text-white whitespace-nowrap shrink-0">
              Michezo ya Leo
            </h2>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 flex-1" role="tablist" aria-label="Chuja kwa kategoria">
              {GAME_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer min-h-[32px] ${
                      isActive
                        ? 'bg-[#00d8f6] text-[#040814]'
                        : 'bg-[#10172b] text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Loading state indicator */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 text-center text-slate-400">
              <RefreshCw className="w-8 h-8 text-[#00f0ff] animate-spin mb-3" />
              <p className="text-sm font-semibold text-slate-300">Inapakia orodha ya magemu ya leo...</p>
            </div>
          )}

          {/* Error fallback state */}
          {loadError && !isLoading && (
            <div className="mx-auto my-4 max-w-md p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-center">
              <AlertCircle className="w-8 h-8 text-rose-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-white mb-1">Magemu hayajaweza kupakuliwa</h3>
              <p className="text-xs text-slate-300 mb-3">{loadError}</p>
              <button
                onClick={() => {
                  setLoadError(null);
                  window.location.reload();
                }}
                className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all"
              >
                Jaribu Tena (Refresh)
              </button>
            </div>
          )}

          {/* Responsive 2-column mobile / 3-4 column desktop Game Cards Grid */}
          {!isLoading && displayedGames && displayedGames.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
              {displayedGames.map((game, index) => (
                <GameCard
                  key={`day-${dayIndex}-${game.id}`}
                  game={game}
                  index={index}
                  exchangeRate={exchangeRate}
                  onSelectGame={(g) => setSelectedGame(g)}
                />
              ))}
            </div>
          ) : !isLoading && !loadError ? (
            <div className="py-12 text-center">
              <p className="text-sm text-slate-400">Hakuna magemu yaliyopatikana kwa kategoria hii.</p>
              <button
                onClick={() => setSelectedCategory('Zote')}
                className="mt-3 px-4 py-1.5 rounded-lg bg-cyan-600 text-white text-xs font-bold cursor-pointer"
              >
                Onyesha Magemu Yote
              </button>
            </div>
          ) : null}
        </section>

        {/* 4. Private Session-Only Comment Section at bottom */}
        <CommentSection />
      </main>

      {/* 5. Footer with Powered by Cp3 👑 */}
      <Footer />

      {/* 6. Fixed Bottom Ticker: LIVE PAYOUT */}
      <LivePayoutTicker />

      {/* 7. Real WhatsApp Floating Button with CUSTOMER CARE Tag */}
      <WhatsAppButton />

      {/* 8. Game Details & Account Registration Modal */}
      <GameDetailModal
        game={selectedGame}
        exchangeRate={exchangeRate}
        onClose={() => setSelectedGame(null)}
      />

      {/* 9. Withdraw Requirement Modal */}
      <WithdrawModal
        isOpen={withdrawModalOpen}
        onClose={() => setWithdrawModalOpen(false)}
      />

    </div>
  );
}
