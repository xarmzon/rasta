import { IBottomNavbarLinks, INavLink } from "./../types/index";
export const DESCRIPTION: string =
  "Hi, I am Adelola Kayode Samson (RastaXarm). A motivated and self-learned full-stack developer with a great passion for technology and software development. Likes to work with Object-Oriented Programming languages, frameworks with a preference to Python and JavaScript. A motivated and self-learned full-stack developer with a great passion for technology and software development. Likes to work with Object-Oriented Programming languages, frameworks with a preference to Python and JavaScript.";
export const DEFAULT_TITLE: string =
  "Adelola Kayode Samson(RastaXarm) <> Full-Stack Web Dev. | Mathematician | Teacher | Graphics Designer";

export const navLinks: INavLink[] = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
];

export const navbarLinks: IBottomNavbarLinks[] = [
  {
    icon: "icons8-windows-10-48",
    name: "Start Menu",
  },
  {
    icon: "icons8-desktop-48",
    name: "Home",
    link: "/",
  },
  {
    icon: "user-icon",
    name: "About Me",
    link: "/about",
  },
  {
    icon: "portfolio-icon",
    name: "Portfolio",
    link: "/portfolio",
  },
];
