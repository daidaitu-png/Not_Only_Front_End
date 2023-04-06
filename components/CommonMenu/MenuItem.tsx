import cls from 'classnames';
import React, { FC, useContext } from 'react'
import { MenuContext } from './MenuContext';
import { IMenuItemProps, IMenuProps } from './type';

const MenuItem: FC<IMenuItemProps> = ({
  className,
  style,
  index,
  disabled,
  children,
}) => {
  const context = useContext(MenuContext);

  const classes = cls('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  })
  const handleClick = () => {
    if(context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index);
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = "MenuItem";

export default MenuItem;