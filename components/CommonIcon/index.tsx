import cls from 'classnames';
import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICommonIconProps } from './type';

const CommonIcon: FC<ICommonIconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = cls('icon', className, {
    [`icon-${theme}`]: theme, 
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default CommonIcon;