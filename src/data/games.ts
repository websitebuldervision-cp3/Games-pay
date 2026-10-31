import { Game, GameCategory } from '../types/game';

// Kiwango cha kubadilisha fedha: $1 = TSh 2,350
export const DEFAULT_EXCHANGE_RATE = 2350;

// Seti ya Kwanza (Set A) - Magemu 12
export const GAMES_POOL_A: Game[] = [
  {
    id: 'fighting-gun',
    name: 'Fighting Gun',
    category: 'Action',
    rewardUSD: 20,
    image: '/images/fighting-gun.jpg',
    description: 'Pambana katika uwanja wa vita wa kisasa wa sci-fi. Tumia mbinu za kijeshi na silaha za kisasa.',
    conditions: 'Kamilisha awamu 5 za misheni na ufikishe angalau ushindi 3 bila kushindwa.',
    gameplayBrief: 'Mchezo wa risasi wa kisasa wenye ramani za kisasa.',
    isFeatured: true,
    isNew: false,
    active: true,
    publishDate: '2026-10-15',
    playCount: 1420,
    difficulty: 'Ngumu'
  },
  {
    id: 'racing-challenge',
    name: 'Racing Challenge',
    category: 'Racing',
    rewardUSD: 18,
    image: '/images/racing-challenge.jpg',
    description: 'Shindana kwa kasi ya juu katika mitaa ya jiji yenye taa za neon.',
    conditions: 'Vunja rekodi ya mzunguko katika mzunguko wa Jiji la Usiku.',
    gameplayBrief: 'Mashindano ya magari ya kasi ya drift na mitaa ya usiku.',
    isFeatured: true,
    isNew: false,
    active: true,
    publishDate: '2026-10-14',
    playCount: 1180,
    difficulty: 'Wastani'
  },
  {
    id: 'adventure-quest',
    name: 'Adventure Quest',
    category: 'Adventure',
    rewardUSD: 10,
    image: '/images/adventure-quest.jpg',
    description: 'Safiri kwenye misitu ya kale na majumba ya mawe yaliyosahaulika kutafuta masanduku ya dhahabu.',
    conditions: 'Gundua milango 4 ya siri na kukusanya vito vyote 12 vya hekalu.',
    gameplayBrief: 'Mchezo wa kusafiri, kuruka vikwazo na mafumbo.',
    isFeatured: false,
    isNew: true,
    active: true,
    publishDate: '2026-10-16',
    playCount: 940,
    difficulty: 'Wastani'
  },
  {
    id: 'puzzle-master',
    name: 'Puzzle Master',
    category: 'Puzzle',
    rewardUSD: 5,
    image: '/images/puzzle-master.jpg',
    description: 'Pima uwezo wako wa kufikiri na kumbukumbu kupitia mafumbo ya namba na maumbo.',
    conditions: 'Kamilisha ngazi 20 za mafumbo ndani ya muda uliopangwa.',
    gameplayBrief: 'Mchezo wa ubongo unaohitaji umakini wa juu.',
    isFeatured: false,
    isNew: false,
    active: true,
    publishDate: '2026-10-12',
    playCount: 2310,
    difficulty: 'Rahisi'
  },
  {
    id: 'football-stars',
    name: 'Football Stars',
    category: 'Sports',
    rewardUSD: 8,
    image: '/images/football-stars.jpg',
    description: 'Dhibiti wachezaji wako uwanjani, piga mashuti ya mbali na inua kombe la ligi.',
    conditions: 'Shinda mechi 4 mfululizo za kombe na ufunge magoli 10 au zaidi.',
    gameplayBrief: 'Mchezo wa soka wa haraka wenye udhibiti rahisi wa simu.',
    isFeatured: false,
    isNew: false,
    active: true,
    publishDate: '2026-10-13',
    playCount: 1850,
    difficulty: 'Wastani'
  },
  {
    id: 'space-shooter',
    name: 'Space Shooter',
    category: 'Action',
    rewardUSD: 15,
    image: '/images/space-shooter.jpg',
    description: 'Ogoza chombo chako cha anga kupitia galaksi na kupambana na meli za maadui.',
    conditions: 'Zuia mashambulizi ya wimbi la 10 na uangushe meli mama.',
    gameplayBrief: 'Mchezo wa vita vya angani vya kasi na laser zenye nguvu.',
    isFeatured: true,
    isNew: true,
    active: true,
    publishDate: '2026-10-16',
    playCount: 1620,
    difficulty: 'Ngumu'
  },
  {
    id: 'bike-racing',
    name: 'Bike Racing',
    category: 'Racing',
    rewardUSD: 12,
    image: '/images/bike-racing.jpg',
    description: 'Endesha pikipiki za mashindano kwenye milima mirefu na barabara za vumbi.',
    conditions: 'Kamilisha njia 6 za milimani kwa muda wa chini ya dakika 3.',
    gameplayBrief: 'Mashindano ya pikipiki za motocross na kuruka milima.',
    isFeatured: false,
    isNew: false,
    active: true,
    publishDate: '2026-10-11',
    playCount: 1230,
    difficulty: 'Wastani'
  },
  {
    id: 'zombie-survival',
    name: 'Zombie Survival',
    category: 'Action',
    rewardUSD: 18,
    image: '/images/zombie-survival.jpg',
    description: 'Jenga kambi salama, kusanya vifaa vya chakula na risasi ili kuishi usiku wa kiza.',
    conditions: 'Kusanya rasilimali 50 na uokoke usiku 7 mfululizo.',
    gameplayBrief: 'Mchezo wa kuishi na kulinda hifadhi za dawa na chakula.',
    isFeatured: true,
    isNew: false,
    active: true,
    publishDate: '2026-10-10',
    playCount: 1740,
    difficulty: 'Ngumu'
  },
  {
    id: 'city-driving',
    name: 'City Driving',
    category: 'Simulation',
    rewardUSD: 10,
    image: '/images/city-driving.jpg',
    description: 'Simulizi halisi ya kuendesha gari mjini. Fuata sheria za barabarani na epuka msongamano.',
    conditions: 'Kamilisha safari 15 za abiria bila ajali yoyote.',
    gameplayBrief: 'Uendeshaji wa gari mjini wenye mazingira halisi ya barabara.',
    isFeatured: false,
    isNew: false,
    active: true,
    publishDate: '2026-10-09',
    playCount: 890,
    difficulty: 'Rahisi'
  },
  {
    id: 'treasure-hunt',
    name: 'Treasure Hunt',
    category: 'Adventure',
    rewardUSD: 7,
    image: '/images/treasure-hunt.jpg',
    description: 'Chunguza kisiwa cha siri ukitumia ramani ya zamani na dira kugundua masanduku ya dhahabu.',
    conditions: 'Pata masanduku 8 ya hazina ndani ya muda uliopangwa.',
    gameplayBrief: 'Mchezo wa upelelezi na ufuatiliaji wa ramani za siri.',
    isFeatured: false,
    isNew: true,
    active: true,
    publishDate: '2026-10-17',
    playCount: 710,
    difficulty: 'Rahisi'
  },
  {
    id: 'basketball-legends',
    name: 'Basketball Legends',
    category: 'Sports',
    rewardUSD: 9,
    image: '/images/basketball-legends.jpg',
    description: 'Ingia uwanjani katika mechi za 3-on-3. Fanya chenga za kasi na piga mashuti ya mbali.',
    conditions: 'Shinda mashindano kwa kufikisha pointi 21 katika mechi 5 mfululizo.',
    gameplayBrief: 'Mchezo wa mpira wa kikapu wenye staili za mitaani.',
    isFeatured: false,
    isNew: false,
    active: true,
    publishDate: '2026-10-08',
    playCount: 1120,
    difficulty: 'Wastani'
  },
  {
    id: 'strategy-battle',
    name: 'Strategy Battle',
    category: 'Strategy',
    rewardUSD: 14,
    image: '/images/strategy-battle.jpg',
    description: 'Jenga himaya yako na uongoze jeshi lako katika vita vya kimkakati vya kutawala ngome.',
    conditions: 'Teka ngome 3 za adui kwa kutumia mbinu sahihi za ulinzi.',
    gameplayBrief: 'Mchezo wa mkakati wa wakati halisi wa kivita.',
    isFeatured: true,
    isNew: false,
    active: true,
    publishDate: '2026-10-07',
    playCount: 1390,
    difficulty: 'Ngumu'
  }
];

