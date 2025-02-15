import { Metadata } from "next";

import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

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


export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  console.log(lang)

  return (
    <>
      <Header dictionary={dictionary.menu} lang={lang}/>
      <main>{children}</main>
      <Footer dictionary={dictionary.footer} />
    </>
  );
}
