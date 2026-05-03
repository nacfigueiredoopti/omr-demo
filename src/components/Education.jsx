const courses = [
  {
    tag: 'Bestseller',
    title: 'Digital Marketing Analytics',
    desc: 'Master GA4, attribution modelling, and turn data into decisions that move revenue.',
    price: '€1,799',
    format: '6 weeks · Online',
  },
  {
    tag: 'New',
    title: 'Understand, implement and use AI',
    desc: 'A practical, hands-on course on integrating LLMs and agents into your daily workflow.',
    price: '€699',
    format: '4 weeks · Online',
  },
  {
    tag: 'Live cohort',
    title: 'Performance Creative Mastery',
    desc: 'Build creative that ships. From concept to scaled paid social in 8 high-impact sessions.',
    price: '€1,299',
    format: '8 weeks · Hybrid',
  },
]

export default function Education() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">OMR Education</div>
            <h2>Upskill with 50+ professional courses.</h2>
          </div>
          <a href="#" className="section-link">Browse all courses →</a>
        </div>
        <div className="edu-grid">
          {courses.map((c) => (
            <div key={c.title} className="course">
              <span className="course-tag">● {c.tag}</span>
              <h3>{c.title}</h3>
              <p className="course-desc">{c.desc}</p>
              <div className="course-foot">
                <span className="course-price">{c.price}</span>
                <span className="course-format">{c.format}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
