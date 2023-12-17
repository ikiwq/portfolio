import { useEffect, useState } from 'react';
import './App.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import MainLoader from './components/MainLoader/LoadingScreen';
import MinorProjects from './components/MinorProjects/MinorProjects';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    name?: string;
  }
}

function App() {
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(true);

  useEffect(()=>{
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, [])
  
  return (
    <div className='bg-white dark:bg-black duration-300 overflow-x-hidden'>
      <MainLoader/>
      <NavBar prefersDarkTheme={prefersDarkTheme} setPrefersDarkTheme={setPrefersDarkTheme}/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <MinorProjects/>
      <Contact/>
    </div>
  )
}

export default App
