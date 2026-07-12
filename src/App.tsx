import './App.css'
import { HashRouter, Routes, Route } from 'react-router'
const Home = lazy(() => import('./pages/home/Home'))
const About_us = lazy(() => import('./pages/About_us'))
import { Suspense, lazy } from 'react'
import Contact from './pages/Contact'
function App() {

  return (
    <>
      <Suspense>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About_us />} />
            <Route path='/contact-us' element={<Contact />} />
          </Routes>
        </HashRouter>
      </Suspense>
    </>
  )
}

export default App

