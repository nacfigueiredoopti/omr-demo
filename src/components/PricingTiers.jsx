import { useFlag } from '../useFlag'

const CURRENCY_SYMBOLS = { EUR: '€', USD: '$', GBP: '£' }

const FALLBACK_TIERS = {
  items: [
    {
      key: 'early_bird',
      name: 'Early Bird',
      price: 1199,
      badge: 'Save 20%',
      cta: 'Get Early Bird',
      features: [
        'Festival pass · 2 days',
        'All main stages',
        'OMR Daily archive access',
      ],
    },
    {
      key: 'standard',
      name: 'Standard',
      price: 1499,
      badge: 'Most Popular',
      cta: 'Buy Standard',
      features: [
        'Everything in Early Bird',
        'All masterclasses',
        'Lunch + coffee included',
        'Networking lounge access',
      ],
    },
    {
      key: 'vip',
      name: 'VIP',
      price: 2999,
      badge: 'Concierge',
      cta: 'Go VIP',
      features: [
        'Everything in Standard',
        'Speaker dinner invitation',
        'Private lounge + bar',
        'Priority seating',
        'Hotel partner discount',
      ],
    },
  ],
}

export default function PricingTiers() {
  const { variables } = useFlag('hero_pricing_tiers', {
    enabled: true,
    headline: 'Pick your OMR26 pass.',
    subhead:
      'Two days of speakers, masterclasses, networking, and the after-parties Hamburg is famous for.',
    highlight_tier: 'standard',
    currency: 'EUR',
    tiers: FALLBACK_TIERS,
  })

  if (!variables.enabled) return null

  let tiersValue = variables.tiers
  if (typeof tiersValue === 'string') {
    try {
      tiersValue = JSON.parse(tiersValue)
    } catch {
      tiersValue = FALLBACK_TIERS
    }
  }
  const items = Array.isArray(tiersValue?.items)
    ? tiersValue.items
    : FALLBACK_TIERS.items

  const symbol = CURRENCY_SYMBOLS[variables.currency] || variables.currency

  return (
    <section className="pricing-tiers-section">
      <div className="container">
        <div className="pricing-tiers-head">
          <h2>{variables.headline}</h2>
          <p>{variables.subhead}</p>
        </div>
        <div className="pricing-tiers-grid">
          {items.map((tier) => {
            const highlighted = tier.key === variables.highlight_tier
            return (
              <article
                key={tier.key}
                className={`pricing-tier${highlighted ? ' highlighted' : ''}`}
              >
                {tier.badge && (
                  <span className="pricing-tier-badge">{tier.badge}</span>
                )}
                <h3 className="pricing-tier-name">{tier.name}</h3>
                <div className="pricing-tier-price">
                  <span className="pricing-tier-symbol">{symbol}</span>
                  <span className="pricing-tier-amount">
                    {Number(tier.price).toLocaleString()}
                  </span>
                  <span className="pricing-tier-suffix">/ pass</span>
                </div>
                <ul className="pricing-tier-features">
                  {(tier.features || []).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button
                  className={`btn ${highlighted ? 'btn-accent' : 'btn-dark'} pricing-tier-cta`}
                >
                  {tier.cta || 'Buy now'} →
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
