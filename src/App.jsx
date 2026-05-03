import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { useParticles } from './hooks/useParticles'
import Navbar from './components/Navbar'
import LoadingPanel from './components/LoadingPanel'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  useLenis()
  useParticles()

  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Navbar />
        <Suspense fallback={<LoadingPanel />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}
