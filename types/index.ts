import { Dispatch, SetStateAction } from "react";

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
