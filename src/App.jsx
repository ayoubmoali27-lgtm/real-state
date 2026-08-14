import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Listings from './pages/Listings.jsx'
import Search from './pages/Search.jsx'
import Calculator from './pages/Calculator.jsx'
import Agent from './pages/Agent.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/agents/:slug" element={<Agent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
