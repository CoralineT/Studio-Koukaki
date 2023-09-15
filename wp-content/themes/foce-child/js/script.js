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
const logo = document.getElementById("logo-parallax");
const offsetlogo = logo.offsetHeight / 2;
console.log(offsetlogo /2);
const section = document.getElementsByClassName("banner");
const offsetSection = section[0].offsetTop;
console.log(offsetSection);
//logo.offsetParent.offsetTop

document.addEventListener('scroll', onScroll);

function onScroll() {
    const screenY = window.scrollY;
    const logoY = offsetTopFunction(logo) - offsetlogo;
    const diffY = logoY - screenY;
    console.log(diffY * -1)

    if(screenY < offsetSection + offsetlogo /2) {
        logo.style.setProperty("transform", `translateY(${diffY * -1}px)`);
    }
}

/**
 * Calcul de la position de l'élément par rapport au haut de la page
 * @param {HTMLElement} element 
 * @return {number}
 */
function offsetTopFunction(element, acc = 0) {
    if (element.offsetParent) {
        return offsetTopFunction(element.offsetParent, acc + element.offsetTop);
    }
    return acc + element.offsetTop;
}



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
const iconeOpenButton = document.getElementById("burger-icon");
console.log(iconeOpenButton.style);

openButton.onclick = openNav;
closeButton.onclick = closeNav;

function openNav() {
   navBurger.classList.add("active");
   iconeOpenButton.style.display = "none";
}

function closeNav() {
   navBurger.classList.remove("active");
}

document.querySelectorAll(".link-burger").forEach(n => n.addEventListener("click", () => {
   navBurger.classList.remove("active");
 }));
