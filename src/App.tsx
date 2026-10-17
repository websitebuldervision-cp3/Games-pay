import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GameCard } from './components/GameCard';
import { GameDetailModal } from './components/GameDetailModal';
import { WithdrawModal } from './components/WithdrawModal';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LivePayoutTicker } from './components/LivePayoutTicker';
import { Game } from './types/game';
import { INITIAL_GAMES, DEFAULT_EXCHANGE_RATE } from './data/games';

export default function App() {
  // Exchange Rate ($1 = TSh 2,350)
  const [exchangeRate] = useState<number>(DEFAULT_EXCHANGE_RATE);

  // Fixed Official 12 Games Catalog (Admin panel removed)
  const games: Game[] = INITIAL_GAMES;

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const activeGames = games.filter((g) => g.active);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col pb-16 selection:bg-[#00f0ff] selection:text-black">
      
      {/* 1. Header with Clickable Wallet (opens withdraw / profile requirement modal) */}
      <Header
        onOpenWithdraw={() => setWithdrawModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero: Small boxy Install App, Swahili notice with 'reward', GUSA HAPA TENGENEZA PROFILE YA GAMING, compact date (Sat, Oct 17) */}
        <Hero />

        {/* 3. Game Cards Grid (Compact 2 columns on mobile so 4+ games are immediately in view) */}
        <section className="px-3 sm:px-6 max-w-4xl mx-auto py-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            {activeGames.map((game, index) => (
              <GameCard
                key={game.id}
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

      {/* 7. Game Details & Profile Registration Modal (No play game now button, no long game instructions) */}
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
