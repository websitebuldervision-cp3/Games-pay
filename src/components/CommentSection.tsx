import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, User } from 'lucide-react';

interface CommentItem {
  id: string;
  author: string;
  text: string;
  time: string;
}

const DAILY_COMMENT_SETS: Omit<CommentItem, 'id'>[][] = [
  [
    {
      author: 'Peter',
      text: 'Hii site ni nzuri sana na imenibadilishia maisha.',
      time: 'Dakika 18 zilizopita',
    },
    {
      author: 'Neema J.',
      text: 'Nimecheza Racing Challenge leo asubuhi, nashukuru malipo yameingia M-Pesa haraka.',
      time: 'Saa 1 iliyopita',
    },
    {
      author: 'Hassan M.',
      text: 'Mwanzo sikudhani ni kweli, ila baada ya kufungua account mambo yamekuwa safi kabisa.',
      time: 'Saa 2 zilizopita',
    },
    {
      author: 'Grace K.',
      text: 'Magemu ni rahisi kwenye simu na hayali bando kubwa. Big up TENO PLAY!',
      time: 'Saa 4 zilizopita',
    },
    {
      author: 'Kelvin S.',
      text: 'Customer care wao wanajibu SMS kwa wakati ukihitaji msaada.',
      time: 'Saa 6 zilizopita',
    },
  ],
  [
    {
      author: 'Amina R.',
      text: 'Siku hizi nikipata muda wa mapumziko nacheza Puzzle Master naingiza pesa yangu taratibu.',
      time: 'Dakika 24 zilizopita',
    },
    {
      author: 'Baraka T.',
      text: 'Nimependa jinsi tovuti ilivyo nyepesi, unagusa tu PLAY GAME na kuanza.',
      time: 'Saa 1 iliyopita',
    },
    {
      author: 'Josephat L.',
      text: 'Malipo yangu ya Tigo Pesa yametoka bila usumbufu wowote leo.',
      time: 'Saa 3 zilizopita',
    },
    {
      author: 'Salma H.',
      text: 'Nilielekezwa na rafiki yangu wiki iliyopita, kwa kweli site hii ni msaada mkubwa.',
      time: 'Saa 5 zilizopita',
    },
    {
      author: 'Daniel P.',
      text: 'App yao nayo iko vizuri sana kwenye Android, haikwami kabisa.',
      time: 'Saa 7 zilizopita',
    },
  ],
  [
    {
      author: 'Fatma A.',
      text: 'Kila siku napata nafasi ya kucheza magemu mawili matatu, inanisaidia kupata hela ya matumizi.',
      time: 'Dakika 15 zilizopita',
    },
    {
      author: 'Emmanuel B.',
      text: 'Football Stars ndio gemu langu pendwa hapa, ukishinda tu zawadi iko wazi.',
      time: 'Saa 2 zilizopita',
    },
    {
      author: 'Rehema D.',
      text: 'Nashukuru sana timu ya TENO PLAY, huduma zenu ni za uhakika.',
      time: 'Saa 3 zilizopita',
    },
    {
      author: 'Omari Z.',
      text: 'Malipo yanatoka kwa Airtel Money na M-Pesa bila kuchelewa, safi sana.',
      time: 'Saa 5 zilizopita',
    },
    {
      author: 'Jackline W.',
      text: 'Nilifungua account yangu mapema na sasa nafurahia kucheza kila siku.',
      time: 'Saa 8 zilizopita',
    },
  ],
  [
    {
      author: 'Rashid N.',
      text: 'Site iko simple na kila kitu kiko wazi, hakuna longolongo.',
      time: 'Dakika 32 zilizopita',
    },
    {
      author: 'Beatrice G.',
      text: 'Nimeanza kutumia juzi tu lakini tayari nimeshaona faida yake.',
      time: 'Saa 1 iliyopita',
    },
    {
      author: 'Godfrey E.',
      text: 'Magemu mapya yanayobadilika kila nusu saa yanafanya usichoke kucheza.',
      time: 'Saa 3 zilizopita',
    },
    {
      author: 'Halima Y.',
      text: 'Asanteni sana kwa kutuletea fursa nzuri kama hii kwa njia ya simu.',
      time: 'Saa 6 zilizopita',
    },
    {
      author: 'Innocent C.',
      text: 'Nimejaribu Boxing Champion leo, ni tamu sana na malipo yake ni mazuri.',
      time: 'Saa 8 zilizopita',
    },
  ],
  [
    {
      author: 'Mwajuma K.',
      text: 'Kwa vijana tunaotumia simu kila siku, hii ndiyo sehemu sahihi ya kutumia muda vizuri.',
      time: 'Dakika 20 zilizopita',
    },
    {
      author: 'Elias M.',
      text: 'Mimi nacheza Zombie Survival jioni nikirudi kazini, inasaidia sana.',
      time: 'Saa 2 zilizopita',
    },
    {
      author: 'Gloria S.',
      text: 'Muonekano wa site ni mzuri, unafunguka haraka hata mtandao ukiwa mdogo.',
      time: 'Saa 4 zilizopita',
    },
    {
      author: 'Shabani R.',
      text: 'Nimefurahi kuona HaloPesa pia inakubali kutoa pesa bila shida.',
      time: 'Saa 5 zilizopita',
    },
    {
      author: 'Prisca T.',
      text: 'Hakika TENO PLAY imekuwa mkombozi wangu wa kila wiki.',
      time: 'Saa 7 zilizopita',
    },
  ],
  [
    {
      author: 'Bakari J.',
      text: 'Kucheza Space Shooter na kulipwa ni kitu ambacho sikuwahi kukidhania awali.',
      time: 'Dakika 12 zilizopita',
    },
    {
      author: 'Zuhura M.',
      text: 'Maelekezo ya kufungua account yako wazi kabisa, nilimaliza ndani ya dakika chache.',
      time: 'Saa 1 iliyopita',
    },
    {
      author: 'Dennis F.',
      text: 'Sniper Elite na Cyber Hunter zimenivutia sana wiki hii, hongereni.',
      time: 'Saa 3 zilizopita',
    },
    {
      author: 'Agnes L.',
      text: 'Kila nikicheza napata burudani na kipato kwa wakati mmoja.',
      time: 'Saa 5 zilizopita',
    },
    {
      author: 'Hussein K.',
      text: 'Huduma ya uhakika kwa Watanzania, endeleeni kuboresha hivi hivi.',
      time: 'Saa 9 zilizopita',
    },
  ],
  [
    {
      author: 'Asha B.',
      text: 'Tovuti hii imenisaidia sana kupata hela ya ziada nikiwa nyumbani.',
      time: 'Dakika 28 zilizopita',
    },
    {
      author: 'Brian D.',
      text: 'Nimependa kasi ya site, unafungua tu unakutana na magemu moja kwa moja.',
      time: 'Saa 2 zilizopita',
    },
    {
      author: 'Victoria N.',
      text: 'M-Pesa yangu imesoma tena leo asubuhi, Mungu awabariki sana.',
      time: 'Saa 4 zilizopita',
    },
    {
      author: 'Ramadhani S.',
      text: 'Adventure Quest na Temple Escape ziko poa sana kwa simu za Android.',
      time: 'Saa 6 zilizopita',
    },
    {
      author: 'Lucy P.',
      text: 'Nashauri marafiki wote wajaribu, ukiwa makini unafurahia matunda yake.',
      time: 'Saa 8 zilizopita',
    },
  ],
];

