import { useEffect, useState } from 'react'
import { useFlag } from '../useFlag'

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

function resolveTheme(value) {
  if (value === 'system' && typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  return value === 'dark' ? 'dark' : 'light'
}

export default function Header() {
  const { variables } = useFlag('dark_mode_default', {
    default_theme: 'light',
    show_toggle: true,
  })
  const [theme, setTheme] = useState(() => resolveTheme(variables.default_theme))

  useEffect(() => {
    setTheme(resolveTheme(variables.default_theme))
  }, [variables.default_theme])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-mark">O</span>
          OMR
        </a>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          {variables.show_toggle && (
            <button
              className="btn btn-ghost"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          )}
          <button className="btn btn-ghost">EN</button>
          <button className="btn btn-dark">Login</button>
        </div>
      </div>
    </header>
  )
}
