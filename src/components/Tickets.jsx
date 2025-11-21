import { useState } from 'react'

function Tickets() {
  const [count, setCount] = useState(2)
  const price = 12
  const total = count * price

  return (
    <section id="tickets" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-pink-50 border border-sky-100 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">Tickets & Hours</h2>
              <p className="mt-3 text-sky-800/80">Open daily 9:00 AM – 7:00 PM. Children under 3 enter free.</p>

              <div className="mt-6 flex items-center gap-3">
                <button onClick={() => setCount(Math.max(1, count - 1))} className="h-10 w-10 rounded-full bg-white border border-sky-200 text-sky-700 font-bold shadow-sm">-</button>
                <span className="min-w-[3ch] text-center font-semibold text-sky-900">{count}</span>
                <button onClick={() => setCount(count + 1)} className="h-10 w-10 rounded-full bg-sky-500 text-white font-bold shadow sky-500/50">+</button>
              </div>

              <p className="mt-4 text-sky-800/80">${price} each • Total: <span className="font-bold text-sky-900">${total}</span></p>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white p-6 shadow-md">
              <form className="grid gap-3">
                <input className="rounded-xl border border-sky-200 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-300" placeholder="Grown-up name" />
                <input className="rounded-xl border border-sky-200 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-300" placeholder="Email" type="email" />
                <button type="button" className="mt-2 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-lg shadow-pink-300/50 hover:bg-pink-600 transition">Reserve Now</button>
                <p className="text-xs text-sky-800/60">No payment collected here — showcase only.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tickets
