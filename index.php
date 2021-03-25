 <?php
/*
require_once('assets/vendors/smarty/libs/Smarty.class.php');

$smarty = new Smarty();
$smarty->setTemplateDir('View');




$user = 'root';
$pass = 'elise230501';
$error = NULL;

try
{
    $pdo = new PDO('mysql:host=localhost;dbname=test', $user, $pass, 
    [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ          //connexion à la BDD et par défault on récupère sous forme d'objet tous les PDO
    ]); 
    
    $query = $pdo->query("SELECT * FROM test");             //requête SQL  
    $posts = $query->fetchAll();                                //on récupère le résultat de la requête sous forme d'objet
  
    $ProfilArticle = '';

    foreach($posts as $post):
        $ProfilArticle .= '<article>
        <img src="./assets/images/photo_pro2.jpg" >
        <h1>'. $post->Nom .'<br>' . $post->Prénom .'</h1>
        <p>'. $post->Bio .'</p>
    </article>';
    endforeach;

    $smarty->assign('ProfilArticle', $ProfilArticle);

}

catch(PDOException $e)                                          //si il n'arrive pas à se connecter à la BDD on génère une exception
    {
        $error = $e->getMessage();
        ?>
        <div class="alert alert-danger" role="alert"> <?= $error ?> </div>
        <?php
    }

    $smarty->display('etudiants.tpl'); */

?>

<!--------------------Pour mvc--------------------->

<?php

require_once('Controller/Controller.php');

$controller = new Controller();
$user = $controller->UpdateController();



