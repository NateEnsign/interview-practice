let dayjs = require ('dayjs')


let fetchPageviewsData = async (date) => {
    const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${date}`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${year}-${month}-${day}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

let generateTopArticles = async (lastNDays, topN) => {
    let articlesStats = {};

    let start = dayjs().subtract(1,'day')

    for (let i = 0; i < lastNDays; i++) {
      let date = start.subtract(i,'day').format('YYYY/MM/DD')

        let data = await fetchPageviewsData(date);
        if (data) {
            let items = data.items[0];
            if (!items) continue;

            let articles = items.articles || [];
            articles.forEach(item => {
                const { article, views, rank } = item;
                    if (!articlesStats[article]) {
                        articlesStats[article] = [];
                    }
                    articlesStats[article].push({ views, rank });
            });
        }
    }

    let articlesSummary = [];
    for (let article in articlesStats) {
        let stats = articlesStats[article];
        let occurrences = stats.length;
        let averageRank =
          stats.reduce((sum, stat) => sum + stat.rank, 0) / occurrences;
        articlesSummary.push({ article, occurrences, averageRank });
    }

    articlesSummary.sort((a, b) => {
        if (a.occurrences !== b.occurrences) {
            return b.occurrences - a.occurrences;
        } else {
            return a.averageRank - b.averageRank;
        }
    });

    return articlesSummary.slice(0, topN);
}

const lastNDays = 10;
const topN = 10;
generateTopArticles(lastNDays, topN).then(topArticles => {
    console.log(topArticles);
});

