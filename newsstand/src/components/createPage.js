import { createEl } from "../lib/dom";
import { createHeader } from "./createHeader";

export const createPage = () => {
  const main = createEl("div", "ns-main-container");
  main.appendChild(createHeader());
  return main;
};
