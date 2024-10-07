"use client";
import { useState } from "react";
import { Wrapper } from "./wrapper";
import Image from "next/image";
import { useTheme } from "next-themes";

const data = {
  education: [
    {
      title: "React Profissional",
      institution: "Udemy",
      date: "2024",
    },
    {
      title: "Jornada Front-end",
      institution: "Samsung Ocean",
      date: "2024",
    },
    {
      title: "Introdução à Ciência de Dados",
      institution: "Santander Open Academy",
      date: "2024",
    },
    {
      title: "IA Generativa",
      institution: "Santander Open Academy",
      date: "2024",
    },
    {
      title: "Lógica de Programação",
      institution: "Ka Solution",
      date: "2021",
    },
    {
      title: "React Js do Zero ao Avançado na Prática",
      institution: "Udemy",
      date: "2020",
    },
    {
      title: "Introdução ao Node JS + Express",
      institution: "Udemy",
      date: "2020",
    },
  ],
  skills: [
    {
      title: "HTML",
      icon: "/html.svg",
    },
    {
      title: "CSS",
      icon: "/css.svg",
    },
    {
      title: "JavaScript",
      icon: "/js.svg",
    },
    {
      title: "React",
      icon: "/react.svg",
    },
    {
      title: "Next.js",
      icon: "/next.svg",
    },
    {
      title: "Lua",
      icon: "/lua.svg",
    },
    {
      title: "Tailwind CSS",
      icon: "/tailwind.svg",
    },
    {
      title: "Node JS",
      icon: "/node.svg",
    },
    {
      title: "TypeScript",
      icon: "/ts.svg",
    },
  ],
  about: [],
} as const;

export const HireSection = () => {
  const [activeTab, setActiveTab] = useState<"education" | "skills" | "about">(
    "education"
  );

  const { theme } = useTheme();

  return (
    <section>
      <Wrapper className="py-6 flex gap-12 justify-center flex-wrap">
        <div className="w-full lg:w-2/6 flex flex-col gap-8">
          <h2 className="text-primary text-4xl font-bold">Why hire me?</h2>
          <p className="text-secondary text-sm">
            I&apos;m a quick learner and always eager to learn new technologies.
          </p>
          <div className="flex flex-col gap-4">
            <button
              className={`w-full p-4 bg-background-accent text-sm rounded-md transition-colors ${
                activeTab === "education" && "!bg-accent text-accent-foreground"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={`w-full p-4 bg-background-accent text-sm rounded-md transition-colors ${
                activeTab === "skills" && "!bg-accent text-accent-foreground"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={`w-full p-4 bg-background-accent text-sm rounded-md transition-colors ${
                activeTab === "about" && "!bg-accent text-accent-foreground"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About me
            </button>
          </div>
        </div>
        <div className="w-full lg:w-3/6 overflow-y-auto max-h-96">
          <div className="flex flex-wrap gap-4 justify-center">
            {activeTab === "education" ? (
              data[activeTab]?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 justify-between w-[45%] bg-background-accent p-6 rounded-md min-w-64"
                >
                  <p className="text-accent-hover text-xs">{item.date}</p>
                  <div className="h-full">
                    <h3 className="text-primary text-lg leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-secondary text-xs flex gap-2 items-center">
                    <div className="w-[6px] h-[6px] aspect-square bg-accent rounded-full" />
                    {item.institution}
                  </p>
                </div>
              ))
            ) : activeTab === "skills" ? (
              data[activeTab]?.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col gap-3 justify-center items-center aspect-square bg-background-accent p-6 rounded-md w-32 group hover:bg-accent transition-all"
                >
                  <div className="absolute w-full bottom-0 left-0 text-accent-foreground rounded-b-md opacity-0 group-hover:opacity-100">
                    <p className="text-center font-semibold text-sm">
                      {item.title}
                    </p>
                  </div>
                  <Image
                    className={`filter ${
                      theme === "light"
                        ? "invert-[82%] group-hover:invert-0"
                        : "group-hover:invert-[82%]"
                    } transition-all`}
                    width={100}
                    height={100}
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-8 justify-between w-full px-6 rounded-md min-w-64">
                <h3 className="text-2xl">About me</h3>
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col gap-4 [&_div]:flex [&_div]:gap-4 [&_div]:items-center [&_h3]:text-secondary [&_h3]:text-sm">
                    <div>
                      <h3>Name</h3>
                      <p>Adriel Campos</p>
                    </div>
                    <div>
                      <h3>Experience</h3>
                      <p>6+ Years</p>
                    </div>
                    <div>
                      <h3>Nationality</h3>
                      <p>Brazil</p>
                    </div>
                    <div>
                      <h3>Freelance</h3>
                      <p>Available</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 [&_div]:flex [&_div]:gap-4 [&_div]:items-center [&_h3]:text-secondary [&_h3]:text-sm">
                    <div>
                      <h3>Phone</h3>
                      <p>(+55) 41 99698-0858</p>
                    </div>
                    <div>
                      <h3>Email</h3>
                      <p>adrielcampos.dev@gmail.com</p>
                    </div>
                    <div>
                      <h3>Discord</h3>
                      <p>not__frost</p>
                    </div>
                    <div>
                      <h3>Languages</h3>
                      <p>Portuguese, English</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