// Seti ya Pili (Set B) - Magemu 12 Mapya Kabisa (Yatakuja baada ya nusu saa)
export const GAMES_POOL_B: Game[] = [
  {
    id: 'cyber-hunter',
    name: 'Cyber Hunter',
    category: 'Action',
    rewardUSD: 22,
    image: '/images/cyber-hunter.jpg',
    description: 'Ingia katika jiji la neon kuwinda majambazi wa mtandaoni kwa bunduki za laser.',
    conditions: 'Wafukuze na uwashinde maadui wote 7 bila kupoteza ngao ya mwili.',
    gameplayBrief: 'Mchezo wa kisasa wa risasi na teknolojia ya siku za usoni.',
    isFeatured: true,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 1890,
    difficulty: 'Ngumu'
  },
  {
    id: 'moto-drift',
    name: 'Moto Drift',
    category: 'Racing',
    rewardUSD: 19,
    image: '/images/moto-drift.jpg',
    description: 'Mashindano ya kasi ya pikipiki zenye injini kali za nitro kwenye barabara za lami.',
    conditions: 'Shinda awamu 3 za mbio za kasi bila kugongana na vizuizi.',
    gameplayBrief: 'Mchezo wa kuendesha pikipiki na kuteleza kwenye kona za hatari.',
    isFeatured: true,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 1640,
    difficulty: 'Wastani'
  },
  {
    id: 'ninja-shadow',
    name: 'Ninja Shadow',
    category: 'Action',
    rewardUSD: 16,
    image: '/images/ninja-shadow.jpg',
    description: 'Ruka majengo ya giza kwa siri na tumia upanga kukamilisha kazi za usiku.',
    conditions: 'Kamilisha ngazi 4 za giza bila kugunduliwa na walinzi.',
    gameplayBrief: 'Mchezo wa siri na mapigano ya ustadi wa kijapani.',
    isFeatured: false,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 1410,
    difficulty: 'Ngumu'
  },
  {
    id: 'galaxy-wars',
    name: 'Galaxy Wars',
    category: 'Action',
    rewardUSD: 24,
    image: '/images/galaxy-wars.jpg',
    description: 'Mapigano ya anga za mbali kulinda kituo cha sayari dhidi ya meli za kigeni.',
    conditions: 'Shinda mawimbi 6 ya meli za adui na uhifadhi nishati ya kituo.',
    gameplayBrief: 'Mchezo wa vita vya anga wenye madoido ya laser za rangi.',
    isFeatured: true,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 2050,
    difficulty: 'Ngumu'
  },
  {
    id: 'temple-escape',
    name: 'Temple Escape',
    category: 'Adventure',
    rewardUSD: 11,
    image: '/images/temple-escape.jpg',
    description: 'Kimbia kutoka kwenye hekalu lililojaa mitego na miiba ya moto.',
    conditions: 'Kimbia mita 3,000 mfululizo huku ukikusanya sarafu zote za dhahabu.',
    gameplayBrief: 'Mchezo wa kukimbia kwa kasi, kuruka na kuteleza chini.',
    isFeatured: false,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 2280,
    difficulty: 'Rahisi'
  },
  {
    id: 'boxing-champion',
    name: 'Boxing Champion',
    category: 'Sports',
    rewardUSD: 13,
    image: '/images/boxing-champion.jpg',
    description: 'Panda ulingoni, piga makonde ya nguvu na ujipatie mkanda wa ubingwa wa dunia.',
    conditions: 'Shinda mapambano 3 mfululizo kwa KO kabla ya raundi ya tano.',
    gameplayBrief: 'Mchezo wa masumbwi wenye ngumi za haraka na ulinzi mkali.',
    isFeatured: false,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 1530,
    difficulty: 'Wastani'
  },
  {
    id: 'tank-assault',
    name: 'Tank Assault',
    category: 'Strategy',
    rewardUSD: 17,
    image: '/images/tank-assault.jpg',
    description: 'Endesha kifaru cha kivita na uangushe ngome za maadui kwenye uwanja wa mchanga.',
    conditions: 'Lenga na uharibu vifaru 8 vya adui ndani ya dakika 4.',
    gameplayBrief: 'Mapigano ya vifaru na milipuko ya mabomu ya mbali.',
    isFeatured: true,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 1370,
    difficulty: 'Wastani'
  },
  {
    id: 'speed-boat',
    name: 'Speed Boat',
    category: 'Racing',
    rewardUSD: 14,
    image: '/images/speed-boat.jpg',
    description: 'Mashindano ya boti za mwendo kasi baharini katikati ya mawimbi makubwa.',
    conditions: 'Fika mstari wa mwisho kwanza bila boti yako kupinduka na mawimbi.',
    gameplayBrief: 'Mashindano ya majini yenye kasi ya kipekee na miruko mikali.',
    isFeatured: false,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 1290,
    difficulty: 'Wastani'
  },
  {
    id: 'dungeon-crawler',
    name: 'Dungeon Crawler',
    category: 'Adventure',
    rewardUSD: 15,
    image: '/images/dungeon-crawler.jpg',
    description: 'Shuka kwenye mapango ya chini ya ardhi kutafuta vito na silaha za kichawi.',
    conditions: 'Fungua milango yote 5 ya chuma na umshinde joka mlinzi wa hazina.',
    gameplayBrief: 'Mchezo wa upelelezi wa mapango ya giza na mawe ya thamani.',
    isFeatured: false,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 1140,
    difficulty: 'Ngumu'
  },
  {
    id: 'neon-rider',
    name: 'Neon Rider',
    category: 'Racing',
    rewardUSD: 21,
    image: '/images/neon-rider.jpg',
    description: 'Paa na gari la umeme lenye taa za rangi angavu kwenye daraja la anga.',
    conditions: 'Vunja rekodi ya kasi na ushinde taji la mkimbiaji bora wa usiku.',
    gameplayBrief: 'Mchezo wa kuendesha gari kwa mwendo wa kasi kwenye daraja la neon.',
    isFeatured: true,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 1750,
    difficulty: 'Wastani'
  },
  {
    id: 'sniper-elite',
    name: 'Sniper Elite',
    category: 'Action',
    rewardUSD: 25,
    image: '/images/sniper-elite.jpg',
    description: 'Panda juu ya mnara mrefu na utumie darubini kulenga shabaha za mbali.',
    conditions: 'Piga shabaha zote 6 kwa risasi moja kila moja bila kukosa.',
    gameplayBrief: 'Mchezo wa umakini wa juu wa kupiga shabaha za kijeshi.',
    isFeatured: true,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 2410,
    difficulty: 'Ngumu'
  },
  {
    id: 'alien-invasion',
    name: 'Alien Invasion',
    category: 'Strategy',
    rewardUSD: 18,
    image: '/images/alien-invasion.jpg',
    description: 'Jenga mifumo ya ulinzi ya anga kulinda jiji dhidi ya uvamizi wa viumbe geni.',
    conditions: 'Simamisha mashambulizi yote ya mawimbi 5 ya viumbe vya angani.',
    gameplayBrief: 'Mchezo wa mkakati wa ulinzi wa minara ya leza.',
    isFeatured: false,
    isNew: true,
    active: true,
    publishDate: '2026-10-26',
    playCount: 1680,
    difficulty: 'Wastani'
  }
];

