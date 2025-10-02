/*
import React from 'react'

const Home: React.FC = () => (
  <section className="page home">
    <div className="container">
    <h1>Manthan Thool</h1>
  <h2>UI/UX Designer</h2>
  
  <p>UI Designer At Tolet Globe 
    | Media Manager At FolkLok Studio
  </p>
    </div>
  </section>
)



export default Home
*/

import React from 'react'

const Home: React.FC = () => (
  <section className="page home">
    <div className="container home-content">
      <div className="text-block">
        <h1>Manthan Thool</h1>
  <h2>UI/UX Designer</h2>
  
  <p>UI Designer At Tolet Globe 
    | Media Manager At FolkLok Studio
  </p>
      </div>

      <div className="image-block">
        <img src="/profile.jpg" alt="My Photo" className="profile-img" />
      </div>
    </div>
  </section>
)

export default Home
