import './App.css'
import Hero from './sections/Hero.tsx'
import Projects from './sections/Projects.tsx'
import Nav from './components/Nav.tsx'
import Skills from './sections/Skills.tsx'
import About from './sections/About.tsx'
import Contact from './sections/Contact.tsx'
import { ArrowUpIcon } from 'lucide-react'
import {Link} from 'react-scroll';


function App() {

  return (
    <>
      <div className='sticky top-0  z-50'>
        <Nav/>
      </div>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      <footer className=' relative flex justify-center items-center text-sm text-(--secondary) font-bold p-10 bg-(--dark)'>
        © 2026 Sahil Sawant. All rights reserved.
        <Link to="hero" smooth={true} offset={-50} activeClass='text-(--primary)'>
        <ArrowUpIcon className='absolute right-5 h-10 w-10 p-2 bg-(--primary) text-(--light) rounded-lg animate-bounce'/>
        </Link>
        
      </footer>
    </>
  )
}

export default App
