import { useFlag } from '../useFlag'

export default function RegistrationCta() {
  const { variables } = useFlag('express_registration_flow', {
    enabled: false,
    steps: 2,
    sso_providers: { providers: ['linkedin', 'google'] },
    require_company: true,
  })

  let providers = variables.sso_providers
  if (typeof providers === 'string') {
    try {
      providers = JSON.parse(providers)
    } catch {
      providers = {}
    }
  }
  if (providers && Array.isArray(providers.providers)) {
    providers = providers.providers
  } else if (!Array.isArray(providers)) {
    providers = []
  }

  const flowLabel = variables.enabled
    ? `${variables.steps}-step express signup`
    : 'Classic registration'

  return (
    <section className="reg-cta-section">
      <div className="container reg-cta">
        <div>
          <div className="reg-cta-eyebrow">Join OMR26</div>
          <h2>Register in under a minute.</h2>
          <p>
            {flowLabel}
            {variables.require_company ? ' · company required' : ''}
          </p>
        </div>
        <div className="reg-cta-actions">
          <button className="btn btn-accent">Register now →</button>
          {variables.enabled && Array.isArray(providers) && providers.length > 0 && (
            <div className="sso-row">
              <span>or sign up with</span>
              {providers.map((p) => (
                <button key={p} className="sso-btn">
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
