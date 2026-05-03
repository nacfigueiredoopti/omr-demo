import { useFlag } from '../useFlag'

const CURRENCY_SYMBOLS = { EUR: '€', USD: '$', GBP: '£' }

export default function TicketPricing() {
  const { variables } = useFlag('ticket_pricing_tier', {
    base_price_eur: 1499,
    early_bird_discount_pct: 20,
    show_price_strikethrough: true,
    currency: 'EUR',
  })

  const symbol = CURRENCY_SYMBOLS[variables.currency] || variables.currency
  const base = Number(variables.base_price_eur) || 0
  const discountPct = Number(variables.early_bird_discount_pct) || 0
  const final = Math.round(base * (1 - discountPct / 100))

  return (
    <div className="pricing-strip">
      <span className="pricing-label">Early Bird</span>
      {variables.show_price_strikethrough && (
        <span className="pricing-original">
          {symbol}
          {base.toLocaleString()}
        </span>
      )}
      <span className="pricing-final">
        {symbol}
        {final.toLocaleString()}
      </span>
      {discountPct > 0 && (
        <span className="pricing-badge">−{discountPct}%</span>
      )}
    </div>
  )
}
