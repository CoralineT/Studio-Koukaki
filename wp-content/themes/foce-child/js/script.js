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

document.addEventListener('scroll', onScroll);

function onScroll() {
    const screenY = window.scrollY;
    const logoY = offsetTopFunction(logo) - offsetlogo;
    const diffY = logoY - screenY;

    if(screenY < logo.offsetParent.offsetTop + offsetlogo /2) {
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

    bigCloud.style.setProperty("transform", `translateX(${screenY + -300}px)`);
    littleCloud.style.setProperty("transform", `translateX(${screenY + -300}px)`);
    
})
