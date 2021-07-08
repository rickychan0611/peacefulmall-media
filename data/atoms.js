import { atom, selector } from "recoil";

export const openSideMenu = atom({
  key: "openSideMenu",
  default: false,
});

export const selectedCat = atom({
  key: "selectedCat",
  defualt: ""
})
export const selectedArticle = atom({
  key: "selectedArticle",
  defualt: null
})
