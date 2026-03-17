import './Experience.css'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export default function Experience() {
  const values = [
    { icon: '◎', title: <FormattedMessage id="exp.values.v1.title" />, desc: <FormattedMessage id="exp.values.v1.desc" /> },
    { icon: '◈', title: <FormattedMessage id="exp.values.v2.title" />, desc: <FormattedMessage id="exp.values.v2.desc" /> },
    { icon: '◇', title: <FormattedMessage id="exp.values.v3.title" />, desc: <FormattedMessage id="exp.values.v3.desc" /> },
    { icon: '◐', title: <FormattedMessage id="exp.values.v4.title" />, desc: <FormattedMessage id="exp.values.v4.desc" /> },
    { icon: '◉', title: <FormattedMessage id="exp.values.v5.title" />, desc: <FormattedMessage id="exp.values.v5.desc" /> },
  ] as const;

  const milestones = [
    { year: '2019', title: <FormattedMessage id="exp.journey.m1.title" />, desc: <FormattedMessage id="exp.journey.m1.desc" /> },
    { year: '2021', title: <FormattedMessage id="exp.journey.m2.title" />, desc: <FormattedMessage id="exp.journey.m2.desc" /> },
    { year: '2022', title: <FormattedMessage id="exp.journey.m3.title" />, desc: <FormattedMessage id="exp.journey.m3.desc" /> },
    { year: '2024', title: <FormattedMessage id="exp.journey.m4.title" />, desc: <FormattedMessage id="exp.journey.m4.desc" /> },
    { year: '2025', title: <FormattedMessage id="exp.journey.m5.title" />, desc: <FormattedMessage id="exp.journey.m5.desc" /> },
  ] as const;

  const audiences = [
    { icon: '⌂', label: <FormattedMessage id="exp.targets.a1.label" />, desc: <FormattedMessage id="exp.targets.a1.desc" /> },
    { icon: '◈', label: <FormattedMessage id="exp.targets.a2.label" />, desc: <FormattedMessage id="exp.targets.a2.desc" /> },
    { icon: '❖', label: <FormattedMessage id="exp.targets.a3.label" />, desc: <FormattedMessage id="exp.targets.a3.desc" /> },
    { icon: '◎', label: <FormattedMessage id="exp.targets.a4.label" />, desc: <FormattedMessage id="exp.targets.a4.desc" /> },
  ] as const;

  const statsData = [
    { value: '10+', label: <FormattedMessage id="exp.stats.markets" /> },
    { value: '98%', label: <FormattedMessage id="exp.stats.satisfaction" /> },
    { value: '5 ★', label: <FormattedMessage id="exp.stats.showrooms" /> },
    { value: 'CO₂', label: <FormattedMessage id="exp.stats.neutral" /> },
  ] as const;

  return (
    <div className="experience-page">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="exp-hero">
        <div className="exp-hero__bg">
          <div className="exp-hero__line exp-hero__line--1" />
          <div className="exp-hero__line exp-hero__line--2" />
          <div className="exp-hero__line exp-hero__line--3" />
        </div>
        <div className="container exp-hero__content">
          <span className="section-label">
            <FormattedMessage id="exp.hero.vision" />
          </span>
          <h1 className="exp-hero__title">
            <FormattedMessage id="exp.hero.title" />
          </h1>
          <p className="exp-hero__sub">
            <FormattedMessage id="exp.hero.sub" />
          </p>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────────── */}
      <section className="mission">
        <div className="container container--narrow">
          <div className="mission__text">
            <p>
              <FormattedMessage id="exp.mission.text1" />
            </p>
            <p>
              <FormattedMessage id="exp.mission.text2" />
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <section className="exp-values">
        <div className="container">
          <div className="exp-values__header">
            <span className="section-label">
              <FormattedMessage id="exp.values.label" />
            </span>
            <h2>
              <FormattedMessage id="exp.values.title" />
            </h2>
          </div>
          <div className="exp-values__grid">
            {values.map((v, i) => (
              <div key={i} className="value-block">
                <div className="value-block__number">0{i + 1}</div>
                <div className="value-block__content">
                  <div className="value-block__icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────────── */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline-section__header">
            <span className="section-label">
              <FormattedMessage id="exp.journey.label" />
            </span>
            <h2>
              <FormattedMessage id="exp.journey.title" />
            </h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline__item timeline__item--${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline__card">
                  <span className="timeline__year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
                <div className="timeline__dot" />
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* ── Audiences ──────────────────────────────────────────── */}
      <section className="targets">
        <div className="container">
          <div className="targets__header">
            <span className="section-label">
              <FormattedMessage id="exp.targets.label" />
            </span>
            <h2>
              <FormattedMessage id="exp.targets.title" />
            </h2>
          </div>
          <div className="targets__grid">
            {audiences.map((a, i) => (
              <div key={i} className="audience-card">
                <div className="audience-card__icon">{a.icon}</div>
                <h3>{a.label}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────── */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {statsData.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-item__value">{s.value}</div>
                <div className="stat-item__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="exp-cta">
        <div className="container container--narrow exp-cta__inner">
          <h2>
            <FormattedMessage id="exp.cta.title" />
          </h2>
          <p>
            <FormattedMessage id="exp.cta.sub" />
          </p>
          <div className="exp-cta__actions">
            <Link to="/contact" className="btn-exp btn-exp--primary">
              <FormattedMessage id="exp.cta.request" />
            </Link>
            <Link to="/products" className="btn-exp btn-exp--ghost">
              <FormattedMessage id="exp.cta.explore" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
