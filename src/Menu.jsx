import React from 'react'
import { Link } from 'react-router-dom'
import './styles/coffee.css' 
export const Menu = () => {
  return (
    <div>
    <div className='bottom'>
        <p><img src="coffee.jpg" alt="coffee" height={200} width={200} /></p>
   
    <div className='java'>
    <p className='last'> <b>Visited Doesoen Sirap Coffee,The <br />
          Producer Of Robuster In Central java</b></p>
          <span>4 min <img src="Ellipse 1210.png" alt="dot" /> August 19,2022</span> 
      <div className='cost'><button className='box'><p>Add to cart</p></button>
      <button className='buy'><span>Buy now</span></button>
      </div></div></div> <hr/>
    <div className='bottom'>
        <p><img src="coffeeimg.jpg" alt="coffee" height={200} width={200} /></p>
   
    <div className='java'>
    <p className='last'> <b>Cold Brew Coffee,How to Drink Cold
       <br /> Coffee is More Enjoyable</b></p>
          <span>4 min <img src="Ellipse 1210.png" alt="dot" /> August 19,2022</span> 
          <div className='cost'><button className='box'><p>Add to cart</p></button>
      <button className='buy'><span>Buy now</span></button>
      </div>  
    </div></div> <hr/>
    <div className='bottom'>
        <p><img src="coffeeimg1.jpg" alt="coffee" height={200} width={200} /></p>
   
    <div className='java'>
    <p className='last'> <b>Cold Brew Coffee,How to Drink Cold
       <br /> Coffee is More Enjoyable</b></p>
          <span>4 min <img src="Ellipse 1210.png" alt="dot" /> August 19,2022</span> 
          <div className='cost'><button className='box'><p>Add to cart</p></button>
      <button className='buy'><span>Buy now</span></button>
      </div>  
    </div></div> <hr/>
    <div className='bottom'>
        <p><img src="coffeeimg2.jpg" alt="coffee" height={200} width={200} /></p>
   
    <div className='java'>
    <p className='last'> <b>Meet Coffee Tonic,the Sentation of <br />Drinking Coffee-Flavored Soda</b></p>
          <span>4 min <img src="Ellipse 1210.png" alt="dot" /> August 19,2022</span> 
          <div className='cost'><button className='box'><p>Add to cart</p></button>
      <button className='buy'><span>Buy now</span></button>
      </div>  
    </div></div> <hr/>
    <div className='bottom'>
        <p><img src="coffeeimg3.jpg" alt="coffee" height={200} width={200} /></p>
   
    <div className='java'>
    <p className='last'> <b>Workshop Coffee sharing Session</b></p>
          <span>4 min <img src="Ellipse 1210.png" alt="dot" /> August 19,2022</span>
          <div className='cost'><button className='box'><p>Add to cart</p></button>
      <button className='buy'><span>Buy now</span></button>
      </div>   
    </div></div> <hr/>

    <div className='bottom'>
        <p><img src="brewing.jpg" alt="coffee" height={200} width={200} /></p>
   
    <div className='java'>
    <p className='last'> <b>Workshop Coffee Brewing</b></p>
          <span>4 min <img src="Ellipse 1210.png" alt="dot" /> August 19,2022</span>
          <div className='cost'><button className='box'><p>Add to cart</p></button>
      <button className='buy'><span>Buy now</span></button>
      </div>   
    </div></div>
    <p>
        <Link to="/About"><button className="button">Learn About </button><br /></Link>
        <Link to="/" className='tomove'>MainMenu</Link>
        
</p>
      
      
</div>

 
  )
}
