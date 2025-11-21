import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden bg-sky-200">
      {/* 3D Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pVLJXSVq3zyQq0OD/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gentle gradient veil for text contrast (does not block Spline) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/20 via-sky-50/10 to-sky-100/60"></div>

      {/* Content on top */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-8 w-full">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-white/60 rounded-full px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-sky-700">Now open for adventures!</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-sky-900 drop-shadow-[0_2px_0_rgba(255,255,255,0.6)]">
            Rainbowland Adventure Park
          </h1>

          <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-2xl text-sky-800/90">
            A magical world of balloons, giggles, and colorful rides for brave little explorers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#tickets" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-lg shadow-pink-300/50 hover:bg-pink-600 transition">
              Get Tickets
            </a>
            <a href="#attractions" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white text-sky-800 font-semibold hover:bg-white transition">
              Explore Rides
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
