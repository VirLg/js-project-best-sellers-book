import js from './js/main'
import API from './js/api-allCategory'

import axios from "axios"
 

const refGall = document.querySelector('.gallery')
const refBooks = document.querySelector('.books')
const refCategory = document.querySelector('.category')

const URL = {
  all:'https://books-backend.p.goit.global/books/category-list',
  best:'',
  books:'',
}

async function api(){
  try{
    return axios.get(`${URL.all}`)
  .then(e=>e.data)
  }

  catch(e){
    console.log(e);
  }

  return e.data
}

async function murkup(api) {
    const fetch = await api;
    console.log(fetch);

  
    const markup = await fetch.map( ({list_name})=>{
    return `
<ul>
<li>${list_name}</li>
</ul>`

}).join('')
const murkarAllCatrgory = refCategory.insertAdjacentHTML('beforeend',markup)
}

murkup(api())
























// class AllCategory { 
// BEST_URL  ='https://books-backend.p.goit.global/books/category-list'
//     constructor(BEST_URL) { 
// this.BEST_URL  ='https://books-backend.p.goit.global/books/category-list'

//     }

//     async getAllCategory() { 
//         try {
//             await axios.get(this.BEST_URL).then(resp => resp.data)
//         }
//         catch (e) { 
//             console.log(e);
//         }
//     }
// }
// const allCategory = new AllCategory
// // console.log(allCategory);

// async function murkup() {
// const fetch = await axios.get(allCategory.getAllCategory()).then(r=>r)

// console.log(fetch);

  
// const markup = await fetch.map( ({list_name, books})=>{
//     return `
// <ul>
// <li>${list_name}</li>
// <li>${books}</li>
// </ul>`

// }).join('')
// const murkarAllCatrgory = refGall.insertAdjacentHTML('beforebegin',markup)
// }

// murkup(api)

// const allFetch = new AllCategory.getAllCategory()
// console.log(allFetch.getAllCategory);
// console.log(allFetch);