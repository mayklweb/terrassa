document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("html img");
  const loadingScreen = document.querySelector(".loading");
  const homePage = document.querySelector(".wrapper");

  let loadedImages = 0;

  images.forEach((img) => {
    const tempImg = new Image();
    tempImg.src = img.src;
    tempImg.onload = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        loadingScreen.style.display = "none";
        homePage.classList.remove("hidden");
      }
    };
  });

  let data = [
    { id: 1, img: "./foods/61.webp", name: "Lentil soup" },
    { id: 1, img: "./foods/62.webp", name: "Tschetschenisch-Suppe" },
    { id: 1, img: "./foods/63.webp", name: "Чечивичний суп" },
    { id: 1, img: "./foods/64.webp", name: "" },
    { id: 1, img: "./foods/65.webp", name: "" },
    { id: 1, img: "./foods/66.webp", name: "" },
    { id: 1, img: "./foods/67.webp", name: "" },
    { id: 1, img: "./foods/68.webp", name: "" },
    { id: 1, img: "./foods/70.webp", name: "" },
    { id: 1, img: "./foods/71.webp", name: "" },
    { id: 1, img: "./foods/72.webp", name: "" },
    { id: 1, img: "./foods/73.webp", name: "" },
    { id: 1, img: "./foods/74.webp", name: "" },
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

  // **Rasm divlarini yaratish va qo‘shish**
  let imgDivs = data
    .map((item) => {
      return `
      <div class="menu-item">
        <div class='menu-img'>
          <img src="${item.img}" alt="${item.name}" />
          <button class="menu-item_btn" data-id="${item.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        <p class="menu-name">${item.name}</p>
      </div>
    `;
    })
    .join("");

  menuContainer.innerHTML = imgDivs;

  // **Tugmalarni eshitish va `item` ni olish**
  menuContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("menu-item_btn")) {
      const itemId = event.target.getAttribute("data-id");

      // **data massiv ichidan itemni topish**
      const selectedItem = data.find((item) => item.id == itemId);

      if (selectedItem) {
        handleOpen(selectedItem);
      }
    }
  });

  // **handleOpen funksiyasi**
  function handleOpen(item) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
  <div class="modal">
    <div class="modal-bg">
    </div>
   <div class="modal-content">
      <div class="modal-img">
        <button class="modal-close">${closeIcon}</button>
        <img src="${item.img}" alt="${item.name}" />
      </div>
      <div class="modal-text">
        <h2 class="modal-name">${item.name}</h2>
        <ul class="modal-ingredients">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
          <li>Ingredient 4</li>
          <li>Ingredient 5</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  `;

    homePage.appendChild(modal);

    // **modalni yopish**
    const modalClose = modal.querySelector(".modal-close");
    modalClose.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }
});
