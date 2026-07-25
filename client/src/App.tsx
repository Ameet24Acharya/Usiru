import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { FaqPage } from './pages/FaqPage'
import { BlogPage } from './pages/BlogPage'
import { ContactPage } from './pages/ContactPage'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FloatingWhatsApp />
    </>
  )
}

export default App
