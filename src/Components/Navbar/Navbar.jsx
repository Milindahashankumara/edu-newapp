import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll', ()=>{
          window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <div>
        <nav className={`container ${sticky? 'dark-nav' : ''}`} /*2 class here */> 

            <img src={logo} alt='' className='logo'/>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar