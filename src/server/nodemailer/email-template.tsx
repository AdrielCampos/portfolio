import { Heading, Html, Link, Text, Hr } from "@react-email/components";

export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) => {
  return (
    <Html>
      <Heading as="h1">Olá!</Heading>
      <Text>Você recebeu uma mensagem do seu site:</Text>
      <Link href="https://adrielcampos.vercel.app/">
        https://adrielcampos.vercel.app/
      </Link>
      <Hr />
      <Text>
        Nome: {firstName} {lastName}
      </Text>
      <Text>Email: {email}</Text>
      <Text>Mensagem: {message}</Text>
    </Html>
  );
};
