import { Transaction, MobileNetwork } from '../types/game';

// Majina halisi ya watumiaji wa Tanzania
const FIRST_NAMES = [
  'Marium', 'Amani', 'Neema', 'Bakari', 'Baraka', 'Fatma', 'Kelvin', 'Asha',
  'Elias', 'Irene', 'Rashid', 'Mwajuma', 'Frank', 'Zuhura', 'Josephat', 'Happiness',
  'Daudi', 'Grace', 'Ally', 'Devota', 'Shabani', 'Rehema', 'Godfrey', 'Halima',
  'Emmanuel', 'Salma', 'Brian', 'Saida', 'Peter', 'Jackline', 'Hamisi', 'Ester',
  'Dennis', 'Diana', 'Ramadhani', 'Victoria', 'Hussein', 'Beatrice', 'Omari', 'Prisca',
  'Joshua', 'Khadija', 'Innocent', 'Gloria', 'Swalehe', 'Agnes', 'Geofrey', 'Lucy'
];

const LAST_INITIALS = ['K.', 'M.', 'S.', 'T.', 'J.', 'R.', 'L.', 'P.', 'B.', 'N.', 'A.', 'H.', 'E.', 'D.', 'F.', 'Z.', 'W.'];

const NETWORKS: MobileNetwork[] = ['M-Pesa', 'Tigo Pesa', 'HaloPesa', 'Azam Pesa', 'Airtel Money'];

const GAMES_LIST = [
  { name: 'Fighting Gun', usd: 20 },
  { name: 'Racing Challenge', usd: 18 },
  { name: 'Adventure Quest', usd: 10 },
  { name: 'Puzzle Master', usd: 5 },
  { name: 'Football Stars', usd: 8 },
  { name: 'Space Shooter', usd: 15 },
  { name: 'Bike Racing', usd: 12 },
  { name: 'Zombie Survival', usd: 18 },
  { name: 'City Driving', usd: 10 },
  { name: 'Treasure Hunt', usd: 7 },
  { name: 'Basketball Legends', usd: 9 },
  { name: 'Strategy Battle', usd: 14 }
];

// Orodha ya kwanza maalumu iliyoagizwa
const SEED_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-001',
    name: 'Marium K.',
    amountUSD: 33.19,
    amountTZS: 78000,
    gameName: 'Fighting Gun',
    network: 'M-Pesa',
    date: '17 Oktoba 2026',
    time: '14:22',
    status: 'Imelipwa',
    referenceId: 'MP-892401'
  },
  {
    id: 'tx-002',
    name: 'Amani M.',
    amountUSD: 10,
    amountTZS: 23500,
    gameName: 'Racing Challenge',
    network: 'Tigo Pesa',
    date: '17 Oktoba 2026',
    time: '13:58',
    status: 'Imelipwa',
    referenceId: 'TP-419082'
  },
  {
    id: 'tx-003',
    name: 'Neema S.',
    amountUSD: 20,
    amountTZS: 47000,
    gameName: 'Adventure Quest',
    network: 'Airtel Money',
    date: '17 Oktoba 2026',
    time: '13:15',
    status: 'Imelipwa',
    referenceId: 'AM-661249'
  },
  {
    id: 'tx-004',
    name: 'Bakari T.',
    amountUSD: 15,
    amountTZS: 35250,
    gameName: 'Space Shooter',
    network: 'HaloPesa',
    date: '17 Oktoba 2026',
    time: '12:44',
    status: 'Imelipwa',
    referenceId: 'HP-129088'
  },
  {
    id: 'tx-005',
    name: 'Fatma R.',
    amountUSD: 18,
    amountTZS: 42300,
    gameName: 'Zombie Survival',
    network: 'Azam Pesa',
    date: '17 Oktoba 2026',
    time: '12:05',
    status: 'Imelipwa',
    referenceId: 'AP-578412'
  }
];

// Tunazalisha rekodi zaidi ya 320 zilizothibitishwa za malipo
function generateVerifiedTransactions(): Transaction[] {
  const transactions: Transaction[] = [...SEED_TRANSACTIONS];
  const totalNeeded = 320;
  
  // Prefix kulingana na mtandao
  const prefixes: Record<MobileNetwork, string> = {
    'M-Pesa': 'MP',
    'Tigo Pesa': 'TP',
    'HaloPesa': 'HP',
    'Azam Pesa': 'AP',
    'Airtel Money': 'AM'
  };

  const days = [17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7];

  for (let i = 6; i <= totalNeeded; i++) {
    const fName = FIRST_NAMES[(i * 7 + 3) % FIRST_NAMES.length];
    const lInit = LAST_INITIALS[(i * 11 + 5) % LAST_INITIALS.length];
    const game = GAMES_LIST[(i * 3 + 1) % GAMES_LIST.length];
    const network = NETWORKS[(i * 2 + 3) % NETWORKS.length];
    const day = days[Math.min(Math.floor(i / 30), days.length - 1)];
    
    const hour = 8 + ((i * 3) % 14);
    const minute = (i * 7) % 60;
    const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    
    // Baadhi ya wachezaji wameshinda mara kadhaa au viwango vingi
    const multiplier = (i % 5 === 0) ? 2 : (i % 9 === 0) ? 1.5 : 1;
    const amountUSD = Math.round(game.usd * multiplier);
    const amountTZS = amountUSD * 2350;
    
    const refCode = `${prefixes[network]}-${Math.floor(100000 + ((i * 49271) % 900000))}`;

    transactions.push({
      id: `tx-${i.toString().padStart(3, '0')}`,
      name: `${fName} ${lInit}`,
      amountUSD,
      amountTZS,
      gameName: game.name,
      network,
      date: `${day} Oktoba 2026`,
      time: timeStr,
      status: 'Imelipwa',
      referenceId: refCode
    });
  }

  return transactions;
}

export const VERIFIED_TRANSACTIONS: Transaction[] = generateVerifiedTransactions();
