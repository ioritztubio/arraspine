document.addEventListener("DOMContentLoaded", () => {
  //load translations

  const languageSelector = document.querySelector("#languageSelector");
  setLanguage(languageSelector.value);
  languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
});

setLanguage = (language) => {
  console.log(language);
  translateSections(language);
};

async function loadTranslations() {
  const response = await fetch("/data/translations.json");
  const translations = await response.json();
  return translations;
}

async function translateSections(selectedLanguage) {
  const data = await loadTranslations();
  console.log(selectedLanguage);

  //Home section
  document.getElementById("trans_title").innerHTML =
    data.home.title[selectedLanguage];
  document.getElementById("trans_home-description").innerHTML =
    data.home.description[selectedLanguage];
  document.getElementById("trans__home-value1").innerHTML =
    data.home.value1[selectedLanguage];
  document.getElementById("trans__home-value2").innerHTML =
    data.home.value2[selectedLanguage];
  document.getElementById("trans__home-value3").innerHTML =
    data.home.value3[selectedLanguage];

  //Rooms section

  const container = document.querySelector(".swiper-wrapper");

  data.rooms.rooms.forEach((room) => {
    console.log('room:', room);
    const article = document.createElement('article');
    article.className = 'bedroom__card swiper-slide';
    article.id = room.id;

    article.innerHTML = `
      <img src="${room.img[0]}" alt="${room.title[selectedLanguage]}" class="bedroom__img" />
      <div class="bedroom__data">
        <h2 class="bedroom__price">${room.price.high_season} <span>€<span></h2>
        <h3 class="bedroom__title">${room.title[selectedLanguage]}</h3>
        <p class="bedroom__description">${room.description[selectedLanguage]}</p>
      </div>
    `;

    container.appendChild(article);
  });


  data.rooms.apartment.forEach((apartment) => {
    console.log('apartment:', apartment);
    const article = document.createElement('article');
    article.className = 'bedroom__card swiper-slide';
    article.id = apartment.id;

    article.innerHTML = `
      <img src="${apartment.img[0]}" alt="${apartment.title[selectedLanguage]}" class="bedroom__img" />
      <div class="bedroom__data">
        <h2 class="bedroom__price">${apartment.price.high_season} <span>€<span></h2>
        <h3 class="bedroom__title">${apartment.title[selectedLanguage]}</h3>
        <p class="bedroom__description">${apartment.description[selectedLanguage]}</p>
      </div>
    `;

    container.appendChild(article);
  }
  );
}
