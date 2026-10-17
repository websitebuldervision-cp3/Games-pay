import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { REGISTRATION_FEE_TZS, WHATSAPP_URL } from '../data/games';
import { formatTZS } from '../utils/date';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: `Ada ya usajili wa profile ya TSh ${formatTZS(REGISTRATION_FEE_TZS)} ni ya nini?`,
      answer: `Ada ya usajili wa profile ya TSh ${formatTZS(REGISTRATION_FEE_TZS)} inatumika kuwezesha akaunti yako rasmi ya GAMES PAY, kuthibitisha usalama wa mtumiaji, na kukuunganisha kwenye kanzidata rasmi ya AdsBlog chini ya msimbo wa rejea Cp3. Ada hii inalinda jukwaa dhidi ya akaunti feki za roboti na kuhakikisha wachezaji halisi pekee ndio wanaoshiriki.`
    },
    {
      question: 'Je, kulipa ada ya usajili kunanihakikishia kupokea fedha bila kucheza?',
      answer: 'Hapana kabisa. Kulipa ada ya profile ni sharti la ufunguzi wa akaunti na usajili wa utambulisho wako. Ili kupokea zawadi ya fedha, ni lazima ushiriki mchezo husika, ucheze kulingana na sheria na ufikishe viwango vya ushindi vilivyotajwa (masharti ya zawadi). Hakuna fedha za bure zinazotolewa bila kucheza.'
    },
    {
      question: 'Je, zawadi zinalipwaje na kupitia mitandao gani?',
      answer: 'Zawadi zote za ushindi zinalipwa kwa njia ya fedha taslimu kupitia mitandao mikuu 5 ya simu nchini Tanzania: Vodacom M-Pesa, Tigo Pesa, Halotel HaloPesa, Azam Pesa na Airtel Money. Pesa hutumwa moja kwa moja kwenye namba uliyoisajili kwenye profile yako.'
    },
    {
      question: 'Utoaji wa fedha unachukua muda gani?',
      answer: 'Baada ya mfumo kuthibitisha ushindi wako, malipo huanza kushughulikiwa na kutumwa ndani ya dakika 5 hadi 15. Utapokea ujumbe mfupi wa SMS kutoka kwa mtandao wako wa simu kuthibitisha muamala.'
    },
    {
      question: 'Ni nani anayeruhusiwa kujiunga na GAMES PAY?',
      answer: 'Mtu yeyote mwenye simu ya mkononi (smartphone au tablet/kompyuta) na namba inayofanya kazi ya mtandao wa simu wa Tanzania (M-Pesa, Tigo Pesa, HaloPesa, Azam Pesa au Airtel Money) anaweza kujiandikisha na kushiriki.'
    },
    {
      question: 'Nikipata changamoto au kuchelewa kwa malipo, nitapataje msaada?',
      answer: 'Tuna timu maalum ya Huduma kwa Wateja (Customer Care) inayopatikana masaa 24/7 kupitia WhatsApp kwa namba +255 610 664 840. Unaweza kugusa kitufe cha kijani cha WhatsApp kilichopo kona ya chini ya skrini wakati wowote kupata usaidizi wa haraka.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="maswali" className="py-16 bg-[#0a0f1d] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Maswali Yanayoulizwa Mara kwa Mara</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Una Swali? Pata Majibu Hapa
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Fahamu kwa kina kuhusu mfumo wa usajili, zawadi, uchezaji na utoaji wa fedha.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-[#0d1322] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Customer Care Prompt */}
        <div className="mt-8 text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-xs font-bold text-white">Bado una swali ambalo halijajibiwa?</div>
            <div className="text-[11px] text-slate-400">Timu yetu iko tayari kukusaidia kupitia WhatsApp.</div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ongea Nasi WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
