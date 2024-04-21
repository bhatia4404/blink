import { atom } from "recoil";

export const activeTabsAtom = atom({
  key: "activeTabs",
  default: [1, 0, 0, 0, 0],
});
