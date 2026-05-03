import Header from './components/Header'
import Hero from './components/Hero'
import FestivalPillars from './components/FestivalPillars'
import Speakers from './components/Speakers'
import Partners from './components/Partners'
import News from './components/News'
import Education from './components/Education'
import Reviews from './components/Reviews'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <FestivalPillars />
        <Speakers />
        <Partners />
        <News />
        <Education />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
