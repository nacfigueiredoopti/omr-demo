import { OptimizelyProvider } from '@optimizely/react-sdk'
import { optimizely, optimizelyUser } from './optimizely'
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
import AiAssistant from './components/AiAssistant'
import LivestreamBanner from './components/LivestreamBanner'
import RegistrationCta from './components/RegistrationCta'
import PricingTiers from './components/PricingTiers'
import './App.css'

function App() {
  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={optimizelyUser}
      timeout={500}
    >
      <div className="app">
        <Header />
        <LivestreamBanner />
        <main>
          <Hero />
          <PricingTiers />
          <FestivalPillars />
          <Speakers />
          <Partners />
          <News />
          <RegistrationCta />
          <Education />
          <Reviews />
          <Newsletter />
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </OptimizelyProvider>
  )
}

export default App
