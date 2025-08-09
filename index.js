import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFCFA] text-[#3F3F3F]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-[#EAE7DE]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-end gap-2">
              <span className="font-logo text-3xl leading-none text-[#111]">Healthy Strong Life</span>
              <span className="text-xs tracking-[0.3em] uppercase text-[#7A7A7A] ml-1">with Sharina</span>
            </div>
            <div className="text-[11px] tracking-widest uppercase text-[#7A7A7A]">Strong body. Strong life.</div>
          </div>
          <nav className="hidden md:flex gap-8 font-sans text-sm">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/about" className="hover:text-black">About</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-[#1f1f1f]">
              Strong in body. <span className="gold">Unshakable</span> in spirit.
            </h1>
            <p className="font-body text-lg mt-5 text-[#4A4A4A]">
              I coach women to own their space in the gym — then carry that strength wherever they go.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/about#contact" className="px-6 py-3 rounded-full bg-gold text-white text-sm tracking-wide">Work with me</Link>
              <Link href="/about" className="px-6 py-3 rounded-full border border-[#D8D4C6] text-sm tracking-wide hover:border-gold">About</Link>
            </div>
          </div>

          {/* Hero card with gradient placeholder image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-[#EAE7DE]">
              <div className="aspect-[4/3] bg-[url('/images/hero.jpg')] bg-cover bg-center" />
              <div className="p-6">
                <p className="font-body text-sm text-[#5A5A5A]">“Thank you for reaching out — I’ll be in touch soon!”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 bg-[#F7F6F1] border-y border-[#EAE7DE]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl">My Why</h2>
          </div>
          <div className="md:col-span-2">
            <p className="font-body text-[15px] text-[#4A4A4A]">
              I was 12 when my dad—my first coach—taught me to lift with confidence. Today I help women own their space in the gym and carry that strength into every part of life.
            </p>
            <Link href="/about" className="inline-block mt-4 px-5 py-2 rounded-full border border-gold hover:bg-gold hover:text-white text-sm">Read more</Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl">The 7 Pillars</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-8">
            {[ 
              {name:'Movement', desc:'Daily activity and structured training for strength and vitality.'},
              {name:'Sleep', desc:'Prioritize quality rest to recharge and recover.'},
              {name:'Stress', desc:'Tools and habits to manage stress for mental clarity.'},
              {name:'Nutrition', desc:'Fuel your body with balanced, nourishing foods.'},
              {name:'Limit Toxins', desc:'Identify and limit toxins in your life that may be slowing you down.'},
              {name:'Connection', desc:'Build meaningful relationships and support systems.'},
              {name:'Joy', desc:'Prioritize what lights you up and gives life meaning.'}
            ].map((p,i)=> (
              <div key={p.name} className="rounded-2xl border border-[#EAE7DE] p-5 bg-white">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-xs gold">{i+1}</span>
                </div>
                <div className="mt-3 font-sans font-semibold">{p.name}</div>
                <p className="font-body text-sm mt-1 text-[#666]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#F7F6F1] border-t border-[#EAE7DE]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-end gap-2">
            <span className="font-logo text-2xl text-[#111]">Healthy Strong Life</span>
            <span className="text-xs tracking-[0.3em] uppercase text-[#7A7A7A]">with Sharina</span>
          </div>
          <div className="text-xs text-[#7A7A7A]">© {new Date().getFullYear()} Healthy Strong Life. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
