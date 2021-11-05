import React, { useEffect } from 'react'
import cls from './header.module.scss'
import { motion, useAnimation } from 'framer-motion'
function Dropdown({ open }) {
  const animation = useAnimation()
  useEffect(() => {
    if (open) {
      animation.start('visible')
    } else {
      animation.start('hide')
    }
  }, [open, animation])
  const variants = {
    visible: {
      y: 0,
    },
    hide: {
      y: -300,
    },
  }
  return (
    <motion.div
      animate={animation}
      variants={variants}
      initial='hide'
      className={cls.dropdown}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <ul className={cls.list}>
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
    </motion.div>
  )
}

export default Dropdown
