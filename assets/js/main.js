/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== SWIPER POPULAR ===============*/
let swiper = new Swiper(".bedroom__container", {
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);

    if(openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
/*=============== BEDROOMS REDIRECT ===============*/
const bedroomItems = document.querySelectorAll(".bedroom__card");

bedroomItems.forEach((item) => {
  item.addEventListener("click", () => {
    const bedroomId = item.getAttribute("id");
    window.location.href = `rooms/${bedroomId}.html?id=${bedroomId}`;
  });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        sectionId = current.getAttribute("id");
    
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
        document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
    });
    }
    window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);







/*=============== SCROLL REVEAL ANIMATION ===============*/
let sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__title, .bedroom__container, .footer__container, #gallery__title, #gallery__description`, {interval: 100})
sr.reveal(`.home__description, .footer__info`, {delay: 500})
sr.reveal(`.home__value`, {delay: 600})
sr.reveal(`.home__images, .gallery__wrapper`, {delay: 800, origin: "bottom"})
sr.reveal(`.value__images, .contact__content`, {interval: 100}, {origin: "left"})
sr.reveal(`.home__social-icon`, {interval: 100, origin: "right"})
sr.reveal(`.value__images, .contact__content`, {origin: "left"})
sr.reveal(`.value__content, .contact__images`, {origin: "right"})
