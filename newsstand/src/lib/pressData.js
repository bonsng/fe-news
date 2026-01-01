import pressData from "../data/pressData.json";

// Function to get rolling data
export const getRollingData = () => {
  return pressData
    .filter((item) => item.relatedArticle?.length > 0)
    .map((p) => ({
      pressName: p.press,
      title: p.relatedArticle[0].title,
      url: p.relatedArticle[0].link,
    }));
};

export const getGridData = () => {
  return pressData.map((p) => ({
    pressName: p.press,
    icon: p.logo,
  }));
};
