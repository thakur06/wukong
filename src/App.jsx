import { useState } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Wall } from './components/Wall'
import VideoBackground from './components/Bg'
import Features from './components/Features'
import Footer from './components/Footer'
import Contact from './components/Contact'
function App() {


  return (
   
<main className='relative min-h-screen w-screen overflow-x-hidden scrollbar-none'>
  <Navbar/>
 <Hero/>

<Contact/>
<Footer/>

</main>
  )
}

export default App
