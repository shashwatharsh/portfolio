import React from 'react'
import './home.css'
import logo from "./img/logo.png"

export default function Home() {
    return (
        <div className='home'>
            <div className='home__bg'>
                <div className='header d__flex align__items__center pxy__30'>
                    <div className='logo'>
                        <img src={logo} alt='nothinhg' className='myedimgl'/>
                    </div>
                    <div className='navigation'>
                        <ul className='navbar d__flex pxy__30'>
                            <a href='#Home'> <li className='nav__items mx__15'>Home</li></a>
                            <a href='#About'> <li className='nav__items mx__15'>About</li></a>
                            <a href='#Services'> <li className='nav__items mx__15'>Services</li></a>
                            <a href='#Resume'> <li className='nav__items mx__15'>Resume</li></a>
                            <a href='#Blogs'> <li className='nav__items mx__15'>Blogs</li></a>
                            <a href='#Contact'> <li className='nav__items mx__15'>Contact</li></a>
                        </ul>
                    </div>
                </div>
                {/* home container */}
                <div className='container'>
                    <div className='home__content'>
                        <div className='home__meta'>
                            <h1 className='home__text pz__10'>Hey there, Welcome!</h1>
                            <h2 className='home__text pz__10'>Shashwat Harsh</h2>
                            <h3 className='home__text sweet pz__10'>Web Developer</h3>
                            <h4 className='home__text pz__10'>Enthuiastic Dev</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

