import { createEl } from "../lib/dom";
import { getRollingData } from "../lib/pressData";
import { createRollingNewsCard } from "./createRollingNewsCard";

export const createRolling = () => {
  const rollingWrapper = createEl("section", "", "");
  rollingWrapper.id = "roll-wrapper";

  const rollingData = [...getRollingData()];

  for (let i = 0; i < 2; i++) {
    const card = createRollingNewsCard(
      rollingData[i].pressName,
      rollingData[i].title.slice(0, 36)
    );
    card.dataset.link = rollingData[i].url;
    rollingWrapper.append(card);
  }

  return rollingWrapper;
};
