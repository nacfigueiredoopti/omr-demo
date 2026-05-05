import { useEffect, useState } from 'react'
import { useFlag } from '../useFlag'
import TicketPricing from './TicketPricing'

const FESTIVAL_START = new Date('2026-05-05T09:00:00')
const FESTIVAL_END = new Date('2026-05-06T18:00:00')

function getStatus() {
  const now = new Date()
  if (now >= FESTIVAL_END) return { phase: 'ended' }
  if (now >= FESTIVAL_START) return { phase: 'live' }
  const diff = FESTIVAL_START - now
  return {
    phase: 'upcoming',
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Hero() {
  const [t, setT] = useState(getStatus())
  const { variables } = useFlag('festival_homepage_hero', {
    show_countdown: true,
    headline: 'The OMR Festival is about to land.',
    cta_label: 'Get tickets',
    hero_config: { theme: 'dark', video_bg: false, accent_color: '#ff5b3a' },
  })

  useEffect(() => {
    const id = setInterval(() => setT(getStatus()), 1000)
    return () => clearInterval(id)
  }, [])

  const phaseHeadline =
    t.phase === 'live'
      ? 'The OMR Festival is live in Hamburg.'
      : t.phase === 'ended'
        ? 'OMR26 is a wrap. See you at OMR27.'
        : variables.headline
  const headlineWords = phaseHeadline.split(' ')
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
            <div className="countdown-label">
              {t.phase === 'live' ? (
                <>
                  <span className="live-dot" /> OMR26 Festival · Live in Hamburg
                </>
              ) : (
                'OMR26 Festival · Hamburg'
              )}
            </div>
            <div className="countdown-title">
              May 5 — 6, <span>2026</span>
            </div>
            {t.phase === 'upcoming' && (
              <div className="countdown-grid">
                <Cell num={t.days} unit="Days" />
                <Cell num={t.hours} unit="Hours" />
                <Cell num={t.minutes} unit="Mins" />
                <Cell num={t.seconds} unit="Secs" />
              </div>
            )}
            {t.phase === 'live' && (
              <div className="countdown-live">
                <div className="countdown-live-eyebrow">Happening now</div>
                <div className="countdown-live-title">
                  The festival floor is open
                </div>
                <p className="countdown-live-sub">
                  Join 70,000+ attendees across stages, masterclasses, and the
                  expo. Livestream and on-site check-in are live.
                </p>
              </div>
            )}
            {t.phase === 'ended' && (
              <div className="countdown-live">
                <div className="countdown-live-eyebrow">That's a wrap</div>
                <div className="countdown-live-title">See you at OMR27</div>
                <p className="countdown-live-sub">
                  Catch up with session recordings and highlights from this
                  year's edition.
                </p>
              </div>
            )}
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
