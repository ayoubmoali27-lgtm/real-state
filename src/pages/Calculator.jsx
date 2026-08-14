import { useState, useMemo } from 'react'

const fmt = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)

export default function Calculator() {
  const [price, setPrice] = useState(2_500_000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(5.2)
  const [term, setTerm] = useState(30)

  const calc = useMemo(() => {
    const downAmount = price * (downPct / 100)
    const loanAmount = price - downAmount
    const r = rate / 100 / 12
    const n = term * 12
    const pi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const taxes = (price * 0.012) / 12
    const insurance = (price * 0.003) / 12
    const fixed = taxes + insurance
    const total = pi + fixed
    return { pi, taxes, insurance, fixed, total, downAmount, loanAmount }
  }, [price, downPct, rate, term])

  const principalShare = calc.pi * 0.4
  const interestShare = calc.pi * 0.6
  const taxShare = calc.fixed

  // Donut chart (circumference 2*pi*40 = 251.2)
  const circ = 251.2
  const principalPct = principalShare / calc.total
  const interestPct = interestShare / calc.total
  const taxPct = taxShare / calc.total
  const principalOffset = circ * (1 - principalPct)
  const interestOffset = circ * (1 - (principalPct + interestPct))
  const taxOffset = circ * (1 - (principalPct + interestPct + taxPct))

  return (
    <>
      {/* Hero */}
      <section className="relative w-full section-gap overflow-hidden bg-surface">
        <div className="container-prime grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="label-lg text-secondary uppercase tracking-[0.2em] mb-6 block">
              Financial Precision
            </span>
            <h1 className="heading-display text-on-surface leading-none mb-8">
              Architecting Your
              <br />
              Investment.
            </h1>
            <p className="body-lg text-on-surface-variant max-w-xl">
              Utilize our bespoke financial modeling tools to visualize your acquisition strategy.
              Precision in planning is the foundation of enduring legacy.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-end">
            <div className="relative group cursor-pointer overflow-hidden shadow-2xl w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural blueprints"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="w-full section-gap bg-surface-container-low">
        <div className="container-prime">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Controls */}
            <div className="lg:col-span-5 flex flex-col gap-10 md:gap-12">
              <div className="flex flex-col gap-6 md:gap-8">
                <RangeRow
                  label="Property Price"
                  value={fmt(price)}
                  min={500_000}
                  max={25_000_000}
                  step={50_000}
                  value2={price}
                  onChange={setPrice}
                />
                <RangeRow
                  label={`Down Payment (${downPct}%)`}
                  value={`${fmt(calc.downAmount)}`}
                  min={10}
                  max={90}
                  step={5}
                  value2={downPct}
                  onChange={setDownPct}
                  suffix="%"
                />
                <RangeRow
                  label="Interest Rate"
                  value={`${rate.toFixed(1)}%`}
                  min={1}
                  max={12}
                  step={0.1}
                  value2={rate}
                  onChange={(v) => setRate(parseFloat(v))}
                  decimals={1}
                />
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-end">
                    <label className="label-lg text-on-surface uppercase tracking-wider">
                      Loan Term
                    </label>
                    <span className="heading-h3 text-primary">{term} Years</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {[15, 20, 30].map((y) => (
                      <button
                        key={y}
                        onClick={() => setTerm(y)}
                        className={`py-3 label-md uppercase tracking-widest border transition-all ${
                          term === y
                            ? 'bg-primary text-on-primary border-primary'
                            : 'border-outline-variant hover:bg-primary hover:text-on-primary'
                        }`}
                      >
                        {y} Yr
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-outline-variant/30">
                <button className="w-full btn-primary !py-6 !text-xs tracking-[0.3em] hover:!bg-secondary">
                  Get Pre-Approved
                </button>
                <p className="mt-4 text-center label-md text-on-surface-variant opacity-60 uppercase">
                  Confidential &amp; Non-Binding
                </p>
              </div>
            </div>

            {/* Visualization */}
            <div className="lg:col-span-7 bg-surface p-6 md:p-12 lg:p-16 shadow-2xl relative">
              <div className="flex flex-col gap-10 md:gap-12">
                <div className="flex flex-col">
                  <span className="label-lg text-on-surface-variant uppercase tracking-widest mb-2">
                    Estimated Monthly Payment
                  </span>
                  <h2 className="heading-display text-primary">{fmt(calc.total)}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                  <div className="relative aspect-square flex items-center justify-center max-w-[320px] mx-auto w-full">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f1f1" strokeWidth="8" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#1b1c1c"
                        strokeWidth="8"
                        strokeDasharray={circ}
                        strokeDashoffset={principalOffset}
                        className="transition-all duration-1000 ease-out"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#775a19"
                        strokeWidth="8"
                        strokeDasharray={circ}
                        strokeDashoffset={interestOffset}
                        className="transition-all duration-1000 ease-out"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#c4c7c7"
                        strokeWidth="8"
                        strokeDasharray={circ}
                        strokeDashoffset={taxOffset}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="material-symbols-outlined text-secondary text-4xl mb-2">
                        account_balance
                      </span>
                      <span className="label-md uppercase opacity-50">Amortization</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-5 md:gap-6">
                    <LegendRow color="bg-primary" label="Principal" value={fmt(principalShare)} />
                    <LegendRow color="bg-secondary" label="Interest" value={fmt(interestShare)} />
                    <LegendRow
                      color="bg-outline-variant"
                      label="Taxes & Insurance"
                      value={fmt(calc.fixed)}
                    />
                    <div className="mt-4 pt-6 border-t border-outline-variant/30">
                      <p className="body-md text-on-surface-variant italic leading-relaxed">
                        Figures are estimates based on standard luxury market premiums and regional tax averages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] label-md text-secondary tracking-[0.5em] uppercase opacity-40">
                PrimeEstate Capital Advisory
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory cards */}
      <section className="w-full section-gap bg-surface">
        <div className="container-prime">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <h3 className="heading-h1 max-w-lg leading-tight">Advanced Portfolio Analysis.</h3>
            <button className="p-4 border border-outline-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">north_east</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                n: '01 / Strategy',
                title: 'Tax Optimization',
                body: 'Consult with our advisors to understand the tax implications of high-value international acquisitions.',
              },
              {
                n: '02 / Liquidity',
                title: 'Bridging Finance',
                body: 'Securing seamless transitions between estates with private lending solutions tailored to your timeline.',
              },
              {
                n: '03 / Yield',
                title: 'ROI Projections',
                body: 'Detailed appreciation forecasts based on hyper-local historical data and urban development plans.',
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group p-8 md:p-10 bg-surface-container border border-outline-variant/20 hover:shadow-2xl transition-all duration-500"
              >
                <span className="label-md text-secondary mb-6 block uppercase tracking-widest">
                  {c.n}
                </span>
                <h4 className="heading-h3 mb-4">{c.title}</h4>
                <p className="body-md text-on-surface-variant mb-8">{c.body}</p>
                <div className="w-12 h-px bg-outline transition-all group-hover:w-full group-hover:bg-secondary" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function RangeRow({ label, value, min, max, step, value2, onChange, decimals = 0 }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end gap-2">
        <label className="label-lg text-on-surface uppercase tracking-wider">{label}</label>
        <span className="heading-h3 text-primary text-right">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value2}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1 bg-outline-variant appearance-none cursor-pointer accent-primary"
      />
    </div>
  )
}

function LegendRow({ color, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 ${color}`} />
        <span className="label-md uppercase">{label}</span>
      </div>
      <span className="body-md font-bold">{value}</span>
    </div>
  )
}
