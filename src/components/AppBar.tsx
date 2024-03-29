import { Brand } from "./Brand";
import { Tabs } from "./Tabs";
import { MenuBar } from "./MenuBar";
import { Search } from "./Search";
import { LoginButton } from "./LoginButton";
export function AppBar() {
  return (
    <div className="flex max-xl:smallAppBar bg-blue1 shadow-gray-200 shadow-lg">
      <div className="brand-tabs flex items-center  w-[80%] justify-evenly">
        <div className="side-brand flex items-center gap-3 ">
          <MenuBar />
          <Brand />
        </div>
        <Tabs />
      </div>
      <div className="search-login flex items-center w-[20%] bg-blue8  justify-center gap-6 rounded-l-full ">
        <Search />
        <LoginButton />
      </div>
    </div>
  );
}
