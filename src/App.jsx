import './i18n'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  console.log('App component rendering')
  
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Work />
      <Contact />
    </div>
  )
}

export default App
