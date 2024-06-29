import { atom, selector } from "recoil";

export const tokenAtom = atom({
  key: "token",
  default: "",
});

export const CurrentUserSelector = selector({
  key: "currentUser",
  get: async ({ get }) => {
    const res = await fetch(
      `http://${process.env.backendurl}/api/v1/account/find?token=${get(
        tokenAtom
      )}`
    );
    const { user } = await res.json();

    return user;
  },
});
