import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
export type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom'  | 'zoom-in-right'; 

export interface ITransitionProps extends CSSTransitionProps {
  animation?: AnimationName;
}