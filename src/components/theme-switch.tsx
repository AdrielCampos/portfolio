"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center"
    >
      <Sun size={24} />
      {/* {theme === "light" && <Moon size={24} />} */}
    </button>
  );
};
