const dayjs = require ('dayjs')


let fetchPageviewsData = async (date) => {
  const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${date}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${date}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
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

  let start = dayjs().subtract(1,'day')

  for (let i = 0; i < lastNDays; i++) {
    const date = start.subtract(i,'day').format('YYYY/MM/DD')

  
    

    const data = await fetchPageviewsData(date);
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

  // Calculate occurrences and average rank
  const articlesSummary = [];
  for (const article in articlesStats) {
    const stats = articlesStats[article];
    const occurrences = stats.length;
    const averageRank =
      stats.reduce((sum, stat) => sum + stat.rank, 0) / occurrences;
    articlesSummary.push({ article, occurrences, averageRank });
  }

  // Sort articles based on occurrences (descending) and average rank (ascending)
  articlesSummary.sort((a, b) => {
    if (a.occurrences !== b.occurrences) {
      return b.occurrences - a.occurrences; // Sort by occurrences (descending)
    } else {
      return a.averageRank - b.averageRank; // If occurrences are the same, sort by average rank (ascending)
    }
  });
  console.log(articlesSummary.slice(0, topN));
  return articlesSummary.slice(0, topN);
};

const lastNDays = 10;
const topN = 500;
generateTopArticles(lastNDays, topN);
