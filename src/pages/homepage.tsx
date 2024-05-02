import { About } from "../components/about";
import {
  HomeSection1,
  HomeSection2,
  HomeSection3,
} from "../components/homeSections";
import { SectionFooter1 } from "../components/SectionFooters";
export function HomePage() {
  return (
    <div className="flex relative flex-col gap-4 h-screen">
      <HomeSection1 />
      <SectionFooter1 />
      <HomeSection2 />
      <SectionFooter1 />
      <HomeSection3 />

      <About />
    </div>
  );
}
