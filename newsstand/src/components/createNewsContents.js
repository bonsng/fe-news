import { createEl } from "../lib/dom";
import { store } from "../state/store";
import { createControls } from "./createControls";
import { createGrid } from "./createGrid";

export const createNewsContents = () => {
  const contentWrapper = createEl("div", "", "");
  contentWrapper.id = "content-wrapper";
  const state = store.getState();
  contentWrapper.append(createControls(), createGrid(state));

  return contentWrapper;
};
