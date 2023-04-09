import cls from 'classnames';
import React, { FC, useState } from 'react';
import { ICommonThemeTextProps } from './type';
import { CSSTransition } from 'react-transition-group'

const CommonThemeText: FC<ICommonThemeTextProps> = (props) => {
  const { text='测试', className, theme, ...restProps } = props;
  const [rotate, setRotate] = useState(true)
  const classes = cls('text', className, {
    [`theme-text-${theme}`]: theme, 
  })
  return (
    <CSSTransition in={rotate} timeout={3000} classNames="zoom-in-top" appear>
      <div className={classes} {...restProps} onClick={() => setRotate(!rotate)}>{text}</div>
    </CSSTransition>
  )
}

export default CommonThemeText;