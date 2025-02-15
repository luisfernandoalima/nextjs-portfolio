import { Metadata } from "next";


import "@/styles/globals.css";

export const metadata:Metadata = {
  title: "Home",
  description: "Portfolio de Desenvolvedor Full-Stack JavaScript.",
  openGraph: {
    title: "Portfolio: Luis Fernando Alves de Lima",
    description:"Portfolio de Desenvolvedor Full-Stack JavaScript.",
    images: ['https://nextjs-portfolio-smoky-phi-35.vercel.app/public/OpenGraphImage.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
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
