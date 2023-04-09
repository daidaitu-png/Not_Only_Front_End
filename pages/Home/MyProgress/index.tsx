import React, { ChangeEvent, useState } from 'react'
import CommonProgress from '../../../components/CommonProgress';

function MyProgress() {
  
  return (
    <div>
      <CommonProgress  percent={50}/>
    </div>
  )
}

export default MyProgress;