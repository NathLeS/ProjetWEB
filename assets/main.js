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

/* ################################################################################# */
/* --------------------------------- Onglet Etudiants ------------------------------ */
/* ################################################################################# */

/*---------------------------------- afficher un profil -----------------------------*/

$(".card").click(function(){
    var id = $(this).attr("id");
    var h = "#h" + id;
    $("#studentName").val($(h).text());

    var s = "#s" + id;
    $("#studentFirstName").val($(s).text());

    var p = "#p" + id;
    $("#studentBio").val($(p).text());

    var i = "./assets/images/photo_profil" + id + ".jpg";
    $("#studentPhoto").attr("src", i); 

    var sId ="#studentId" + id;
    $("#studentId").val($(sId).text());

    $(".studentForm").css({"top" : "35%"});
    $("#student_profile").css({"filter" : "blur(4px)"});
})

/* --------------------------------- fermer un profil ----------------------- */

document.querySelector(".quitProfileBtn").addEventListener("click", function(){
    document.querySelector(".studentForm").style.cssText="top: 300%;"
    document.getElementById("student_profile").style.cssText="filter: blur(0px);"
})

/* -------------------------- editer un profil ------------------------------- */

document.querySelector(".editProfileBtn").addEventListener("click", function(){
    document.getElementById("studentName").style.cssText="pointer-events: auto;";
    document.getElementById("studentFirstName").style.cssText="pointer-events: auto;";
    document.getElementById("studentBio").style.cssText="pointer-events: auto;";
})

/* ---------------------------- ajouter un profil ---------------------------- */

document.querySelector(".addBtn").addEventListener("click", function(){    //foncitonne pas car bouton pour ajouter caché par d'autres div
    alert('clique');
    document.getElementById("AddName").style.cssText="pointer-events: auto;";
    document.getElementById("AddFirstName").style.cssText="pointer-events: auto;";
    document.getElementById("AddBio").style.cssText="pointer-events: auto;";
})

