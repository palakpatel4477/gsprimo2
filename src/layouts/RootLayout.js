import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo2 from '../images/logo2.jpeg';
//css
import '../App.css';
import '../css/Index.css'
import '../css/IndexSection.css'

export default function RootLayout(){
    return (
        <>
            <div className='root-layout'>
                <header>
                    <div className='logo-with-text'>
                        <div className="header-logo">
                            <img src={Logo2} alt="Logo" />
                            <h2 className='gsprimo-text'>GSPrimo</h2>
                        </div>
                        <div className='logo-texts'>
                            <p>1804 Downes Court</p>
                            <p>London, ON, N6G 5E8</p>
                            <p>(519) 871-3234</p>
                            <p>info@gsprimo.com</p>
                        </div>
                    </div>
                    
                    <nav className="header-nav">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink><span className='line-divider'> |</span></li>
                        <li><NavLink to='aboutus'>About us</NavLink><span className='line-divider'> |</span></li>
                        <li><NavLink to='services'>Services</NavLink><span className='line-divider'> |</span></li>
                        <li><NavLink to='randd'>R&D</NavLink><span className='line-divider'> |</span></li>
                        <li><NavLink to='projects'>Projects</NavLink><span className='line-divider'> |</span></li>
                        <li><NavLink to='career'>Career</NavLink><span className='line-divider'> |</span></li>
                        <li><NavLink to='contact'>Contact</NavLink></li>
                    </ul>
                    </nav>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}