import { LoginCard } from './components/LoginCard'

function App() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Abstract Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-40 blur-3xl scale-150 animate-pulse delay-700 pointer-events-none"></div>

      <div className="z-10 animate-fade-in-up">
        <LoginCard />
      </div>

      {/* Floating Particles (Simulating dust/magic) - Optional Visual Flourish */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full blur-[1px] animate-ping opacity-20"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full blur-[2px] animate-ping opacity-20 delay-1000"></div>
    </div>
  )
}

export default App
