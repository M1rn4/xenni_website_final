import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Modules from './components/Modules'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import Benefits from './components/Benefits'
import Instructors from './components/Instructors'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-cream-100 min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Modules />
      <HowItWorks />
      <Results />
      <Benefits />
      <Instructors />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
