import { createEl } from "../lib/dom";
import { getRollingData } from "../lib/pressData";
import { createRollingNewsCard } from "./createRollingNewsCard";

const ROLLING_NEWS_COUNT = 5;

let leftTrackState;
let rightTrackState;

export const createRolling = () => {
  const rollingWrapper = createEl(
    "section",
    "",
    `
    <div id="left-rolling-list" class="border-default surface-alt rolling-list rolling-left">
      <ul class="rolling-track"></ul>
    </div>
    <div id="right-rolling-list" class="border-default surface-alt rolling-list rolling-right">
      <ul class="rolling-track"></ul>
    </div>
  `
  );
  rollingWrapper.id = "roll-wrapper";

  const [leftRollingData, rightRollingData] = [
    ...getRollingData({ left: ROLLING_NEWS_COUNT, right: ROLLING_NEWS_COUNT }),
  ];

  const leftTrack = rollingWrapper.querySelector(
    ".rolling-left .rolling-track"
  );
  const rightTrack = rollingWrapper.querySelector(
    ".rolling-right .rolling-track"
  );
  leftTrackState = setUpTrack(leftTrack, leftRollingData, 2);
  rightTrackState = setUpTrack(rightTrack, rightRollingData, 2);

  return rollingWrapper;
};

const setUpTrack = (track, data, trackCount) => {
  track.innerHTML = "";

  data.slice(0, trackCount).forEach((item) => {
    const newsCard = createRollingNewsCard(item.pressName, item.title);
    track.appendChild(newsCard);
  });

  return { topIdx: 0 };
};
