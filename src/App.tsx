/*

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Portfolio from './page/Portfolio'
import  Contact  from './page/Contact'
import NotFound from './page/NotFound'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App: React.FC = () => {
return (
<div className="app-root">
<Navbar />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
<Footer />
</div>
)
}
export default App
*/


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './page/Home'
import About from './page/About'
import Portfolio from './page/Portfolio'
import Contact from './page/Contact'
import NotFound from './page/NotFound'

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
