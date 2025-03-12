document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("html img");
  const loadingScreen = document.querySelector(".loading");
  const homePage = document.querySelector(".wrapper");
  const categoryContainer = document.querySelector(".menu-container");
  const menuContainer = document.querySelector(".meals-container");
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  const header = document.querySelector(".header");

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

  let categories = [
    { name: "Salads", img: "./foods/61.webp" },
    { name: "Soups", img: "./foods/62.webp" },
    { name: "Grill", img: "./foods/63.webp" },
  ];

  let data = [
    { id: 1, img: "./foods/61.webp", name: "Lentil Soup", category: "Soups" },
    { id: 2, img: "./foods/62.webp", name: "Tomato Soup", category: "Soups" },
    { id: 3, img: "./foods/63.webp", name: "Caesar Salad", category: "Salads" },
    { id: 4, img: "./foods/64.webp", name: "Greek Salad", category: "Salads" },
    { id: 6, img: "./foods/66.webp", name: "Beef Steak", category: "Grill" },
  ];

  const closeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" width="24" height="24" viewBox="0 0 122.878 122.88" fill="#ffffff" enable-background="new 0 0 122.878 122.88" xml:space="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"/></g></svg>';

  menuBtn.addEventListener("click", () => {
    menuBtn.innerHTML = menu.classList.contains("open") ? "Menu" : closeIcon;
    if (
      menu.classList.contains("open") &&
      header.classList.contains("active")
    ) {
      header.classList.remove("active");
      menu.classList.remove("open");
      showCategories();
    } else {
      header.classList.add("active");
      menu.classList.add("open");

      showCategories();

      menuContainer.innerHTML = "";
    }
  });

  let imgDivs = categories
    .map((item) => {
      return `
  <div class="menu-item">
    <div class='menu-img'>
      <img src="${item.img}" alt="${item.name}" />
      </div>
      <p class="menu-name">${item.name}</p>
  </div>
`;
    })
    .join("");

  categoryContainer.innerHTML = imgDivs;
  categoryContainer.addEventListener("click", (event) => {
    const button = event.target.closest(".menu-item_btn");
    if (button) {
      const itemId = button.getAttribute("data-id");
      const selectedItem = data.find((item) => item.id == itemId);
      if (selectedItem) {
        handleOpen(selectedItem);
      }
    }
  });

  function showCategories() {
    categoryContainer.style.display = "grid";
    categoryContainer.innerHTML = categories
      .map(
        (item) => `
       <div class="category-item" data-category="${item.name}">
    <div class='category-img'>
      <img src="${item.img}" alt="${item.name}" />
      </div>
      <p class="category-name">${item.name}</p>
  </div>
    `
      )
      .join("");

    // Show category section
    menuContainer.innerHTML = ""; // Clear meals

    // Click event for each category
    document.querySelectorAll(".category-item").forEach((item) => {
      item.addEventListener("click", function () {
        const selectedCategory = this.getAttribute("data-category");
        showMeals(selectedCategory);
      });
    });
  }

  menuContainer.addEventListener("click", (event) => {
    const button = event.target.closest(".meal-img");
    if (button) {
      const itemId = button.getAttribute("data-id");
      const selectedItem = data.find((item) => item.id == itemId);
      if (selectedItem) {
        handleOpen(selectedItem);
      }
    }
  });

  function handleOpen(item) {
    const modal = document.querySelector(".modal");
    modal.classList.add("active");
    let modalContent = `
  <div class="modal-bg"></div>
  <div class="modal-content">
    <div class="modal-img">
      <button class="modal-close"> ${closeIcon}</button>
      <img src="${item.img}" alt="${item.name}" />
    </div>
    <div class="modal-text">
      <h2 class="modal-name">${item.name}</h2>
      <ul class="modal-ingredients">
        <li> 50 граммов красной чечевицы </li>
        <li>20 граммов лука</li>
        <li>12.5 граммов картофеля</li>
        <li>I25 граммов моркови</li>
        <li>0.34 столовой ложки томатной пасты</li>
        <li>0.34 зубчика чеснока</li>
        <li>0.17,5 литра воды</li>
        <li>16.67 миллилитров растительного масла</li>
        <li>по вкусу соли и перца</li>
        <li>по вкусу паприки</li>
      </ul>
    </div>
  </div>
`;
    modal.innerHTML = modalContent;

    modal.querySelector(".modal-close").addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.querySelector(".modal-bg").addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  function showMeals(category) {
    const filteredMeals = data.filter((item) => item.category === category);

    categoryContainer.style.display = "none";

    menuContainer.innerHTML = `
    <div class="meal-head">
    <h3 class="meal-title">${category}</h3>
    <button class="back-btn">Back</button>
    </div>
      ${filteredMeals
        .map(
          (item) => `
      <div class="meal-item">
          <div class='meal-img' data-id="${item.id}">
      <img src="${item.img}" alt="${item.name}" />
   
    </div>
        <p class="meal-name">${item.name}</p>
      </div>
    `
        )
        .join("")}
    `;

    document
      .querySelector(".back-btn")
      .addEventListener("click", showCategories);
  }

  showCategories();
});
