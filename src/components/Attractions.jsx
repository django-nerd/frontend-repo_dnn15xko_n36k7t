import { Sparkles, Rainbow, Rocket, FerrisWheel } from 'lucide-react'

const items = [
  {
    icon: FerrisWheel,
    title: 'Sky Balloon Wheel',
    desc: 'Soar above the clouds in bubble-bright cabins with panoramic views.'
  },
  {
    icon: Rocket,
    title: 'Candy Comet Coaster',
    desc: 'Whizz through cotton-candy tunnels and sprinkle stardust loops.'
  },
  {
    icon: Rainbow,
    title: 'Rainbow River',
    desc: 'Float through glowing rainbow caves with friendly jellyfish lights.'
  },
  {
    icon: Sparkles,
    title: 'Glitter Grove',
    desc: 'A gentle maze where trees giggle and fireflies guide your path.'
  }
]

function Attractions() {
  return (
    <section id="attractions" className="relative py-16 md:py-24 bg-gradient-to-b from-sky-100 to-indigo-100">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 text-center">Favorite Attractions</h2>
        <p className="mt-2 text-sky-800/80 text-center max-w-2xl mx-auto">Bright, gentle, and full of wonder — designed for smiles and squeals.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/80 backdrop-blur-md border border-white p-6 shadow-md hover:shadow-xl transition shadow-sky-200">
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-br from-pink-400 to-amber-300 text-white shadow-lg">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-sky-900">{title}</h3>
              <p className="mt-1.5 text-sky-800/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Attractions
