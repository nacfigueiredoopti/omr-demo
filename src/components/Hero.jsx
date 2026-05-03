import { useEffect, useState } from 'react'
import { useFlag } from '../useFlag'
import TicketPricing from './TicketPricing'

const FESTIVAL_DATE = new Date('2026-05-05T09:00:00')

function getRemaining() {
  const now = new Date()
  const diff = Math.max(0, FESTIVAL_DATE - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export default function Hero() {
  const [t, setT] = useState(getRemaining())
  const { variables } = useFlag('festival_homepage_hero', {
    show_countdown: true,
    headline: 'The OMR Festival is about to land.',
    cta_label: 'Get tickets',
    hero_config: { theme: 'dark', video_bg: false, accent_color: '#ff5b3a' },
  })

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const headlineWords = variables.headline.split(' ')
  const lastWord = headlineWords.pop()
  const headlineLead = headlineWords.join(' ')

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            Live · The Digital Pulse
          </div>
          <h1>
            {headlineLead} <em>{lastWord}</em>
          </h1>
          <p className="hero-sub">
            Two days. 70,000+ attendees. The most important conference for
            digital marketing, technology, and culture in Europe.
          </p>
          <div className="hero-cta">
            <button className="btn btn-accent">{variables.cta_label} →</button>
            <button className="btn btn-ghost" style={{ color: '#fff' }}>
              Watch trailer
            </button>
          </div>
          <TicketPricing />
        </div>
        {variables.show_countdown && (
          <div className="countdown-card">
            <div className="countdown-label">OMR26 Festival · Hamburg</div>
            <div className="countdown-title">
              May 5 — 6, <span>2026</span>
            </div>
            <div className="countdown-grid">
              <Cell num={t.days} unit="Days" />
              <Cell num={t.hours} unit="Hours" />
              <Cell num={t.minutes} unit="Mins" />
              <Cell num={t.seconds} unit="Secs" />
            </div>
            <div className="countdown-meta">
              <span>Messehallen Hamburg</span>
              <strong>70,000+ attendees</strong>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function Cell({ num, unit }) {
  return (
    <div className="countdown-cell">
      <div className="countdown-num">{String(num).padStart(2, '0')}</div>
      <div className="countdown-unit">{unit}</div>
    </div>
  )
}
