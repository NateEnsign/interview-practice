let fetchPageviewsData = async (year,month,day) => {
    let apiEndpoint = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${day}`
    try {
        let res = await fetch(apiEndpoint)

        if(!res.ok){
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        let data = await res.json()
        let articlesInfo = {}

        let items = data.items[0]
        // console.log(items)


        let articles = items.articles || []
        // console.log(articles)

        articles.forEach((item) => {
           let {article, views, rank} = item
           if (!articlesInfo[article]){
            articlesInfo[article] = []
           }
           articlesInfo[article].push({views, rank})
        })

        console.log(articlesInfo)
        return articlesInfo



    } catch (error) {
        console.error(error)
    }
}

fetchPageviewsData('2024', '05', '02')