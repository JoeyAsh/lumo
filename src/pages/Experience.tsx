import { Link, useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export default function Experience() {
  const { lang } = useParams<{ lang: string }>()
  const base = `/${lang}`

  const values = [
    { icon: '◎', title: <FormattedMessage id="exp.values.v1.title" />, desc: <FormattedMessage id="exp.values.v1.desc" /> },
    { icon: '◈', title: <FormattedMessage id="exp.values.v2.title" />, desc: <FormattedMessage id="exp.values.v2.desc" /> },
    { icon: '◇', title: <FormattedMessage id="exp.values.v3.title" />, desc: <FormattedMessage id="exp.values.v3.desc" /> },
    { icon: '◐', title: <FormattedMessage id="exp.values.v4.title" />, desc: <FormattedMessage id="exp.values.v4.desc" /> },
    { icon: '◉', title: <FormattedMessage id="exp.values.v5.title" />, desc: <FormattedMessage id="exp.values.v5.desc" /> },
  ]

  const milestones = [
    { year: '2019', title: <FormattedMessage id="exp.journey.m1.title" />, desc: <FormattedMessage id="exp.journey.m1.desc" /> },
    { year: '2021', title: <FormattedMessage id="exp.journey.m2.title" />, desc: <FormattedMessage id="exp.journey.m2.desc" /> },
    { year: '2022', title: <FormattedMessage id="exp.journey.m3.title" />, desc: <FormattedMessage id="exp.journey.m3.desc" /> },
    { year: '2024', title: <FormattedMessage id="exp.journey.m4.title" />, desc: <FormattedMessage id="exp.journey.m4.desc" /> },
    { year: '2025', title: <FormattedMessage id="exp.journey.m5.title" />, desc: <FormattedMessage id="exp.journey.m5.desc" /> },
  ]

  const audiences = [
    { icon: '⌂', label: <FormattedMessage id="exp.targets.a1.label" />, desc: <FormattedMessage id="exp.targets.a1.desc" /> },
    { icon: '◈', label: <FormattedMessage id="exp.targets.a2.label" />, desc: <FormattedMessage id="exp.targets.a2.desc" /> },
    { icon: '❖', label: <FormattedMessage id="exp.targets.a3.label" />, desc: <FormattedMessage id="exp.targets.a3.desc" /> },
    { icon: '◎', label: <FormattedMessage id="exp.targets.a4.label" />, desc: <FormattedMessage id="exp.targets.a4.desc" /> },
  ]

  const statsData = [
    { value: '10+', label: <FormattedMessage id="exp.stats.markets" /> },
    { value: '98%', label: <FormattedMessage id="exp.stats.satisfaction" /> },
    { value: '5 ★', label: <FormattedMessage id="exp.stats.showrooms" /> },
    { value: 'CO₂', label: <FormattedMessage id="exp.stats.neutral" /> },
  ]

  return (
    <div>
      {/* ── Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-graphite">
        <div className="absolute inset-0 pointer-events-none">
          {[{ top: '30%', w: '100%', delay: '0s' }, { top: '55%', w: '70%', left: '15%', delay: '1s' }, { top: '70%', w: '40%', left: '30%', delay: '2s' }].map((l, i) => (
            <div key={i} className="absolute h-px bg-gradient-to-r from-transparent via-[rgba(123,167,188,0.15)] to-transparent animate-shimmer-slow" style={{ top: l.top, width: l.w, left: l.left || '0', animationDelay: l.delay }} />
          ))}
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-32">
          <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue-light mb-4">
            <FormattedMessage id="exp.hero.vision" />
          </span>
          <h1 className="text-[clamp(3rem,7vw,6rem)] text-white mt-2 mb-6">
            <FormattedMessage id="exp.hero.title" />
          </h1>
          <p className="text-[1.1rem] text-white/50 font-light max-w-[480px] leading-[1.75]">
            <FormattedMessage id="exp.hero.sub" />
          </p>
        </div>
      </section>

      {/* ── Mission */}
      <section className="py-32">
        <div className="w-full max-w-[800px] mx-auto px-8">
          <div className="flex flex-col gap-6">
            {['exp.mission.text1', 'exp.mission.text2'].map(id => (
              <p key={id} className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-graphite font-light leading-[1.65]" style={{ fontFamily: 'var(--font-display)' }}>
                <FormattedMessage id={id} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values */}
      <section className="py-32 bg-off-white">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-4">
              <FormattedMessage id="exp.values.label" />
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)]"><FormattedMessage id="exp.values.title" /></h2>
          </div>
          <div className="flex flex-col gap-px bg-cream rounded-3xl overflow-hidden">
            {values.map((v, i) => (
              <div key={i} className="bg-white hover:bg-off-white transition-colors duration-300 grid grid-cols-[80px_1fr] max-sm:grid-cols-[50px_1fr] gap-8 p-9">
                <div className="text-[2.5rem] font-light text-champagne-light leading-none pt-1 self-start" style={{ fontFamily: 'var(--font-display)' }}>0{i + 1}</div>
                <div>
                  <div className="text-[1.2rem] text-steel-blue mb-2">{v.icon}</div>
                  <h3 className="font-sans text-[1rem] font-normal text-graphite mb-2">{v.title}</h3>
                  <p className="text-[0.88rem] text-graphite-light font-light leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline */}
      <section className="py-32">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-4">
              <FormattedMessage id="exp.journey.label" />
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)]"><FormattedMessage id="exp.journey.title" /></h2>
          </div>
          <div className="relative py-8">
            <div className="timeline-line max-md:hidden" />
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex mb-12 items-center max-md:flex-col max-md:pl-6 max-md:border-l max-md:border-champagne ${
                  i % 2 === 0
                    ? 'flex-row pr-[calc(50%+3rem)]'
                    : 'flex-row-reverse pl-[calc(50%+3rem)]'
                }`}
              >
                <div className="bg-off-white rounded-xl p-6 flex-1 border border-cream hover:border-champagne hover:shadow-[0_1px_3px_rgba(44,44,44,0.06)] transition-all duration-300">
                  <span className="block text-[0.72rem] tracking-[0.15em] uppercase text-steel-blue font-normal mb-2">{m.year}</span>
                  <h3 className="font-sans text-[0.95rem] font-normal text-graphite mb-1.5">{m.title}</h3>
                  <p className="text-[0.82rem] text-graphite-light font-light leading-[1.55]">{m.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-champagne border-2 border-white shadow-[0_0_0_3px_#E4D8C4] shrink-0 max-md:left-[-5px] max-md:top-6 max-md:translate-x-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audiences */}
      <section className="py-32 bg-off-white">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-4">
              <FormattedMessage id="exp.targets.label" />
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)]"><FormattedMessage id="exp.targets.title" /></h2>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {audiences.map((a, i) => (
              <div key={i} className="bg-white rounded-3xl p-10 text-center border border-transparent hover:border-champagne hover:-translate-y-1 transition-all duration-300">
                <div className="text-[1.5rem] text-steel-blue mb-4">{a.icon}</div>
                <h3 className="font-sans text-[0.9rem] font-normal text-graphite mb-3">{a.label}</h3>
                <p className="text-[0.82rem] text-graphite-light font-light leading-[1.55]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats */}
      <section className="py-16 bg-graphite">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-4 max-md:grid-cols-2">
            {statsData.map((s, i) => (
              <div key={i} className={`py-10 px-8 text-center ${i < 3 ? 'border-r border-white/[0.06] max-md:last:border-r-0' : ''} max-md:[&:nth-child(2)]:border-r-0`}>
                <div className="text-[3rem] font-light text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{s.value}</div>
                <div className="text-[0.75rem] tracking-[0.12em] uppercase text-white/40 font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="py-32 text-center">
        <div className="w-full max-w-[800px] mx-auto px-8">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] mb-5"><FormattedMessage id="exp.cta.title" /></h2>
          <p className="text-[1rem] text-graphite-light font-light leading-[1.75] mb-10"><FormattedMessage id="exp.cta.sub" /></p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to={`${base}/contact`} className="inline-flex items-center px-8 py-3.5 text-[0.8rem] tracking-[0.1em] uppercase rounded-full bg-graphite text-white hover:bg-graphite-mid hover:-translate-y-0.5 transition-all duration-300">
              <FormattedMessage id="exp.cta.request" />
            </Link>
            <Link to={`${base}/products`} className="inline-flex items-center px-8 py-3.5 text-[0.8rem] tracking-[0.1em] uppercase rounded-full border border-[rgba(44,44,44,0.2)] text-graphite hover:border-graphite hover:-translate-y-0.5 transition-all duration-300">
              <FormattedMessage id="exp.cta.explore" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
