function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
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

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animateThis", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
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

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navBtn');
    const navBtn = document.querySelectorAll('.navBtn li');
    
    burger.addEventListener('click', ()=> {
        // Ouverture du menu
        nav.classList.toggle('navOpen');
        // Fondu des boutons
        navBtn.forEach((link, index)=> {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navBtnFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Animation burger
        burger.classList.toggle('toggle');
    });
}

navSlide();