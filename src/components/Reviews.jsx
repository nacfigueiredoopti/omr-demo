const categories = [
  'Collaboration',
  'HR',
  'Sales',
  'AI',
  'Marketing',
  'Analytics',
  'Finance',
  'Customer Service',
  'E-Commerce',
  'Project Management',
  'Design',
  'Security',
]

export default function Reviews() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">OMR Reviews</div>
            <h2>Find software & services. Backed by real reviews.</h2>
          </div>
          <a href="#" className="section-link">Visit OMR Reviews →</a>
        </div>

        <div className="reviews-hero">
          <div>
            <h3>4,000+ tools. 100,000+ verified reviews.</h3>
            <p>
              Cut through the hype. Discover the right software for your team
              with authentic feedback from professionals just like you.
            </p>
            <button className="btn btn-accent">Start exploring →</button>
          </div>
          <div className="review-stat-grid">
            <div className="review-stat">
              <div className="review-stat-num">4,000+</div>
              <div className="review-stat-lbl">Software solutions</div>
            </div>
            <div className="review-stat">
              <div className="review-stat-num">100k+</div>
              <div className="review-stat-lbl">Verified reviews</div>
            </div>
            <div className="review-stat">
              <div className="review-stat-num">450+</div>
              <div className="review-stat-lbl">Categories</div>
            </div>
            <div className="review-stat">
              <div className="review-stat-num">98%</div>
              <div className="review-stat-lbl">Match accuracy</div>
            </div>
          </div>
        </div>

        <div className="categories">
          {categories.map((c) => (
            <div key={c} className="category">{c}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
