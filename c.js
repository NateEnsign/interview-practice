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

// let today = new Date()
// console.log(today)

// let startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 10)
// console.log(startDate)

let generateTopArticles = async (lastNDays) => {
  let today = new Date();
  let startDate = new Date(
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

    let data = await fetchPageviewsData(year, month, day);
    console.log(data);
  }
};

let lastNDays = 10;

generateTopArticles(lastNDays);
