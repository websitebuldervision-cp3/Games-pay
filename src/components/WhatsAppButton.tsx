import React, { useState, useRef, useEffect } from 'react';
import { Headphones, Users, X, ExternalLink } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_CHANNEL_URL } from '../data/games';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <aside
      ref={containerRef}
      aria-label="Huduma kwa Wateja WhatsApp"
      className="fixed bottom-12 right-3 sm:bottom-14 sm:right-5 z-50 flex flex-col items-end gap-2.5"
    >
      {/* 2-Option Popup Menu when WhatsApp button is clicked */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chagua huduma ya WhatsApp"
          className="w-[calc(100vw-24px)] max-w-[300px] rounded-2xl bg-[#0b1224] border border-emerald-500/40 shadow-2xl shadow-black/70 p-3 text-left animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-800">
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
              Gusa hapa kuchagua
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Funga"
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* Option 1: Join GAME PAY Channel */}
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#101a34] hover:bg-[#162447] border border-cyan-500/30 hover:border-cyan-400/60 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0 text-[#00f0ff] mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white group-hover:text-[#00f0ff] leading-snug">
                  1: Kujiunga na chanel ya GAME PAY
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <span>Gusa hapa kujiunga</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>

            {/* Option 2: Customer Care for help and questions */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#101a34] hover:bg-[#132924] border border-emerald-500/30 hover:border-emerald-400/60 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                <Headphones className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white group-hover:text-emerald-300 leading-snug">
                  2: Customer Care kwa msaada na maswali
                </div>
                <div className="text-[11px] text-emerald-400/90 font-mono mt-0.5 flex items-center gap-1">
                  <span>WhatsApp: 0680374523</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button + CUSTOMER CARE Label */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#0b1220]/95 border border-emerald-500/40 text-emerald-400 font-extrabold text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wider hidden xs:block cursor-pointer hover:border-emerald-400 transition-colors"
        >
          CUSTOMER CARE
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Msaada wa Huduma kwa Wateja WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/80 transition-all transform hover:scale-105 active:scale-95 border-2 border-white/30 cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <svg
              className="w-7 h-7 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          )}
        </button>
      </div>
    </aside>
  );
};
