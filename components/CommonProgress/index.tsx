import React, { FC } from 'react'
import { ThemeProps } from '../CommonInput/type';

export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

const CommonProgress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight=15,
    showText=true,
    styles,
    theme="primary",
  } = props
  return (
    <div className="progress-bar" style={styles}>
      <div className="progress-bar-outer" style={{ height: `${strokeHeight}px`}}>
        <div 
          className={`progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

export default CommonProgress;
