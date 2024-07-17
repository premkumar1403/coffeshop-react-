import React from 'react'
import { Routes,Route} from 'react-router-dom';
import Head from './Head';
import { Menu } from './Menu';
import { Home } from './Home';
import { About } from './About';

function App() {
 return(
        <div>  
    <Routes>
      
          <Route path='/' element={<Head />} />
          <Route path='About' element={<About />} />
          <Route path='Menu' element={<React.Fragment>
             <Head /><Menu/>
          </React.Fragment>} />
          <Route path='Home' element={<Home />} />
       </Routes></div>
 );
}

export default App;      