import cls from 'classnames';
import React, { FC } from 'react'
// import './index.css'
import { ButtonType, ICommonButtonProps } from './type';


const CommonButton: FC<ICommonButtonProps> = ({
  btnType = ButtonType.Default,
  disabled = false,
  className,
  size,
  children,
  href,
  ...restProps
}) => {
  const classes = cls('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled,
  });
  if(btnType == ButtonType.Link &&  href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    )
  }else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

export default CommonButton;