import { useState } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Navbar } from './components/Navbar'

function App() {


  return (
   
<main className='relative min-h-screen w-screen overflow-x-hidden scrollbar-none'>
  <Navbar/>
 <Hero/>
<About/>

</main>
  )
}

export default App
