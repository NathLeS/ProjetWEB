<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Student'sPoint</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="./assets/normalize.css"/>
        <link rel="stylesheet" href="./assets/style.css"/>
    </head>

    <body data-barba="wrapper">
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>

        <header>
            <nav>
                <div>
                    <h1 class="logo">Student'sPoint</h1>
                </div>
                <ul class="navBtn">
                    <li><a href="stages.html">Stages</a></li>
                    <li><a href="entreprises.html">Entreprises</a></li>
                    <li><a href="pilotes.html">Pilotes</a></li>
                    <li><a href="etudiants.php">Etudiants</a></li> <!--attention ici j'ai changé etudiants.html pour etudiants.php, il faudra faire pareil au dessus pour les prochaines vues-->
                    <li><button class="userBtn"><i class="fa fa-user-circle"></i></button></li>
                </ul>
                <ul class="userMenu">
                    <div class="corner"></div>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Candidatures</a></li>
                    <li><a href="#">Favoris</a></li>
                    <li><a href="#">Déconnexion</a></li>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        </header>

        <main data-barba="container" data-barba-namespace="home-section">
            <label class="pageTitle">Etudiants</label>
            <div class="searchDiv">
                <input class="searchInput" placeholder="Rechercher un étudiant">
                <button class="searchBtn"><i class="fa fa-search"></i></button>
                <button class="addBtn"><i class="fa fa-plus"></i></button>
            </div>
            <section class="animateThis" id="test"> <!--dans cette section (attention jai changé le label pour section car label utilisé avec formulaires) j'ajoute les différentes profils des étudiants--> 
                <article class="profil">
                    <img class="photo_profil "src="./assets/images/photo_pro2.jpg" >
                    <h1 class = "h1_profil"> Nom Prenom</h1>
                    <p class="biographie"> Biographie </p>
                </article>
            </section> 
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://unpkg.com/@barba/core"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
    <script src="./assets/main.js"></script>
</html>