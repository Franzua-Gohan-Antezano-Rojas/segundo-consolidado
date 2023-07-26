import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import About from './pages/AboutUs'
import Information from './pages/Information'


function App() {
  
  // const show = {
  //   display: 'block',
  //   opacity: 1,
  //   transition: {    
  //     duration: 2,
  //   },
  // }
  // const hide = {
  //   opacity: 0,
  //   transition: {
  //     duration: 2,
  //   },
  //   transitionEnd: {
  //     display: 'none',
  //   }
  // }
  // const [vis, setVis] = useState(false)

  const [pathD, setPathD] = useState("M91 0C40.7421 0 0 40.7421 0 91V532C0 582.258 40.7421 623 91 623H243C293.258 623 334 582.258 334 532V442.923C347.75 446.873 362.359 449 377.5 449C458.962 449 525 387.439 525 311.5C525 235.561 458.962 174 377.5 174C362.359 174 347.75 176.127 334 180.077V91C334 40.7421 293.258 0 243 0H91Z");

  const handleClick = () => {
    // Actualizar el valor de pathD con la nueva forma deseada
    setPathD("M126.237 8.01698C66.2654 -17.1698 0 26.8722 0 91.918V487C0 537.258 40.7421 578 91 578H274.972C310.878 578 343.427 556.887 358.066 524.101L413.535 399.867C477.579 384.877 525 330.851 525 266.5C525 214.261 493.75 168.826 447.726 145.554C442.236 141.601 436.214 138.201 429.705 135.468L126.237 8.01698Z");
  };

  return (
    <>
      <h1 className='h1'>Formulario</h1>
      {/* <motion.div className='bola'
        animate={vis ? show : hide}
      >
      </motion.div>
      <motion.button
        onClick={() => setVis(!vis)}
      > {vis ? "show" : "hide"} </motion.button>

<motion.svg width="525" height="623" viewBox="0 0 525 623" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        fill="#D9D9D9"
        fillRule="evenodd"
        clipRule="evenodd"
        d={pathD}
        onClick={handleClick}
      />
    </motion.svg> */}


      <BrowserRouter >
             

        <Routes>
          <Route path='/' element={<Information />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/information' element={<Information />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
