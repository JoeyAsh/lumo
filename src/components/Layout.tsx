import { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import { useLanguage } from '../i18n/LanguageContext'
import './Layout.css'

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
    <div className="layout">
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container container--wide">
          <Link to={base} className="nav__logo">
            <LogoMark />
            <span className="nav__logo-text">LUMO</span>
          </Link>

          <nav className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav__link ${location.pathname === to ? 'nav__link--active' : ''}`}
              >
                {label}
              </Link>
            ))}

            <div className="nav__lang-switcher">
              <button
                className={`nav__lang-btn ${locale === 'en' ? 'nav__lang-btn--active' : ''}`}
                onClick={() => setLocale('en')}
              >
                EN
              </button>
              <button
                className={`nav__lang-btn ${locale === 'de' ? 'nav__lang-btn--active' : ''}`}
                onClick={() => setLocale('de')}
              >
                DE
              </button>
              <button
                className={`nav__lang-btn ${locale === 'zh' ? 'nav__lang-btn--active' : ''}`}
                onClick={() => setLocale('zh')}
              >
                ZH
              </button>
            </div>

            <Link to={`${base}/contact`} className="nav__cta">
              <FormattedMessage id="nav.requestConsultation" />
            </Link>
          </nav>

          <button
            className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="footer__inner container container--wide">
          <div className="footer__brand">
            <div className="footer__logo">
              <LogoMark />
              <span>LUMO</span>
            </div>
            <p className="footer__claim">
              <FormattedMessage id="footer.claim" />
            </p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4><FormattedMessage id="footer.products" /></h4>
              <Link to={`${base}/products`}>LUMO Home</Link>
              <Link to={`${base}/products`}>LUMO Pro</Link>
              <Link to={`${base}/products`}>LUMO Pro Square</Link>
            </div>
            <div className="footer__col">
              <h4><FormattedMessage id="footer.company" /></h4>
              <Link to={`${base}/experience`}><FormattedMessage id="footer.vision" /></Link>
              <Link to={`${base}/contact`}><FormattedMessage id="nav.contact" /></Link>
              <a href="#"><FormattedMessage id="footer.findDealer" /></a>
            </div>
            <div className="footer__col">
              <h4><FormattedMessage id="footer.legal" /></h4>
              <a href="#"><FormattedMessage id="footer.privacy" /></a>
              <a href="#"><FormattedMessage id="footer.imprint" /></a>
              <a href="#"><FormattedMessage id="footer.terms" /></a>
            </div>
          </div>
        </div>
        <div className="footer__bottom container container--wide">
          <p>
            <FormattedMessage
              id="footer.rights"
              values={{ year: new Date().getFullYear() }}
            />
          </p>
          <p><FormattedMessage id="footer.designedForHealth" /></p>
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
