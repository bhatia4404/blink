import { atom, selector } from "recoil";

export const tokenAtom = atom({
  key: "token",
  default: "",
});

export const CurrentUserSelector = selector({
  key: "currentUser",
  get: async ({ get }) => {
    const res = await fetch(
      `http://ec2-13-48-44-130.eu-north-1.compute.amazonaws.com/api/v1/account/find?token=${get(
        tokenAtom
      )}`
    );
    const { user } = await res.json();

    return user;
  },
});
