type MenuMode = "horizontal" | "vertical";

export interface IMenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?:  (selectedIndex: string) => void;
  defaultOpenSubMenus?: string[];
}

export interface IMenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

type SelectCallback = (selectedIndex: string) => void;

export interface IMenuContext {
  index?: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export interface ISubMenuProps {
  index: string;
  title: string;
  className?: string;
}