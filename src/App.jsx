import Footer  from './components/Footer/Footer'
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import ModeSwitch from './components/ModeSwitch/ModeSwitch';
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
