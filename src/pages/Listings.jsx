import { useState } from 'react'
import { Link } from 'react-router-dom'
import { listings, agents } from '../data/site.js'

export default function Listings() {
  return (
    <>
      {/* Header */}
      <section className="container-prime pt-12 md:pt-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="label-lg text-secondary uppercase tracking-[0.3em] mb-4 block">
              Curated Excellence
            </span>
            <h2 className="heading-display text-primary leading-tight">
              The Autumn
              <br />
              Collection
            </h2>
          </div>
          <Link to="/search" className="flex items-center gap-4 group">
            <span className="label-lg uppercase tracking-widest">View All Portfolios</span>
            <div className="w-12 h-px bg-primary transition-all duration-500 group-hover:w-20 group-hover:bg-secondary" />
          </Link>
        </div>

        {/* Listing 01: image left */}
        <ListingOne listing={listings[0]} index="01 / 03" progress="w-1/3" reverse={false} />

        {/* Listing 02: image right */}
        <ListingOne listing={listings[1]} index="02 / 03" progress="w-2/3" reverse />

        {/* Listing 03: full width hero */}
        <ListingHero listing={listings[2]} />
      </section>

      {/* Agents */}
      <section className="bg-surface-container-low section-gap mt-16 md:mt-24">
        <div className="container-prime">
          <div className="text-center mb-12 md:mb-20">
            <span className="label-lg text-secondary uppercase tracking-[0.3em] mb-4 block">
              The Advisory
            </span>
            <h2 className="heading-h1 text-primary">Unrivaled Expertise</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.slice(0, 3).map((a) => (
              <AgentCard key={a.slug} agent={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  )
}

function ListingOne({ listing, index, progress, reverse }) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-center`}
    >
      <div className={`lg:col-span-8 relative group overflow-hidden ${reverse ? 'lg:order-2' : ''}`}>
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={listing.image}
            alt={listing.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div
          className={`hidden md:block absolute bottom-0 ${
            reverse ? 'right-0 mr-8' : 'left-0 ml-8'
          } bg-surface p-8 lg:p-10 -mb-8 shadow-2xl max-w-md`}
        >
          <div className="flex justify-between items-start mb-4 gap-4">
            <span className="label-md text-secondary uppercase tracking-widest">
              {listing.location}
            </span>
            <span className="heading-h3 whitespace-nowrap">{listing.price}</span>
          </div>
          <h3 className="heading-h2 mb-4">{listing.name}</h3>
          <p className="body-md text-on-surface-variant line-clamp-2">{listing.description}</p>
        </div>
      </div>
      <div className={`lg:col-span-4 ${reverse ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'} mt-4 lg:mt-0`}>
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-tighter text-outline">
              {index}
            </span>
            <div className="h-px w-full bg-outline-variant/30">
              <div className={`h-full bg-primary ${progress}`} />
            </div>
          </div>
          <p className="body-lg text-on-surface leading-relaxed">{listing.details}</p>
          <button className="flex items-center gap-4 label-lg uppercase tracking-widest py-4 border-b border-primary hover:border-secondary transition-colors group w-max">
            Explore Residence
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

function ListingHero({ listing }) {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] group overflow-hidden shadow-2xl">
      <img
        src={listing.image}
        alt={listing.name}
        className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 flex flex-col md:flex-row justify-between items-end text-white gap-6">
        <div className="max-w-xl">
          <span className="label-md text-secondary-container uppercase tracking-[0.4em] mb-2 block">
            Penthouse Series
          </span>
          <h3 className="heading-display-mobile md:heading-display mb-0 md:mb-4">{listing.name}</h3>
        </div>
        <div className="bg-surface text-primary p-6 md:p-8 flex flex-col gap-2 min-w-[260px] w-full md:w-auto">
          <span className="label-lg uppercase tracking-widest text-secondary">
            {listing.location}
          </span>
          <span className="heading-h1">{listing.price}</span>
          <button className="mt-3 btn-primary py-4 text-xs">Request Dossier</button>
        </div>
      </div>
    </div>
  )
}

function AgentCard({ agent }) {
  return (
    <div className="flex flex-col group">
      <div className="aspect-[4/5] overflow-hidden mb-6 relative bg-surface-container">
        {agent.photo ? (
          <img
            src={agent.photo}
            alt={agent.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-surface-container to-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-outline-variant">person</span>
          </div>
        )}
        <div className="absolute inset-0 border border-primary/5 group-hover:border-secondary/30 transition-colors pointer-events-none" />
      </div>
      <div className="flex flex-col flex-grow">
        <span className="label-md text-secondary uppercase tracking-widest mb-1">{agent.role}</span>
        <h4 className="heading-h2 mb-3">{agent.name}</h4>
        <p className="body-md text-on-surface-variant mb-6 leading-relaxed flex-grow">
          {agent.bio}
        </p>
        <div className="flex items-center gap-4">
          <Link
            to={`/agents/${agent.slug}`}
            className="btn-primary flex-grow text-center"
          >
            Connect
          </Link>
          <Link
            to={`/agents/${agent.slug}`}
            className="w-12 h-12 flex items-center justify-center border border-outline-variant hover:border-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-base">mail</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [state, setState] = useState('idle')
  const submit = (e) => {
    e.preventDefault()
    setState('sending')
    setTimeout(() => {
      setState('done')
      setTimeout(() => setState('idle'), 3000)
    }, 1500)
  }
  return (
    <section className="container-prime section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
        <div className="lg:col-span-5 mb-8 lg:mb-0">
          <h2 className="heading-display-mobile md:heading-display mb-6 md:mb-8 leading-tight">
            Secure Your Private
            <br />
            Showing
          </h2>
          <p className="body-lg text-on-surface-variant mb-8 md:mb-12 max-w-md">
            Our global advisors are ready to curate a bespoke viewing experience tailored to your
            schedule and privacy requirements.
          </p>
          <div className="flex flex-col gap-6">
            {[
              { icon: 'phone', label: 'London Office', value: '+44 20 7946 0123' },
              { icon: 'location_on', label: 'Headquarters', value: 'Mayfair, London W1J' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 md:gap-6 group">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-primary text-on-primary group-hover:bg-secondary transition-colors">
                  <span className="material-symbols-outlined text-base">{c.icon}</span>
                </div>
                <div>
                  <p className="label-md text-outline uppercase">{c.label}</p>
                  <p className="heading-h3">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 bg-surface-container-high p-6 md:p-12 lg:p-16 shadow-2xl relative">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 -z-10" />
          <form onSubmit={submit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Field label="Full Name" placeholder="Alexander Hamilton" />
              <Field label="Email Address" type="email" placeholder="alexander@domain.com" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <SelectField
                label="Preferred Property"
                options={['The Obsidian Retreat', 'Villa Palladiana', 'The Zenith Skyloft', 'Other / Private Search']}
              />
              <SelectField
                label="Timeline"
                options={['Within 30 Days', '1 - 3 Months', 'Flexible / Investment']}
              />
            </div>
            <div>
              <label className="label-md text-on-surface uppercase mb-2 block">
                Special Requirements
              </label>
              <textarea
                className="input-prime resize-none"
                placeholder="Discreet arrival, private security clearance, etc."
                rows={3}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={state !== 'idle'}
                className={`btn-primary flex items-center gap-3 w-full sm:w-auto justify-center ${
                  state === 'done' ? '!bg-secondary' : ''
                } ${state === 'sending' ? 'opacity-50' : ''}`}
              >
                <span>
                  {state === 'sending' && 'Sending...'}
                  {state === 'done' && 'Submission Received'}
                  {state === 'idle' && 'Request Private Showing'}
                </span>
                {state === 'idle' && (
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                )}
              </button>
              <p className="label-md text-outline italic hidden sm:block">
                All inquiries remain strictly confidential.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', placeholder }) {
  return (
    <div>
      <label className="label-md text-on-surface uppercase mb-2 block">{label}</label>
      <input type={type} className="input-prime" placeholder={placeholder} />
    </div>
  )
}

function SelectField({ label, options }) {
  return (
    <div className="relative">
      <label className="label-md text-on-surface uppercase mb-2 block">{label}</label>
      <select className="input-prime appearance-none cursor-pointer pr-8">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <span className="material-symbols-outlined absolute right-0 bottom-3 text-outline pointer-events-none">
        expand_more
      </span>
    </div>
  )
}