// Helper: Pata muda uliobaki kwenye nusu saa ya sasa (30 minutes slot)
export function get30MinuteSlotInfo(): {
  slotIndex: number;
  minutesRemaining: number;
  secondsRemaining: number;
  formattedCountdown: string;
} {
  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Kila nusu saa ni slot mpya: 0-29 ni slot 0, 30-59 ni slot 1
  const halfHourSlot = Math.floor(now.getTime() / (30 * 60 * 1000));
  
  const minutesIntoSlot = minutes % 30;
  const minutesRemaining = 29 - minutesIntoSlot;
  const secondsRemaining = 59 - seconds;

  const mm = minutesRemaining.toString().padStart(2, '0');
  const ss = secondsRemaining.toString().padStart(2, '0');

  return {
    slotIndex: halfHourSlot,
    minutesRemaining,
    secondsRemaining,
    formattedCountdown: `${mm}m ${ss}s`
  };
}

// Pata magemu 12 yanayofaa kwa sasa (yanabadilika kila baada ya nusu saa)
export function getActiveGamesForSlot(slotIndex: number): Game[] {
  // Inabadilishana kati ya Pool A na Pool B kila nusu saa
  const isPoolB = slotIndex % 2 === 1;
  return isPoolB ? GAMES_POOL_B : GAMES_POOL_A;
}

export const INITIAL_GAMES: Game[] = GAMES_POOL_A;

export const GAME_CATEGORIES: ('Zote' | GameCategory)[] = [
  'Zote',
  'Action',
  'Racing',
  'Adventure',
  'Puzzle',
  'Sports',
  'Strategy',
  'Simulation'
];

export const REGISTRATION_URL = 'https://moxeraagencies.com/register?ref=Cp3';
export const REGISTRATION_FEE_TZS = 15000;
export const WHATSAPP_URL = 'https://wa.me/255610664840';
export const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029Vb4qJb289inbM2HqB80a';

