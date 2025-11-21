import Hero from './components/Hero'
import Attractions from './components/Attractions'
import Tickets from './components/Tickets'

function App() {
  return (
    <div className="min-h-screen bg-white text-sky-900">
      {/* Playful top bar */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-white/70 border-b border-sky-100">
        <div className="mx-auto max-w-6xl px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-pink-400 shadow-lg" />
            <span className="font-extrabold tracking-tight text-xl">Rainbowland</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-sky-800/80">
            <a href="#attractions" className="hover:text-sky-900">Attractions</a>
            <a href="#tickets" className="hover:text-sky-900">Tickets</a>
            <a href="/test" className="hover:text-sky-900">System Test</a>
          </nav>
          <a href="#tickets" className="ml-4 inline-flex items-center px-4 py-2 rounded-xl bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition text-sm">Book Now</a>
        </div>
      </header>

      <main>
        <Hero />
        <Attractions />
        <Tickets />
      </main>

      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_50%_0%,rgba(14,165,233,0.15),transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8 py-10 text-center">
          <p className="text-sky-800/80">© {new Date().getFullYear()} Rainbowland Adventure Park — Where little imaginations soar.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
