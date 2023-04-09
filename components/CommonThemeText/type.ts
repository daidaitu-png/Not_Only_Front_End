export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'light' | 'danger' | 'dark';

export enum ThemeTextSize {
  Large = 'lg',
  Small = 'sm',
}

export interface ICommonThemeTextProps {
  theme?: ThemeProps;
  className?: string;
  disabled?: boolean;
  size?: ThemeTextSize;
  href?: string;
  text?: string;
}
