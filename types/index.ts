import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons/lib";

export interface INavLink {
  text: string;
  url: string;
}

export interface INavbar {
  navOpen: boolean;
  closeNav: () => void;
}

export interface IHeader extends INavbar {
  setNav: Dispatch<SetStateAction<boolean>>;
}

export interface INexPageLinkButton {
  url: string;
  text: string;
}

export interface ILinkIcon {
  url: string;
  icon: React.ReactElement;
}
