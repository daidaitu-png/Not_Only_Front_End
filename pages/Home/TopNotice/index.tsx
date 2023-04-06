import React, { useState } from 'react'
import cls from 'classnames'
import CommonSelect from './CommonSelect'
import styles from './index.module.css'

function TopNotice() {
  const [continueClick, setContinueClick] = useState(false);
  const handleContinue = () => {
    setContinueClick(true);
  }
  return (
    <aside className={cls(styles.aside, continueClick? styles.continueClick :'')}>
      <div className={styles['aside-content']}>
        <div className={styles.tips}>选择另一个国家或地区，以获得适用于你所在位置的内容和体验。</div>
        <div style={{display: 'flex'}}>
          <CommonSelect tips='选择你的国家或地区' />
          <a onClick={handleContinue} href='#' className={styles.continue}>继续</a>
        </div>
      </div>
    </aside>
  )
}

export default TopNotice