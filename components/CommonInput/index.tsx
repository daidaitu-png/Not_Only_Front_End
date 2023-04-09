import cls from 'classnames';
import React, { FC, useState } from 'react';
import { ICommonInputProps } from './type';
import { CSSTransition } from 'react-transition-group'

const CommonInput: FC<ICommonInputProps> = (props) => {
  const { disabled, size, icon, prepend, append, className, style, ...restProps } = props;
  const classes = cls('input-wrapper', className, {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  });
  const fixControlledValue = (value: any) => {
    if(typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }
  if('value' in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    <div className={classes} style={style}>
      {
        prepend && <div className='input-group-prepend'>{prepend}</div>
      }
      {
        icon && <div className='icon-wrapper'>icon</div>
      }
      <input 
        className="input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="input-group-append">{append}</div>}
    </div>
  )
}

export default CommonInput;