import React, { useState } from 'react'
import cls from './header.module.scss'
import logo from '../../images/logo.png'
import { Hamburger, CloseIcon } from '../svg'
import Dropdown from './Dropdown'
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={cls.container}>
        <div className='wrapper'>
          <div className={cls.inner}>
            <div className={cls.logo}>
              <a href='#home'>
                <img src={logo} alt='Logo' />
              </a>
            </div>
            <ul className={cls.nav_list}>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About us</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#contacts'>Contacts</a>
              </li>
            </ul>
            <button className={cls.hamburger} onClick={() => setOpen(!open)}>
              {open ? <CloseIcon /> : <Hamburger />}
            </button>
            <Dropdown open={open} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
