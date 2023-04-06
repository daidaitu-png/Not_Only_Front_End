import { Select } from 'antd'
import React, { FC } from 'react'

const SelectOption = Select.Option

interface IProps {
  tips: string;
}

const CommonSelect:FC<IProps> = ({tips}) => {
  return (
    <Select value={2} style={{width: 200}}>
      <SelectOption value={2}>{tips}</SelectOption></Select>
  )
}

export default CommonSelect