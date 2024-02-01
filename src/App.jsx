import Footer  from './components/Footer'
import Profile from './components/Profile';
import Projects from './components/Projects';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ModeSwitch from './components/ModeSwitch';
import './App.css'

function App() {
  return (
        <div>
          <ModeSwitch />
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
  )
}

export default App
