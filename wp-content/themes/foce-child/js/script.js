
//effet d'apparition des titres
const titles = document.getElementsByTagName('span')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active')
        } else {
        entry.target.classList.remove('active')
        } 
    })
});

for (let i = 0; i < titles.length; i++) {
const title = titles[i];
observer.observe(title)
}


 // parallaxe video/logo
let parallax = document.querySelector("#logo-parallax");
let imageP = document.querySelector("#logo-banner");

window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  if ( offset < parallax.offsetParent.offsetTop + parallax.offsetTop) {
  parallax.style.transform = "translateY(" + offset * 0.7 + "px)";
  }
});


// Caroussel Swiper

let swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 3000,
      },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  })
  


// Parallaxe nuages
const bigCloud = document.getElementById("grand-nuage")
const littleCloud = document.getElementById("petit-nuage")


window.addEventListener('scroll', () => {
    const screenY = window.scrollY /2;

    bigCloud.style.setProperty("transform", `translateX(${screenY + 300}px)`);
    littleCloud.style.setProperty("transform", `translateX(${screenY + 300}px)`);
    
})



// MENU BURGER

const navBurger = document.getElementById("nav-burger");
const openButton = document.getElementById("button-open");
const closeButton = document.getElementById("button-close");

openButton.onclick = openNav;
closeButton.onclick = closeNav;

function openNav() {
   navBurger.classList.add("active");
}

function closeNav() {
   navBurger.classList.remove("active");
}

document.querySelectorAll(".link-burger").forEach(n => n.addEventListener("click", () => {
   navBurger.classList.remove("active");
 }));




  //Fleurs qui accélèrent au scroll

  window.addEventListener("scroll", () => {
     root = document.documentElement;
     let vertical = 300;

       if (window.scrollY > vertical) {
         vertical = window.scrollY;
         root.style.setProperty("--rotation", "2s");
       }
      else {
         root.style.setProperty("--rotation", "12s");
       }
  
   });
