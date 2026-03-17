import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import { PY01Illustration, YA61Illustration, XA61Illustration } from '../components/illustrations/ProductIllustrations'
import './Products.css'

export default function Products() {
  const intl = useIntl()
  const [active, setActive] = useState('ya61')
  const [showSpecs, setShowSpecs] = useState(false)

  const products = [
    {
      id: 'py01',
      lumoName: 'LUMO Home',
      modelRef: 'PY01',
      form: intl.formatMessage({ id: 'home.preview.p1.model' }).split(' · ')[1] || 'Floor-standing',
      tagline: <FormattedMessage id="prod.py01.tagline" />,
      price: <FormattedMessage id="prod.py01.price" />,
      colorAccent: 'var(--steel-blue)',
      colorPale: 'var(--steel-blue-pale)',
      badge: <FormattedMessage id="prod.badge.bestseller" />,
      dims: '692 × 780 mm',
      certifications: ['CE', 'SIAA', 'EPA'],
      desc: <FormattedMessage id="home.preview.p1.desc" />,
      features: [
        <FormattedMessage id="prod.py01.f1" />,
        <FormattedMessage id="prod.py01.f2" />,
        <FormattedMessage id="prod.py01.f3" />,
        <FormattedMessage id="prod.py01.f4" />,
        <FormattedMessage id="prod.py01.f5" />,
        <FormattedMessage id="prod.py01.f6" />,
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
      id: 'ya61',
      lumoName: 'LUMO Pro',
      modelRef: 'YA61',
      form: intl.formatMessage({ id: 'home.preview.p2.model' }).split(' · ').slice(1).join(' · ') || 'Wall-hung · U-shape',
      tagline: <FormattedMessage id="prod.ya61.tagline" />,
      price: <FormattedMessage id="prod.ya61.price" />,
      colorAccent: 'var(--graphite)',
      colorPale: 'var(--mist)',
      badge: <FormattedMessage id="prod.badge.premium" />,
      dims: '595 × 460 mm',
      certifications: ['CE', 'EN1717', 'SIAA'],
      desc: <FormattedMessage id="home.preview.p2.desc" />,
      features: [
        <FormattedMessage id="prod.ya61.f1" />,
        <FormattedMessage id="prod.ya61.f2" />,
        <FormattedMessage id="prod.ya61.f3" />,
        <FormattedMessage id="prod.ya61.f4" />,
        <FormattedMessage id="prod.ya61.f5" />,
        <FormattedMessage id="prod.ya61.f6" />,
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
      id: 'xa61',
      lumoName: 'LUMO Pro Square',
      modelRef: 'XA61',
      form: intl.formatMessage({ id: 'home.preview.p3.model' }).split(' · ').slice(1).join(' · ') || 'Wall-hung · Square',
      tagline: <FormattedMessage id="prod.xa61.tagline" />,
      price: <FormattedMessage id="prod.xa61.price" />,
      colorAccent: '#8FAF9A',
      colorPale: 'rgba(143,175,154,0.15)',
      badge: <FormattedMessage id="prod.badge.exclusive" />,
      dims: '590 × 460 mm',
      certifications: ['CE', 'EN1717', 'SIAA'],
      desc: <FormattedMessage id="home.preview.p3.desc" />,
      features: [
        <FormattedMessage id="prod.xa61.f1" />,
        <FormattedMessage id="prod.xa61.f2" />,
        <FormattedMessage id="prod.xa61.f3" />,
        <FormattedMessage id="prod.xa61.f4" />,
        <FormattedMessage id="prod.xa61.f5" />,
        <FormattedMessage id="prod.xa61.f6" />,
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
    { label: <FormattedMessage id="prod.comp.rimless" />, values: [true, true, true] },
    { label: <FormattedMessage id="prod.comp.warmwater" />, values: [true, true, true] },
    { label: <FormattedMessage id="prod.comp.dryer" />, values: [true, true, true] },
    { label: <FormattedMessage id="prod.comp.heatedseat" />, values: [true, true, true] },
    { label: <FormattedMessage id="prod.comp.nightlight" />, values: ['◎', true, true] },
    { label: <FormattedMessage id="prod.comp.autoflush" />, values: ['◎', true, true] },
    { label: <FormattedMessage id="prod.comp.plasma" />, values: ['◎', '◎', '◎'] },
    { label: <FormattedMessage id="prod.comp.app" />, values: [false, true, true] },
    { label: <FormattedMessage id="prod.comp.footsensor" />, values: ['◎', '◎', '◎'] },
    { label: <FormattedMessage id="prod.comp.en1717" />, values: [true, true, true] },
    { label: <FormattedMessage id="prod.comp.descaling" />, values: [true, true, true] },
    { label: <FormattedMessage id="prod.comp.wallhung" />, values: [false, true, true] },
    { label: <FormattedMessage id="prod.comp.concealed" />, values: [false, true, true] },
  ] as const;

  const product = products.find(p => p.id === active)!
  const IllComp = IllustrationMap[active]

  return (
    <div className="products-page">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <span className="section-label">
            <FormattedMessage id="home.preview.label" />
          </span>
          <h1 className="page-hero__title">
            <FormattedMessage id="prod.hero.title" />
          </h1>
          <p className="page-hero__sub">
            <FormattedMessage id="prod.hero.sub" />
          </p>
        </div>
      </section>

      {/* ── Selector ───────────────────────────────────────────── */}
      <section className="product-selector">
        <div className="container">
          <div className="product-tabs">
            {products.map(p => (
              <button key={p.id} className={`product-tab ${active === p.id ? 'product-tab--active' : ''}`}
                onClick={() => { setActive(p.id); setShowSpecs(false) }}>
                {p.badge && <span className="product-tab__badge">{p.badge}</span>}
                <span className="tab-lumo-name">{p.lumoName}</span>
                <span className="tab-model-ref">{p.modelRef}</span>
              </button>
            ))}
          </div>

          <div className="product-detail" key={active}>

            {/* Visual */}
            <div className="product-detail__visual" style={{ '--pale': product.colorPale } as React.CSSProperties}>
              <div className="product-detail__visual-inner">
                <IllComp className="product-illustration" />
                <div className="product-detail__model-badge">
                  <span className="model-ref">{product.modelRef}</span>
                  <span className="model-form">{product.form}</span>
                  <span className="model-dims">{product.dims}</span>
                </div>
                <div className="cert-strip">
                  {product.certifications.map(c => <span key={c} className="cert-chip">{c}</span>)}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="product-detail__info">
              <span className="section-label">{product.modelRef} · {product.form}</span>
              <h2 className="product-detail__name">{product.lumoName}</h2>
              <p className="product-detail__tagline">{product.tagline}</p>
              <p className="product-detail__desc">{product.desc}</p>

              <ul className="feat-list">
                {product.features.map((f, i) => (
                  <li key={i}><span className="check">✓</span>{f}</li>
                ))}
              </ul>

              <button className="specs-toggle" onClick={() => setShowSpecs(!showSpecs)}>
                <FormattedMessage id="prod.techSpecs" /> {showSpecs ? '↑' : '↓'}
              </button>

              {showSpecs && (
                <div className="specs-table">
                  {product.specs.map(s => (
                    <div key={s.label} className="spec-row">
                      <span className="spec-label">{s.label}</span>
                      <span className="spec-value">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="product-detail__footer">
                <div className="product-detail__price">
                  <span className="product-detail__price-label">
                    <FormattedMessage id="prod.price" />
                  </span>
                  <span className="product-detail__price-value">{product.price}</span>
                </div>
                <div className="product-detail__actions">
                  <Link to="/contact" className="btn btn--primary">
                    <FormattedMessage id="nav.requestConsultation" />
                  </Link>
                  <button className="btn btn--outline">
                    <FormattedMessage id="prod.datasheet" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Model overview cards ────────────────────────────────── */}
      <section className="models-overview bg-off">
        <div className="container">
          <div className="models-overview__header">
            <span className="section-label">
              <FormattedMessage id="prod.overview.label" />
            </span>
            <h2>
              <FormattedMessage id="prod.overview.title" />
            </h2>
          </div>
          <div className="models-grid">
            {products.map(p => {
              const IC = IllustrationMap[p.id]
              return (
                <div key={p.id}
                  className={`model-card ${active === p.id ? 'model-card--active' : ''}`}
                  onClick={() => { setActive(p.id); setShowSpecs(false); window.scrollTo({ top: 300, behavior: 'smooth' }) }}>
                  <div className="model-card__visual"><IC className="model-card__svg" /></div>
                  <div className="model-card__info">
                    <span className="model-card__lumo">{p.lumoName}</span>
                    <span className="model-card__ref">{p.modelRef} · {p.form}</span>
                    <span className="model-card__price">{p.price}</span>
                  </div>
                  {p.badge && <span className="model-card__badge">{p.badge}</span>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison table ───────────────────────────────────── */}
      <section className="comparison">
        <div className="container">
          <div className="comparison__header">
            <span className="section-label">
              <FormattedMessage id="prod.comp.label" />
            </span>
            <h2><FormattedMessage id="prod.comp.title" /></h2>
          </div>
          <div className="comparison__table-wrap">
            <table className="comparison__table">
              <thead>
                <tr>
                  <th><FormattedMessage id="prod.comp.feature" /></th>
                  <th>Home<br /><small>PY01</small></th>
                  <th>Pro<br /><small>YA61</small></th>
                  <th>Pro Square<br /><small>XA61</small></th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className={typeof v === 'boolean' ? (v ? 'check' : 'cross') : 'opt'}>
                        {typeof v === 'boolean' ? (v ? '✓' : '–') : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="comparison__note">
            <FormattedMessage id="prod.comp.note" />
          </p>
        </div>
      </section>

      {/* ── App teaser ─────────────────────────────────────────── */}
      <section className="app-teaser">
        <div className="container">
          <div className="app-teaser__inner">
            <div className="app-teaser__content">
              <span className="section-label">LUMO App</span>
              <h2>
                <FormattedMessage id="prod.app.title" />
              </h2>
              <p><FormattedMessage id="prod.app.desc" /></p>
              <div className="app-teaser__badges">
                <div className="app-badge">App Store</div>
                <div className="app-badge">Google Play</div>
              </div>
            </div>
            <div className="app-teaser__phone"><AppMockup /></div>
          </div>
        </div>
      </section>

    </div>
  )
}

const IllustrationMap: Record<string, React.FC<{ className?: string }>> = {
  py01: PY01Illustration,
  ya61: YA61Illustration,
  xa61: XA61Illustration,
}

/* ─── App mockup ─────────────────────────────────────────────── */
function AppMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="app-ui">
            <div className="app-ui__header"><span>LUMO</span><span className="app-ui__time">08:42</span></div>
            <div className="app-ui__greeting">
              <FormattedMessage id="prod.app.greeting" />
            </div>
            <div className="app-ui__cards">
              {[
                { label: <FormattedMessage id="prod.app.card.today" />, value: '✓', color: 'var(--sage)' },
                { label: <FormattedMessage id="prod.app.card.streak" />, value: '12d', color: 'var(--steel-blue)' },
                { label: <FormattedMessage id="prod.app.card.comfort" />, value: '98%', color: 'var(--champagne)' },
              ].map((c, i) => (
                <div key={i} className="app-ui__card" style={{ borderTopColor: c.color }}>
                  <span className="app-ui__card-value" style={{ color: c.color }}>{c.value}</span>
                  <span className="app-ui__card-label">{c.label}</span>
                </div>
              ))}
            </div>
            <div className="app-ui__wave">
              <svg viewBox="0 0 200 60" fill="none">
                <path d="M0 30 C30 10 50 50 80 30 C110 10 130 50 160 30 C180 18 195 35 200 30"
                  stroke="var(--steel-blue)" strokeWidth="1.5" fill="none" opacity="0.5" />
              </svg>
            </div>
            <div className="app-ui__footer">
              <FormattedMessage id="footer.designedForHealth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
