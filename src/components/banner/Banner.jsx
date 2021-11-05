import React, { useEffect, useState } from 'react'
import cls from './banner.module.scss'
import banner1 from '../../images/banner1.png'
import { DottedBackgroundSmall } from '../DottedBackgroundSmall'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function Banner({ setSectionValue }) {
  const animation = useAnimation()
  const [windowSize, setWindowSize] = useState(window?.innerWidth)
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  useEffect(() => {
    if (inView) {
      console.log('inview bannaer')
      setSectionValue('01')
      animation.start('visible')
    } else {
      animation.start('hide')
    }
  }, [animation, inView, setSectionValue])
  const variantsDesktop = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
    hide: {
      opacity: 0,
      y: 30,
      x: 0,
    },
  }
  const variantsMobile = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    hide: {
      opacity: 0,
      x: -30,
      y: 0,
    },
  }
  const variants = windowSize > 576 ? variantsDesktop : variantsMobile
  useEffect(() => {
    if (window) {
      setWindowSize(window.innerWidth)
      window.addEventListener('resize', () => {
        setWindowSize(window.innerWidth)
      })
    }
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])
  console.log(variants)
  return (
    <div ref={ref} className={cls.container} id='home'>
      <div className='wrapper'>
        <div className={cls.inner}>
          <div className={cls.left}>
            <DottedBackgroundSmall />
            <div className='big_title'>Full solution services in logistics</div>
            <div className='leading'>
              Help trucking companies efficiently transport loads safely,
              securely and on-time
            </div>
            {windowSize < 576 && (
              <button className='btn mobile'>LEARN MORE</button>
            )}
          </div>
          <div className={cls.right}>
            <div className={cls.img_cont}>
              <motion.div
                animate={animation}
                variants={variants}
                initial={'hide'}
                transition={{
                  type: 'tween',
                  duration: 0.3,
                  delay: windowSize > 576 ? 0.7 : 0.3,
                }}
                className={cls.img}
              >
                <img src={banner1} alt='Banner' />
              </motion.div>
              <motion.div
                animate={animation}
                variants={variants}
                initial={'hide'}
                transition={{
                  type: 'tween',
                  duration: 0.3,
                  delay: 0.5,
                }}
                className={cls.top_element}
              />
              <motion.div
                animate={animation}
                variants={variants}
                initial={'hide'}
                transition={{
                  type: 'tween',
                  duration: 0.3,
                  delay: windowSize > 576 ? 1.1 : 0.8,
                }}
                className={cls.bottom_element}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
