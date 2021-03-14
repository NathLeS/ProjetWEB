
/* ################################################################################### */
/* ------------------------- Animation de changement de page ------------------------- */
/* ################################################################################### */

function delay(n) {            // Permet d'ajouter un délai aux animations
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

/* -------------------- Détail des animations -------------------- */

function pageTransition() {         // Animation du changement de page
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 0.8,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {       // Animation du contenu de la page
    var tl = gsap.timeline();
    tl.from(".animateThis", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

/* -------------------- Assemblage des animations -------------------- */

$(function () {         // Utilisation du plugin barba.js
    barba.init({
        sync: true,
        transitions: [{
                async leave(data) {
                    const done = this.async();
                    pageTransition();
                    await delay(1000);
                    done();
                },
                async enter(data) {
                    contentAnimation();
                },
                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

/* ################################################################################# */
/* ------------------------- Animation ouverture des menus ------------------------- */
/* ################################################################################# */

/* -------------------- Menu de navigation -------------------- */

document.querySelector('.burger').addEventListener("click", function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navBtn');
    const navBtn = document.querySelectorAll('.navBtn li');

    nav.classList.toggle('navOpen');       // Ouverture du menu
        
    navBtn.forEach((link, index)=> {       // Fondu des boutons    
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navBtnFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    burger.classList.toggle('toggle');      // Animation burger
})

/* -------------------- Menu utilisateur -------------------- */

document.querySelector('.userBtn').addEventListener("click", function() {
    const toggleMenu = document.querySelector('.userMenu');
    toggleMenu.classList.toggle('userMenuOpen');
})