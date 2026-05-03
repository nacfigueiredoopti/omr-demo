import { useFlag } from '../useFlag'

const allCourses = [
  {
    tag: 'Bestseller',
    title: 'Digital Marketing Analytics',
    desc: 'Master GA4, attribution modelling, and turn data into decisions that move revenue.',
    price: '€1,799',
    format: '6 weeks · Online',
    popularity: 95,
  },
  {
    tag: 'New',
    title: 'Understand, implement and use AI',
    desc: 'A practical, hands-on course on integrating LLMs and agents into your daily workflow.',
    price: '€699',
    format: '4 weeks · Online',
    popularity: 92,
  },
  {
    tag: 'Live cohort',
    title: 'Performance Creative Mastery',
    desc: 'Build creative that ships. From concept to scaled paid social in 8 high-impact sessions.',
    price: '€1,299',
    format: '8 weeks · Hybrid',
    popularity: 88,
  },
  {
    tag: 'Bestseller',
    title: 'B2B SaaS Growth',
    desc: 'Pipeline, retention, and expansion playbooks from operators who have done it.',
    price: '€1,499',
    format: '6 weeks · Online',
    popularity: 84,
  },
  {
    tag: 'New',
    title: 'Brand Strategy in the AI era',
    desc: 'Build distinct, durable brands when generative content is everywhere.',
    price: '€999',
    format: '5 weeks · Online',
    popularity: 80,
  },
]

export default function Education() {
  const { variables } = useFlag('course_recommendations', {
    ai_powered: false,
    max_count: 3,
    algorithm: 'popularity',
    show_pricing: true,
  })

  const max = Math.min(Math.max(Number(variables.max_count) || 3, 1), 5)
  const sorted = [...allCourses].sort((a, b) => b.popularity - a.popularity)
  const courses = sorted.slice(0, max)

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">
              OMR Education{variables.ai_powered ? ' · Personalized' : ''}
            </div>
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
                {variables.show_pricing && (
                  <span className="course-price">{c.price}</span>
                )}
                <span className="course-format">{c.format}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
