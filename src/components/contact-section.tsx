"use client";
import { CircleCheck, CircleX, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Wrapper } from "./wrapper";
import { useState } from "react";
import { FormValidation } from "@/utils/form-validation";
import { sendEmailMessage } from "@/server/nodemailer/team-invite";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<boolean>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      firstName: FormValidation.required(firstName) || "",
      lastName: FormValidation.required(lastName) || "",
      email:
        FormValidation.required(email) || FormValidation.email(email) || "",
      message: FormValidation.required(message) || "",
    };
    if (
      newErrors.firstName ||
      newErrors.lastName ||
      newErrors.email ||
      newErrors.message
    ) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      await sendEmailMessage({ email, firstName, lastName, message });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setRes(true);
    } catch (error) {
      setRes(false);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    }
  };

  return (
    <section className="pt-16">
      <Wrapper className="flex justify-between flex-wrap gap-12 lg:gap-0">
        <form
          onSubmit={handleSubmit}
          className="bg-background-accent p-8 pb-16 flex flex-col gap-5 rounded-md w-full lg:w-[45%] order-2 relative"
        >
          <h3 className="text-accent text-3xl">Let&apos;s work together</h3>
          <p className="text-secondary text-sm">
            We can create amazing things together.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Input
              placeholder="First name"
              value={firstName}
              setValue={(value) => {
                setFirstName(value);
                setErrors({ ...errors, firstName: "" });
              }}
              error={errors.firstName}
            />
            <Input
              placeholder="Last name"
              value={lastName}
              setValue={(value) => {
                setLastName(value);
                setErrors({ ...errors, lastName: "" });
              }}
              error={errors.lastName}
            />
          </div>
          <Input
            placeholder="Email address"
            value={email}
            setValue={(value) => {
              setEmail(value);
              setErrors({ ...errors, email: "" });
            }}
            error={errors.email}
          />
          <Textarea
            placeholder="Type your message here..."
            value={message}
            setValue={(value) => {
              setMessage(value);
              setErrors({ ...errors, message: "" });
            }}
            error={errors.message}
          />
          <button
            disabled={loading}
            className="w-fit text-sm p-3 px-5 bg-accent rounded-full text-accent-foreground"
          >
            Send Message
          </button>
          {loading && (
            <motion.div
              animate={{ opacity: 1 }}
              className="absolute opacity-0 inset-0 bg-background-accent bg-opacity-90 flex justify-center items-center"
            >
              {res !== undefined ? (
                <p
                  className={`text-center flex items-center flex-col gap-2 ${
                    res ? "text-accent" : "text-red-500"
                  }`}
                >
                  {res ? <CircleCheck size={32} /> : <CircleX size={32} />}
                  {res
                    ? "Message sent successfully!"
                    : "An error occurred, please try again."}
                </p>
              ) : (
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent" />
              )}
            </motion.div>
          )}
        </form>
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
