import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      <Contact />
      <Experience />
      <Footer />
    </main>
  )
}

export default App
