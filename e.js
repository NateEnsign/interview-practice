let fetchPageviewsData = async (year, month, day) => {
  let apiEndpoint = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${day}`;

  try {
    let res = await fetch(apiEndpoint);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    let data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

let processPageviewsData = (data) => {
  const articlesInfo = {};

  const items = data.items[0];
  if (!items) return articlesInfo;

  const articles = items.articles || [];
  articles.forEach((item) => {
    const { article, views, rank } = item;
    if (!articlesInfo[article]) {
      articlesInfo[article] = [];
    }
    articlesInfo[article].push({ views, rank });
  });

  return articlesInfo;
};

let generateTopArticles = async (lastNDays, topN) => {
  const articlesStats = {};

  const today = new Date();
  const startDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - lastNDays
  );

  for (let i = 0; i < lastNDays; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const data = await fetchPageviewsData(year, month, day);
    if (data) {
      const dailyArticlesInfo = processPageviewsData(data);

      for (const article in dailyArticlesInfo) {
        const stats = dailyArticlesInfo[article];

        if (!articlesStats[article]) {
          articlesStats[article] = [];
        }
        articlesStats[article].push(...stats);
      }
    }
  }

  const articlesSummary = [];
  for (const article in articlesStats) {
    const stats = articlesStats[article];
    const occurrences = stats.length;
    const averageRank =
      stats.reduce((sum, stat) => sum + stat.rank, 0) / occurrences;
    articlesSummary.push({ article, occurrences, averageRank });

    console.log(articlesSummary);
  }
};

let lastNDays = 10;

generateTopArticles(lastNDays);
