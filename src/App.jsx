import Footer  from './components/Footer/Footer'
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import ModeSwitch from './components/ModeSwitch/ModeSwitch';

import useAxios from './hook/useAxios';

import { useSelector } from 'react-redux'
import './App.css'




function App() {
  const isDarkMode = useSelector((state) => state.theme);

  const url = "https://65bfb6c325a83926ab958094.mockapi.io/api/v1/data";
  const [ data, loading, error ] = useAxios(url);

  if (loading) {
    return <div>Loading...</div>;
}


  return (
  
    <div className={`w-full ${isDarkMode === "light" ? 'bg-white' : 'dark bg-[#252128]'}`}>
    <div className="container mx-auto dark:bg-[#252128]">
      <ModeSwitch data={data} loading={loading} error={error}/>
      <Header />
      <Hero data={data} loading={loading} error={error}/>
      <Skills data={data} loading={loading} error={error} />
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
      <Profile data={data} loading={loading} error={error}/>
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
      <Projects data={data} loading={loading} error={error}/>
      <div className="mt-4"></div>
    
    </div>  
      <Footer data={data} loading={loading} error={error}/>
  </div>
  )
}

export default App
