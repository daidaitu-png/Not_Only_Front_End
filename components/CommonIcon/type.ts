import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'light' | 'danger' | 'dark';

export interface ICommonIconProps extends FontAwesomeIconProps  {
  theme?: ThemeProps
}
