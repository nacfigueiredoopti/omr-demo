import { useEffect, useRef, useState } from 'react'
import { useFlag } from '../useFlag'

const partners = [
  { name: 'Amazon Ads', premium: true },
  { name: 'KPMG', premium: true },
  { name: 'Pinterest', premium: true },
  { name: 'Google', premium: false },
  { name: 'Meta', premium: false },
  { name: 'TikTok', premium: false },
  { name: 'LinkedIn', premium: false },
  { name: 'Salesforce', premium: false },
  { name: 'HubSpot', premium: false },
  { name: 'Shopify', premium: false },
  { name: 'Adobe', premium: false },
  { name: 'Microsoft', premium: false },
]

export default function Partners() {
  const { variables } = useFlag('partner_logo_carousel', {
    autoplay: true,
    interval_seconds: 3.5,
    logos_per_row: 6,
    animation: 'slide',
    show_premium_first: true,
  })
  const [offset, setOffset] = useState(0)
  const intervalRef = useRef(null)

  const ordered = variables.show_premium_first
    ? [...partners].sort((a, b) => Number(b.premium) - Number(a.premium))
    : partners

  const cols = Math.min(Math.max(Number(variables.logos_per_row) || 6, 3), 8)

  useEffect(() => {
    if (!variables.autoplay || variables.animation !== 'slide') return
    const ms = Math.max(1, Number(variables.interval_seconds) || 3.5) * 1000
    intervalRef.current = setInterval(() => {
      setOffset((o) => (o + 1) % ordered.length)
    }, ms)
    return () => clearInterval(intervalRef.current)
  }, [variables.autoplay, variables.interval_seconds, variables.animation, ordered.length])

  const visible = []
  for (let i = 0; i < cols * 2; i++) {
    visible.push(ordered[(offset + i) % ordered.length])
  }

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow" style={{ color: 'var(--accent)' }}>
              Trusted by
            </div>
            <h2 style={{ color: '#fff' }}>
              Where the industry comes together.
            </h2>
          </div>
          <a
            href="#"
            className="section-link"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Become a partner →
          </a>
        </div>
        <div
          className={`partners-grid anim-${variables.animation}`}
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {visible.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className={`partner${p.premium ? ' partner-premium' : ''}`}
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
