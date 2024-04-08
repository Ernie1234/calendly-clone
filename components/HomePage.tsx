"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import NavBar from "./navbar/NavBar";

export default function HomePage() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setInView(currentPosition > 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      <NavBar inView={inView} />
      <ModeToggle />
    </main>
  );
}
