import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

import { Hero } from "@/components/Home/Hero";
import { AboutMe } from "@/components/Home/AboutMe";
import { Knowledge } from "@/components/Home/Knowledge";
import { Formation } from "@/components/Home/Formation";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  console.log(lang);

  return (
    <>
      <Hero dictionary={dictionary.main.home.hero} />
      <AboutMe dictionary={dictionary.main.home.aboutMe}/>
      <Knowledge dictionary={dictionary.main.home.knowledge}/>
      <Formation dictionary={dictionary.main.home.formation}/>
      <p>
        https://coolors.co/palette/00111c-001523-001a2c-002137-00253e-002945-002e4e-003356-003a61-00406c{" "}
      </p>
    </>
  );
}
