import { LoginCard } from './components/LoginCard'

const RECENT_CARDS = [
  "https://assets.pokemon.com/assets/cms2/img/cards/web/ASC/ASC_PT-BR_1.png",   // Oddish
  "https://assets.pokemon.com/assets/cms2/img/cards/web/ASC/ASC_PT-BR_3.png",   // Vileplume ex
  "https://assets.pokemon.com/assets/cms2/img/cards/web/ASC/ASC_PT-BR_22.png",  // Mega Charizard Y ex
  "https://assets.pokemon.com/assets/cms2/img/cards/web/ASC/ASC_PT-BR_47.png",  // Mega Froslass ex
  "https://assets.pokemon.com/assets/cms2/img/cards/web/ASC/ASC_PT-BR_135.png", // Mega Scrafty ex
  "https://assets.pokemon.com/assets/cms2/img/cards/web/ASC/ASC_PT-BR_152.png", // Mega Dragonite ex
  "https://assets.pokemon.com/assets/cms2/img/cards/web/ASC/ASC_PT-BR_284.png", // Mega Gengar ex (SIR)
  "https://assets.pokemon.com/assets/cms2/img/cards/web/ASC/ASC_PT-BR_294.png", // Mega Charizard Y ex (Hyper Rare)
];

function App() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-neutral-100">

      {/* Background Scrolling Cards (Marquee) */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none grayscale-[20%]">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...RECENT_CARDS, ...RECENT_CARDS].map((src, i) => (
            <img key={i} src={src} alt="Pokemon Card" className="w-64 h-auto object-contain inline-block transform rotate-6 hover:rotate-0 transition-transform duration-500" />
          ))}
        </div>
        <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap mt-8">
          {[...RECENT_CARDS, ...RECENT_CARDS].reverse().map((src, i) => (
            <img key={i} src={src} alt="Pokemon Card" className="w-64 h-auto object-contain inline-block transform -rotate-6 hover:rotate-0 transition-transform duration-500" />
          ))}
        </div>
        {/* Overlay Gradient to fade edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 via-transparent to-neutral-100"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-transparent to-neutral-100"></div>
      </div>

      <div className="z-10 animate-fade-in-up">
        <LoginCard />
      </div>

      {/* Floating Particles (Simulating dust/magic) - Optional Visual Flourish */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full blur-[1px] animate-ping opacity-20"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-amber-500 rounded-full blur-[2px] animate-ping opacity-20 delay-1000"></div>
    </div>
  )
}

export default App
