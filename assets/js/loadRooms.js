// Función para cargar y procesar el JSON
console.log('Cargando habitaciones...');
async function loadRooms() {
    try {
      const response = await fetch('/rooms.json');
      if (!response.ok) {
        throw new Error('Error loading JSON: ' + response.statusText);
      }
  
      const data = await response.json();
      console.log('Habitaciones cargadas:', data);
      // Contenedor donde se añadirán las habitaciones
      const container = document.querySelector('.swiper-wrapper');
  
      // Idioma actual (puedes modificar esto dinámicamente)
      const currentLanguage = 'en'; // Cambia por 'en', 'eu', 'fr' según el idioma activo
  
      // Generar HTML dinámico
      data.rooms.forEach((room) => {
        console.log('room:', room);
        const article = document.createElement('article');
        article.className = 'bedroom__card swiper-slide';
        article.id = room.id;
  
        article.innerHTML = `
          <img src="${room.img[0]}" alt="${room.title[currentLanguage]}" class="bedroom__img" />
          <div class="bedroom__data">
            <h2 class="bedroom__price">${room.price.high_season} <span>€<span></h2>
            <h3 class="bedroom__title">${room.title[currentLanguage]}</h3>
            <p class="bedroom__description">${room.description[currentLanguage]}</p>
          </div>
        `;
  
        container.appendChild(article);
      });

      
      data.apartment.forEach((apartment) => {
        console.log('apartment:', apartment);
        const article = document.createElement('article');
        article.className = 'bedroom__card swiper-slide';
        article.id = apartment.id;
  
        article.innerHTML = `
          <img src="${apartment.img[0]}" alt="${apartment.title[currentLanguage]}" class="bedroom__img" />
          <div class="bedroom__data">
            <h2 class="bedroom__price">${apartment.price.high_season} <span>€<span></h2>
            <h3 class="bedroom__title">${apartment.title[currentLanguage]}</h3>
            <p class="bedroom__description">${apartment.description[currentLanguage]}</p>
          </div>
        `;
  
        container.appendChild(article);
      }
      );
    } catch (error) {
      console.error('Error loading rooms:', error);
    }
  }
  
  // Ejecutar la función al cargar la página
  document.addEventListener('DOMContentLoaded', loadRooms);
  