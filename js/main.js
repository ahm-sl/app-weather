// var allNews = [];
// var allEats = [];
// document.querySelector("input").addEventListener(`keyup`,function (e) {

//    getAbi(e.target.value)
//   console.log(e.target.value);

// })

// function getAbi(title) {

//     var topHeading = new XMLHttpRequest();
//     topHeading.open(
//       "get",`https://newsapi.org/v2/everything?q=${title}&from=2023-12-04&sortBy=publishedAt&apiKey=1735e3f8a2a64e1ca73c00690fc1b9c0` );
//     topHeading.send();
//     topHeading.addEventListener(`readystatechange`, function () {
//       if ((topHeading.readyState == 4) & (topHeading.status == 200)) {
//         allNews = JSON.parse(topHeading.response).articles;

//         console.log(allNews);
//         displayAllNews();
//       }
//     });

//     function displayAllNews() {
//       var cartoon = "";

//       for (i = 0; i < allNews.length; i++) {
//         cartoon += `
//     <div class="col-3 text-center">

//        <a href="${allNews[i].url}" target="_blank" >
//         <img class="w-100" src="${
//           allNews[i].urlToImage === null
//             ? ".//gallery/meal-3.jpg"
//             : allNews[i].urlToImage
//         }" ></a>
//         <h2>${allNews[i].title}</h2>
//         <p>${
//           allNews[i].description === null
//             ? "Lorem, ipsum dolor sit amet consectetur ddd"
//             : allNews[i].description
//         }</p>

//         </div>

//         `;
//       }
//       document.querySelector(".row").innerHTML = cartoon;
//     }

// }

// function GetPizza() {
//   return new Promise(function (callBack) {
//     var get = new XMLHttpRequest();
//     get.open("get", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
//     get.send();
//     get.addEventListener("loadend", function () {
//       if (get.status == "200") {
//         console.log(`pizza`);
//         allEats = JSON.parse(get.response).recipes;

//         console.log(allEats);
//         callBack();
//       } else {
//         console.log(`eroor`);
//       }
//     });
//   });
// }

// function GetSalad() {
//   return new Promise(function (y) {
//     var get = new XMLHttpRequest();
//     get.open("get", `https://forkify-api.herokuapp.com/api/search?q=salad`);
//     get.send();
//     get.addEventListener("loadend", function () {
//       if (get.status == "200") {
//         console.log(`salad`);
//         allEats = JSON.parse(get.response).recipes;
//         console.log(allEats);
//         y();
//       } else {
//         console.log(`eroor`);
//       }
//     });
//   });
// }
// function undMenu() {
//   console.log("end yara2y2");
// }
// (async function () {

//     await GetPizza()
//     await GetSalad()
//        undMenu()

// // })()
// (async  function (){
//   var response = await fetch(
//     `https://forkify-api.herokuapp.com/api/search?q=salad`
//   );
//   var real = await response.json();
//   console.log(real.recipes);
// })

//  var nn=  setInterval(function () {

//   console.log("hallo");

// },500)

// setTimeout(function () {

//   clearInterval(nn)

// } ,2000)

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// (async function () {
//   let response = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=a11d7636586f47a491c122448240601&q=london07112&days=3`
//   );
//   if (response.ok && 400 != response.status) {
//    let finalresalt = await response.json();

//    haloo( finalresalt)
// }
// })();

// function haloo( dd) {

//     document.querySelector(".iconfirstda").innerHTML=`<img  class="ps-4 " src="http:${dd.current.condition.icon}" alt="">`
// }

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector("input").addEventListener(`keyup`, function (e) {
  getAbi(e.target.value);
  
});

function getAbi(ahmed) {
  if (ahmed ==  null) {
    ahmed = "cairo";
  }
  var topHeading = new XMLHttpRequest();
  topHeading.open(
    "get",
    `https://api.weatherapi.com/v1/forecast.json?key=a11d7636586f47a491c122448240601&q=${ahmed}07112&days=3`
  );
  topHeading.send();
  topHeading.addEventListener(`readystatechange`, function () {
    if ((topHeading.readyState == 4) & (topHeading.status == 200)) {
      var allNews = JSON.parse(topHeading.response);
      display(allNews);
    }
  });
}

getAbi();

function display(x) {
  document.querySelector(
    ".iconfirstday"
  ).innerHTML = `<img  class="p-3 " src="http:${x.current.condition.icon}" alt="">`;
  document.querySelector(
    ".tembrecher"
  ).innerHTML = `${x.current.temp_c}<sup>o</sup>c`;
  document.querySelector(".city").innerHTML = ` ${x.location.name}`;
  document.querySelector(
    ".desweather"
  ).innerHTML = `${x.current.condition.text}`;
  document.querySelector(".datefirstday").innerHTML = `${
    date + monthNames[month]
  }`;
  document.querySelector(".namefirstday").innerHTML = `${days[day]}`;
  // 0000000000000000000000000000000000000000000000
  document.querySelector(".dayscound").innerHTML = `${days[day + 1]}`;
  document.querySelector(
    ".iconscoundday"
  ).innerHTML = `<img  class=" " src="http:${x.forecast.forecastday[1].day.condition.icon}" alt="">`;
  document.querySelector(
    ".tembrechertwo"
  ).innerHTML = `${x.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>c`;
  document.querySelector(
    ".desweatherdaytwo"
  ).innerHTML = `${x.forecast.forecastday[1].day.condition.text}`;
  document.querySelector(
    ".lawTem"
  ).innerHTML = `${x.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>`;

  // 00000000000000000000000000000000000000000000000000000000000000000000000000
  document.querySelector(".daytherty").innerHTML = `${days[day + 2]}`;
  document.querySelector(
    ".iconthertyday"
  ).innerHTML = `<img  class=" " src="http:${x.forecast.forecastday[2].day.condition.icon}" alt="">`;
  document.querySelector(
    ".tembrechertherty"
  ).innerHTML = `${x.forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>c`;
  document.querySelector(
    ".desweatherdaytherty"
  ).innerHTML = `${x.forecast.forecastday[2].day.condition.text}`;
  document.querySelector(
    ".maiTem"
  ).innerHTML = `${x.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>`;
}
var myDate = new Date();
month = myDate.getMonth();
date = myDate.getDate();
day = myDate.getDay();
