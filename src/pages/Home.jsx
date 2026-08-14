import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/site.js'

const heroImage =
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2400&q=80'

const stats = [
  { value: '25+', label: 'Years of Heritage' },
  { value: '$5B+', label: 'Sales Volume Yearly' },
  { value: '60+', label: 'Countries Represented' },
]

const faqs = [
  {
    q: 'How do you manage cross-border acquisitions?',
    a: 'Our global network handles everything from legal due diligence and offshore tax compliance to currency fluctuations. We provide a single point of contact who orchestrates a team of international specialists on your behalf.',
  },
  {
    q: 'Do you offer off-market opportunities?',
    a: 'Approximately 40% of our portfolio is "Quiet Listing" inventory. These ultra-exclusive properties are never publicly advertised to protect owner privacy and are only shown to verified high-net-worth individuals through our private registry.',
  },
  {
    q: "What defines a 'PrimeEstate' certified property?",
    a: 'Beyond valuation, we vet properties for architectural significance, material provenance, and rare amenities. A certified property must demonstrate both historical capital preservation and exceptional aesthetic value.',
  },
]

export default function Home() {
  const catRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)
  useReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 container-prime pb-16 md:pb-24 w-full">
          <div className="max-w-3xl flex flex-col gap-6 items-start">
            <span className="label-lg text-secondary-container uppercase tracking-[0.3em] animate-fade-in-up">
              The Global Standard
            </span>
            <h1 className="heading-display text-white leading-none animate-fade-in-up [animation-delay:200ms]">
              Exceptional Properties.
              <br />
              <span className="italic font-light">Unrivaled Expertise.</span>
            </h1>
            <div className="h-px w-24 bg-secondary-container animate-fade-in-up [animation-delay:400ms]" />
            <Link
              to="/listings"
              className="btn-primary !bg-tertiary !text-on-tertiary animate-fade-in-up [animation-delay:600ms] mt-4"
            >
              Explore Collection
            </Link>
          </div>
        </div>
        <div className="hidden lg:block absolute right-12 bottom-12 [writing-mode:vertical-rl] rotate-180">
          <span className="label-md text-white/40 uppercase tracking-[0.5em]">
            Curated Heritage • Est. 1998
          </span>
        </div>
      </section>

      {/* Categories */}
      <section className="section-gap bg-surface">
        <div className="container-prime">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div className="flex flex-col gap-3">
              <span className="label-lg text-secondary uppercase tracking-widest">Portfolio</span>
              <h2 className="heading-h1 text-primary">Architectural Archetypes</h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => catRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                className="p-4 border border-outline-variant hover:border-primary transition-colors"
                aria-label="Previous"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                onClick={() => catRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                className="p-4 border border-outline-variant hover:border-primary transition-colors"
                aria-label="Next"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div
            ref={catRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 no-scrollbar pb-8"
          >
            {categories.map((c, i) => (
              <div
                key={c.name}
                className="min-w-[80%] sm:min-w-[60%] lg:min-w-[400px] flex-shrink-0 snap-start group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 md:p-8 bg-surface shadow-2xl -mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="label-md text-secondary uppercase mb-2 block">
                      Curation 0{i + 1}
                    </span>
                    <h3 className="heading-h3 text-primary">{c.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-24 bg-tertiary text-on-tertiary">
        <div className="container-prime">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-4 group">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="heading-display text-secondary group-hover:-translate-y-1 transition-transform">
                    {s.value}
                  </span>
                  <div className="h-px flex-grow bg-on-tertiary/20 hidden md:block" />
                </div>
                <p className="label-lg uppercase tracking-widest text-on-tertiary/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-gap relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-secondary/30" />
        <div className="container-prime flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-secondary-container flex items-center justify-center mb-10 md:mb-12">
            <span
              className="material-symbols-outlined text-secondary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>
          </div>
          <div className="max-w-4xl">
            <p className="heading-h2 text-primary italic leading-tight mb-8 md:mb-12">
              &ldquo;PrimeEstate doesn&rsquo;t just broker properties; they curate lifestyles. Their
              discretion and architectural knowledge transformed our search into a gallery
              experience of the world&rsquo;s finest living spaces.&rdquo;
            </p>
            <div className="flex flex-col items-center gap-2">
              <span className="label-lg uppercase tracking-widest text-primary">
                Alistair V. Sterling
              </span>
              <span className="label-md text-on-surface-variant">
                Venture Partner &amp; Art Collector
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gap bg-surface-container-low">
        <div className="container-prime">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32">
              <span className="label-lg text-secondary uppercase tracking-widest">Inquiries</span>
              <h2 className="heading-h1 text-primary">Private Guidance</h2>
              <p className="body-lg text-on-surface-variant">
                Navigating the complexities of high-value acquisitions requires nuanced insight.
              </p>
              <Link
                to="/listings"
                className="inline-flex items-center gap-2 label-lg text-primary border-b border-secondary pb-1 w-max"
              >
                Connect with an Advisor
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </div>
            <div className="lg:col-span-8 flex flex-col divide-y divide-outline-variant/30">
              {faqs.map((f, i) => (
                <div key={f.q} className="group bg-surface">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-6 md:p-8 lg:p-10 flex justify-between items-center outline-none"
                  >
                    <span className="heading-h3 text-primary pr-4">{f.q}</span>
                    <span
                      className={`material-symbols-outlined text-2xl transition-transform duration-500 flex-shrink-0 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 md:px-8 lg:px-10 pb-8 md:pb-10 body-md text-on-surface-variant leading-relaxed max-w-2xl">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap bg-surface">
        <div className="container-prime text-center">
          <h2 className="heading-display text-primary mb-8">Begin Your Legacy</h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link to="/listings" className="btn-primary !bg-tertiary !text-on-tertiary w-full sm:w-auto">
              View All Estates
            </Link>
            <Link to="/listings" className="btn-secondary w-full sm:w-auto">
              Speak to an Agent
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// Hook for scroll reveal
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
