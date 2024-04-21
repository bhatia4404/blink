import { atom, selector } from "recoil";
export const tokenAtom = atom({
  key: "token",
  default: "",
});
export const CurrentUserSelector = selector({
  key: "currentUser",
  get: async ({ get }) => {
    const res = await fetch(
      `http://localhost:3001/api/v1/account/find?token=${get(tokenAtom)}`
    );
    const { user } = await res.json();
    console.log(user);
    return user;
  },
});
