import React, { FC, useLayoutEffect, useRef } from 'react'
import UserInfo from './UserInfo'
import styles from './index.module.css'
import { KINDS_OF_LEARNING } from './const'

interface IProps {

}

const HeaderNav: FC<IProps> = () => {
  const navRef = useRef(null);
  const handleMouseEnter = (e: any) => {
    console.log(e, e.target);
    e.target.className += ' hover';
    navRef.current
    // document.getElementById('nav').style.background = '#000'
    // document.getElementById('collapse').className += ' active'
  }
  const handleMouseOut = (e: any) => {
    // document.getElementById('nav').style.background = 'rgba(0, 0, 0, 0.8)'
  }
  return (
    <nav id='nav' ref={navRef} className={styles['header-nav']}>
      <div className={styles['header-nav-center']}>
        <UserInfo
          avatarAltText="帅哥的头像"
          avatar='https://n.sinaimg.cn/sinakd20230217s/448/w1024h1024/20230217/bf4d-f0cf7646fdacc4d68595b34350a8fda8.jpg'
        />
        <ul >
          {
            KINDS_OF_LEARNING.map(x => <li onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} className={styles['activeLi']} key={x.id}>{x.name}</li>)
          }
        </ul>
      </div>
      <div id='collapse' className={styles['collapse']}></div>
    </nav>
  )
}

export default HeaderNav