import React, { useEffect } from 'react'
import { Rectangle } from '../svg'
import cls from './whyus.module.scss'
import whyus_image from '../../images/why_us.png'
/* import { DottedBackgroundSmall } from '../DottedBackgroundSmall' */
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function WhyUs() {
  const animation = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.3,
  })
  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('hide')
    }
  }, [animation, inView])
  const variants = {
    visible: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  }
  return (
    <div className={cls.container} ref={ref}>
     {/*  <DottedBackgroundSmall /> */}
      <div className='wrapper small'>
        <div className={cls.inner}>
          <div className={cls.left}>
            <div className={cls.img_cont}>
              <motion.img
                variants={variants}
                animate={animation}
                initial='hide'
                src={whyus_image}
                alt='Why us'
              />
              <div className={cls.top_element}></div>
            </div>

            <p className='title bg'>WHY US?</p>
          </div>
          <div className={cls.right}>
            <p className='title'>WHY US?</p>
            <p className='leading'>
              We’ve built our company around a commitment to four core values
            </p>
            <div className={cls.features}>
              <span>safety</span>
              <Rectangle />
              <span>quality</span>
              <Rectangle />
              <span>integrity</span>
              <Rectangle />
              <span>respect</span>
            </div>
            <div className='leading'>
              We deliver the best solutions in supporting you with
              transportation and logistics, supply chain technology and friendly
              customer service so you transport your goods from origin to
              destination seamlessly and efficiently. Our safe and effective
              solutions are engineered to minimize your costs, risks and
              time-consuming activities. As we continually enhance our network,
              we strive to add value and functionality for our partners.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
