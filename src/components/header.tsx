"use client";
import { useEffect, useState } from "react";
import { Wrapper } from "./wrapper";
import { ThemeSwitch } from "./theme-switch";

export const Header = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = (e: any) => {
      if (e.target?.scrollTop > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors ${
        isTop ? "bg-transparent" : "bg-background bg-opacity-90"
      }`}
    >
      <Wrapper
        className={`py-6 md:py-10 transition-all flex justify-between items-center bg-opacity-100 ${
          !isTop && "!py-4 md:!py-6"
        }`}
      >
        <p className="text-primary text-lg md:text-2xl flex items-center gap-[5px]">
          Adriel{" "}
          <span className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full aspect-square bg-accent block translate-y-[4px]" />
        </p>
        <nav className="gap-8 items-center">
          <ThemeSwitch />
        </nav>
      </Wrapper>
    </header>
  );
};
