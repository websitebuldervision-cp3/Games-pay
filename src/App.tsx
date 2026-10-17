import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GameCard } from './components/GameCard';
import { GameDetailModal } from './components/GameDetailModal';
import { WithdrawModal } from './components/WithdrawModal';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LivePayoutTicker } from './components/LivePayoutTicker';
import { AdminModal } from './components/AdminModal';
import { Game } from './types/game';
import { INITIAL_GAMES, DEFAULT_EXCHANGE_RATE } from './data/games';

export default function App() {
  // Exchange Rate State (Configurable in one place)
  const [exchangeRate, setExchangeRate] = useState<number>(() => {
    const saved = localStorage.getItem('gamespay_exchange_rate');
    return saved ? parseFloat(saved) : DEFAULT_EXCHANGE_RATE;
  });

  // Games Catalog State
  const [games, setGames] = useState<Game[]>(() => {
    const saved = localStorage.getItem('gamespay_games_catalog');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_GAMES;
      }
    }
    return INITIAL_GAMES;
  });

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const handleUpdateExchangeRate = (rate: number) => {
    setExchangeRate(rate);
    localStorage.setItem('gamespay_exchange_rate', rate.toString());
  };

  const handleAddGame = (newGame: Game) => {
    const updated = [newGame, ...games];
    setGames(updated);
    localStorage.setItem('gamespay_games_catalog', JSON.stringify(updated));
  };

  const handleToggleGameActive = (gameId: string) => {
    const updated = games.map((g) =>
      g.id === gameId ? { ...g, active: !g.active } : g
    );
    setGames(updated);
    localStorage.setItem('gamespay_games_catalog', JSON.stringify(updated));
  };

  const handleResetCatalog = () => {
    setGames(INITIAL_GAMES);
    setExchangeRate(DEFAULT_EXCHANGE_RATE);
    localStorage.removeItem('gamespay_games_catalog');
    localStorage.removeItem('gamespay_exchange_rate');
  };

  const activeGames = games.filter((g) => g.active);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col pb-16 selection:bg-[#00f0ff] selection:text-black">
      
      {/* 1. Header with Clickable Wallet (opens withdraw / profile requirement modal) */}
      <Header
        onOpenAdmin={() => setAdminModalOpen(true)}
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

      {/* 9. Admin Settings Modal */}
      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        games={games}
        exchangeRate={exchangeRate}
        onUpdateExchangeRate={handleUpdateExchangeRate}
        onAddGame={handleAddGame}
        onToggleGameActive={handleToggleGameActive}
        onResetCatalog={handleResetCatalog}
      />

    </div>
  );
}
