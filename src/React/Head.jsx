import React from 'react'
import '../styles/coffee.css' 
const Head = () => {
  return (
    <div>
    <div className='nav'>
      <div className='firstleft'><h3>IMAJI <span className='firstcolor'><b>Coffee.</b></span></h3></div>
      <div className='firstright'>
              <p>Home</p>
              <p>Story</p>
              <p>Menu</p>
              <p>Space</p>
              <p>Community</p>
              <p>News</p>
              <p className='paragraph'>Order</p>
              <p className='paragrap'>Sign in</p>
      </div></div>
<div className='card'>
      <h1 className='head'>Our News</h1>
      <span className='small'><b>Get the latest updates and deeper coffee experience from IMAJI Coffee</b></span>
      <p className='imagepara'><img src="group.png" alt="education" height="230" width={900}/></p>
      <p className='subpara'><b>Collabration To Develop Coffee And Beverage Industry Expertise In Indhonesia</b></p>
      <p className='subparagraph'>4 min ⚡August 19,2023</p>
      </div>
     
      
      <hr/>
      </div>
  )
}

export default Head;