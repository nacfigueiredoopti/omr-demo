import { useFlag } from '../useFlag'

const speakers = [
  { name: 'Tom Brady', role: 'NFL Legend & Investor', initials: 'TB', cls: 's1' },
  { name: 'Meredith Whittaker', role: 'President, Signal', initials: 'MW', cls: 's2' },
  { name: 'Will Ahmed', role: 'Founder, WHOOP', initials: 'WA', cls: 's3' },
  { name: 'Sara Blakely', role: 'Founder, SPANX', initials: 'SB', cls: 's4' },
  { name: 'Mark Cuban', role: 'Entrepreneur & Investor', initials: 'MC', cls: 's5' },
  { name: 'Whitney Wolfe Herd', role: 'Founder, Bumble', initials: 'WW', cls: 's6' },
  { name: 'Daniel Ek', role: 'CEO, Spotify', initials: 'DE', cls: 's7' },
  { name: 'Reshma Saujani', role: 'Founder, Girls Who Code', initials: 'RS', cls: 's8' },
]

export default function Speakers() {
  const { variables } = useFlag('speaker_grid_layout', {
    layout: 'grid',
    columns: 4,
    show_role: true,
  })

  const layout = ['grid', 'carousel', 'list'].includes(variables.layout)
    ? variables.layout
    : 'grid'
  const cols = Math.min(Math.max(Number(variables.columns) || 4, 2), 6)

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Speakers</div>
            <h2>Top voices. On the OMR stage.</h2>
          </div>
          <a href="#" className="section-link">See all speakers →</a>
        </div>
        <div
          className={`speakers speakers-${layout}`}
          style={
            layout === 'grid'
              ? { gridTemplateColumns: `repeat(${cols}, 1fr)` }
              : undefined
          }
        >
          {speakers.map((s) => (
            <div key={s.name} className="speaker">
              <div className={`speaker-img ${s.cls}`}>{s.initials}</div>
              <div className="speaker-info">
                <div className="speaker-name">{s.name}</div>
                {variables.show_role && (
                  <div className="speaker-role">{s.role}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
