import cls from 'classnames';
import React, { FC, useState } from 'react'
import { MenuContext } from './MenuContext';
import { IMenuContext, IMenuItemProps, IMenuProps } from './type';

const CommonMenu: FC<IMenuProps> = ({
  className,
  mode='horizontal',
  style,
  defaultIndex='0',
  children,
  onSelect,
  defaultOpenSubMenus=[],
}) => {
  const [currentActive, setActive] = useState(defaultIndex);

  const classes = cls('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'horizontal',
  });
  const handleClick = (index: string) => {
    console.log('index', index);
    
    setActive(index);
    if(onSelect) {
      onSelect(index);
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<IMenuItemProps>;
      const {displayName} = childElement.type;
      if(displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      }else {
        console.error("Warning: Menu has a child which is not a MenuItem");
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

export default CommonMenu;