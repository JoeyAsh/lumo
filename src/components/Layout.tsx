import { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import { useLanguage } from '../i18n/LanguageContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang } = useParams<{ lang: string }>()
  const { locale, setLocale } = useLanguage()
  const intl = useIntl()

  const base = `/${lang}`

  const navLinks = [
    { to: `${base}/products`, label: intl.formatMessage({ id: 'nav.products' }) },
    { to: `${base}/experience`, label: intl.formatMessage({ id: 'nav.experience' }) },
    { to: `${base}/contact`, label: intl.formatMessage({ id: 'nav.contact' }) },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-[0_1px_0_rgba(44,44,44,0.06)]' : 'py-6'
      }`}>
        <div className="w-full max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          <Link to={base} className="flex items-center gap-2.5 text-graphite tracking-[0.18em] text-[0.95rem] uppercase hover:opacity-60 transition-opacity duration-300">
            <LogoMark />
            <span style={{ fontFamily: 'var(--font-display)' }} className="text-[1.3rem] tracking-[0.25em] font-normal">LUMO</span>
          </Link>

          {/* Desktop nav */}
          <nav className={`max-md:fixed max-md:inset-0 max-md:z-[99] max-md:bg-white max-md:flex-col max-md:justify-center max-md:gap-8 max-md:transition-transform max-md:duration-500 ${
            menuOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
          } flex items-center gap-10`}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative text-[0.82rem] font-light tracking-[0.08em] uppercase transition-colors duration-300 after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-px after:bg-steel-blue after:transition-transform after:duration-300 after:origin-left max-md:text-[1.1rem] ${
                  location.pathname === to
                    ? 'text-graphite after:scale-x-100'
                    : 'text-graphite-light hover:text-graphite after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="flex gap-2 mx-4 items-center max-md:mx-0 max-md:justify-center">
              {(['en', 'de', 'zh'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`text-[0.75rem] font-semibold px-1 py-0.5 transition-colors duration-200 uppercase ${
                    locale === l ? 'text-steel-blue' : 'text-graphite-light hover:text-graphite'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <Link
              to={`${base}/contact`}
              className="inline-flex items-center px-5 py-2.5 text-[0.78rem] tracking-[0.08em] uppercase text-white bg-graphite rounded-full hover:bg-graphite-mid hover:-translate-y-px transition-all duration-300 max-md:mt-4 max-md:px-8 max-md:py-3"
            >
              <FormattedMessage id="nav.requestConsultation" />
            </Link>
          </nav>

          {/* Burger */}
          <button
            className="hidden max-md:flex flex-col gap-[5px] p-1 z-[101] relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-graphite transition-transform duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block w-6 h-px bg-graphite transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-graphite transition-transform duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      <main className="pt-20 flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-graphite text-cream py-16 mt-32">
        <div className="w-full max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-[1fr_2fr] gap-16 pb-16 border-b border-white/[0.08] max-md:grid-cols-1">
            <div>
              <div className="flex items-center gap-2.5 text-white mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '0.2em' }}>
                <LogoMark />
                <span>LUMO</span>
              </div>
              <p className="text-[0.78rem] tracking-[0.1em] uppercase text-champagne font-light mt-3">
                <FormattedMessage id="footer.claim" />
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-2">
              <div>
                <h4 className="text-[0.72rem] tracking-[0.12em] uppercase text-champagne font-normal mb-5">
                  <FormattedMessage id="footer.products" />
                </h4>
                <Link to={`${base}/products`} className="block text-[0.88rem] font-light text-white/60 mb-2.5 hover:text-white transition-colors duration-150">LUMO Home</Link>
                <Link to={`${base}/products`} className="block text-[0.88rem] font-light text-white/60 mb-2.5 hover:text-white transition-colors duration-150">LUMO Pro</Link>
                <Link to={`${base}/products`} className="block text-[0.88rem] font-light text-white/60 mb-2.5 hover:text-white transition-colors duration-150">LUMO Pro Square</Link>
              </div>
              <div>
                <h4 className="text-[0.72rem] tracking-[0.12em] uppercase text-champagne font-normal mb-5">
                  <FormattedMessage id="footer.company" />
                </h4>
                <Link to={`${base}/experience`} className="block text-[0.88rem] font-light text-white/60 mb-2.5 hover:text-white transition-colors duration-150"><FormattedMessage id="footer.vision" /></Link>
                <Link to={`${base}/contact`} className="block text-[0.88rem] font-light text-white/60 mb-2.5 hover:text-white transition-colors duration-150"><FormattedMessage id="nav.contact" /></Link>
                <a href="#" className="block text-[0.88rem] font-light text-white/60 mb-2.5 hover:text-white transition-colors duration-150"><FormattedMessage id="footer.findDealer" /></a>
              </div>
              <div>
                <h4 className="text-[0.72rem] tracking-[0.12em] uppercase text-champagne font-normal mb-5">
                  <FormattedMessage id="footer.legal" />
                </h4>
                <a href="#" className="block text-[0.88rem] font-light text-white/60 mb-2.5 hover:text-white transition-colors duration-150"><FormattedMessage id="footer.privacy" /></a>
                <a href="#" className="block text-[0.88rem] font-light text-white/60 mb-2.5 hover:text-white transition-colors duration-150"><FormattedMessage id="footer.imprint" /></a>
                <a href="#" className="block text-[0.88rem] font-light text-white/60 mb-2.5 hover:text-white transition-colors duration-150"><FormattedMessage id="footer.terms" /></a>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 text-[0.75rem] text-white/30 tracking-[0.06em] max-md:flex-col max-md:gap-2 max-md:text-center">
            <p><FormattedMessage id="footer.rights" values={{ year: new Date().getFullYear() }} /></p>
            <p><FormattedMessage id="footer.designedForHealth" /></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="14" cy="14" r="2.5" fill="currentColor" />
    </svg>
  )
}
