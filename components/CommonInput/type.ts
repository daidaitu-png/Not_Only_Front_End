import { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'light' | 'danger' | 'dark';

export type InputSize = 'lg' | 'sm';

export interface ICommonInputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  icon?: any;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}


