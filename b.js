// let fetchPageviewsData = async (year, month, day) => {
//   let apiEndpoint = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${day}`;

//   try {
//     let res = await fetch(apiEndpoint);

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     let data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchPageviewsData("2024", "05", "01");

let fizzBuzz = (num) => {
  for (let i=0; i<num; i++){
    console.log(i)
  }
}

fizzBuzz(10)
