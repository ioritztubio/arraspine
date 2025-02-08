document.addEventListener("DOMContentLoaded", () => {
  const roomId = window.location.search.split("id=")[1];
  loadRoom(roomId);
});

let loadRoomData = async () => {
  const response = await fetch("/data/translations.json");
  const data = await response.json();
  return data.rooms.rooms;
};

let loadApartmentData = async () => {
  const response = await fetch("/data/translations.json");
  const data = await response.json();
  return data.rooms.apartment;
};

async function loadRoom(roomId) {

  let data = [];
  let room = {};

  if (roomId === "apartment") {
    data = await loadApartmentData();
    room = data;
  } else {
    data = await loadRoomData();
    room = data.find((room) => room.id == roomId) || {};
  }

  renderRoom(room);
  renderSwiper(room.img); // Llamamos a Swiper para mostrar las imágenes en el slider
}

const renderRoom = (roomData) => {
  const carousel = document.getElementById("room__carousel");

  let inputsHTML = "";
  let slidesHTML = "<ul class='carousel__slides'>";
  let thumbnailsHTML = "<ul class='carousel__thumbnails'>";

  roomData.img.forEach((imgSrc, index) => {
    const slideId = `slide-${index + 1}`;
    const checkedAttr = index === 0 ? "checked='checked'" : "";

    inputsHTML += `<input type="radio" name="slides" id="${slideId}" ${checkedAttr} />`;
    slidesHTML += `
        <li class="carousel__slide">
          <figure>
            <img src="${imgSrc}" alt="Room Image ${index + 1}" />
          </figure>
        </li>
      `;
    thumbnailsHTML += `
        <li>
          <label for="${slideId}">
            <img src="${imgSrc}" alt="Thumbnail ${index + 1}" />
          </label>
        </li>
      `;
  });

  slidesHTML += "</ul>";
  thumbnailsHTML += "</ul>";

  carousel.innerHTML = inputsHTML + slidesHTML + thumbnailsHTML;
};

// Función para renderizar dinámicamente las imágenes en Swiper
const renderSwiper = (images) => {
  const galleryContainer = document.querySelector(".room__swiper .swiper-wrapper");
  galleryContainer.innerHTML = ""; // Limpiar contenido previo

  images.forEach(image => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide", "room__slide");
    slide.style.backgroundImage = `url('${image}')`;
    galleryContainer.appendChild(slide);
  });
};
