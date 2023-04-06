import React from 'react'
import HeaderNav from './HeaderNav'
import MyButtons from './MyButtons'
import MyMenus from './MyMenus'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import TopNotice from './TopNotice'

function Home() {
  return (
    <div>
      <TopNotice />
      <HeaderNav />
      <MyButtons/>
      <div style={{marginTop: 20}}>
        <MyMenus/>
      </div>
      <FontAwesomeIcon icon={faCoffee} size='lg' />
    </div>
  )
}

export default Home