import React from 'react'
import { Link } from 'react-router-dom'
export const About = () => {
  return (
    <div>
      <div className='footer'>
         <Link to="/"><h1 className='foot' >Our Location</h1></Link>
          <p className='alignment'>JI. Bangkringan No 19, RT.11/RW.2,Kota Surabaya, 60124</p>
          <p className='alignmen'> <b>Customer Service</b> +6282-2876-6872</p>
          <p className='alignme'> <b>We are open from</b> Sun - Mon 10AM - 22 PM</p>
          <hr />
          <div className='atlast'>
          <div className='lef'>
          <span className='social'><img src="Social Media.png" alt="media" /></span>
          </div>
          <div className='righ'>
           <span>Delivery Order</span>
            <span><img src="logo app store.png" alt="apple" height={30} width={100} /> </span>
           <span><img src="logo google play.png" alt="play store"  height={30} width={100}/></span>
            
            </div>
          </div>
          <div className='main'>
            <span className='lasttwo'>© 2023 IMAJI COFFEE, All rights reserved</span>
          <div>
            <span className='lastone'>Terms and Conditions | Privacy Policy</span>
          </div>
          </div>
      </div>
      
    </div>
  )
}
