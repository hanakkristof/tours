import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Tours } from './components/Tours'
import { Footer } from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='d-flex flex-column align-items-center justify-content-center '>
      <Header/>
      <Tours className='flex-1'/>
      <Footer/>

    </div>
  )
}

export default App
