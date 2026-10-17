import React, { useState } from 'react';
import { X, Plus, DollarSign, RefreshCw, Check, Sparkles, AlertCircle } from 'lucide-react';
import { Game, GameCategory } from '../types/game';
import { GAME_CATEGORIES } from '../data/games';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  games: Game[];
  exchangeRate: number;
  onUpdateExchangeRate: (rate: number) => void;
  onAddGame: (game: Game) => void;
  onToggleGameActive: (gameId: string) => void;
  onResetCatalog: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  games,
  exchangeRate,
  onUpdateExchangeRate,
  onAddGame,
  onToggleGameActive,
  onResetCatalog,
}) => {
  const [rateInput, setRateInput] = useState(exchangeRate.toString());
  const [activeTab, setActiveTab] = useState<'rate' | 'add' | 'list'>('rate');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // New Game Form State
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState<GameCategory>('Action');
  const [newRewardUSD, setNewRewardUSD] = useState('15');
  const [newImage, setNewImage] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newConditions, setNewConditions] = useState('');
  const [isNewChecked, setIsNewChecked] = useState(true);
  const [isFeaturedChecked, setIsFeaturedChecked] = useState(false);

  if (!isOpen) return null;

  const handleSaveRate = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseFloat(rateInput);
    if (!isNaN(parsed) && parsed > 0) {
      onUpdateExchangeRate(parsed);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  const handleCreateGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newDesc.trim()) return;

    const parsedReward = parseFloat(newRewardUSD) || 10;
    const nowStr = new Date().toISOString().split('T')[0];

    const newGameObj: Game = {
      id: `game-${Date.now()}`,
      name: newName.trim(),
      category: newCategory,
      rewardUSD: parsedReward,
      image:
        newImage.trim() ||
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
      description: newDesc.trim(),
      conditions:
        newConditions.trim() ||
        'Kamilisha ngazi 5 za mchezo na ufikishe alama zilizopangwa.',
      gameplayBrief: 'Mchezo mpya ulioongezwa katika mfumo rasmi wa GAMES PAY.',
      isNew: isNewChecked,
      isFeatured: isFeaturedChecked,
      active: true,
      publishDate: nowStr,
      playCount: 1,
      difficulty: 'Wastani'
    };

    onAddGame(newGameObj);
    // Reset form
    setNewName('');
    setNewDesc('');
    setNewConditions('');
    setNewImage('');
    setActiveTab('list');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c1220] border border-purple-500/40 p-5 sm:p-6 text-slate-100 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Jopo la Usimamizi (GAMES PAY Admin)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Badilisha kiwango cha kubadilisha fedha na simamia katalogi ya magemu ya kila siku.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 my-4 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('rate')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'rate'
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Kiwango cha TZS ($1 = TSh)
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'add'
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Ongeza Gemu Jipya
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'list'
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Magemu Yaliyopo ({games.length})
          </button>
        </div>

        {/* Tab 1: Exchange Rate */}
        {activeTab === 'rate' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              Badiliko hili litasasisha kiasi chote cha Shilingi za Kitanzania (TZS) kwenye magemu yote 12 na mifumo yote ya jukwaa mara moja.
            </div>

            <form onSubmit={handleSaveRate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Kiwango cha Dola 1 ($1 USD kwa TZS):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-sm">
                    TSh
                  </span>
                  <input
                    type="number"
                    value={rateInput}
                    onChange={(e) => setRateInput(e.target.value)}
                    required
                    min="100"
                    step="10"
                    className="w-full pl-12 pr-4 py-2.5 rounded-lg bg-[#080c16] border border-slate-700 text-sm font-mono text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  {saveSuccess ? <Check className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                  <span>{saveSuccess ? 'Kimesasishwa!' : 'Hifadhi Kiwango Kipya'}</span>
                </button>

                <button
                  type="button"
                  onClick={onResetCatalog}
                  className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Rudisha Asili (Default 2,350)</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 2: Add New Game */}
        {activeTab === 'add' && (
          <form onSubmit={handleCreateGame} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-300 mb-1">Jina la Gemu *</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Mfano: Cyber Strike 2026"
                required
                className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-slate-700 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-300 mb-1">Kundi (Category) *</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as GameCategory)}
                  className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-slate-700 text-white focus:outline-none focus:border-purple-500"
                >
                  {GAME_CATEGORIES.filter((c) => c !== 'Zote').map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Zawadi ($ USD) *</label>
                <input
                  type="number"
                  value={newRewardUSD}
                  onChange={(e) => setNewRewardUSD(e.target.value)}
                  min="1"
                  step="1"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-slate-700 text-white focus:outline-none focus:border-purple-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">URL ya Picha ya Jalada (Cover Image)</label>
              <input
                type="url"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-slate-700 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">Maelezo ya Gemu *</label>
              <textarea
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                rows={2}
                required
                placeholder="Eleza jinsi mchezo unavyochezwa na mazingira yake..."
                className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-slate-700 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">Masharti ya Ushindi na Zawadi</label>
              <input
                type="text"
                value={newConditions}
                onChange={(e) => setNewConditions(e.target.value)}
                placeholder="Mfano: Kamilisha awamu 4 bila kupoteza ngao..."
                className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-slate-700 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex items-center gap-6 pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={isNewChecked}
                  onChange={(e) => setIsNewChecked(e.target.checked)}
                  className="rounded text-purple-600 focus:ring-0"
                />
                  <span>Weka Lebo ya MPYA (New)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={isFeaturedChecked}
                  onChange={(e) => setIsFeaturedChecked(e.target.checked)}
                  className="rounded text-purple-600 focus:ring-0"
                />
                <span>Weka Lebo ya BORA (Featured)</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <Plus className="w-4 h-4" />
              <span>Chapisha Gemu Hili Sasa</span>
            </button>
          </form>
        )}

        {/* Tab 3: Existing Games Manager */}
        {activeTab === 'list' && (
          <div className="space-y-3">
            <div className="text-xs text-slate-400">
              Orodha ya magemu yaliyosajiliwa kwenye mfumo. Unaweza kuzima au kuwasha gemu:
            </div>

            <div className="max-h-[350px] overflow-y-auto space-y-2 pr-1">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#080c16] border border-slate-800 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={game.image}
                      alt={game.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded object-cover bg-slate-900 shrink-0"
                    />
                    <div>
                      <div className="font-bold text-white flex items-center gap-2">
                        <span>{game.name}</span>
                        {game.isNew && (
                          <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded border border-amber-500/30">
                            MPYA
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {game.category} · ${game.rewardUSD} (TSh {(game.rewardUSD * exchangeRate).toLocaleString()})
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleGameActive(game.id)}
                      className={`px-3 py-1 rounded text-[11px] font-semibold cursor-pointer transition-colors ${
                        game.active
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                          : 'bg-red-950 text-red-400 border border-red-500/40'
                      }`}
                    >
                      {game.active ? 'Inafanya Kazi' : 'Imezimwa'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
