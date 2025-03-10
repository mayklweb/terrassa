let data = [
  { id: 1, image: "./foods/61.webp", name: "Chechivichniy sup" },
  { id: 1, image: "./foods/62.webp", name: "Chechivichniy sup" },
  { id: 1, image: "./foods/63.webp", name: "Chechivichniy sup" },
  { id: 1, image: "./foods/64.webp", name: "" },
  { id: 1, image: "./foods/65.webp", name: "" },
  { id: 1, image: "./foods/66.webp", name: "" },
  { id: 1, image: "./foods/67.webp", name: "" },
  { id: 1, image: "./foods/68.webp", name: "" },
  { id: 1, image: "./foods/70.webp", name: "" },
  { id: 1, image: "./foods/71.webp", name: "" },
  { id: 1, image: "./foods/72.webp", name: "" },
  { id: 1, image: "./foods/73.webp", name: "" },
  { id: 1, image: "./foods/74.webp", name: "" },
];

const closeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" width="24" height="24" viewBox="0 0 122.878 122.88" fill="#ffffff" enable-background="new 0 0 122.878 122.88" xml:space="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"/></g></svg>';
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-container");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  menuBtn.innerHTML = menu.classList.contains("open") ? "Menu" : closeIcon;
  menu.classList.toggle("open");
  header.classList.toggle("active");
});

// Rasm divlarini yaratish va qo‘shish
let imgDivs = data
  .map(({ image, name }) => {
    return `<div class="menu-item">
    <div class='menu-img'>
      <img loading="lazy" src="${image}" alt="Food Image" />
      </div>
      <p class="menu-name">${name}</p>
    </div>`;
  })
  .join("");
menuContainer.innerHTML = imgDivs;
