let data = [
  { id: 1, image: "./foods/61.jpg" },
  { id: 1, image: "./foods/62.jpg" },
  { id: 1, image: "./foods/63.jpg" },
  { id: 1, image: "./foods/64.jpg" },
  { id: 1, image: "./foods/65.jpg" },
  { id: 1, image: "./foods/66.jpg" },
  { id: 1, image: "./foods/67.jpg" },
  { id: 1, image: "./foods/68.jpg" },
  { id: 1, image: "./foods/70.jpg" },
  { id: 1, image: "./foods/71.jpg" },
  { id: 1, image: "./foods/72.jpg" },
  { id: 1, image: "./foods/73.jpg" },
  { id: 1, image: "./foods/74.jpg" },
];

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-container");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("active");
});

// Rasm divlarini yaratish va qo‘shish
let imgDivs = data
  .map(({ image }) => {
    return `<div class='menu-img'>
      <img src="${image}" alt="Food Image" />
    </div>`;
  })
  .join(""); // String qilib birlashtiramiz

menuContainer.innerHTML = imgDivs;
