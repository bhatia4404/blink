import { HomePageFooter } from "../components/homePageFooter";
import { HomeSection1, HomeSection2 } from "../components/homeSections";
import { SectionFooter } from "../components/OddSectionfooter";
export function HomePage() {
  return (
    <div className="flex flex-col gap-4 h-screen">
      <HomeSection1 />
      <SectionFooter />
      <HomeSection2 />

      <HomePageFooter />
    </div>
  );
}
