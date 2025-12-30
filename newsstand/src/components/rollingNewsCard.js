export const rollingNewsCard = ({ title = "연합뉴스", text = "dummy" }) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.id = "rolling-card-wrapper";

  const newsTitle = document.createElement("h1");
  newsTitle.innerText = title;

  const newsContent = document.createElement("p");
  newsContent.innerText = text;

  cardWrapper.append(newsTitle);
  cardWrapper.append(newsContent);

  return cardWrapper;
};
