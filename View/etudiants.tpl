<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Student'sPoint</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- Demander à Nathan de m'expliquer pq ajout de fontwesome comme ca-->
        <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css"> <!--Ajout fontawesome-->
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
                    <li><a href="index.php">Etudiants</a></li> <!--attention ici j'ai changé etudiants.html pour etudiants.php, il faudra faire pareil au dessus pour les prochaines vues-->
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
            <div class="animateThis" id="student_profile" > <!--j'ajoute les différentes profils des étudiants--> 
                    {$ProfilArticle}
            </div>
                <button class="quitProfileBtn" type="button">
                        <i class="fas fa-times"></i>
                </button>
                <button class="editProfileBtn">
                        <i class="fas fa-user-edit"></i>
                </button>
                <form class="studentForm" method="POST">
                    <img class="studentPhotoForm" id="studentPhoto" src=''>
                    <input type="text" id="studentName" name="studentName" >
                    <br> 
                    <input type="text" id="studentFirstName" name="studentFirstName">                       
                    <textarea id="studentBio" name="studentBio"></textarea>
                    <input type="text" id="studentId" name="studentId">  
                    <button class="btnForm"> Sauvegarder </button>
                </form>
            <div>
                <form class="studentFrom" id="AddStudentForm" method="POST">
                    <input type="text" id="AddName" name="AddName" >
                    <br> 
                    <input type="text" id="AddFirstName" name="AddFirstName">                       
                    <textarea id="AddBio" name="AddBio"></textarea>
                    <button class="btnForm"> Ajouter </button>
                </form>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://unpkg.com/@barba/core"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
    <script src="./assets/main.js"></script>
</html>