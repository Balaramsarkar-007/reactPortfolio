import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WhoIAm from './components/WhoIAm'
import ContactMe from './components/ContactMe'

function App() {

  return (
    <>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_right_bottom,_rgba(212,_243,_253,_0.679),_rgb(255,_255,_255))]">
      <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <WhoIAm />
          <ContactMe />
        </main>
    </div>
    </>
  )
}

export default App
