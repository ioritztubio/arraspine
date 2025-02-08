document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("languageSelector");

  // Cargar idioma del localStorage o predeterminado
  let currentLanguage = localStorage.getItem("language") || "eu";

  // Establecer el idioma en el selector
  languageSelector.value = currentLanguage;

  // Cambiar el idioma cuando se selecciona una opción
  languageSelector.addEventListener("change", (event) => {
    currentLanguage = event.target.value;
    localStorage.setItem("language", currentLanguage);
    loadContent(currentLanguage);
  });

  // Cargar el contenido en el idioma seleccionado
  loadContent(currentLanguage);
});

async function loadContent(language) {
  const data = await fetch("/data/translations.json").then((response) =>
    response.json()
  );

  // Cargar la información de la habitación
  let roomData;
  const roomId = window.location.search.split("id=")[1];
  if (roomId === "apartment") {
    roomData = data.rooms.apartment;
  } else {
    roomData = data.rooms.rooms.find((room) => room.id == roomId) || {};
  }
  document.getElementById("titulo").innerText = roomData.title[language];
  document.getElementById("descripcion").innerText =
    roomData.description[language];

  // Servicios incluidos

  const servicesData = data.rooms.services[0];
  document.getElementById("incluido").innerText =
    servicesData.includes[language];
  document.getElementById("wifi").innerText = servicesData.wifi[language];
  document.getElementById("bano").innerText = servicesData.bano[language];
  document.getElementById("aire").innerText =
    servicesData.acondicionado[language];
  document.getElementById("parking").innerText = servicesData.parking[language];

  // Servicios extra
  const extraServicesData = data.rooms.services[1];
  document.getElementById("extra").innerText =
    extraServicesData.extra[language];
  document.getElementById("desayuno").innerText =
    extraServicesData.desayuno[language];
  document.getElementById("ropa").innerText = extraServicesData.ropa[language];

}
