import { atom, selector } from "recoil";
export const usersFilterAtom = atom({
  key: "userFilter",
  default: "",
});
export const UsersSelector = selector({
  key: "userSelector",
  get: async ({ get }) => {
    const allUsers = await fetch(
      `https://blinkbackend.onrender.com/api/v1/account/find?filter=${get(
        usersFilterAtom
      )}`
    );
    const { users: data } = await allUsers.json();
    return data;
  },
});
