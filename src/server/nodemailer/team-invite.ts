"use server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { EmailTemplate } from "./email-template";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "adrielcampos.api@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmailMessage(data: {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
}): Promise<{
  data?: typeof data;
  error?: string;
  status: number;
}> {
  try {
    await transporter.sendMail({
      from: "Seu Site <adrielcampos.api@gmail.com>",
      to: "adrielcampos.dev@gmail.com",
      subject: "Mensagem do Seu Site!",
      html: await render(EmailTemplate({ ...data })),
    });

    return { data: data, status: 200 };
  } catch (error) {
    return { error: JSON.stringify(error), status: 400 };
  }
}
