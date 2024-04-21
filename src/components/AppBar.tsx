import { Brand } from "./Brand";
import { Tabs } from "./Tabs";
import { MenuBar } from "./MenuBar";
import { Search } from "./Search";
import { LoginButton } from "./LoginButton";

export function AppBar() {
  return (
    <div className="flex fixed top-0 w-[100%] max-xl:smallAppBar bg-blue1 shadow-gray-200 shadow-lg z-[1]">
      <div className="brand-tabs flex items-center  w-[80%] justify-evenly">
        <div className="side-brand flex items-center gap-3 ">
          <MenuBar />
          <Brand />
        </div>
        <Tabs />
      </div>
      <div className="search-login pl-[10px] flex items-center w-[20%] bg-blue8 gap-8  justify-center gap-3 rounded-l-full ">
        <Search />
        <LoginButton />
      </div>
    </div>
  );
}
