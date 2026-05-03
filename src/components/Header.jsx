const navItems = [
  'Daily',
  'Festival',
  'Reviews',
  'Education',
  'Podcasts',
  'Jobs & HR',
  '5050',
  'Frames',
  'Finance Forward',
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-mark">O</span>
          OMR
        </a>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item} href="#">{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="btn btn-ghost">EN</button>
          <button className="btn btn-dark">Login</button>
        </div>
      </div>
    </header>
  )
}
