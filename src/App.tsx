

import React from 'react' //Importing React library, which is needed for building components.
import { Routes, Route } from 'react-router-dom' //Importing routing components from react-router-dom 
                                                // for handling navigation.
import Navbar from './components/Navbar' //Importing Navbar component (top navigation bar).
import Footer from './components/Footer' //Importing Footer component (bottom of every page).
import Home from './page/Home' //Importing the Home page component.
import About from './page/About' //Importing the About page component.
import Portfolio from './page/Portfolio' //Importing the Portfolio page component.
import Contact from './page/Contact'  //Importing the Contact page component.
import NotFound from './page/NotFound' //Importing NotFound page component (for invalid URLs).

//Defining the main App component as a functional component.

const App: React.FC = () => {
  return (
    <div className="app-root"> {/* Root div for the entire application */}
      <Navbar />  {/* The navigation bar is displayed at the top of every page */}

      <main> {/* Main content area where different pages will be shown */}

        <Routes> {/* Routes define which component should load for each URL path */}

          <Route path="/" element={<Home />} />  {/* If the user is at "/", load Home page  */}
          <Route path="/about" element={<About />} /> {/* If the user is at "/about", load About page */}
          <Route path="/portfolio" element={<Portfolio />} />{/* If the user is at "/portfolio", load Portfolio page */}
          <Route path="/contact" element={<Contact />} />  {/* If the user is at "/contact", load Contact page */}
          <Route path="*" element={<NotFound />} /> {/* If the user goes to any unknown path, show NotFound page */}
        </Routes> 
      </main>

      <Footer /> {/* Footer displayed at the bottom of every page */}
    </div>
  )
}

export default App //Exporting App component as default, so it can be used in main.tsx
