import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import { PY01Illustration, YA61Illustration, XA61Illustration } from '../components/illustrations/ProductIllustrations'

export default function Products() {
  const { lang } = useParams<{ lang: string }>()
  const base = `/${lang}`
  const intl = useIntl()
  const [active, setActive] = useState('ya61')
  const [showSpecs, setShowSpecs] = useState(false)

  const products = [
    {
      id: 'py01', lumoName: 'LUMO Home', modelRef: 'PY01',
      form: intl.formatMessage({ id: 'home.preview.p1.model' }).split(' · ')[1] || 'Floor-standing',
      tagline: <FormattedMessage id="prod.py01.tagline" />,
      price: <FormattedMessage id="prod.py01.price" />,
      colorAccent: 'var(--color-steel-blue)', colorPale: 'var(--color-steel-blue-pale)',
      badge: <FormattedMessage id="prod.badge.bestseller" />,
      dims: '692 × 780 mm', certifications: ['CE', 'SIAA', 'EPA'],
      desc: <FormattedMessage id="home.preview.p1.desc" />,
      features: [
        <FormattedMessage id="prod.py01.f1" />, <FormattedMessage id="prod.py01.f2" />,
        <FormattedMessage id="prod.py01.f3" />, <FormattedMessage id="prod.py01.f4" />,
        <FormattedMessage id="prod.py01.f5" />, <FormattedMessage id="prod.py01.f6" />,
      ],
      specs: [
        { label: intl.formatMessage({ id: 'prod.spec.voltage' }), value: '220–240 V / 50–60 Hz' },
        { label: intl.formatMessage({ id: 'prod.spec.power' }), value: '900 W (max. 1,600 W)' },
        { label: intl.formatMessage({ id: 'prod.spec.flush' }), value: '6.0 L / 4.0 L' },
        { label: intl.formatMessage({ id: 'prod.spec.dims' }), value: '692 × 395 × 780 mm' },
        { label: intl.formatMessage({ id: 'prod.spec.cert' }), value: 'CE' },
      ],
    },
    {
      id: 'ya61', lumoName: 'LUMO Pro', modelRef: 'YA61',
      form: intl.formatMessage({ id: 'home.preview.p2.model' }).split(' · ').slice(1).join(' · ') || 'Wall-hung · U-shape',
      tagline: <FormattedMessage id="prod.ya61.tagline" />,
      price: <FormattedMessage id="prod.ya61.price" />,
      colorAccent: 'var(--color-graphite)', colorPale: 'var(--color-mist)',
      badge: <FormattedMessage id="prod.badge.premium" />,
      dims: '595 × 460 mm', certifications: ['CE', 'EN1717', 'SIAA'],
      desc: <FormattedMessage id="home.preview.p2.desc" />,
      features: [
        <FormattedMessage id="prod.ya61.f1" />, <FormattedMessage id="prod.ya61.f2" />,
        <FormattedMessage id="prod.ya61.f3" />, <FormattedMessage id="prod.ya61.f4" />,
        <FormattedMessage id="prod.ya61.f5" />, <FormattedMessage id="prod.ya61.f6" />,
      ],
      specs: [
        { label: intl.formatMessage({ id: 'prod.spec.voltage' }), value: '220–240 V / 50–60 Hz' },
        { label: intl.formatMessage({ id: 'prod.spec.power' }), value: '1,010–1,055 W (max. 1,500 W)' },
        { label: intl.formatMessage({ id: 'prod.spec.flush' }), value: '6.0 L / 4.0 L' },
        { label: intl.formatMessage({ id: 'prod.spec.dims' }), value: '595 × 380 mm (ceramic)' },
        { label: intl.formatMessage({ id: 'prod.spec.cert' }), value: 'CE / EN1717' },
      ],
    },
    {
      id: 'xa61', lumoName: 'LUMO Pro Square', modelRef: 'XA61',
      form: intl.formatMessage({ id: 'home.preview.p3.model' }).split(' · ').slice(1).join(' · ') || 'Wall-hung · Square',
      tagline: <FormattedMessage id="prod.xa61.tagline" />,
      price: <FormattedMessage id="prod.xa61.price" />,
      colorAccent: '#8FAF9A', colorPale: 'rgba(143,175,154,0.15)',
      badge: <FormattedMessage id="prod.badge.exclusive" />,
      dims: '590 × 460 mm', certifications: ['CE', 'EN1717', 'SIAA'],
      desc: <FormattedMessage id="home.preview.p3.desc" />,
      features: [
        <FormattedMessage id="prod.xa61.f1" />, <FormattedMessage id="prod.xa61.f2" />,
        <FormattedMessage id="prod.xa61.f3" />, <FormattedMessage id="prod.xa61.f4" />,
        <FormattedMessage id="prod.xa61.f5" />, <FormattedMessage id="prod.xa61.f6" />,
      ],
      specs: [
        { label: intl.formatMessage({ id: 'prod.spec.voltage' }), value: '220–240 V / 50–60 Hz' },
        { label: intl.formatMessage({ id: 'prod.spec.power' }), value: '1,010–1,055 W (max. 1,500 W)' },
        { label: intl.formatMessage({ id: 'prod.spec.flush' }), value: '6.0 L / 4.0 L' },
        { label: intl.formatMessage({ id: 'prod.spec.dims' }), value: '590 × 380 mm (ceramic)' },
        { label: intl.formatMessage({ id: 'prod.spec.cert' }), value: 'CE / EN1717' },
      ],
    },
  ]

  const comparisonRows = [
    { label: <FormattedMessage id="prod.comp.rimless" />, values: [true, true, true] as const },
    { label: <FormattedMessage id="prod.comp.warmwater" />, values: [true, true, true] as const },
    { label: <FormattedMessage id="prod.comp.dryer" />, values: [true, true, true] as const },
    { label: <FormattedMessage id="prod.comp.heatedseat" />, values: [true, true, true] as const },
    { label: <FormattedMessage id="prod.comp.nightlight" />, values: ['◎', true, true] as const },
    { label: <FormattedMessage id="prod.comp.autoflush" />, values: ['◎', true, true] as const },
    { label: <FormattedMessage id="prod.comp.plasma" />, values: ['◎', '◎', '◎'] as const },
    { label: <FormattedMessage id="prod.comp.app" />, values: [false, true, true] as const },
    { label: <FormattedMessage id="prod.comp.footsensor" />, values: ['◎', '◎', '◎'] as const },
    { label: <FormattedMessage id="prod.comp.en1717" />, values: [true, true, true] as const },
    { label: <FormattedMessage id="prod.comp.descaling" />, values: [true, true, true] as const },
    { label: <FormattedMessage id="prod.comp.wallhung" />, values: [false, true, true] as const },
    { label: <FormattedMessage id="prod.comp.concealed" />, values: [false, true, true] as const },
  ]

  const IllustrationMap: Record<string, React.FC<{ className?: string }>> = {
    py01: PY01Illustration, ya61: YA61Illustration, xa61: XA61Illustration,
  }

  const product = products.find(p => p.id === active)!
  const IllComp = IllustrationMap[active]

  return (
    <div>
      {/* ── Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_0%,rgba(123,167,188,0.08),transparent)] pointer-events-none" />
        <div className="w-full max-w-[1200px] mx-auto px-8 relative">
          <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-3">
            <FormattedMessage id="home.preview.label" />
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] text-graphite mt-2 mb-5">
            <FormattedMessage id="prod.hero.title" />
          </h1>
          <p className="text-[1.05rem] text-graphite-light font-light max-w-[480px]">
            <FormattedMessage id="prod.hero.sub" />
          </p>
        </div>
      </section>

      {/* ── Selector */}
      <section className="pb-32">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          {/* Tabs */}
          <div className="flex gap-3 mb-16 flex-wrap">
            {products.map(p => (
              <button
                key={p.id}
                onClick={() => { setActive(p.id); setShowSpecs(false) }}
                className={`relative flex flex-col items-start gap-0.5 px-7 py-3 text-[0.78rem] tracking-[0.06em] uppercase rounded-full border transition-all duration-300 font-sans ${
                  active === p.id
                    ? 'bg-graphite text-white border-transparent'
                    : 'bg-off-white text-graphite-light border-transparent hover:text-graphite hover:border-cream'
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-2 -right-1 text-[0.58rem] tracking-[0.06em] bg-steel-blue text-white px-1.5 py-0.5 rounded-full font-normal">
                    {p.badge}
                  </span>
                )}
                <span className="text-[0.82rem] font-normal">{p.lumoName}</span>
                <span className="text-[0.65rem] opacity-60 tracking-[0.08em]">{p.modelRef}</span>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div key={active} className="grid grid-cols-2 max-md:grid-cols-1 gap-16 items-start animate-fade-up">
            {/* Visual */}
            <div
              className="product-visual-bg relative rounded-3xl bg-off-white p-10 flex flex-col items-center gap-5 min-h-[420px] overflow-hidden"
              style={{ '--pale': product.colorPale } as React.CSSProperties}
            >
              <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                <IllComp className="w-full max-w-[320px] h-auto [filter:drop-shadow(0_16px_32px_rgba(44,44,44,0.10))]" />
                <div className="flex gap-3 items-center flex-wrap justify-center">
                  <span style={{ fontFamily: 'var(--font-display)' }} className="text-[1.1rem] text-graphite tracking-[0.08em]">{product.modelRef}</span>
                  <span className="text-[0.72rem] text-graphite-light tracking-[0.08em] uppercase px-2.5 py-0.5 bg-cream rounded-full">{product.form}</span>
                  <span className="text-[0.7rem] text-champagne tracking-[0.08em]">{product.dims}</span>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {product.certifications.map(c => (
                    <span key={c} className="text-[0.62rem] font-normal tracking-[0.1em] px-2 py-0.5 border border-mist rounded-full text-graphite-light bg-white">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-3">{product.modelRef} · {product.form}</span>
              <h2 className="text-[2.2rem] text-graphite mb-1.5">{product.lumoName}</h2>
              <p className="text-[0.95rem] italic text-graphite-light mb-5" style={{ fontFamily: 'var(--font-display)' }}>{product.tagline}</p>
              <p className="text-[0.9rem] text-graphite-light font-light leading-[1.75] mb-7">{product.desc}</p>

              <ul className="flex flex-col gap-2.5 mb-7">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-baseline gap-2.5 text-[0.85rem] text-graphite font-light">
                    <span className="text-sage font-normal shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowSpecs(!showSpecs)}
                className="inline-flex items-center gap-1.5 text-[0.72rem] font-normal tracking-[0.08em] uppercase text-steel-blue hover:text-graphite transition-colors duration-150 pb-2 border-b border-steel-blue-pale mb-4"
              >
                <FormattedMessage id="prod.techSpecs" /> {showSpecs ? '↑' : '↓'}
              </button>

              {showSpecs && (
                <div className="mb-6">
                  {product.specs.map(s => (
                    <div key={String(s.label)} className="flex justify-between items-center py-2 border-b border-cream last:border-b-0 gap-4">
                      <span className="text-[0.78rem] text-graphite-light font-light">{s.label}</span>
                      <span className="text-[0.78rem] text-graphite font-normal text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between gap-6 flex-wrap pt-7 border-t border-cream">
                <div>
                  <span className="block text-[0.68rem] tracking-[0.1em] uppercase text-graphite-light mb-0.5">
                    <FormattedMessage id="prod.price" />
                  </span>
                  <span className="block text-[1.5rem] font-light text-graphite" style={{ fontFamily: 'var(--font-display)' }}>{product.price}</span>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link to={`${base}/contact`} className="inline-flex items-center px-7 py-3 text-[0.8rem] tracking-[0.1em] uppercase rounded-full bg-graphite text-white hover:bg-graphite-mid hover:-translate-y-0.5 transition-all duration-300">
                    <FormattedMessage id="nav.requestConsultation" />
                  </Link>
                  <button className="inline-flex items-center px-7 py-3 text-[0.8rem] tracking-[0.1em] uppercase rounded-full border border-champagne text-graphite hover:bg-champagne-light hover:-translate-y-0.5 transition-all duration-300">
                    <FormattedMessage id="prod.datasheet" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Models overview */}
      <section className="py-32 bg-off-white">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-3">
              <FormattedMessage id="prod.overview.label" />
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)]"><FormattedMessage id="prod.overview.title" /></h2>
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-2 gap-6">
            {products.map(p => {
              const IC = IllustrationMap[p.id]
              return (
                <div
                  key={p.id}
                  onClick={() => { setActive(p.id); setShowSpecs(false); window.scrollTo({ top: 300, behavior: 'smooth' }) }}
                  className={`relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border-[1.5px] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(44,44,44,0.08)] ${
                    active === p.id ? 'border-steel-blue-light shadow-[0_0_0_4px_rgba(123,167,188,0.1)]' : 'border-transparent'
                  }`}
                >
                  {p.badge && (
                    <span className="absolute top-3 right-3 text-[0.58rem] tracking-[0.08em] uppercase bg-steel-blue text-white px-2 py-0.5 rounded-full">
                      {p.badge}
                    </span>
                  )}
                  <div className="bg-off-white p-6 aspect-[4/3] flex items-center justify-center">
                    <IC className="w-full max-w-[200px] h-auto" />
                  </div>
                  <div className="p-5 pb-6 border-t border-cream flex flex-col gap-1">
                    <span className="text-[1.2rem] font-light text-graphite" style={{ fontFamily: 'var(--font-display)' }}>{p.lumoName}</span>
                    <span className="text-[0.7rem] tracking-[0.1em] uppercase text-graphite-light">{p.modelRef} · {p.form}</span>
                    <span className="text-[0.82rem] text-steel-blue font-light mt-1">{p.price}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison */}
      <section className="py-32">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-3">
              <FormattedMessage id="prod.comp.label" />
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)]"><FormattedMessage id="prod.comp.title" /></h2>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-cream">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr>
                  <th className="text-left p-3.5 text-[0.95rem] font-normal text-graphite bg-off-white border-b border-cream w-[38%]" style={{ fontFamily: 'var(--font-display)' }}>
                    <FormattedMessage id="prod.comp.feature" />
                  </th>
                  {['Home\nPY01', 'Pro\nYA61', 'Pro Square\nXA61'].map((h, i) => {
                    const [name, model] = h.split('\n')
                    return (
                      <th key={i} className="text-left p-3.5 text-[0.95rem] font-normal text-graphite bg-off-white border-b border-cream" style={{ fontFamily: 'var(--font-display)' }}>
                        {name}<br /><small className="font-sans text-[0.65rem] tracking-[0.08em] text-champagne">{model}</small>
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="p-3.5 text-[0.82rem] font-light border-b border-cream last:border-b-0">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className={`p-3.5 text-[0.82rem] font-light border-b border-cream last:border-b-0 ${
                        typeof v === 'boolean' ? (v ? 'text-sage font-normal' : 'text-champagne opacity-50') : 'text-steel-blue text-[0.8rem]'
                      }`}>
                        {typeof v === 'boolean' ? (v ? '✓' : '–') : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.72rem] text-graphite-light mt-4"><FormattedMessage id="prod.comp.note" /></p>
        </div>
      </section>

      {/* ── App teaser */}
      <section className="py-32">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 items-center">
            <div>
              <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-3">LUMO App</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] mt-2 mb-5"><FormattedMessage id="prod.app.title" /></h2>
              <p className="text-[0.95rem] text-graphite-light leading-[1.75] font-light mb-8"><FormattedMessage id="prod.app.desc" /></p>
              <div className="flex gap-3">
                {['App Store', 'Google Play'].map(s => (
                  <div key={s} className="px-5 py-2.5 text-[0.78rem] tracking-[0.06em] bg-graphite text-white rounded-xl font-light cursor-pointer hover:bg-graphite-mid transition-colors duration-300">{s}</div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <AppMockup />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function AppMockup() {
  return (
    <div className="w-full max-w-[280px]">
      <div className="bg-graphite rounded-[40px] p-3 shadow-[0_12px_48px_rgba(44,44,44,0.12),0_0_0_1px_rgba(255,255,255,0.05)]">
        <div className="bg-off-white rounded-[30px] overflow-hidden min-h-[480px]">
          <div className="p-8 pb-6">
            <div className="flex justify-between text-[0.65rem] tracking-[0.2em] uppercase text-graphite-light mb-8">
              <span>LUMO</span><span className="text-[0.7rem] font-normal">08:42</span>
            </div>
            <div className="mb-6 text-[1.6rem] font-light text-graphite" style={{ fontFamily: 'var(--font-display)' }}>
              <FormattedMessage id="prod.app.greeting" />
            </div>
            <div className="flex gap-2 mb-8">
              {[
                { label: <FormattedMessage id="prod.app.card.today" />, value: '✓', color: '#8FAF9A' },
                { label: <FormattedMessage id="prod.app.card.streak" />, value: '12d', color: '#7BA7BC' },
                { label: <FormattedMessage id="prod.app.card.comfort" />, value: '98%', color: '#C8B99A' },
              ].map((c, i) => (
                <div key={i} className="flex-1 bg-white rounded-xl p-2 text-center shadow-[0_1px_3px_rgba(44,44,44,0.06)] border-t-2" style={{ borderTopColor: c.color }}>
                  <span className="block text-[1.1rem] font-normal mb-1" style={{ fontFamily: 'var(--font-display)', color: c.color }}>{c.value}</span>
                  <span className="block text-[0.6rem] tracking-[0.1em] uppercase text-graphite-light">{c.label}</span>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 200 60" fill="none" className="w-full mb-6">
              <path d="M0 30 C30 10 50 50 80 30 C110 10 130 50 160 30 C180 18 195 35 200 30" stroke="#7BA7BC" strokeWidth="1.5" fill="none" opacity="0.5" />
            </svg>
            <div className="text-[0.6rem] tracking-[0.12em] uppercase text-graphite-light text-center opacity-50">
              <FormattedMessage id="footer.designedForHealth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
