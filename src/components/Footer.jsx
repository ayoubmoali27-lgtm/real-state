import { Link } from 'react-router-dom'

export default function Footer() {
  const cols = [
    {
      title: 'Properties',
      links: ['Penthouses', 'Coastal Villas', 'Historic Estates', 'Modernist Retreats'],
    },
    {
      title: 'Company',
      links: ['Our Heritage', 'Private Advisory', 'Global Network', 'Media Room'],
    },
    {
      title: 'Connect',
      links: ['Schedule a Viewing', 'Become an Agent', 'Press Inquiries', 'Newsletter'],
    },
  ]

  return (
    <footer className="w-full bg-tertiary-container py-20 border-t border-outline/10 text-on-tertiary-fixed">
      <div className="container-prime grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img alt="Logo" src="/assets/logo.png" className="h-8 invert" />
            <span className="heading-h3 uppercase tracking-widest text-on-tertiary">
              PrimeEstate
            </span>
          </div>
          <p className="body-md text-on-tertiary-fixed-variant opacity-80 leading-relaxed">
            The global authority on high-end real estate, delivering architectural precision and quiet luxury for the modern elite.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h4 className="label-lg text-secondary uppercase tracking-widest mb-2">
              {col.title}
            </h4>
            {col.links.map((l) => (
              <a key={l} href="#" className="body-md text-on-tertiary-fixed hover:text-secondary transition-colors">
                {l}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="container-prime border-t border-on-tertiary/10 pt-8 flex flex-col md:flex-row justify-between gap-4 label-md text-on-tertiary-fixed-variant uppercase tracking-widest">
        <p>© 2026 PrimeEstate Global. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-secondary">Privacy</a>
          <a href="#" className="hover:text-secondary">Terms</a>
          <Link to="/search" className="hover:text-secondary">Inventory</Link>
        </div>
      </div>
    </footer>
  )
}
