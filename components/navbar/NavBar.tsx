"use client";

import Logo from "./Logo";
import { MenuItem } from "./MenuItem";

interface Props {
  inView: boolean;
}

const NavBar = ({ inView }: Props) => {
  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center p-2 transition-all duration-300 ease-out ${
        inView && "shadow-md"
      }`}
    >
      <Logo />
      <div className="hidden md:block">
        <MenuItem />
      </div>
    </nav>
  );
};

export default NavBar;
