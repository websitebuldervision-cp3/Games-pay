import { Game, GameCategory } from '../types/game';

// Kiwango cha kubadilisha fedha: $1 = TSh 2,350 (Inaweza kubadilishwa)
export const DEFAULT_EXCHANGE_RATE = 2350;

// Picha zilizotengenezwa rasmi
export const ASSET_IMAGES = {
  hero: '/src/assets/images/hero_gaming_rewards_1792242743165.jpg',
  fightingGun: '/src/assets/images/game_fighting_gun_1792242743718.jpg',
  racingChallenge: '/src/assets/images/game_racing_challenge_1792242744426.jpg',
  spaceShooter: '/src/assets/images/game_space_shooter_1792242743693.jpg',
};

// Katalogi ya Magemu 12 ya Kwanza
export const INITIAL_GAMES: Game[] = [
  {
    id: 'fighting-gun',
    name: 'Fighting Gun',
    category: 'Action',
    rewardUSD: 20,
    image: ASSET_IMAGES.fightingGun,
    description: 'Pambana katika uwanja wa vita wa kisasa wa sci-fi. Tumia mbinu za kijeshi, silaha za kisasa na ushirikiano wa timu kukamilisha operesheni za kijeshi.',
    conditions: 'Kamilisha awamu 5 za misheni na ufikishe angalau ushindi 3 wa mechi za wachezaji wengi bila kushindwa.',
    gameplayBrief: 'Mchezo wa risasi wa kisasa (First-Person Tactical Shooter) wenye ramani za kisasa na silaha za viwango tofauti.',
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
    image: ASSET_IMAGES.racingChallenge,
    description: 'Shindana kwa kasi ya juu katika mitaa ya jiji yenye taa za neon. Chagua gari lako la kisasa na uwe mfalme wa miteremko na kona za kasi.',
    conditions: 'Vunja rekodi ya mzunguko (Lap record) katika mzunguko wa Jiji la Usiku na ushinde mashindano ya Kombe la Dhahabu.',
    gameplayBrief: 'Mashindano ya magari ya kasi ya drift na mitaa ya usiku yenye fizikia halisi ya uendeshaji.',
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
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    description: 'Safiri kwenye misitu ya kale na majumba ya mawe yaliyosahaulika kutafuta masanduku ya dhahabu na mafumbo ya siri.',
    conditions: 'Gundua milango 4 ya siri na kukusanya vito vyote 12 vya hekalu bila kupoteza ngao yako.',
    gameplayBrief: 'Mchezo wa kusafiri, kuruka vikwazo na kutatua mafumbo ya hekalu la zamani.',
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
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&auto=format&fit=crop&q=80',
    description: 'Pima uwezo wako wa kufikiri na kumbukumbu kupitia mafumbo ya kijiometri, namba na maumbo ya 3D yanayoongezeka ugumu.',
    conditions: 'Kamilisha ngazi 20 za mafumbo ndani ya muda uliopangwa bila kutumia vidokezo vya ziada.',
    gameplayBrief: 'Mchezo wa ubongo unaohitaji umakini wa juu na upangaji sahihi wa mawe na maumbo.',
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
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80',
    description: 'Dhibiti wachezaji wako uwanjani, piga mashuti ya mbali, tengeneza pasi za uhakika na inua kombe la ubingwa wa ligi kuu.',
    conditions: 'Shinda mechi 4 mfululizo za kombe na ufunge magoli 10 au zaidi bila kufungwa zaidi ya mawili.',
    gameplayBrief: 'Mchezo wa soka wa haraka wenye udhibiti rahisi wa simu na mechi za kusisimua za dakika 5.',
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
    image: ASSET_IMAGES.spaceShooter,
    description: 'Ogoza chombo chako cha anga kupitia mawingu ya galaksi na kupambana na meli za maadui wanaotishia amani ya ulimwengu.',
    conditions: 'Zuia mashambulizi ya wimbi la 10 la maadui na uangushe meli mama (Boss ship) kwa asilimia 100.',
    gameplayBrief: 'Mchezo wa vita vya angani vya kasi na laser zenye nguvu kubwa na uboreshaji wa ngao.',
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
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80',
    description: 'Endesha pikipiki za mashindano kwenye milima mirefu na barabara za vumbi zenye miruko mikali na hatari.',
    conditions: 'Kamilisha njia 6 za milimani kwa muda wa chini ya dakika 3 kila moja bila kuanguka.',
    gameplayBrief: 'Mashindano ya pikipiki za motocross na kuruka milima kwa ustadi na usawa.',
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
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80',
    description: 'Ulimwengu umevamiwa na viumbe hatari. Jenga kambi salama, kusanya vifaa vya chakula na risasi ili kuishi usiku wa kiza.',
    conditions: 'Kusanya rasilimali 50 na uokoke usiku 7 mfululizo bila kambi yako kuvunjwa.',
    gameplayBrief: 'Mchezo wa kuishi, kukabiliana na maadui usiku na kulinda hifadhi za dawa na chakula.',
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
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=80',
    description: 'Simulizi halisi ya kuendesha gari mjini. Fuata sheria za barabarani, epuka msongamano na fikisha abiria kwa usalama.',
    conditions: 'Kamilisha safari 15 za abiria bila ajali yoyote na uwe na alama 95% za usalama wa barabarani.',
    gameplayBrief: 'Uendeshaji wa gari mjini wenye mazingira halisi ya taa za barabarani na hali ya hewa inayobadilika.',
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
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    description: 'Chunguza kisiwa cha siri ukitumia ramani ya zamani na dira. Chimba maeneo yenye alama na ugundue masanduku ya almasi.',
    conditions: 'Pata masanduku 8 ya hazina ndani ya muda uliopangwa kabla ya maji ya bahari kupanda.',
    gameplayBrief: 'Mchezo wa upelelezi na ufuatiliaji wa ramani za siri na alama za kisiwani.',
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
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=80',
    description: 'Ingia uwanjani katika mechi za 3-on-3 za mitaani. Fanya chenga za kasi, piga dunk za nguvu na shinda pointi za mwisho.',
    conditions: 'Shinda mashindano ya mtaa kwa kufikisha pointi 21 kabla ya mpinzani katika mechi 5 mfululizo.',
    gameplayBrief: 'Mchezo wa mpira wa kikapu wenye michoro ya kuvutia na staili za mitaani za dunk na mashuti ya pointi 3.',
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
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80',
    description: 'Jenga himaya yako, panga safu za mashambulizi na ulinzi, na uongoze jeshi lako katika vita vya kimkakati vya kutawala ardhi.',
    conditions: 'Teka ngome 3 za adui kwa kutumia mbinu sahihi za ulinzi na uhifadhi angalau 40% ya wanajeshi wako.',
    gameplayBrief: 'Mchezo wa mkakati wa wakati halisi (Real-Time Strategy) unaopima upangaji wa rasilimali na amri za kivita.',
    isFeatured: true,
    isNew: false,
    active: true,
    publishDate: '2026-10-07',
    playCount: 1390,
    difficulty: 'Ngumu'
  }
];

// Orodha ya makundi
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
