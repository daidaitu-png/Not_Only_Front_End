import React, { ChangeEvent, useState } from 'react'
import CommonInput from '../../../components/CommonInput';

function MyInputs() {
  const [controlledVal, setControlledVal] = useState('');
  const handleControlledValChange = (e: ChangeEvent<HTMLInputElement>) => {
    setControlledVal(e.target.value);
  }
  return (
    <div>
     <CommonInput  prepend="https://" append=".com" />
     <CommonInput disabled  prepend="https://" append=".com" />
     <div>受控组件 state onChange</div>
     <CommonInput value={controlledVal} onChange={handleControlledValChange}  prepend="https://" append=".com" />
     <div style={{height: '30px'}}>{controlledVal}</div>
    </div>
  )
}

export default MyInputs;