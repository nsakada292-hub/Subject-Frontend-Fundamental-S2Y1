// map , filter, forEach
const profileImages = [
  "../image/image_1.jpg",
  "../image/image_2.jpg",
  "../image/image_3.jpg",
  "../image/image_4.jpg",
  "../image/image_5.jpg",
  "../image/image_6.jpg"
];

// map use to teanh data from arr object
let profileImageCard = "";
let imageResult = profileImages.map((image) => {
  profileImageCard = `
    <img src="${image}" alt="" style="width: 400px; height: 400px;">
  `;
  document.getElementById('profieImageDisplay').innerHTML += profileImageCard;
});

// filter : selects only certain elements that pass a true/false condition
console.log("================================================");
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultNumber = arrayNumbers.filter((num) => num % 2 == 0);
console.log(resultNumber);

// forEach
console.log("================================================");
profileImages.forEach((image) => console.log(image));