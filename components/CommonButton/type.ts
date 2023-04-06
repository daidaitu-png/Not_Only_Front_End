import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

export interface IBaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
}

type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

export type ICommonButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;