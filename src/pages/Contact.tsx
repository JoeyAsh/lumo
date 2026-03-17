import { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import './Contact.css'

export default function Contact() {
  const intl = useIntl()
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'consultation',
    message: '',
    product: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const showrooms = [
    { city: intl.formatMessage({ id: 'cont.show.munich' }), address: 'Maximilianstraße 42, 80539', open: true },
    { city: intl.formatMessage({ id: 'cont.show.hamburg' }), address: 'Neuer Wall 18, 20354', open: false },
    { city: intl.formatMessage({ id: 'cont.show.zurich' }), address: 'Bahnhofstrasse 64, 8001', open: true },
    { city: intl.formatMessage({ id: 'cont.show.vienna' }), address: 'Kärntner Ring 12, 1010', open: false },
  ]

  return (
    <div className="contact-page">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="container">
          <span className="section-label">
            <FormattedMessage id="nav.contact" />
          </span>
          <h1 className="contact-hero__title">
            <FormattedMessage id="cont.hero.title" />
          </h1>
          <p className="contact-hero__sub">
            <FormattedMessage id="cont.hero.sub" />
          </p>
        </div>
      </section>

      {/* ── Main Content ───────────────────────────────────────── */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">

            {/* Form */}
            <div className="contact-form-wrap">
              {sent ? (
                <div className="contact-success">
                  <div className="contact-success__icon">◎</div>
                  <h2><FormattedMessage id="cont.form.thanks" /></h2>
                  <p><FormattedMessage id="cont.form.received" /></p>
                  <button className="btn-contact btn-contact--ghost" onClick={() => setSent(false)}>
                    <FormattedMessage id="cont.form.another" />
                  </button>
                </div>
              ) : (
                <div className="contact-form">
                  <h2 className="contact-form__title">
                    <FormattedMessage id="cont.form.send" />
                  </h2>

                  <div className="form-group">
                    <label className="form-label">
                      <FormattedMessage id="cont.form.interest" />
                    </label>
                    <div className="form-radio-group">
                      {[
                        { value: 'consultation', label: intl.formatMessage({ id: 'cont.form.opt.cons' }) },
                        { value: 'showroom', label: intl.formatMessage({ id: 'cont.form.opt.show' }) },
                        { value: 'trade', label: intl.formatMessage({ id: 'cont.form.opt.trade' }) },
                        { value: 'other', label: intl.formatMessage({ id: 'cont.form.opt.other' }) },
                      ].map(opt => (
                        <label key={opt.value} className={`form-radio ${form.subject === opt.value ? 'form-radio--active' : ''}`}>
                          <input
                            type="radio"
                            name="subject"
                            value={opt.value}
                            checked={form.subject === opt.value}
                            onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        <FormattedMessage id="cont.form.name" />
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder={intl.formatMessage({ id: 'cont.form.name.ph' })}
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        <FormattedMessage id="cont.form.email" />
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <FormattedMessage id="cont.form.product" />
                    </label>
                    <select
                      className="form-input form-select"
                      value={form.product}
                      onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                    >
                      <option value="">{intl.formatMessage({ id: 'cont.form.prod.ph' })}</option>
                      <option value="home">LUMO Home</option>
                      <option value="pro">LUMO Pro</option>
                      <option value="pro-square">LUMO Pro Square</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <FormattedMessage id="cont.form.msg" />
                    </label>
                    <textarea
                      className="form-input form-textarea"
                      placeholder={intl.formatMessage({ id: 'cont.form.msg.ph' })}
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>

                  <button
                    className="btn-contact btn-contact--primary"
                    onClick={handleSubmit}
                  >
                    <FormattedMessage id="cont.form.submit" /> →
                  </button>

                  <p className="form-privacy">
                    <FormattedMessage id="cont.form.privacy" />
                  </p>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="contact-info">
              <div className="contact-info__block">
                <h3><FormattedMessage id="home.cta.showroom" /></h3>
                <p>Maximilianstraße 42<br />80539 Munich<br />Germany</p>
                <a href="#" className="contact-info__link">
                  <FormattedMessage id="cont.info.maps" /> →
                </a>
              </div>

              <div className="contact-info__block">
                <h3><FormattedMessage id="cont.info.hours" /></h3>
                <p>
                  <FormattedMessage id="cont.info.hours.val1" /><br />
                  <FormattedMessage id="cont.info.hours.val2" /><br />
                  <FormattedMessage id="cont.info.hours.val3" />
                </p>
              </div>

              <div className="contact-info__block">
                <h3><FormattedMessage id="cont.info.direct" /></h3>
                <a href="tel:+4989123456" className="contact-info__link">+49 89 123 456 00</a>
                <a href="mailto:hello@lumo.de" className="contact-info__link">hello@lumo.de</a>
              </div>

              <div className="contact-info__block">
                <h3><FormattedMessage id="cont.info.trade" /></h3>
                <p><FormattedMessage id="cont.info.trade.desc" /></p>
                <a href="mailto:trade@lumo.de" className="contact-info__link">trade@lumo.de</a>
              </div>

              <div className="contact-info__map">
                <MapPlaceholder />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Showrooms ──────────────────────────────────────────── */}
      <section className="showrooms">
        <div className="container">
          <div className="showrooms__header">
            <span className="section-label">
              <FormattedMessage id="home.cta.showroom" />
            </span>
            <h2>
              <FormattedMessage id="cont.show.title" />
            </h2>
          </div>
          <div className="showrooms__grid">
            {showrooms.map(s => (
              <div key={s.city} className="showroom-card">
                <div className="showroom-card__city">{s.city}</div>
                <div className="showroom-card__address">{s.address}</div>
                <div className="showroom-card__status" data-open={s.open}>
                  {s.open ? intl.formatMessage({ id: 'cont.show.now' }) : intl.formatMessage({ id: 'cont.show.request' })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

function MapPlaceholder() {
  return (
    <div className="map-placeholder">
      <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="var(--mist)" rx="12" />
        {[30, 60, 90, 120, 150].map(y => (
          <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(123,167,188,0.15)" strokeWidth="1" />
        ))}
        {[50, 100, 150, 200, 250].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="180" stroke="rgba(123,167,188,0.15)" strokeWidth="1" />
        ))}
        <rect x="0" y="75" width="300" height="6" fill="rgba(255,255,255,0.6)" rx="1" />
        <rect x="120" y="0" width="6" height="180" fill="rgba(255,255,255,0.6)" rx="1" />
        <rect x="60" y="0" width="4" height="180" fill="rgba(255,255,255,0.35)" rx="1" />
        <rect x="0" y="120" width="300" height="4" fill="rgba(255,255,255,0.35)" rx="1" />
        <circle cx="123" cy="78" r="10" fill="var(--steel-blue)" opacity="0.25" />
        <circle cx="123" cy="78" r="5" fill="var(--steel-blue)" />
        <text x="140" y="73" fill="var(--graphite)" fontSize="9" fontFamily="sans-serif">LUMO Showroom</text>
        <text x="140" y="86" fill="var(--graphite-light)" fontSize="7.5" fontFamily="sans-serif">Maximilianstraße 42</text>
      </svg>
      <span className="map-placeholder__label">
        <FormattedMessage id="cont.info.maps" /> →
      </span>
    </div>
  )
}
