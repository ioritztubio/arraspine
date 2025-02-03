document.addEventListener("DOMContentLoaded", () => {

  // Obtener el selectedLanguage del localStorage
  let selectedLanguage = localStorage.getItem("language") || "eu" // selectedLanguage por defecto: español

  translateSections(selectedLanguage); // Cargar el selectedLanguage al cargar la página
});

// Función para cargar el selectedLanguage
async function loadTranslations() {
  const response = await fetch("data/terms.json");
  const translations = await response.json();
  return translations;
}

async function translateSections(selectedLanguage) {
  const data = await loadTranslations();

  textos = data[selectedLanguage]; // Asignamos los textos del selectedLanguage actual
  const elementos = {}; 
  // Obtener todos los elementos que necesitan traducción
  elementos.titulo = document.querySelector("#titulo");
  elementos.bienvenida = document.getElementById("bienvenida");
  elementos.reservas = document.getElementById("reservas");
  elementos.reservas_lista_1 = document.getElementById("reservas_lista_1");
  elementos.reservas_lista_2 = document.getElementById("reservas_lista_2");
  elementos.reservas_lista_3 = document.getElementById("reservas_lista_3");
  elementos.reservas_lista_4 = document.getElementById("reservas_lista_4");
  elementos.estancia = document.getElementById("estancia");
  elementos.estancia_lista_1 = document.getElementById("estancia_lista_1");
  elementos.estancia_lista_2 = document.getElementById("estancia_lista_2");
  elementos.estancia_lista_3 = document.getElementById("estancia_lista_3");
  elementos.estancia_lista_4 = document.getElementById("estancia_lista_4");
  elementos.pagos = document.getElementById("pagos");
  elementos.pagos_lista_1 = document.getElementById("pagos_lista_1");
  elementos.pagos_lista_2 = document.getElementById("pagos_lista_2");
  elementos.pagos_lista_3 = document.getElementById("pagos_lista_3");
  elementos.privacidad_titulo = document.getElementById("privacidad_titulo");
  elementos.privacidad_parrafo_1 = document.getElementById(
    "privacidad_parrafo_1"
  );
  elementos.privacidad_lista_1 = document.getElementById("privacidad_lista_1");
  elementos.privacidad_lista_2 = document.getElementById("privacidad_lista_2");
  elementos.privacidad_contacto = document.getElementById(
    "privacidad_contacto"
  );
  elementos.privacidad_parrafo_2 = document.getElementById(
    "privacidad_parrafo_2"
  );
  elementos.privacidad_parrafo_3 = document.getElementById(
    "privacidad_parrafo_3"
  );
  elementos.privacidad_parrafo_4 = document.getElementById(
    "privacidad_parrafo_4"
  );

  // Traducir el texto de los elementos
  elementos.titulo.textContent = textos.titulo;
  elementos.bienvenida.textContent = textos.bienvenida;
  elementos.reservas.textContent = textos.reservas;
  elementos.reservas_lista_1.textContent = textos.reservas_lista_1;
  elementos.reservas_lista_2.textContent = textos.reservas_lista_2;
  elementos.reservas_lista_3.textContent = textos.reservas_lista_3;
  elementos.reservas_lista_4.textContent = textos.reservas_lista_4;
  elementos.estancia.textContent = textos.estancia;
  elementos.estancia_lista_1.textContent = textos.estancia_lista_1;
  elementos.estancia_lista_2.textContent = textos.estancia_lista_2;
  elementos.estancia_lista_3.textContent = textos.estancia_lista_3;
  elementos.estancia_lista_4.textContent = textos.estancia_lista_4;
  elementos.pagos.textContent = textos.pagos;
  elementos.pagos_lista_1.textContent = textos.pagos_lista_1;
  elementos.pagos_lista_2.textContent = textos.pagos_lista_2;
  elementos.pagos_lista_3.textContent = textos.pagos_lista_3;
  elementos.privacidad_titulo.textContent = textos.privacidad_titulo;
  elementos.privacidad_parrafo_1.innerHTML = textos.privacidad_parrafo_1;
  elementos.privacidad_lista_1.textContent = textos.privacidad_lista_1;
  elementos.privacidad_lista_2.textContent = textos.privacidad_lista_2;
  elementos.privacidad_contacto.textContent = textos.privacidad_contacto;
  elementos.privacidad_parrafo_2.textContent = textos.privacidad_parrafo_2;
  elementos.privacidad_parrafo_3.textContent = textos.privacidad_parrafo_3;
  elementos.privacidad_parrafo_4.textContent = textos.privacidad_parrafo_4;
}
