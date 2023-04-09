import React from 'react'
import HeaderNav from './HeaderNav'
import MyButtons from './MyButtons'
import MyMenus from './MyMenus'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import TopNotice from './TopNotice'
import MyIcons from './MyIcons';
import MyThemeText from './MyThemeText';
import MyInputs from './MyInputs';
import MyAutoComplete from './MyAutoComplete';
import MyUploads from './MyUploads';
import MyProgress from './MyProgress';

function Home() {
  return (
    <div>
      <TopNotice />
      <HeaderNav />
      <MyButtons/>
      <div style={{marginTop: 20}}>
        <MyMenus/>
      </div>
      <MyIcons />
      <MyThemeText />
      <MyInputs />
      {/* <FontAwesomeIcon icon={faCoffee} size='lg' /> */}
      <MyAutoComplete />
      <MyUploads />
      <MyProgress />
    </div>
  )
}

export default Home