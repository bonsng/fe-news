import { createEl } from "../lib/dom";
import { groupPressByCategory, PRESS_CATEGORIES } from "../lib/pressData";

let listPressData;

export const createList = () => {
  const nsList = createEl("section", "ns-press-list border-default", "");
  nsList.classList.add("ns-press-list");
  nsList.setAttribute("aria-label", "언론사 목록");

  fetch("/pressMockData.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch mock data");
      }
      return response.json();
    })
    .then((data) => {
      listPressData = groupPressByCategory(data);
      return listPressData;
    })
    .then((groupedData) => {
      nsList.append(createListNav(), createListContent(groupedData));
    })
    .catch((err) => console.error(err));

  return nsList;
};

const createListNav = () => {
  const nav = createEl(
    "nav",
    "ns-press-list__nav",
    `<ul class="ns-press-list__nav-list"></ul>`
  );
  const navList = nav.querySelector(".ns-press-list__nav-list");
  PRESS_CATEGORIES.forEach((category) => {
    navList.append(createNavItem(category));
  });

  return nav;
};

const createNavItem = (category) => {
  const navItem = createEl("li", "ns-press-list__nav-item", category);
  return navItem;
};

const createListContent = (groupedData) => {
  let nowCategory = PRESS_CATEGORIES[0];
  let nowPress = groupedData[nowCategory].presses[0];
  const listContentWrapper = createEl(
    "div",
    "ns-press-list__content-wrapper",
    ""
  );

  const listContentHeader = createEl(
    "div",
    "ns-press-list__content-header",
    `<img src="${
      nowPress.logo
    }" alt="뉴스아이콘" class="ns-press-list__content-header-icon" />
    <span>${new Date().getFullYear()}년 ${nowPress.time}</span>
    <span>구독버튼</span>
    `
  );
  const listNews = createEl(
    "div",
    "ns-press-list__content",
    `<div class="ns-press-list__main-news">
      <img src="${nowPress.mainImg}" alt="메인뉴스이미지" class="ns-press-list__main-news-image" />
      <span class="ns-press-list__main-news-title">${nowPress.mainTitle}</span>
    </div>
    <ul class="ns-press-list__sub-news"></ul>
    `
  );

  const subNewsContainer = listNews.querySelector(".ns-press-list__sub-news");
  subNewsContainer.append(
    ...nowPress.relatedArticles.map((article) => {
      return createEl(
        "li",
        "ns-press-list__sub-news-title",
        `${article.title}`
      );
    })
  );
  subNewsContainer.append(
    createEl(
      "li",
      "ns-press-list__sub-news-edited",
      `${nowPress.press}에서 직접 편집한 뉴스입니다.`
    )
  );

  listContentWrapper.append(listContentHeader, listNews);

  return listContentWrapper;
};
