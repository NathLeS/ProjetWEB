<?php

class Controller
{
    private $_generalRepo;

    public function UpdateController()
    {
        // ---------- Initialisation ---------- //

        require_once('Model/StudentManager.php');
        require_once('Model/Manager.php');
        require_once('assets/vendors/smarty/libs/Smarty.class.php');

         // ---------- Gestion du template ---------- //

         $smarty = new Smarty();
         $smarty->setTemplateDir('View');

        // ---------- Affichage de l'utilisateur ---------- //

        $repo = new Manager();
        $students = $repo->SELECTALL();


        $ProfilArticle = '';
        $i = 0;

        foreach($students as $student):
            $ProfilArticle .= '<article>
            <img src="./assets/images/photo_profil' .$i. '.jpg" >
            <h1>'. $student->Nom_etudiant .'<br>' . $student->Prenom_etudiant .'</h1>
            <p>'. $student->Biographie_etudiant .'</p>
        </article>';
        $i++;
        endforeach;

        $smarty->assign('ProfilArticle', $ProfilArticle);

        $smarty->display('etudiants.tpl');

    }

}

?>