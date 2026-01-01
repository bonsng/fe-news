import { createEl } from "../lib/dom";

export const createGridCard = (press) => {
  const item = createEl(
    "li",
    "ns-press-grid__item",
    `
      <div
        class="ns-press-grid__button"
        data-press-id="${press.id}"
      >
        <img
          src="${press.icon}"
          alt="${press.name}"
        />

        // <button class="subscribe-btn">
        //   + 구독하기
        // </button>
      </div>
    `
  );

  return item;
};
