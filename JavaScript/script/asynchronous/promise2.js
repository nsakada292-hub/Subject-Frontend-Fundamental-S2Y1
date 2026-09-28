// Using promise with fetching API:

let baseAPIURL = "https://fakestoreapi.com/products";
const fetchAPI = () => {
    return new Promise((resolve,rejected)=>{
        const response = fetch(baseAPIURL);
        response
        .then(data => data.json())           // convert from json to object
        .then(product => resolve(product))
        .catch(error => rejected(error))
    })
}

let cardPro="";

fetchAPI()
.then((result) => {
    result.map(({title, price, desrciption, image, rating, id}) => {
        cardPro +=
        `
        <div class="max-w-md w-full">
        <a href="./async_await.html?proId=${id}">
  <div
    class="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl">
    <div class="relative">
      <div class="absolute opacity-75"></div>
      <img src=${image} alt="Product Image" class="w-full h-64 object-container object-center relative z-10">
      <div
        class="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-3 py-2 rounded-full z-20 transform rotate-12">
        NEW</div>
    </div>
    <div class="p-6">
      <h2 class="text-3xl font-extrabold text-gray-800 mb-2 line-clamp-1">${title}</h2>
      <p class="text-gray-600 mb-4 line-clamp-2">${desrciption}</p>
      <div class="flex items-center justify-between mb-4">
        <span class="text-2xl font-bold text-indigo-600">$${price}</span>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
            fill="currentColor">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span class="ml-1 text-gray-600">${rating.rate} (${rating.count} reviews)</span>
        </div>
      </div>
      <button class="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Add to Cart
      </button>
    </div>
  </div>
  </a>
</div>
        `
    }
);
document.getElementById('cardProduct').innerHTML += cardPro;
})

.catch(error => console.log(error)) 







// let baseAPIURL = "http://localhost:8080/api/user";
 
// const fetchAPI = () => {
//   return new Promise((resolve, reject) => {
//     fetch(baseAPIURL)
//       .then(res => {
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         return res.json();
//       })
//       .then(product => resolve(product))
//       .catch(error => reject(error));
//   });
// };
 
// // let cardPro = "";
 
// fetchAPI()
//   .then(product => console.log(product))
//   .catch(error => console.error(error));