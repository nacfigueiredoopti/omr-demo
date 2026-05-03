const pillars = [
  {
    icon: '🤝',
    cls: 'c1',
    title: 'Networking',
    text: 'Connect with 70,000+ decision-makers, founders, marketers, and creators across two intense days.',
  },
  {
    icon: '🎓',
    cls: 'c2',
    title: 'Professional Training',
    text: '500+ masterclasses, workshops, and deep dives on AI, performance, brand, and emerging tech.',
  },
  {
    icon: '💡',
    cls: 'c3',
    title: 'Inspiration',
    text: 'World-class keynotes from the people setting the agenda for the next decade of digital.',
  },
  {
    icon: '🎉',
    cls: 'c4',
    title: 'Entertainment',
    text: 'Live concerts, premium hospitality, and the best after-parties Hamburg has to offer.',
  },
]

export default function FestivalPillars() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">OMR26 Festival</div>
            <h2>Four reasons to be in Hamburg.</h2>
          </div>
          <a href="#" className="section-link">Explore the program →</a>
        </div>
        <div className="pillars">
          {pillars.map((p) => (
            <div key={p.title} className="pillar">
              <div className={`pillar-icon ${p.cls}`}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
