import Footer  from './components/Footer/Footer'
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

import './App.css'

function App() {
  return (
    <div className="w-full h-screen">
    <div className="container mx-auto">
      <Header />
      <Hero />
      <Skills />
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
      <Profile />
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
      <Projects />
      <div className="mt-4"></div>
    
    </div>  
      <Footer />
  </div>
  )
}

export default App
