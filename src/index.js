import js from './js/main'
import API from './js/api-allCategory'

import axios from "axios"
 

const refBest = document.querySelector('.gallery')
const refBooks = document.querySelector('.books')
const refCategory = document.querySelector('.category')

const URL = {
  all:'https://books-backend.p.goit.global/books/category-list',
  best:'https://books-backend.p.goit.global/books/top-books',
  // books:'https://books-backend.p.goit.global/books/top-books',
}
async function getUrl(obj) { 
  await Object.values(obj).map(el => 
    api(el)
   )

//  return url 
}
getUrl(URL)

async function api(curentUrl) {
 
  try {
    
    return axios.get(curentUrl)
      .then(e => murkup(e.data))
  }
  catch(e){
    console.log(e);
  }
}

async function murkup(api) {

 

  if (!api[0].books) {
    const fetch = await api;
    const markup = await fetch.map(({ list_name }) => {
      return `

<li>${list_name}</li>
`
    }).join('')
    const murkarAllCatrgory = refCategory.insertAdjacentHTML('beforeend', markup)
  }
  else {
    const fetch = await api;
    const markup = await fetch.map(e => Object.values(e)[1].map(({ book_uri, book_image,list_name }) => {
      return `

      
<div class="photo-card">
          <div class="thumb">
          <a href="${book_uri}"><img src="${book_image}" alt="" title="" loading="lazy"/></a> 
          </div>

           <p class="info-item">
            <b>${list_name}</b>
          </p>
          </div>
          </div>

`
    }).join(''))
    const murkarBest = refBest.insertAdjacentHTML('beforeend', markup)
  }
 
}
    





// ====================================================

// const refCategory = document.querySelector('.category')
// // const refGall = document.querySelector('.gallery')
// const URL = {
//   all:'https://books-backend.p.goit.global/books/top-books',
//   best:'',
//   books:'',
// }


// async function api(){
//   try{
//     return axios.get('https://books-backend.p.goit.global/books/top-books')
//   .then(e=>e.data)
//   }

//   catch(e){
//     console.log(e);
//   }
//   console.log(e.data);
//   return e.data
// }

// async function murkup(api) {
//    const fetch = await api;
// console.log(await api);
// const markup = await fetch.map( ({list_name})=>{
//     return `

// <li>${list_name}</li>
// `

// }).join('')
// const murkarAllCatrgory = refCategory.insertAdjacentHTML('beforeend',markup)
// }
// murkup(api())

















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