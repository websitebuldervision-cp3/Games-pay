import { Game, GameCategory } from '../types/game';

// Kiwango cha kubadilisha fedha: $1 = TSh 2,350
export const DEFAULT_EXCHANGE_RATE = 2350;

// Relative image paths for clean Vercel base="./" deployment
export const ASSET_IMAGES = {
  hero: './games/hero.webp',
  fightingGun: './games/fighting-gun.webp',
  racingChallenge: './games/racing-challenge.webp',
  spaceShooter: './games/space-shooter.webp',
};

// Katalogi ya Magemu 12 Rasmi yenye picha nyepesi za WebP
export const INITIAL_GAMES: Game[] = [
  {
    id: 'fighting-gun',
    name: 'Fighting Gun',
    category: 'Action',
    rewardUSD: 20,
    image: './games/fighting-gun.webp',
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
    image: './games/racing-challenge.webp',
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
    image: './games/adventure-quest.webp',
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
    image: './games/puzzle-master.webp',
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
    image: './games/football-stars.webp',
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
    image: './games/space-shooter.webp',
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
    image: './games/bike-racing.webp',
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
    image: './games/zombie-survival.webp',
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
    image: './games/city-driving.webp',
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
    image: './games/treasure-hunt.webp',
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
    image: './games/basketball-legends.webp',
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
    image: './games/strategy-battle.webp',
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

export const REGISTRATION_URL = 'https://adsblog.app/page/reg.php?reg=Cp3';
export const REGISTRATION_FEE_TZS = 15000;
export const WHATSAPP_URL = 'https://wa.me/255610664840';
