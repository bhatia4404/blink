import footer from "../img/footer.svg";
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
      <div className="relative">
        <p className="absolute right-3 bottom-4 text-blue9 font-semibold">
          Copyright @blink
        </p>
        <img src={footer} className="" />
      </div>
    </div>
  );
}
