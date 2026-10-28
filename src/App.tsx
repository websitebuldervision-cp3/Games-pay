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
  getActiveGamesForSlot
} from './data/games';

export default function App() {
  // Exchange Rate ($1 = TSh 2,350)
  const [exchangeRate] = useState<number>(DEFAULT_EXCHANGE_RATE);

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  // Mfumo wa kubadilisha magemu kila baada ya nusu saa (30 Minutes Rotation)
  const [slotInfo, setSlotInfo] = useState(() => get30MinuteSlotInfo());

  useEffect(() => {
    const timer = setInterval(() => {
      setSlotInfo(get30MinuteSlotInfo());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Magemu 12 yanayofaa kulingana na nusu saa ya sasa (yanabadilika kiotomatiki)
  const activeGames = useMemo(() => {
    return getActiveGamesForSlot(slotInfo.slotIndex);
  }, [slotInfo.slotIndex]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col pb-16 selection:bg-[#00f0ff] selection:text-black">
      
      {/* 1. Header with Clickable Wallet (opens withdraw / profile requirement modal) */}
      <Header
        onOpenWithdraw={() => setWithdrawModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero: Direct Install App with 👉 Pointer, Professional Header, Today Games */}
        <Hero />

        {/* 3. Game Cards Grid (2 columns on mobile, 12 fresh games rotating every 30 minutes) */}
        <section className="px-3 sm:px-6 max-w-4xl mx-auto py-1">
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
