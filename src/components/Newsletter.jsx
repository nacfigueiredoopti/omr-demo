import { useEffect, useState } from 'react'
import { useFlag } from '../useFlag'

export default function Newsletter() {
  const { variables } = useFlag('newsletter_signup_modal', {
    enabled: true,
    delay_seconds: 20,
    headline: 'Get the OMR Daily Briefing',
    incentive: 'Free industry news every weekday morning.',
  })
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!variables.enabled) return
    const ms = Math.max(0, Number(variables.delay_seconds) || 20) * 1000
    const timeout = setTimeout(() => setShowModal(true), ms)
    return () => clearTimeout(timeout)
  }, [variables.enabled, variables.delay_seconds])

  return (
    <>
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="newsletter">
            <div className="newsletter-inner">
              <h2>The OMR Daily Briefing.</h2>
              <p>
                The most important news from the digital industry — distilled,
                every morning, in your inbox. Free.
              </p>
              <form
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="email" placeholder="your@email.com" />
                <button className="btn btn-accent" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3>{variables.headline}</h3>
            <p>{variables.incentive}</p>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault()
                setShowModal(false)
              }}
              style={{ marginTop: 16 }}
            >
              <input type="email" placeholder="your@email.com" />
              <button className="btn btn-accent" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
