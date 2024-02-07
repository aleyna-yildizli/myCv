import Footer  from './components/Footer/Footer'
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import ModeSwitch from './components/ModeSwitch/ModeSwitch';

import useAxios from './hook/useAxios';
import PacmanLoader from 'react-spinners/PacmanLoader'

import { useSelector } from 'react-redux'
import './App.css'




function App() {
  const isDarkMode = useSelector((state) => state.theme);

  const url = "https://65bfb6c325a83926ab958094.mockapi.io/api/v1/data";
  const [ data, loading ] = useAxios(url);

  if (loading) {
    return (
      <div className='flex items-center justify-center mx-auto custom_loading'>
      <PacmanLoader color="#36d7b7" />
      </div>
    );
  }


  return (
  
    <div className={`w-full ${isDarkMode === "light" ? 'bg-white' : 'dark bg-[#252128]'}`}>
    <div className="container mx-auto dark:bg-[#252128]">
      <ModeSwitch data={data}/>
      <Header />
      <Hero data={data} />
      <Skills data={data}  />
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
      <Profile data={data} />
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
      <Projects data={data} />
      <div className="mt-4"></div>
    
    </div>  
      <Footer data={data}/>
  </div>
  )
}

export default App
