import { useState } from 'react'
import Link from 'next/link'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-id-here";

export default function About() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e){
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = { name: form.name.value, email: form.email.value, message: form.message.value };
    try{
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(data)
      });
      if(res.ok){
        setStatus('success');
        form.reset();
      }else{
        setStatus('error');
      }
    }catch(err){
      setStatus('error');
    }
  }

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

      {/* HERO BANNER */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="rounded-2xl overflow-hidden border border-[#EAE7DE]">
            <div className="aspect-[6/2] bg-[url('/images/about.jpg')] bg-cover bg-center" />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-3xl mb-4">My Why</h1>
          <div className="space-y-4 font-body text-lg text-[#4A4A4A]">
            <p>I was 12 years old the first time I stepped into a gym. My dad—my first coach—taught me how to lift, not just with my body, but with confidence. What I didn’t realize then was how rare that experience was for girls… how many women would grow up never learning how to take up space in a gym, never learning how strong they truly are.</p>
            <p>Years later, as I built a career in health and lifestyle medicine, I started hearing the same question from women over and over again: “What do you do at the gym? How do you know what you’re doing?” And underneath that—“How do I stop feeling intimidated?”</p>
            <p>That’s when it clicked. I wasn’t just trained in strength—I was raised in it. And now it’s my mission to pass that strength on.</p>
            <p>I coach women to feel truly confident in the gym—not just to look strong, but to feel strong. Because when a woman discovers her strength in the gym, she brings that power into every part of her life.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-[#F7F6F1] border-y border-[#EAE7DE]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl mb-3">Contact</h2>
          <p className="font-body text-[#555] mb-6">Have a question or want to work together? Send a message.</p>

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="px-4 py-3 rounded-xl bg-white text-[#111] placeholder-[#777] focus:outline-none focus:ring ring-gold border border-[#EAE7DE]" />
            <input required type="email" name="email" placeholder="Your email" className="px-4 py-3 rounded-xl bg-white text-[#111] placeholder-[#777] focus:outline-none focus:ring ring-gold border border-[#EAE7DE]" />
            <textarea required name="message" rows={5} placeholder="Your message" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white text-[#111] placeholder-[#777] focus:outline-none focus:ring ring-gold border border-[#EAE7DE]"></textarea>
            <button className="sm:col-span-2 px-6 py-3 rounded-xl bg-gold text-black font-sans font-semibold">Send</button>
            {status === 'success' && <div className="sm:col-span-2 mt-2 text-sm gold">Thank you for reaching out — I’ll be in touch soon!</div>}
            {status === 'error' && <div className="sm:col-span-2 mt-2 text-sm text-red-600">Something went wrong. Please try again.</div>}
          </form>

          <div className="mt-3 text-xs text-[#8A8676]">This form uses Formspree. Update the endpoint in <code>pages/about.js</code> after creating your form.</div>
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
