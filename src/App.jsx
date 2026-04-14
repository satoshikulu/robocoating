import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import News from './components/News'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="app">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        {currentSection === 'home' && (
          <>
            <Hero setCurrentSection={setCurrentSection} />
            <Services />
          </>
        )}
        {currentSection === 'services' && <Services />}
        {currentSection === 'about' && <About />}
        {currentSection === 'news' && <News setCurrentSection={setCurrentSection} />}
        {currentSection === 'contact' && <Contact setCurrentSection={setCurrentSection} />}
      </main>
      <Footer setCurrentSection={setCurrentSection} />
      <WhatsAppButton />
    </div>
  )
}

export default App
