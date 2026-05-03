const cols = [
  {
    title: 'Festival',
    links: ['Tickets', 'Program', 'Speakers', 'Partners', 'Travel & Stay'],
  },
  {
    title: 'Content',
    links: ['Daily', 'Podcasts', 'Reports', 'Newsletter', 'Frames'],
  },
  {
    title: 'Products',
    links: ['Reviews', 'Education', 'Jobs & HR', '5050', 'Finance Forward'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact', 'Imprint'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-mark">O</span>
              OMR
            </a>
            <p>
              The home of the digital industry — festival, daily news,
              software reviews, and education from Hamburg to the world.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Online Marketing Rockstars · Hamburg</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
