import { Metadata } from "next";


import "@/styles/globals.css";

export const metadata:Metadata = {
  title: "Luis Fernando Alves de Lima",
  description: "Portfolio de Desenvolvedor Full-Stack JavaScript.",
  openGraph: {
    title: "Portfolio: Luis Fernando Alves de Lima",
    description:"Portfolio de Desenvolvedor Full-Stack JavaScript.",
    images: ['https://nextjs-portfolio-smoky-phi-35.vercel.app/public/OpenGraphImage.png']
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
