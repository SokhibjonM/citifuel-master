import React from 'react'
import cls from './footer.module.scss'
import logo from '../../images/logo.png'
import bg from '../../images/footer_bg.png'
import { Phone } from '../svg'
function Footer() {
  return (
    <div className={cls.container} style={{ backgroundImage: `url(${bg})` }}>
      {/* <img src={bg} alt='Background' /> */}
      <div className='wrapper'>
        <div className={cls.inner}>
          <div className={cls.logo}>
            <img src={logo} alt='Logo' />
          </div>
          <p className='leading'>18 CAMPUS BLVD STE 100 NEWTOWN SQ, PA 19073</p>
          <div className={cls.contact}>
            <Phone />
            <span className='leading'>24/7 Operator Support</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
