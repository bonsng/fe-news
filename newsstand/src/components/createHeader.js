import { createEl } from "../lib/dom";
import { getDate } from "../lib/utils";
import { getLogo } from "./logo";

export function createHeader() {
  const logoMarkup = getLogo().outerHTML;

  return createEl(
    "header",
    "ns-header",
    `
      <div id="title-wrap">
        ${logoMarkup}
        <h1 class="ns-title text-strong" aria-label="뉴스스탠드">뉴스스탠드</h1>
      </div>

      <div class="ns-date typo typo-display-medium16">
        <div id="date">${getDate()}</div>
      </div>
    `
  );
}
