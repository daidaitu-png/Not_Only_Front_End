import classNames from "classnames";
import React, { useState, MouseEvent, cloneElement } from "react";
import { FC, FunctionComponentElement, useContext } from "react";
import { MenuContext } from "./MenuContext";
import { IMenuItemProps, ISubMenuProps } from "./type";


const SubMenu: FC<ISubMenuProps> = ({
  index, title, className, children,
}) => {
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  });
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    context.onSelect && index && context.onSelect(index);
    setOpen(!menuOpen);
  }
  let timer: any;
  const handleMouse = (e: MouseEvent, togger: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(togger);
    }, 300);
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick,
  } : {};
  
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: MouseEvent) => {
      handleMouse(e, true);
    },
    onMouseLeave: (e: MouseEvent) => {
      handleMouse(e, false);
    }
  } : {};

  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen,
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>;
      if(childElement.type.displayName === 'MenuItem') {
        return cloneElement(childElement, {
          index: `${index}-${i}`,
        })
      }else {
        console.error('Warning: SubMenu has a child which is not a MenuItem');
        
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className='submenu-title' {...clickEvents}>
        {title}
      </div>
      {
        renderChildren()
      }
    </li>
  )
}

SubMenu.displayName = 'SubMenu';

export default SubMenu;