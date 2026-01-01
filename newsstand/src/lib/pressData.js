import pressData from "../data/pressData.json";

// Function to get rolling data
export const getRollingData = () => {
  return pressData
    .filter((item) => item.relatedArticles?.length > 0)
    .map((p) => ({
      pressName: p.press,
      title: p.relatedArticles[0].title,
      url: p.relatedArticles[0].link,
    }));
};

export const getGridData = () => {
  return pressData.map((p) => ({
    pressName: p.press,
    icon: p.logo,
  }));
};
