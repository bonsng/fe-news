import { store, actions } from "../../state/store";
import { PRESS_CATEGORIES } from "../../lib/pressData";
import { createEl } from "../../lib/dom.js";

export const paginateList = () => {
  const state = store.getState();
  const { listCategoryIdx, listPressIdx, listPressData } = state;
  const nowPress =
    listPressData[PRESS_CATEGORIES[listCategoryIdx]].presses[listPressIdx];

  return { listNav: createListNav(PRESS_CATEGORIES), nowPress };
};

const createListNav = (categories) => {
  const nav = createEl(
    "nav",
    "ns-press-list__nav",
    `<ul class="ns-press-list__nav-list surface-alt"></ul>`
  );
  const navList = nav.querySelector(".ns-press-list__nav-list");
  categories.forEach((category) => {
    navList.append(createNavItem(category));
  });

  return nav;
};

const createNavItem = (category) => {
  const navItem = createEl(
    "li",
    "ns-press-list__nav-item typo-available-medium14",
    category
  );
  return navItem;
};
