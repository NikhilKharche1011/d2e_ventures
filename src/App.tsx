import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
const Home = lazy(() => import('./pages/home/Home'))
const About_us = lazy(() => import('./pages/About_us'))
import { Suspense, lazy } from 'react'
import Contact from './pages/Contact'
function App() {

  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About_us />} />
            <Route path='/contact-us' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App

