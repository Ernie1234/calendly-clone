"use client";

import Logo from "./Logo";
import { MenuItem } from "./MenuItem";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <div className="hidden md:block">
        <MenuItem />
      </div>
    </nav>
  );
};

export default NavBar;
