export default function Newsletter() {
  return (
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
              <button className="btn btn-accent" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
