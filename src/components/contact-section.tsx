import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Wrapper } from "./wrapper";

export const ContactSection = () => {
  return (
    <section className="pt-16">
      <Wrapper className="flex justify-between flex-wrap gap-12 lg:gap-0">
        <div className="bg-background-accent p-8 pb-16 flex flex-col gap-5 rounded-md w-full lg:w-[45%] order-2">
          <h3 className="text-accent text-3xl">Let&apos;s work together</h3>
          <p className="text-secondary text-sm">
            We can create amazing things together.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </div>
          <div className="flex gap-4 flex-wrap">
            <Input placeholder="Email address" />
            <Input placeholder="Phone number" />
          </div>
          <Textarea placeholder="Type your message here..." />
          <button className="w-fit text-sm p-3 px-5 bg-accent rounded-full text-accent-foreground">
            Send Message
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center order-1 lg:order-3">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-background-accent rounded-md">
                <Phone className="text-accent" size={28} />
              </div>
              <div className="text-secondary text-sm">
                <p>Phone</p>
                <p className="text-primary">(+55) 41 99698-0858</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-background-accent rounded-md">
                <Mail className="text-accent" size={28} />
              </div>
              <div className="text-secondary text-sm">
                <p>Email</p>
                <p className="text-primary">adrielcampos.dev@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-background-accent rounded-md">
                <MapPin className="text-accent" size={28} />
              </div>
              <div className="text-secondary text-sm">
                <p>Location</p>
                <p className="text-primary">Curitiba, Paraná, Brazil</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