// Epoch day for 2026-11-18 so Set 0 displays first and rotates daily through all 7 unique sets
const ANCHOR_DAY_UTC = Math.floor(Date.UTC(2026, 10, 18) / 86400000);

function getDailyPresetComments(date: Date = new Date()): CommentItem[] {
  const todayUtc = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000
  );
  const diff = todayUtc - ANCHOR_DAY_UTC;
  const len = DAILY_COMMENT_SETS.length;
  const dayIndex = ((diff % len) + len) % len;
  const dailySet = DAILY_COMMENT_SETS[dayIndex].slice(0, 5);

  return dailySet.map((item, idx) => ({
    ...item,
    id: `daily-${dayIndex}-${idx}`,
  }));
}

export const CommentSection: React.FC = () => {
  // Visitor's own comments stay strictly in local React state (session-only, never shared)
  const [userComments, setUserComments] = useState<CommentItem[]>([]);
  const [dailyComments, setDailyComments] = useState<CommentItem[]>(() =>
    getDailyPresetComments()
  );
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setDailyComments(getDailyPresetComments());
    // Refresh if the date rolls over while the tab stays open
    const interval = setInterval(() => {
      setDailyComments(getDailyPresetComments());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    const trimmedName = name.trim() || 'Mchezaji';

    if (!trimmedText) {
      setError('Tafadhali andika maoni yako kwanza.');
      return;
    }

    if (trimmedText.length > 400) {
      setError('Maoni yasizidi herufi 400.');
      return;
    }

    const newComment: CommentItem = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      author: trimmedName,
      text: trimmedText,
      time: 'Sasa hivi',
    };

    setUserComments((prev) => [newComment, ...prev]);
    setText('');
    setError(null);
  };

  // Show visitor's own comments first, followed by daily rotating comments (total capped at 5)
  const remainingSlots = Math.max(0, 5 - userComments.length);
  const visibleComments = [...userComments, ...dailyComments.slice(0, remainingSlots)];

  return (
    <section
      className="px-3.5 sm:px-6 max-w-5xl mx-auto py-6 border-t border-slate-800/70"
      aria-label="Maoni"
    >
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
          <h2 className="text-sm sm:text-base font-extrabold text-white">
            Maoni ({visibleComments.length})
          </h2>
        </div>

        {/* Comment Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-[#0d1428] border border-slate-800/90 p-3.5 space-y-2.5"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            placeholder="Jina lako (si lazima)"
            className="w-full px-3 py-2 rounded-xl bg-[#070c1a] border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]/60 transition-colors"
          />

          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (error) setError(null);
            }}
            rows={2}
            maxLength={400}
            placeholder="Andika maoni yako hapa..."
            className="w-full px-3 py-2 rounded-xl bg-[#070c1a] border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]/60 transition-colors resize-none"
          />

          {error && (
            <p className="text-xs text-rose-400 font-medium">{error}</p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#ff1b6b] to-[#a826f7] hover:brightness-110 transition-all active:scale-95 cursor-pointer min-h-[38px]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Tuma Maoni</span>
            </button>
          </div>
        </form>

        {/* Visible Comments: Visitor's session-only comments + up to 5 daily rotating comments */}
        <div className="mt-3 space-y-2">
          {visibleComments.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-[#0d1428] border border-slate-800/90 p-3"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#15203d] flex items-center justify-center text-[#00f0ff]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-white">{item.author}</span>
                </div>
                <span
                  className={`text-[10px] font-medium ${
                    item.id.startsWith('user-') ? 'text-emerald-400' : 'text-slate-400'
                  }`}
                >
                  {item.time}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-words">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
