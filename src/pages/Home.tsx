import { Link, useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { PY01Illustration, YA61Illustration, XA61Illustration } from '../components/illustrations/ProductIllustrations'
import './Home.css'

export default function Home() {
  const { lang } = useParams<{ lang: string }>()
  const base = `/${lang}`

  const productLines = [
    {
      name: <FormattedMessage id="home.preview.p1.name" />,
      model: <FormattedMessage id="home.preview.p1.model" />,
      desc: <FormattedMessage id="home.preview.p1.desc" />,
      variant: 'home',
      IllComp: PY01Illustration,
    },
    {
      name: <FormattedMessage id="home.preview.p2.name" />,
      model: <FormattedMessage id="home.preview.p2.model" />,
      desc: <FormattedMessage id="home.preview.p2.desc" />,
      variant: 'pro',
      IllComp: YA61Illustration,
    },
    {
      name: <FormattedMessage id="home.preview.p3.name" />,
      model: <FormattedMessage id="home.preview.p3.model" />,
      desc: <FormattedMessage id="home.preview.p3.desc" />,
      variant: 'care',
      IllComp: XA61Illustration,
    },
  ] as const;

  const features = [
    {
      icon: '✦',
      title: <FormattedMessage id="home.features.f1.title" />,
      desc: <FormattedMessage id="home.features.f1.desc" />,
    },
    {
      icon: '◈',
      title: <FormattedMessage id="home.features.f2.title" />,
      desc: <FormattedMessage id="home.features.f2.desc" />,
    },
    {
      icon: '◇',
      title: <FormattedMessage id="home.features.f3.title" />,
      desc: <FormattedMessage id="home.features.f3.desc" />,
    },
    {
      icon: '◐',
      title: <FormattedMessage id="home.features.f4.title" />,
      desc: <FormattedMessage id="home.features.f4.desc" />,
    },
  ] as const;

  return (
    <div className="home">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid" />
        </div>
        <div className="hero__content container">
          <span className="hero__eyebrow animate-fade-up delay-1">
            <FormattedMessage id="home.hero.eyebrow" />
          </span>
          <h1 className="hero__headline animate-fade-up delay-2">
            <FormattedMessage id="home.hero.headline" />
          </h1>
          <p className="hero__sub animate-fade-up delay-3">
            <FormattedMessage id="home.hero.sub" />
          </p>
          <div className="hero__actions animate-fade-up delay-4">
            <Link to={`${base}/products`} className="btn btn--primary">
              <FormattedMessage id="home.hero.cta.explore" />
            </Link>
            <Link to={`${base}/experience`} className="btn btn--ghost">
              <FormattedMessage id="home.hero.cta.vision" />
            </Link>
          </div>
        </div>
        <div className="hero__device animate-fade-in delay-3">
          <DeviceIllustration />
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── Values Strip ───────────────────────────────────────── */}
      <section className="values">
        <div className="container container--wide">
          <div className="values__strip">
            {[
              { icon: '◎', labelId: 'home.values.v1' },
              { icon: '◈', labelId: 'home.values.v2' },
              { icon: '◇', labelId: 'home.values.v3' },
              { icon: '◐', labelId: 'home.values.v4' },
            ].map(({ icon, labelId }) => (
              <div key={labelId} className="values__item">
                <span className="values__icon">{icon}</span>
                <span className="values__label"><FormattedMessage id={labelId} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────── */}
      <section className="features">
        <div className="container">
          <div className="features__header">
            <span className="section-label">
              <FormattedMessage id="home.features.label" />
            </span>
            <h2 className="features__title">
              <FormattedMessage id="home.features.title" />
            </h2>
          </div>
          <div className="features__grid">
            {features.map((f, i) => (
              <div key={i} className={`feature-card feature-card--${i + 1}`}>
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Preview ────────────────────────────────────── */}
      <section className="products-preview">
        <div className="container">
          <div className="products-preview__header">
            <span className="section-label">
              <FormattedMessage id="home.preview.label" />
            </span>
            <h2>
              <FormattedMessage id="home.preview.title" />
            </h2>
          </div>
          <div className="products-preview__grid">
            {productLines.map((p, i) => (
              <Link to={`${base}/products`} key={i} className={`product-card product-card--${p.variant}`}>
                <div className="product-card__visual">
                  <p.IllComp className="product-card__illustration" />
                </div>
                <div className="product-card__info">
                  <span className="product-card__line">{p.name}</span>
                  <span className="product-card__model">{p.model}</span>
                  <p className="product-card__desc">{p.desc}</p>
                  <span className="product-card__cta">
                    <FormattedMessage id="home.preview.learnMore" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ─────────────────────────────────────────── */}
      <section className="philosophy">
        <div className="philosophy__inner container--narrow container">
          <span className="section-label">
            <FormattedMessage id="home.philosophy.label" />
          </span>
          <blockquote className="philosophy__quote">
            <FormattedMessage id="home.philosophy.quote" />
          </blockquote>
          <p className="philosophy__text">
            <FormattedMessage id="home.philosophy.text" />
          </p>
          <Link to={`${base}/experience`} className="btn btn--outline">
            <FormattedMessage id="home.philosophy.more" />
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section className="cta-banner">
        <div className="cta-banner__bg">
          <div className="cta-banner__orb" />
        </div>
        <div className="container cta-banner__content">
          <h2>
            <FormattedMessage id="home.cta.title" />
          </h2>
          <p>
            <FormattedMessage id="home.cta.sub" />
          </p>
          <div className="cta-banner__actions">
            <Link to={`${base}/contact`} className="btn btn--primary">
              <FormattedMessage id="home.cta.request" />
            </Link>
            <a href="#" className="btn btn--ghost-dark">
              <FormattedMessage id="home.cta.showroom" />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ─── SVG Hero Illustration ──────────────────────────────────── */
function DeviceIllustration() {
  return (
    <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="device-svg">
      <ellipse cx="200" cy="340" rx="160" ry="100" fill="url(#shellGrad)" />
      <ellipse cx="200" cy="290" rx="160" ry="80" fill="url(#topGrad)" />
      <ellipse cx="200" cy="210" rx="140" ry="60" fill="url(#lidGrad)" />
      <ellipse cx="200" cy="200" rx="125" ry="50" fill="url(#lidInner)" />
      <ellipse cx="200" cy="200" rx="125" ry="50" stroke="#7BA7BC" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
      <circle cx="200" cy="200" r="18" fill="none" stroke="#7BA7BC" strokeWidth="1" opacity="0.6" />
      <circle cx="200" cy="200" r="6" fill="#7BA7BC" opacity="0.8" />
      <circle cx="90" cy="320" r="3" fill="#7BA7BC" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="310" cy="280" r="2" fill="#C8B99A" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="140" cy="170" r="2" fill="#7BA7BC" opacity="0.35">
        <animate attributeName="opacity" values="0.35;0.65;0.35" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <path d="M200 140 C200 140 185 160 185 170 C185 178 192 184 200 184 C208 184 215 178 215 170 C215 160 200 140 200 140Z"
        fill="#7BA7BC" opacity="0.2" />
      <defs>
        <radialGradient id="shellGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#F0EDE8" />
          <stop offset="100%" stopColor="#D4CFC7" />
        </radialGradient>
        <radialGradient id="topGrad" cx="50%" cy="0%">
          <stop offset="0%" stopColor="#FAFAF8" />
          <stop offset="100%" stopColor="#E8E4DC" />
        </radialGradient>
        <radialGradient id="lidGrad" cx="40%" cy="20%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0DDD6" />
        </radialGradient>
        <radialGradient id="lidInner" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#F5F3EF" />
          <stop offset="100%" stopColor="#D8D4CC" />
        </radialGradient>
      </defs>
    </svg>
  )
}
