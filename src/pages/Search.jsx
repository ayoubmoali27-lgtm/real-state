import { useState, useMemo } from 'react'
import { searchResults, listings } from '../data/site.js'
import { Link } from 'react-router-dom'

const allResults = [...searchResults, ...listings]

export default function Search() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All Types')
  const [price, setPrice] = useState('$10M - $25M')
  const [beds, setBeds] = useState('3+ Beds')
  const [sort, setSort] = useState('Newest First')

  const filtered = useMemo(() => {
    return allResults.filter((p) => {
      const q = query.toLowerCase()
      if (q && !p.name.toLowerCase().includes(q) && !p.location.toLowerCase().includes(q)) return false
      return true
    })
  }, [query])

  return (
    <>
      {/* Filter Bar */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/20">
        <div className="container-prime py-6 md:py-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-stretch lg:items-end">
            <div className="flex-1 w-full group">
              <label className="label-md text-on-surface-variant uppercase mb-2 block">
                Search Destinations
              </label>
              <div className="relative flex items-center border-b border-outline group-focus-within:border-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-outline group-focus-within:text-secondary mr-3">
                  search
                </span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 py-3 body-lg placeholder:text-outline-variant/60"
                  placeholder="E.g. Beverly Hills, French Riviera, London..."
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full lg:w-auto">
              <SelectCell label="Property Type" value={type} onChange={setType} options={['All Types', 'Penthouse', 'Coastal Villa', 'Historic Estate']} />
              <SelectCell label="Price Range" value={price} onChange={setPrice} options={['$5M - $10M', '$10M - $25M', '$25M - $50M', '$50M+']} />
              <SelectCell label="Beds/Baths" value={beds} onChange={setBeds} options={['3+ Beds', '5+ Beds', '7+ Beds']} />
              <button className="btn-primary !bg-tertiary !text-on-tertiary col-span-2 md:col-span-1">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container-prime section-gap">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-28 space-y-10 md:space-y-12">
              <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
                <h3 className="heading-h3 uppercase tracking-tighter">Refine</h3>
                <button className="label-md text-secondary hover:underline">Clear All</button>
              </div>
              <div className="space-y-6">
                <h4 className="label-lg uppercase tracking-widest text-on-surface-variant">Amenities</h4>
                <div className="flex flex-col gap-4">
                  {['Private Infinity Pool', 'Home Cinema', 'Wine Cellar', 'Wellness Spa', 'Helipad Access'].map((a, i) => (
                    <Checkbox key={a} label={a} defaultChecked={i === 0 || i === 2} />
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="label-lg uppercase tracking-widest text-on-surface-variant">Architecture</h4>
                <div className="flex flex-wrap gap-2">
                  {['Modernist', 'Neoclassical', 'Brutalist', 'Mediterranean'].map((s, i) => (
                    <button
                      key={s}
                      className={`px-4 py-2 label-md uppercase border transition-all ${
                        i === 1
                          ? 'border-secondary text-secondary bg-secondary/5'
                          : 'border-outline-variant hover:bg-tertiary hover:text-on-tertiary'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-8 bg-tertiary text-on-tertiary flex flex-col gap-4">
                <span className="material-symbols-outlined text-secondary text-4xl">verified_user</span>
                <p className="heading-h3 leading-tight">Private Advisory</p>
                <p className="body-md opacity-70">
                  Access off-market listings and bespoke acquisition strategies.
                </p>
                <Link
                  to="/listings"
                  className="label-md uppercase tracking-widest text-secondary mt-2 border-b border-secondary/30 self-start pb-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
              <div>
                <span className="label-md text-secondary uppercase tracking-[0.2em] block mb-2">
                  Curated Results
                </span>
                <h2 className="heading-h1">{filtered.length} Premier Estates</h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="label-md text-on-surface-variant uppercase">Sort By:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border-none label-lg uppercase focus:ring-0 cursor-pointer"
                >
                  <option>Newest First</option>
                  <option>Price: High to Low</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 gap-y-12 md:gap-y-16">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
            <div className="mt-16 md:mt-24 flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              <button
                disabled
                className="flex items-center gap-2 label-lg uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors disabled:opacity-30"
              >
                <span className="material-symbols-outlined">west</span> Previous
              </button>
              <div className="flex gap-2 md:gap-4">
                {['01', '02', '03'].map((n, i) => (
                  <span
                    key={n}
                    className={`label-lg w-10 h-10 flex items-center justify-center ${
                      i === 0 ? 'bg-tertiary text-on-tertiary' : 'hover:bg-surface-container-high cursor-pointer'
                    }`}
                  >
                    {n}
                  </span>
                ))}
                <span className="label-lg w-10 h-10 flex items-center justify-center">...</span>
                <span className="label-lg w-10 h-10 flex items-center justify-center hover:bg-surface-container-high cursor-pointer">
                  12
                </span>
              </div>
              <button className="flex items-center gap-2 label-lg uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
                Next <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full bg-surface-container-highest py-16 md:py-24">
        <div className="container-prime text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-6 md:gap-8 items-center">
            <span className="label-md text-secondary uppercase tracking-[0.4em]">
              Personalized Scouting
            </span>
            <h2 className="heading-display-mobile md:heading-display">Can&rsquo;t find your ideal estate?</h2>
            <p className="body-lg text-on-surface-variant leading-relaxed">
              Our Private Advisory team specializes in sourcing unlisted architectural gems across
              the globe. Let us curate a bespoke portfolio based on your unique vision.
            </p>
            <Link
              to="/listings"
              className="mt-4 md:mt-8 btn-primary !bg-tertiary !text-on-tertiary"
            >
              Connect with an Advisor
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

function SelectCell({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col min-w-[140px]">
      <label className="label-md text-on-surface-variant uppercase mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-b border-outline py-3 body-md focus:border-secondary focus:ring-0 cursor-pointer"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}

function Checkbox({ label, defaultChecked }) {
  const [checked, setChecked] = useState(!!defaultChecked)
  return (
    <label className="flex items-center group cursor-pointer">
      <div
        onClick={() => setChecked((c) => !c)}
        className="w-5 h-5 border border-outline mr-3 flex items-center justify-center group-hover:border-secondary transition-colors"
      >
        <div
          className={`w-3 h-3 bg-secondary transition-opacity ${
            checked ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <span className="body-md text-on-surface group-hover:text-secondary transition-colors">
        {label}
      </span>
    </label>
  )
}

function PropertyCard({ property }) {
  const stat1 = property.beds ? `${property.beds} Beds` : property.acres ? `${property.acres} Acres` : `${property.sqft} Sq Ft`
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {property.badge && (
          <div className="absolute top-6 left-6 bg-surface/90 backdrop-blur px-4 py-1">
            <span className="label-md text-primary uppercase">{property.badge}</span>
          </div>
        )}
        <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface/20 backdrop-blur flex items-center justify-center text-white hover:bg-surface hover:text-primary transition-all">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
      <div className="relative -mt-12 md:-mt-16 mr-4 md:mr-8 bg-surface p-6 md:p-8 shadow-2xl border border-outline-variant/10">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="heading-h2 group-hover:text-secondary transition-colors">{property.name}</h3>
          <span className="heading-h3 text-primary whitespace-nowrap">{property.price}</span>
        </div>
        <p className="label-md text-on-surface-variant uppercase tracking-widest mb-6">
          {property.location}
        </p>
        <div className="grid grid-cols-3 border-t border-outline-variant/30 pt-6">
          {property.beds !== undefined && (
            <Stat label="Beds" value={property.beds} />
          )}
          {property.baths !== undefined && (
            <Stat label="Baths" value={property.baths} />
          )}
          {property.sqft && <Stat label="Sq Ft" value={property.sqft} />}
          {property.acres && <Stat label="Acres" value={property.acres} />}
          {property.floor && <Stat label="Floor" value={property.floor} />}
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="label-md text-on-surface-variant uppercase">{label}</span>
      <span className="body-lg font-bold">{value}</span>
    </div>
  )
}
