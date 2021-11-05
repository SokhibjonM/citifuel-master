import React, { useEffect } from 'react'
import { Rectangle } from '../svg'
import cls from './map.module.scss'
import map_image from '../../images/map.png'
/* import { DottedBackgroundSmall } from '../DottedBackgroundSmall' */
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function Map({ setSectionValue }) {
  const animation = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.8,
  })
  useEffect(() => {
    if (inView) {
      setSectionValue('03')
      animation.start('visible')
    } else {
      animation.start('hide')
    }
  }, [animation, inView, setSectionValue])
  const variants = {
    visible: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  }
  return (
    <div className={cls.container}>
      <div className='wrapper small'>
        <div className={cls.inner}>
          <div className={cls.left}>
            {/* <DottedBackgroundSmall /> */}
            <div className={`${cls.title}`}>
              <div className='title bg'>48 states</div>
              <div>
                <span className='title bg'>365</span>
                <Rectangle />
                <span className='title bg'>24</span>
                <Rectangle />
                <span className='title bg'>7</span>
              </div>
              <button className='btn link'>
                <a href='#contacts'>Contact us</a>
              </button>
            </div>
          </div>
          <div className={cls.right} ref={ref}>
            <div className={cls.img_cont}>
              <motion.img
                animate={animation}
                variants={variants}
                initial='hide'
                src={map_image}
                alt='Map'
              />
            </div>
            <div className='title bg'>48 states</div>
            <button className={`${cls.btn} btn link`}>
              <a href='#contacts'>Contact us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
