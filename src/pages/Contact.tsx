import { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

export default function Contact() {
  const intl = useIntl()
  const [form, setForm] = useState({ name: '', email: '', subject: 'consultation', message: '', product: '' })
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

  const inputClass = "w-full px-4 py-3.5 font-sans text-[0.9rem] font-light text-graphite bg-white border border-cream rounded-xl outline-none transition-all duration-300 appearance-none placeholder:text-graphite/30 focus:border-steel-blue-light focus:shadow-[0_0_0_3px_rgba(123,167,188,0.1)]"

  return (
    <div>
      {/* ── Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_10%,rgba(200,185,154,0.1),transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(123,167,188,0.07),transparent)] pointer-events-none" />
        <div className="w-full max-w-[1200px] mx-auto px-8 relative">
          <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-4">
            <FormattedMessage id="nav.contact" />
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] text-graphite mt-2 mb-5">
            <FormattedMessage id="cont.hero.title" />
          </h1>
          <p className="text-[1rem] text-graphite-light font-light max-w-[480px] leading-[1.75]">
            <FormattedMessage id="cont.hero.sub" />
          </p>
        </div>
      </section>

      {/* ── Main */}
      <section className="pb-32">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-[1.2fr_1fr] max-md:grid-cols-1 gap-16 items-start">

            {/* Form */}
            <div>
              {sent ? (
                <div className="bg-off-white rounded-3xl p-16 text-center animate-fade-up">
                  <div className="text-[2.5rem] text-sage mb-6">◎</div>
                  <h2 className="text-[2rem] mb-4"><FormattedMessage id="cont.form.thanks" /></h2>
                  <p className="text-[0.95rem] text-graphite-light font-light leading-[1.7] mb-8"><FormattedMessage id="cont.form.received" /></p>
                  <button
                    onClick={() => setSent(false)}
                    className="inline-flex items-center px-9 py-3.5 text-[0.82rem] tracking-[0.08em] uppercase rounded-full border border-cream text-graphite hover:border-graphite transition-all duration-300"
                  >
                    <FormattedMessage id="cont.form.another" />
                  </button>
                </div>
              ) : (
                <div className="bg-off-white rounded-3xl p-10 max-sm:p-7">
                  <h2 className="text-[1.75rem] text-graphite mb-8"><FormattedMessage id="cont.form.send" /></h2>

                  {/* Subject radios */}
                  <div className="mb-6">
                    <label className="block text-[0.75rem] font-normal tracking-[0.1em] uppercase text-graphite-light mb-2.5">
                      <FormattedMessage id="cont.form.interest" />
                    </label>
                    <div className="flex gap-2.5 flex-wrap">
                      {[
                        { value: 'consultation', label: intl.formatMessage({ id: 'cont.form.opt.cons' }) },
                        { value: 'showroom', label: intl.formatMessage({ id: 'cont.form.opt.show' }) },
                        { value: 'trade', label: intl.formatMessage({ id: 'cont.form.opt.trade' }) },
                        { value: 'other', label: intl.formatMessage({ id: 'cont.form.opt.other' }) },
                      ].map(opt => (
                        <label
                          key={opt.value}
                          className={`flex items-center gap-2 px-4 py-2 text-[0.8rem] font-light rounded-full cursor-pointer border transition-all duration-150 ${
                            form.subject === opt.value
                              ? 'bg-graphite text-white border-graphite'
                              : 'bg-white text-graphite-mid border-cream hover:border-graphite-light'
                          }`}
                        >
                          <input type="radio" name="subject" value={opt.value} checked={form.subject === opt.value}
                            onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} className="hidden" />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mb-6">
                    <div>
                      <label className="block text-[0.75rem] font-normal tracking-[0.1em] uppercase text-graphite-light mb-2">
                        <FormattedMessage id="cont.form.name" />
                      </label>
                      <input type="text" className={inputClass} placeholder={intl.formatMessage({ id: 'cont.form.name.ph' })}
                        value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-[0.75rem] font-normal tracking-[0.1em] uppercase text-graphite-light mb-2">
                        <FormattedMessage id="cont.form.email" />
                      </label>
                      <input type="email" className={inputClass} placeholder="your@email.com"
                        value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                    </div>
                  </div>

                  {/* Product */}
                  <div className="mb-6">
                    <label className="block text-[0.75rem] font-normal tracking-[0.1em] uppercase text-graphite-light mb-2">
                      <FormattedMessage id="cont.form.product" />
                    </label>
                    <select
                      className={`${inputClass} cursor-pointer bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B6B6B' stroke-width='1.2'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_1rem_center] bg-[length:12px] pr-10`}
                      value={form.product} onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                    >
                      <option value="">{intl.formatMessage({ id: 'cont.form.prod.ph' })}</option>
                      <option value="home">LUMO Home</option>
                      <option value="pro">LUMO Pro</option>
                      <option value="pro-square">LUMO Pro Square</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-[0.75rem] font-normal tracking-[0.1em] uppercase text-graphite-light mb-2">
                      <FormattedMessage id="cont.form.msg" />
                    </label>
                    <textarea
                      className={`${inputClass} resize-y min-h-[120px]`}
                      placeholder={intl.formatMessage({ id: 'cont.form.msg.ph' })}
                      rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center px-9 py-3.5 text-[0.82rem] tracking-[0.08em] uppercase rounded-full bg-graphite text-white hover:bg-graphite-mid hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(44,44,44,0.08)] transition-all duration-300"
                  >
                    <FormattedMessage id="cont.form.submit" /> →
                  </button>

                  <p className="mt-4 text-[0.75rem] text-graphite-light font-light leading-relaxed">
                    <FormattedMessage id="cont.form.privacy" />
                  </p>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              {[
                {
                  titleId: 'home.cta.showroom',
                  content: <p className="text-[0.9rem] text-graphite-light font-light leading-[1.65]">Maximilianstraße 42<br />80539 Munich<br />Germany</p>,
                  link: { href: '#', id: 'cont.info.maps' },
                },
                {
                  titleId: 'cont.info.hours',
                  content: <p className="text-[0.9rem] text-graphite-light font-light leading-[1.65]">
                    <FormattedMessage id="cont.info.hours.val1" /><br />
                    <FormattedMessage id="cont.info.hours.val2" /><br />
                    <FormattedMessage id="cont.info.hours.val3" />
                  </p>,
                },
                {
                  titleId: 'cont.info.direct',
                  content: <>
                    <a href="tel:+4989123456" className="block text-[0.9rem] text-steel-blue font-light mt-1.5 hover:text-graphite transition-colors duration-150">+49 89 123 456 00</a>
                    <a href="mailto:hello@lumo.de" className="block text-[0.9rem] text-steel-blue font-light mt-1.5 hover:text-graphite transition-colors duration-150">hello@lumo.de</a>
                  </>,
                },
                {
                  titleId: 'cont.info.trade',
                  content: <p className="text-[0.9rem] text-graphite-light font-light leading-[1.65]"><FormattedMessage id="cont.info.trade.desc" /></p>,
                  link: { href: 'mailto:trade@lumo.de', text: 'trade@lumo.de' },
                },
              ].map((block, i, arr) => (
                <div key={i} className={`py-7 ${i < arr.length - 1 ? 'border-b border-cream' : ''}`}>
                  <h3 className="font-sans text-[0.72rem] font-normal tracking-[0.12em] uppercase text-champagne mb-3">
                    <FormattedMessage id={block.titleId} />
                  </h3>
                  {block.content}
                  {block.link && (
                    <a href={block.link.href} className="block text-[0.9rem] text-steel-blue font-light mt-1.5 hover:text-graphite transition-colors duration-150">
                      {block.link.id ? <FormattedMessage id={block.link.id} /> : block.link.text} →
                    </a>
                  )}
                </div>
              ))}

              <div className="mt-6">
                <MapPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Showrooms */}
      <section className="py-32 bg-off-white">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <span className="inline-block text-[0.72rem] font-normal tracking-[0.18em] uppercase text-steel-blue mb-4">
              <FormattedMessage id="home.cta.showroom" />
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)]"><FormattedMessage id="cont.show.title" /></h2>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-px bg-cream rounded-3xl overflow-hidden">
            {showrooms.map(s => (
              <div key={s.city} className="bg-white hover:bg-off-white transition-colors duration-300 p-8">
                <div className="text-[1.4rem] font-light text-graphite mb-2" style={{ fontFamily: 'var(--font-display)' }}>{s.city}</div>
                <div className="text-[0.82rem] text-graphite-light font-light leading-relaxed mb-4">{s.address}</div>
                <span className={`inline-block text-[0.7rem] font-normal tracking-[0.08em] uppercase px-3 py-1 rounded-full ${
                  s.open ? 'bg-[rgba(143,175,154,0.15)] text-sage' : 'bg-off-white text-graphite-light'
                }`}>
                  {s.open ? intl.formatMessage({ id: 'cont.show.now' }) : intl.formatMessage({ id: 'cont.show.request' })}
                </span>
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
    <div className="relative rounded-xl overflow-hidden cursor-pointer border border-mist">
      <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
        <rect width="300" height="180" fill="#E8ECF0" rx="12" />
        {[30, 60, 90, 120, 150].map(y => <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(123,167,188,0.15)" strokeWidth="1" />)}
        {[50, 100, 150, 200, 250].map(x => <line key={x} x1={x} y1="0" x2={x} y2="180" stroke="rgba(123,167,188,0.15)" strokeWidth="1" />)}
        <rect x="0" y="75" width="300" height="6" fill="rgba(255,255,255,0.6)" rx="1" />
        <rect x="120" y="0" width="6" height="180" fill="rgba(255,255,255,0.6)" rx="1" />
        <rect x="60" y="0" width="4" height="180" fill="rgba(255,255,255,0.35)" rx="1" />
        <rect x="0" y="120" width="300" height="4" fill="rgba(255,255,255,0.35)" rx="1" />
        <circle cx="123" cy="78" r="10" fill="#7BA7BC" opacity="0.25" />
        <circle cx="123" cy="78" r="5" fill="#7BA7BC" />
        <text x="140" y="73" fill="#2C2C2C" fontSize="9" fontFamily="sans-serif">LUMO Showroom</text>
        <text x="140" y="86" fill="#6B6B6B" fontSize="7.5" fontFamily="sans-serif">Maximilianstraße 42</text>
      </svg>
      <span className="absolute bottom-3 right-3 text-[0.72rem] tracking-[0.08em] text-steel-blue bg-[rgba(250,250,248,0.9)] px-3 py-1 rounded-full">
        <FormattedMessage id="cont.info.maps" /> →
      </span>
    </div>
  )
}
