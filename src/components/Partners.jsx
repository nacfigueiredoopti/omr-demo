const partners = [
  'Amazon Ads',
  'KPMG',
  'Pinterest',
  'Google',
  'Meta',
  'TikTok',
  'LinkedIn',
  'Salesforce',
  'HubSpot',
  'Shopify',
  'Adobe',
  'Microsoft',
]

export default function Partners() {
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
          <a href="#" className="section-link" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Become a partner →
          </a>
        </div>
        <div className="partners-grid">
          {partners.map((p) => (
            <div key={p} className="partner">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
