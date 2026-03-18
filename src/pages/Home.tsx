import { Link, useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { PY01Illustration, YA61Illustration, XA61Illustration } from '../components/illustrations/ProductIllustrations'

export default function Home() {
  const { lang } = useParams<{ lang: string }>()
  const base = `/${lang}`

  const productLines = [
    {
      name: <FormattedMessage id="home.preview.p1.name" />,
      model: <FormattedMessage id="home.preview.p1.model" />,
      desc: <FormattedMessage id="home.preview.p1.desc" />,
      variant: 'home' as const,
      IllComp: PY01Illustration,
    },
    {
      name: <FormattedMessage id="home.preview.p2.name" />,
      model: <FormattedMessage id="home.preview.p2.model" />,
      desc: <FormattedMessage id="home.preview.p2.desc" />,
      variant: 'pro' as const,
      IllComp: YA61Illustration,
    },
    {
      name: <FormattedMessage id="home.preview.p3.name" />,
      model: <FormattedMessage id="home.preview.p3.model" />,
      desc: <FormattedMessage id="home.preview.p3.desc" />,
      variant: 'care' as const,
      IllComp: XA61Illustration,
    },
  ]

  const features = [
    { icon: '✦', title: <FormattedMessage id="home.features.f1.title" />, desc: <FormattedMessage id="home.features.f1.desc" /> },
    { icon: '◈', title: <FormattedMessage id="home.features.f2.title" />, desc: <FormattedMessage id="home.features.f2.desc" /> },
    { icon: '◇', title: <FormattedMessage id="home.features.f3.title" />, desc: <FormattedMessage id="home.features.f3.desc" /> },
    { icon: '◐', title: <FormattedMessage id="home.features.f4.title" />, desc: <FormattedMessage id="home.features.f4.desc" /> },
  ]

  const cardVisualClass: Record<string, string> = {
    home: 'bg-gradient-to-br from-steel-blue-pale to-off-white',
    pro:  'bg-gradient-to-br from-mist to-cream',
    care: 'bg-gradient-to-br from-[rgba(143,175,154,0.15)] to-off-white',
  }

  return (
    <div>
      {/* ── Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] -top-[100px] -right-[100px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(123,167,188,0.12)_0%,transparent_70%)] animate-breathe" />
          <div className="absolute w-[400px] h-[400px] bottom-0 -left-[100px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(200,185,154,0.1)_0%,transparent_70%)] animate-breathe-reverse" />
          <div className="absolute w-[300px] h-[300px] top-[40%] left-[30%] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(143,175,154,0.06)_0%,transparent_70%)] animate-breathe-slow" />
          <div className="hero-grid" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-32 max-w-[680px]">
          <span className="animate-fade-up delay-100 inline-block text-[0.75rem] font-normal tracking-[0.2em] uppercase text-steel-blue mb-6 px-4 py-1.5 border border-steel-blue-pale rounded-full bg-[rgba(123,167,188,0.05)]">
            <FormattedMessage id="home.hero.eyebrow" />
          </span>
          <h1 className="animate-fade-up delay-200 text-[clamp(3.5rem,8vw,7rem)] text-graphite mb-6 leading-[1.05]">
            <FormattedMessage id="home.hero.headline" />
          </h1>
          <p className="animate-fade-up delay-300 text-[1.05rem] text-graphite-light font-light leading-[1.7] mb-10 max-w-[520px]">
            <FormattedMessage id="home.hero.sub" />
          </p>
          <div className="animate-fade-up delay-[0.4s] flex gap-4 flex-wrap max-sm:flex-col">
            <Link to={`${base}/products`} className="inline-flex items-center gap-2 px-8 py-3.5 text-[0.8rem] font-normal tracking-[0.1em] uppercase rounded-full bg-graphite text-white hover:bg-graphite-mid hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(44,44,44,0.08)] transition-all duration-300 whitespace-nowrap max-sm:justify-center">
              <FormattedMessage id="home.hero.cta.explore" />
            </Link>
            <Link to={`${base}/experience`} className="inline-flex items-center gap-2 px-8 py-3.5 text-[0.8rem] font-normal tracking-[0.1em] uppercase rounded-full border border-[rgba(44,44,44,0.2)] text-graphite hover:border-graphite hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap max-sm:justify-center">
              <FormattedMessage id="home.hero.cta.vision" />
            </Link>
          </div>
        </div>

        <div className="absolute right-[5%] bottom-[5%] w-[380px] opacity-90 animate-float pointer-events-none max-lg:hidden">
          <DeviceIllustration />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-[60px] bg-gradient-to-b from-champagne to-transparent animate-shimmer" />
        </div>
      </section>

      {/* ── Values Strip */}
      <section className="bg-graphite py-7">
        <div className="w-full max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              { icon: '◎', labelId: 'home.values.v1' },
              { icon: '◈', labelId: 'home.values.v2' },
              { icon: '◇', labelId: 'home.values.v3' },
              { icon: '◐', labelId: 'home.values.v4' },
            ].map(({ icon, labelId }, i) => (
              <div key={labelId} className={`flex items-center gap-3 px-6 py-2 ${i < 3 ? 'border-r border-white/[0.08] max-sm:border-r-0 max-sm:border-b max-sm:border-white/[0.08]' : ''}`}>
                <span className="text-steel-blue-light text-[1.1rem] shrink-0">{icon}</span>
                <span className="text-[0.78rem] font-light text-white/65 tracking-[0.04em] leading-snug"><FormattedMessage id={labelId} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features */}
      <section className="py-32">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-4">
              <FormattedMessage id="home.features.label" />
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-graphite">
              <FormattedMessage id="home.features.title" />
            </h2>
          </div>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-px bg-cream border border-cream rounded-3xl overflow-hidden">
            {features.map((f, i) => (
              <div key={i} className="feature-card-accent relative bg-white hover:bg-off-white transition-colors duration-300 p-10 overflow-hidden">
                <span className="block text-[1.4rem] text-steel-blue mb-6">{f.icon}</span>
                <h3 className="text-[1rem] font-sans font-normal text-graphite mb-3 leading-snug">{f.title}</h3>
                <p className="text-[0.85rem] text-graphite-light font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Preview */}
      <section className="py-32 bg-off-white">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-4">
              <FormattedMessage id="home.preview.label" />
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)]">
              <FormattedMessage id="home.preview.title" />
            </h2>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {productLines.map((p, i) => (
              <Link to={`${base}/products`} key={i} className="bg-white rounded-3xl overflow-hidden block hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(44,44,44,0.12)] transition-all duration-300">
                <div className={`${cardVisualClass[p.variant]} p-12 flex items-center justify-center aspect-[4/3]`}>
                  <p.IllComp className="w-full max-w-[180px] h-auto drop-shadow-[0_8px_20px_rgba(44,44,44,0.08)]" />
                </div>
                <div className="p-6 pb-8 border-t border-cream">
                  <span className="block text-[0.65rem] tracking-[0.1em] uppercase text-champagne mb-1">{p.model}</span>
                  <span className="block mb-2 text-[1.4rem] font-light tracking-[0.05em] text-graphite" style={{ fontFamily: 'var(--font-display)' }}>{p.name}</span>
                  <p className="text-[0.85rem] text-graphite-light font-light leading-relaxed mb-5">{p.desc}</p>
                  <span className="text-[0.78rem] tracking-[0.08em] uppercase text-steel-blue font-normal transition-[letter-spacing] duration-300 group-hover:tracking-[0.14em]">
                    <FormattedMessage id="home.preview.learnMore" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy */}
      <section className="py-32 text-center">
        <div className="w-full max-w-[800px] mx-auto px-8">
          <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-4">
            <FormattedMessage id="home.philosophy.label" />
          </span>
          <blockquote className="text-[clamp(1.4rem,3.5vw,2.2rem)] font-light italic text-graphite leading-[1.4] my-6 relative
            before:block before:w-10 before:h-px before:bg-champagne before:mx-auto before:my-4
            after:block after:w-10 after:h-px after:bg-champagne after:mx-auto after:my-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <FormattedMessage id="home.philosophy.quote" />
          </blockquote>
          <p className="text-[1rem] text-graphite-light font-light leading-[1.8] mb-10">
            <FormattedMessage id="home.philosophy.text" />
          </p>
          <Link to={`${base}/experience`} className="inline-flex items-center gap-2 px-8 py-3.5 text-[0.8rem] font-normal tracking-[0.1em] uppercase rounded-full border border-champagne text-graphite hover:bg-champagne-light hover:-translate-y-0.5 transition-all duration-300">
            <FormattedMessage id="home.philosophy.more" />
          </Link>
        </div>
      </section>

      {/* ── CTA Banner */}
      <section className="relative bg-graphite py-32 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(123,167,188,0.12)_0%,transparent_65%)] animate-breathe" />
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white mb-5">
            <FormattedMessage id="home.cta.title" />
          </h2>
          <p className="text-[1rem] text-white/55 font-light mb-10 leading-[1.7]">
            <FormattedMessage id="home.cta.sub" />
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to={`${base}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 text-[0.8rem] font-normal tracking-[0.1em] uppercase rounded-full bg-steel-blue text-white hover:bg-steel-blue-light hover:-translate-y-0.5 transition-all duration-300">
              <FormattedMessage id="home.cta.request" />
            </Link>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 text-[0.8rem] font-normal tracking-[0.1em] uppercase rounded-full border border-white/20 text-white/80 hover:border-white/60 hover:text-white transition-all duration-300">
              <FormattedMessage id="home.cta.showroom" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function DeviceIllustration() {
  return (
    <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto [filter:drop-shadow(0_20px_60px_rgba(123,167,188,0.2))]">
      <ellipse cx="200" cy="340" rx="160" ry="100" fill="url(#shellGrad)" />
      <ellipse cx="200" cy="290" rx="160" ry="80" fill="url(#topGrad)" />
      <ellipse cx="200" cy="210" rx="140" ry="60" fill="url(#lidGrad)" />
      <ellipse cx="200" cy="200" rx="125" ry="50" fill="url(#lidInner)" />
      <ellipse cx="200" cy="200" rx="125" ry="50" stroke="#7BA7BC" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
      <circle cx="200" cy="200" r="18" fill="none" stroke="#7BA7BC" strokeWidth="1" opacity="0.6" />
      <circle cx="200" cy="200" r="6" fill="#7BA7BC" opacity="0.8" />
      <circle cx="90" cy="320" r="3" fill="#7BA7BC" opacity="0.3"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" /></circle>
      <circle cx="310" cy="280" r="2" fill="#C8B99A" opacity="0.4"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" /></circle>
      <circle cx="140" cy="170" r="2" fill="#7BA7BC" opacity="0.35"><animate attributeName="opacity" values="0.35;0.65;0.35" dur="2.5s" repeatCount="indefinite" /></circle>
      <path d="M200 140 C200 140 185 160 185 170 C185 178 192 184 200 184 C208 184 215 178 215 170 C215 160 200 140 200 140Z" fill="#7BA7BC" opacity="0.2" />
      <defs>
        <radialGradient id="shellGrad" cx="40%" cy="30%"><stop offset="0%" stopColor="#F0EDE8" /><stop offset="100%" stopColor="#D4CFC7" /></radialGradient>
        <radialGradient id="topGrad" cx="50%" cy="0%"><stop offset="0%" stopColor="#FAFAF8" /><stop offset="100%" stopColor="#E8E4DC" /></radialGradient>
        <radialGradient id="lidGrad" cx="40%" cy="20%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="100%" stopColor="#E0DDD6" /></radialGradient>
        <radialGradient id="lidInner" cx="50%" cy="30%"><stop offset="0%" stopColor="#F5F3EF" /><stop offset="100%" stopColor="#D8D4CC" /></radialGradient>
      </defs>
    </svg>
  )
}
