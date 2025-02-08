document.addEventListener("DOMContentLoaded", () => {
  //load translations

  const languageSelector = document.querySelector("#languageSelector");

  const savedLanguage = localStorage.getItem("language");

  if (savedLanguage) {
    languageSelector.value = savedLanguage;
  } else {
    languageSelector.value = "eu";
  }

  setLanguage(languageSelector.value);
  languageSelector.addEventListener("change", (event) => {
    localStorage.setItem("language", event.target.value);
    setLanguage(event.target.value);
  });
});

setLanguage = (language) => {
  translateSections(language);
};

async function loadTranslations() {
  const response = await fetch("/data/translations.json");
  const translations = await response.json();
  return translations;
}

async function translateSections(selectedLanguage) {
  const data = await loadTranslations();

  document.getElementById("contact__reserve-now").innerHTML =
    data.contact.rnow[selectedLanguage];

  //Footer section
  document.querySelectorAll(".footer__description").forEach((element) => {
    element.innerHTML = data.footer.description[selectedLanguage];
  });

  document.querySelectorAll(".footer__social-media").forEach((element) => {
    element.innerHTML = data.footer.social[selectedLanguage];
  });

  //Creator
  document.querySelectorAll(".creator").forEach((element) => {
    element.innerHTML =
      "&#169;" +
      new Date().getFullYear() +
      " " +
      data.creator[selectedLanguage] +
      "<a href='https://www.linkedin.com/in/ioritztubio' target='_blank'>Ioritz Tubio</a>";
  });

  //Terms
  document.querySelectorAll(".terms").forEach((element) => {
    element.innerHTML = data.terms[selectedLanguage];
  });

  //Privacy
  document.querySelectorAll(".privacy").forEach((element) => {
    element.innerHTML = data.privacy[selectedLanguage];
  });

  if (window.location.href.includes("room.html")) {
    // Code to execute if the URL contains "room.html"
    return;
  } else {
    //Header section
    document.getElementById("trans__home").innerHTML =
      data.header.home[selectedLanguage];
    document.getElementById("trans__rooms").innerHTML =
      data.header.rooms[selectedLanguage];
    document.getElementById("trans__value").innerHTML =
      data.header.values[selectedLanguage];
    document.getElementById("trans__contact").innerHTML =
      data.header.contact[selectedLanguage];
    document.getElementById("trans__gallery").innerHTML =
      data.gallery.title[selectedLanguage];
    document.getElementById("trans__reserve").innerHTML =
      data.header.reserve[selectedLanguage];

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

    document.getElementById("rooms__title").innerHTML =
      data.rooms.title[selectedLanguage];
    document.getElementById("rooms__description").innerHTML =
      data.rooms.description[selectedLanguage];
    const container = document.querySelector(".swiper-wrapper");

    container.innerHTML = "";

    data.rooms.rooms.forEach((room) => {
      const article = document.createElement("article");
      article.className = "bedroom__card swiper-slide";
      article.id = room.id;

      article.innerHTML = `
  <img src="${room.img[0]}" alt="${room.title[selectedLanguage]}" class="bedroom__img" />
  <div class="bedroom__data">
    <h2 class="bedroom__price">${room.price.low_season} <span>€<span></h2>
    <h3 class="bedroom__title">${room.title[selectedLanguage]}</h3>
    <p class="bedroom__description">${room.description[selectedLanguage]}</p>
  </div>
`;

      article.addEventListener("click", () => {
        const bedroomId = article.getAttribute("id");
        window.location.href = `room.html?id=${bedroomId}`;
      });
      container.appendChild(article);
    });

    // Apartment section
    const article = document.createElement("article");
    article.className = "bedroom__card swiper-slide";
    article.id = "apartment";
    article.innerHTML = `
  <img src="${data.rooms.apartment.img[0]}" alt="${data.rooms.apartment.title[selectedLanguage]}" class="bedroom__img" />
  <div class="bedroom__data">
    <h2 class="bedroom__price">${data.rooms.apartment.price.high_season} <span>€<span></h2>
    <h3 class="bedroom__title">${data.rooms.apartment.title[selectedLanguage]}</h3>
    <p class="bedroom__description">${data.rooms.apartment.description[selectedLanguage]}</p>
  </div>
`;

    article.addEventListener("click", () => {
      window.location.href = `room.html?id=${"apartment"}`;
    });

    container.appendChild(article);

    //Values section
    document.getElementById("values__title").innerHTML =
      data.values.title[selectedLanguage];
    document.getElementById("values__subtitle").innerHTML =
      data.values.subtitle[selectedLanguage];
    document.getElementById("values__description").innerHTML =
      data.values.description[selectedLanguage];
    document.getElementById("value__accordion-title1").innerHTML =
      data.values.accordion[0].title[selectedLanguage];
    document.getElementById("value__accordion-description1").innerHTML =
      data.values.accordion[0].description[selectedLanguage];
    document.getElementById("value__accordion-title2").innerHTML =
      data.values.accordion[1].title[selectedLanguage];
    document.getElementById("value__accordion-description2").innerHTML =
      data.values.accordion[1].description[selectedLanguage];
    document.getElementById("value__accordion-title3").innerHTML =
      data.values.accordion[2].title[selectedLanguage];
    document.getElementById("value__accordion-description3").innerHTML =
      data.values.accordion[2].description[selectedLanguage];
    document.getElementById("value__accordion-title4").innerHTML =
      data.values.accordion[3].title[selectedLanguage];
    document.getElementById("value__accordion-description4").innerHTML =
      data.values.accordion[3].description[selectedLanguage];
    document.getElementById("value__accordion-title5").innerHTML =
      data.values.accordion[4].title[selectedLanguage];
    document.getElementById("value__accordion-description5").innerHTML =
      data.values.accordion[4].description[selectedLanguage];
    document.getElementById("value__accordion-title6").innerHTML =
      data.values.accordion[5].title[selectedLanguage];
    document.getElementById("value__accordion-description6").innerHTML =
      data.values.accordion[5].description[selectedLanguage];

    //Gallery
    document.getElementById("gallery__title").innerHTML =
      data.gallery.title[selectedLanguage];
    document.getElementById("gallery__description").innerHTML =
      data.gallery.description[selectedLanguage];

    //Load gallery images
    const gw = document.querySelector(".gallery__wrapper");
    const imageFolder = "assets/img/gallery/";

    // Lista de imágenes (tendrás que actualizarla manualmente o generarla dinámicamente en un entorno backend)
    for (let i = 1; i <= 11; i++) {
      const imgElement = document.createElement("img");
      imgElement.src = `${imageFolder}${i}.webp`;
      imgElement.alt = `Imagen ${i}`;
      gw.appendChild(imgElement);
    }

    //Contact section
    document.getElementById("contact__title").innerHTML =
      data.contact.title[selectedLanguage];
    document.getElementById("contact__subtitle").innerHTML =
      data.contact.subtitle[selectedLanguage];
    document.getElementById("contact__description").innerHTML =
      data.contact.description[selectedLanguage];
    document.querySelectorAll(".trans__contact__call").forEach((element) => {
      element.innerHTML = data.contact.call[selectedLanguage];
    });

    document
      .querySelectorAll(".trans__contact__call-now")
      .forEach((element) => {
        element.innerHTML = data.contact.cnow[selectedLanguage];
      });
    document.getElementById("contact__chat").innerHTML =
      data.contact.chat[selectedLanguage];
    document.getElementById("contact__chat-now").innerHTML =
      data.contact.chnow[selectedLanguage];
    document.getElementById("contact__reserve").innerHTML =
      data.contact.reserve[selectedLanguage];
  }
}
