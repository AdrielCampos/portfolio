import { Button } from "@/components/button";
import { CharacterCanvas } from "@/components/character";
import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";
import { HireSection } from "@/components/hire-section";
import { NumeralCard } from "@/components/numeral-card";
import { Wrapper } from "@/components/wrapper";
import { Download, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <section className="w-full h-screen relative">
        <div className="absolute -translate-y-1/2 top-1/2 w-full z-40 pr-6 md:pr-0">
          <Wrapper>
            <p className="text-primary">Software Developer</p>
            <p className="text-primary text-5xl leading-tight">
              Hello I&apos;m
              <br /> <strong className="text-accent">Adriel Campos</strong>
            </p>
            <p className="text-primary text-sm my-2">
              I&apos;m a software developer with a passion <br /> for creating
              and learning new things.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <div className="w-full md:w-auto">
                <Button>
                  Download CV <Download size={18} />
                </Button>
              </div>
              <Button icon>
                <Github size={18} />
              </Button>
              <Button icon>
                <Linkedin size={18} />
              </Button>
            </div>
          </Wrapper>
        </div>
        <div className="absolute h-full w-full bg-background opacity-50 md:opacity-20 z-30" />
        <CharacterCanvas />
      </section>
      <section className="w-full">
        <Wrapper className="flex justify-center gap-32 py-16 flex-wrap">
          <NumeralCard
            number={6}
            label={
              <>
                Years of <br /> experience
              </>
            }
          />
          <NumeralCard
            number={9}
            label={
              <>
                Technologies <br /> mastered
              </>
            }
          />
          <NumeralCard
            number={600}
            label={
              <>
                Code <br /> commits
              </>
            }
          />
        </Wrapper>
      </section>
      <HireSection />
      <ContactSection />
    </>
  );
}
