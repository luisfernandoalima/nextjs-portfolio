import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

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
      <Footer />
    </>
  );
}
