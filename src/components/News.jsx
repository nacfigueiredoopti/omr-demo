const stories = [
  {
    feature: true,
    tag: 'OMR Daily',
    title: 'How AI agents are quietly rewiring the marketing stack — what every CMO needs to know in 2026.',
    meta: '8 min read · Today',
    cls: 'n1',
    img: 'AI',
  },
  {
    tag: 'Podcast',
    title: 'Inside the brand collaboration that shook TikTok this week.',
    meta: '32 min listen · Yesterday',
    cls: 'n2',
    img: 'P',
  },
  {
    tag: 'Reviews',
    title: 'The 10 SaaS tools every growth team should test in Q2.',
    meta: '5 min read · 2d ago',
    cls: 'n3',
    img: 'S',
  },
]

export default function News() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">OMR Daily</div>
            <h2>What the industry is reading.</h2>
          </div>
          <a href="#" className="section-link">All stories →</a>
        </div>
        <div className="news-grid">
          {stories.map((s, i) => (
            <article key={i} className={`news-card${s.feature ? ' feature' : ''}`}>
              <div className={`news-thumb ${s.cls}`}>{s.img}</div>
              <div className="news-body">
                <span className="news-tag">{s.tag}</span>
                <h3 className="news-title">{s.title}</h3>
                <span className="news-meta">{s.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
