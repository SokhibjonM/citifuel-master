import React from 'react'
import { PhoneNum } from '../svg'
import cls from './navigation.module.scss'



function Navigation({ sectionValue }) {
  return (
    <div className={cls.navigation}>
      {window?.innerWidth > 576 ? (
        <>
          <div className={cls.columns}>
            <div className={cls.col}></div>
            <div className={cls.col}></div>
            <div className={cls.col}></div>
            <div className={cls.col}></div>
          </div>
          <div className={cls.columns}>
            <div className={cls.count}>
              {sectionValue === '01' ? <span>01</span> : ''}
            </div>
            <div className={cls.count}>
              {sectionValue === '02' ? <span>02</span> : ''}
            </div>
            <div className={cls.count}>
              {sectionValue === '03' ? <span>03</span> : ''}
            </div>
            <div className={cls.count}>
              {sectionValue === '04' ? <span>04</span> : ''}
            </div>
          </div>
        </>
      ) : (
        <div className={cls.call}>
          <a href='tel:+998917881068'>
            <PhoneNum />
          </a>
        </div>
      )}
    </div>
  )
}

export default Navigation
