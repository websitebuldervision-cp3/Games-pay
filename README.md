# GAMES PAY — Premium Gaming Rewards Platform

Jukwaa la kisasa la michezo ya video na zawadi za fedha taslimu (Gaming Rewards) lililotengenezwa kwa ajili ya wachezaji nchini Tanzania na kote duniani.

## Sifa Kuu (Features)

1. **Utambulisho wa Brand (Brand Identity)**:
   - Jina: **GAMES PAY**
   - Wito: **PLAY • ENJOY • EARN**
   - Footer: **Powered by Cp3 👑**
   - Mandhari ya giza ya kisasa (Dark Gaming Theme) yenye rangi za *Neon Purple* na *Gold Highlights*.

2. **Magemu 12 Rasmi (Two-Column Mobile Grid)**:
   - Mpangilio wa nguzo mbili (2 columns) kwenye simu za mkononi na nguzo 4 kwenye skrini kubwa.
   - Orodha kamili ya magemu 12 (Fighting Gun, Racing Challenge, Adventure Quest, n.k.).
   - Thamani za zawadi kwa Dola ($ USD) na Shilingi za Kitanzania (TSh) zikitegemea kiwango kikuu cha kubadilisha fedha ($1 = TSh 2,350).

3. **Usajili wa Profile (Profile Registration)**:
   - Ada ya usajili ya **TSh 15,000**.
   - Kitufe maalum chenye kiungo rasmi: `https://adsblog.app/page/reg.php?reg=Cp3`

4. **Huduma kwa Wateja WhatsApp (WhatsApp Customer Care)**:
   - Kitufe cha WhatsApp cha wakati wote kilichopo kona ya chini kulia.
   - Kiungo: `https://wa.me/255610664840`

5. **Historia ya Malipo (300+ Verified Transactions)**:
   - Rekodi zaidi ya 300 zilizothibitishwa zikiwemo za Marium, Amani na Neema.
   - Utafutaji, uchujaji wa mitandao ya simu na kitufe cha kupakia malipo zaidi.

6. **Mitandao ya Simu Tanzania (Mobile Money)**:
   - M-Pesa (Vodacom)
   - Tigo Pesa (Tigo / Yas)
   - HaloPesa (Halotel)
   - Azam Pesa
   - Airtel Money

7. **Tarehe ya Sasa kwa Kiswahili**:
   - Inaonyesha siku, tarehe, mwezi na mwaka kwa Kiswahili na kusasishwa kiotomatiki kulingana na tarehe ya mtumiaji.

## Muundo wa Faili

- `src/App.tsx`: Muundo mkuu wa ukurasa
- `src/components/Navbar.tsx`: Upau wa juu
- `src/components/Hero.tsx`: Sehemu kuu na tarehe ya Kiswahili
- `src/components/GameCard.tsx`: Kadi za magemu
- `src/components/GameDetailModal.tsx`: Dirisha la maelezo ya gemu na usajili
- `src/components/PaymentHistory.tsx`: Rekodi 300+ za malipo
- `src/components/PaymentNetworks.tsx`: Mitandao 5 ya simu
- `src/components/WhatsAppButton.tsx`: Kitufe rasmi cha WhatsApp
- `src/components/HowItWorks.tsx` & `src/components/FAQ.tsx`: Miongozo na maswali
- `src/components/Footer.tsx`: Chini ya tovuti yenye "Powered by Cp3 👑"
- `src/data/games.ts`: Katalogi ya magemu na viwango
- `src/data/transactions.ts`: Kanzidata ya miamala 300+

## Jinsi ya Kuendesha (Local Development)

```bash
npm install
npm run dev
```
Tovuti itafunguka katika `http://localhost:3000`.
