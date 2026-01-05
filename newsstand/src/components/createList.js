import { createEl } from "../lib/dom";

export const createList = () => {
  const nsList = createEl(
    "section",
    "ns-press-list border-default",
    `
      <div class="ns-press-list__list">리스트 컴포넌트</div>
    `
  );
  nsList.classList.add("ns-press-list");
  nsList.setAttribute("aria-label", "언론사 목록");

  return nsList;
};
