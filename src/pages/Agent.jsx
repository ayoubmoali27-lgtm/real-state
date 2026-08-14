import { useParams, Link } from 'react-router-dom'
import { agents } from '../data/site.js'

export default function Agent() {
  const { slug } = useParams()
  const agent = agents.find((a) => a.slug === slug) || agents[0]

  return (
    <>
      {/* Hero / Profile Header */}
      <section className="bg-surface-container-low section-gap">
        <div className="container-prime">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                {agent.photo ? (
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-surface-container to-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-9xl text-outline-variant">
                      person
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 border border-primary/5 pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="label-lg text-secondary uppercase tracking-[0.3em] mb-3 block">
                  {agent.tagline}
                </span>
                <h1 className="heading-display text-primary leading-none mb-4">{agent.name}</h1>
                <p className="body-lg text-on-surface-variant">{agent.role} · {agent.region}</p>
              </div>
              <p className="body-lg text-on-surface leading-relaxed max-w-2xl">{agent.bio}</p>
              <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
                <button className="btn-primary">Schedule Consultation</button>
                <button className="btn-secondary">Download Dossier</button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-outline-variant/30 max-w-md">
                <Stat label="Sales" value={agent.sales} />
                <Stat label="Region" value={agent.region.split(',')[0]} />
                <Stat label="Languages" value={`${agent.languages.length}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-gap bg-surface">
        <div className="container-prime">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="label-lg text-secondary uppercase tracking-widest">Expertise</span>
              <h2 className="heading-h1 text-primary">Specialties</h2>
              <p className="body-md text-on-surface-variant">
                Focused practice areas developed over two decades of curated transactions.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agent.specialties.map((s, i) => (
                <div
                  key={s}
                  className="p-6 md:p-8 bg-surface-container border border-outline-variant/20 hover:border-secondary transition-colors group"
                >
                  <span className="label-md text-secondary uppercase tracking-widest mb-3 block">
                    0{i + 1}
                  </span>
                  <h3 className="heading-h3 group-hover:text-secondary transition-colors">{s}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-tertiary text-on-tertiary py-16 md:py-24">
        <div className="container-prime">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="label-lg uppercase tracking-widest text-on-tertiary/60 mb-3">
                Languages
              </p>
              <p className="heading-h2 text-secondary">{agent.languages.join(' · ')}</p>
            </div>
            <div>
              <p className="label-lg uppercase tracking-widest text-on-tertiary/60 mb-3">
                Operating Region
              </p>
              <p className="heading-h2 text-secondary">{agent.region}</p>
            </div>
            <div>
              <p className="label-lg uppercase tracking-widest text-on-tertiary/60 mb-3">
                Career Sales
              </p>
              <p className="heading-h2 text-secondary">{agent.sales}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap bg-surface">
        <div className="container-prime text-center">
          <span className="label-lg text-secondary uppercase tracking-[0.3em] mb-4 block">
            Begin a Conversation
          </span>
          <h2 className="heading-display-mobile md:heading-display mb-8 max-w-3xl mx-auto">
            Schedule a private consultation with {agent.name.split(' ')[0]}.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary !bg-tertiary !text-on-tertiary w-full sm:w-auto">
              Request Meeting
            </button>
            <Link to="/listings" className="btn-secondary w-full sm:w-auto">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="label-md text-on-surface-variant uppercase tracking-widest mb-1">{label}</p>
      <p className="heading-h3">{value}</p>
    </div>
  )
}
