import { NetworkInfo } from '../types/game';

export const MOBILE_NETWORKS: NetworkInfo[] = [
  {
    name: 'M-Pesa',
    provider: 'Vodacom Tanzania',
    brandColor: '#e60000',
    accentBg: 'bg-red-500/10 border-red-500/30 text-red-400',
    badgeTextColor: 'text-red-400',
    speed: 'Dakika 5 – 15',
    description: 'Mtandao mkubwa na wa haraka zaidi nchini Tanzania. Zawadi zako zinawekwa moja kwa moja kwenye akaunti yako ya M-Pesa.',
    codePrefix: '*150*00#'
  },
  {
    name: 'Tigo Pesa',
    provider: 'Tigo / Yas Tanzania',
    brandColor: '#00a2e8',
    accentBg: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
    badgeTextColor: 'text-sky-400',
    speed: 'Dakika 5 – 15',
    description: 'Pokea malipo ya ushindi bila makato yoyote ya ziada moja kwa moja kwenye namba yako ya Tigo.',
    codePrefix: '*150*01#'
  },
  {
    name: 'HaloPesa',
    provider: 'Halotel Tanzania',
    brandColor: '#ff6600',
    accentBg: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    badgeTextColor: 'text-orange-400',
    speed: 'Dakika 5 – 15',
    description: 'Utoaji wa haraka na salama kupitia laini yako ya Halotel kote mijini na vijijini nchini.',
    codePrefix: '*150*88#'
  },
  {
    name: 'Azam Pesa',
    provider: 'AzamPay Tanzania',
    brandColor: '#0284c7',
    accentBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    badgeTextColor: 'text-blue-400',
    speed: 'Dakika 5 – 15',
    description: 'Mfumo wa kisasa wa malipo ya kidijitali unaokuruhusu kupokea fedha papo hapo na kutoa kwa mawakala.',
    codePrefix: '*150*08#'
  },
  {
    name: 'Airtel Money',
    provider: 'Airtel Tanzania',
    brandColor: '#ef4444',
    accentBg: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
    badgeTextColor: 'text-rose-400',
    speed: 'Dakika 5 – 15',
    description: 'Zawadi zako zitatumwa papo hapo kwenye Airtel Money na ujumbe wa uthibitisho (SMS) kukujulisha mara moja.',
    codePrefix: '*150*60#'
  }
];
