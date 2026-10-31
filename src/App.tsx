import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GameCard } from './components/GameCard';
import { GameDetailModal } from './components/GameDetailModal';
import { WithdrawModal } from './components/WithdrawModal';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LivePayoutTicker } from './components/LivePayoutTicker';
import { Game } from './types/game';
import {
  DEFAULT_EXCHANGE_RATE,
  get30MinuteSlotInfo,
  getActiveGamesForSlot,
  GAMES_POOL_A
} from './data/games';
import { RefreshCw, AlertCircle } from 'lucide-react';

export default function App() {
  // Exchange Rate ($1 = TSh 2,350)
  const [exchangeRate] = useState<number>(DEFAULT_EXCHANGE_RATE);

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  // Mfumo wa kubadilisha magemu kila baada ya nusu saa (30 Minutes Rotation)
  const [slotInfo, setSlotInfo] = useState(() => {
    try {
      return get30MinuteSlotInfo();
    } catch (e) {
      console.error('SlotInfo initialization fallback:', e);
      return { slotIndex: 0, minutesRemaining: 30, secondsRemaining: 0, formattedCountdown: '30m 00s' };
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      try {
        setSlotInfo(get30MinuteSlotInfo());
      } catch (err) {
        console.error('Error updating slot:', err);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Magemu 12 yanayofaa kulingana na nusu saa ya sasa (yanabadilika kiotomatiki)
  const activeGames = useMemo<Game[]>(() => {
    try {
      const games = getActiveGamesForSlot(slotInfo.slotIndex);
      if (games && games.length > 0) return games;
      return GAMES_POOL_A;
    } catch (err) {
      console.error('Failed to get active games for slot:', err);
      return GAMES_POOL_A;
    }
  }, [slotInfo.slotIndex]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col pb-16 selection:bg-[#00f0ff] selection:text-black">
      
      {/* 1. Header with Clickable Wallet (opens withdraw / profile requirement modal) */}
      <Header
        onOpenWithdraw={() => setWithdrawModalOpen(true)}
      />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Hero: Direct Install App with 👉 Pointer, Professional Header, Today Games */}
        <Hero />

        {/* 3. Game Cards Grid (2 columns on mobile, 12 fresh games rotating every 30 minutes) */}
        <section className="px-3 sm:px-6 max-w-4xl mx-auto py-1" aria-label="Orodha ya Magemu Rasmi ya GAMES PAY">
          <h2 className="sr-only">Michezo ya Mtandaoni na Zawadi za Pesa Tanzania — GAMES PAY</h2>

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

          {/* Regular Active Games Grid */}
          {!isLoading && activeGames && activeGames.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
              {activeGames.map((game, index) => (
                <GameCard
                  key={`${slotInfo.slotIndex}-${game.id}`}
                  game={game}
                  index={index}
                  exchangeRate={exchangeRate}
                  onSelectGame={(g) => setSelectedGame(g)}
                />
              ))}
            </div>
          ) : !isLoading && !loadError ? (
            <div className="py-12 text-center">
              <p className="text-sm text-slate-400">Hakuna magemu yaliyopatikana kwa sasa.</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-3 px-4 py-1.5 rounded-lg bg-cyan-600 text-white text-xs font-bold"
              >
                Pakia Upya
              </button>
            </div>
          ) : null}
        </section>
      </main>

      {/* 4. Footer with Powered by Cp3 👑 */}
      <Footer />

      {/* 5. Fixed Bottom Ticker: LIVE PAYOUT */}
      <LivePayoutTicker />

      {/* 6. Real WhatsApp Floating Button with CUSTOMER CARE Tag */}
      <WhatsAppButton />

      {/* 7. Game Details & Profile Registration Modal */}
      <GameDetailModal
        game={selectedGame}
        exchangeRate={exchangeRate}
        onClose={() => setSelectedGame(null)}
      />

      {/* 8. Withdraw Requirement Modal (When user clicks balance/toa) */}
      <WithdrawModal
        isOpen={withdrawModalOpen}
        onClose={() => setWithdrawModalOpen(false)}
      />

    </div>
  );
}
