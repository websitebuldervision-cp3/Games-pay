import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, ArrowDownLeft, ShieldCheck, Filter } from 'lucide-react';
import { Transaction, MobileNetwork } from '../types/game';
import { VERIFIED_TRANSACTIONS } from '../data/transactions';
import { formatTZS, formatUSD } from '../utils/date';

export const PaymentHistory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState<'Zote' | MobileNetwork>('Zote');
  const [visibleCount, setVisibleCount] = useState(15);

  const networksList: ('Zote' | MobileNetwork)[] = [
    'Zote',
    'M-Pesa',
    'Tigo Pesa',
    'HaloPesa',
    'Azam Pesa',
    'Airtel Money'
  ];

  // Filter transactions
  const filteredTransactions = useMemo(() => {
    return VERIFIED_TRANSACTIONS.filter((tx) => {
      const matchesNetwork =
        selectedNetwork === 'Zote' || tx.network === selectedNetwork;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        tx.name.toLowerCase().includes(query) ||
        tx.gameName.toLowerCase().includes(query) ||
        tx.referenceId.toLowerCase().includes(query);
      return matchesNetwork && matchesSearch;
    });
  }, [selectedNetwork, searchQuery]);

  const displayedTransactions = filteredTransactions.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 20, filteredTransactions.length));
  };

  const getNetworkBadge = (net: MobileNetwork) => {
    switch (net) {
      case 'M-Pesa':
        return 'bg-red-950/80 text-red-300 border-red-500/40';
      case 'Tigo Pesa':
        return 'bg-sky-950/80 text-sky-300 border-sky-500/40';
      case 'HaloPesa':
        return 'bg-orange-950/80 text-orange-300 border-orange-500/40';
      case 'Azam Pesa':
        return 'bg-blue-950/80 text-blue-300 border-blue-500/40';
      case 'Airtel Money':
        return 'bg-rose-950/80 text-rose-300 border-rose-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="malipo" className="py-16 bg-[#080c16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Rekodi Rasmi za Malipo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Malipo ya Hivi Karibuni
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Tazama orodha ya zaidi ya wachezaji 300+ waliothibitishwa kupokea zawadi za fedha taslimu moja kwa moja kupitia mitandao yao ya simu.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 bg-[#0d1322] border border-slate-800 p-3 rounded-xl">
            <div className="text-right">
              <div className="text-[10px] uppercase font-semibold text-slate-400">Jumla ya Rekodi</div>
              <div className="text-lg font-bold text-amber-400 font-mono tabular-nums">
                {VERIFIED_TRANSACTIONS.length}+
              </div>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-right">
              <div className="text-[10px] uppercase font-semibold text-slate-400">Hali ya Malipo</div>
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Imelipwa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tafuta mchezaji, gemu au namba ya muamala..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[#0d1322] border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Network Selection Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {networksList.map((net) => (
              <button
                key={net}
                onClick={() => setSelectedNetwork(net)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedNetwork === net
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-[#0d1322] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {net}
              </button>
            ))}
          </div>
        </div>

        {/* Table / List View */}
        <div className="rounded-xl border border-slate-800/80 bg-[#0d1322] overflow-hidden shadow-lg">
          
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3.5 bg-slate-900/60 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <div className="col-span-3">Mchezaji</div>
            <div className="col-span-3">Gemu Lililochezwa</div>
            <div className="col-span-2">Mtandao wa Simu</div>
            <div className="col-span-2">Kiasi Kilicholipwa</div>
            <div className="col-span-2 text-right">Tarehe na Hali</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800/70">
            {displayedTransactions.map((tx) => (
              <div
                key={tx.id}
                className="p-4 sm:px-5 sm:py-3.5 hover:bg-slate-900/40 transition-colors flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center gap-2"
              >
                {/* Player Name */}
                <div className="md:col-span-3 flex items-center justify-between md:justify-start gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-xs font-bold text-purple-300">
                      {tx.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{tx.name}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{tx.referenceId}</div>
                    </div>
                  </div>
                  {/* Mobile Amount Tag */}
                  <div className="md:hidden text-right">
                    <div className="text-sm font-extrabold text-amber-400 font-mono">
                      TSh {formatTZS(tx.amountTZS)}
                    </div>
                    <div className="text-[10px] text-purple-300 font-mono">
                      {formatUSD(tx.amountUSD)}
                    </div>
                  </div>
                </div>

                {/* Game */}
                <div className="md:col-span-3 flex items-center justify-between md:justify-start">
                  <div className="text-xs sm:text-sm text-slate-300 font-medium">
                    {tx.gameName}
                  </div>
                  {/* Mobile network indicator */}
                  <span
                    className={`md:hidden text-[10px] font-semibold border px-2 py-0.5 rounded ${getNetworkBadge(
                      tx.network
                    )}`}
                  >
                    {tx.network}
                  </span>
                </div>

                {/* Network (Desktop) */}
                <div className="hidden md:block md:col-span-2">
                  <span
                    className={`inline-block text-[11px] font-semibold border px-2.5 py-0.5 rounded-md ${getNetworkBadge(
                      tx.network
                    )}`}
                  >
                    {tx.network}
                  </span>
                </div>

                {/* Amount (Desktop) */}
                <div className="hidden md:block md:col-span-2">
                  <div className="text-sm font-extrabold text-amber-400 font-mono tabular-nums">
                    TSh {formatTZS(tx.amountTZS)}
                  </div>
                  <div className="text-[11px] text-purple-300 font-mono tabular-nums">
                    {formatUSD(tx.amountUSD)}
                  </div>
                </div>

                {/* Date & Status */}
                <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-2 text-right pt-2 md:pt-0 border-t md:border-t-0 border-slate-800/50">
                  <div className="text-left md:text-right">
                    <div className="text-[11px] text-slate-300">{tx.date}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{tx.time}</div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{tx.status}</span>
                  </div>
                </div>
              </div>
            ))}

            {displayedTransactions.length === 0 && (
              <div className="py-12 text-center text-sm text-slate-400">
                Hakuna muamala uliopatikana kwa utafutaji huo.
              </div>
            )}
          </div>

        </div>

        {/* Load More Button */}
        {visibleCount < filteredTransactions.length && (
          <div className="mt-6 text-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2.5 rounded-lg text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all cursor-pointer"
            >
              Onyesha Malipo Zaidi ({filteredTransactions.length - visibleCount} yamebaki)
            </button>
            <div className="text-[11px] text-slate-500 mt-2">
              Inaonyesha {displayedTransactions.length} kati ya {filteredTransactions.length} rekodi zilizothibitishwa.
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
