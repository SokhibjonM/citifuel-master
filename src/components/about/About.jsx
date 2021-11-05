import React, { useEffect } from 'react'
import cls from './about.module.scss'
import about_image from '../../images/about_us.png'
import { DottedBackgroundSmall } from '../DottedBackgroundSmall'
import { DottedBackgroundLarge } from '../DottedBackgroundLarge'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
function About({ setSectionValue }) {
  const animation = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.8,
  })
  useEffect(() => {
    if (inView) {
      setSectionValue('02')
      animation.start('visible')
    } else {
      animation.start('hide')
    }
  }, [animation, inView, setSectionValue])
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      y: 20,
    },
  }
  return (
    <div className={cls.container} id='about'>
      <div className='wrapper'>
        <div className={cls.inner}>
          <div className={cls.left}>
           {/*  <DottedBackgroundSmall /> */}
            <p className={`${cls.title} title bg`}>About us</p>
            <p className='leading'>
              Citifuel LLC is a full solution services provider focused on being
              a leader in safety and technology. Our mission is to help trucking
              companies efficiently transport loads safely, securely and
              on-time. From our high-tech tracking and technology systems to our
              friendly drivers and customer service staff, everything is focused
              on ways to come up with solutions to our customers’ problems and
              to make it as easy as possible to do business with us. We succeed
              because of our culture of doing what we say, and saying what we
              do. We bring this time honored way of life into the modern era by
              melding it with advanced technology, experienced employees, and a
              passion to do it right. This culture of success through honest,
              hard work is driven into each of our companies through the
              personal passion and example of our executive team.
            </p>
          </div>
          <div className={cls.right} ref={ref}>
            <DottedBackgroundLarge />
            <div className={cls.img_cont}>
              <motion.img
                animate={animation}
                variants={variants}
                src={about_image}
                transition={{ type: 'tween', duration: 0.3, delay: 0.3 }}
                alt='About us'
              />
              <motion.div
                animate={animation}
                variants={variants}
                className={cls.left_element}
              ></motion.div>
            </div>
            <p className={`${cls.title} title bg`}>About us</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
