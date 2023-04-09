import cls from 'classnames';
import React, { FC, useState } from 'react';
import { ITransitionProps } from './type';

const CommonTransition: React.FC<ITransitionProps> = (props) => {
  const { classNames, children, animation, ...restProps } = props;

  return (
    <CSSTransition
      className={classNames ? classNames : animation}
      {...restProps}
    >
      {children}
    </CSSTransition>
  )
}
CommonTransition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}
export default CommonTransition;