// import axios from "axios";

// const api = axios.create({
//   baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
// })

// export function getAllDrinks() {
//   console.log('toaqui');
//   axios.get('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(_error => {})
// }

// export async function getAllDrinks() {
//   const URL = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
//   const response = await fetch(URL);
//   const data = await response.json();
//   const { drinks } = data;
//   console.log(drinks);
// }