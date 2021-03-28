<?php

class Controller
{

    public function UpdateController()
    {
        // ---------- Initialisation ---------- //

        require_once('Model/StudentManager.php');
        require_once('Model/Manager.php');
        require_once('assets/vendors/smarty/libs/Smarty.class.php');

         // ---------- Gestion du template ---------- //

         $smarty = new Smarty();
         $smarty->setTemplateDir('View');

        // ---------------- Affichage de l'etudiant ------------------ //

        $repo = new Manager();
        $students = $repo->SELECTALL();


        $ProfilArticle = '';
        $i = 0;

        foreach($students as $student):
            $ProfilArticle .= '<article class="card" id="'.$i. '">';
            $ProfilArticle .= '<img class="studentPhoto" id="i' .$i. '" src="./assets/images/photo_profil' .$i. '.jpg" >';
            $ProfilArticle .= '<h1 id="h' .$i. '">'. $student->Nom_etudiant .'</h1><br><span id="s' .$i. '">' . $student->Prenom_etudiant .'</span>';
            $ProfilArticle .= '<p id="p' . $i . '">'. $student->Biographie_etudiant .'</p>';
            $ProfilArticle .= '<p id="studentId' . $i . '">' . $student->Id_etudiant . '</p>';
            $ProfilArticle .= '</article>';
            $i++;
        endforeach;

        $smarty->assign('ProfilArticle', $ProfilArticle);
        $smarty->display('etudiants.tpl');

        // ------------------- Modification de l'etudiant ---------------- //

        if(isset($_POST['studentName'])) {
            $StudentManager = new StudentManager();
            $StudentManager->UPDATE($_POST['studentId'], $_POST['studentName'], $_POST['studentFirstName']);
        }

        // ------------------- Creation d'un etudiant --------------------//

        if(isset($_POST['AddName'])) {
            $StudentManager = new StudentManager();
            $StudentManager->CREATE($_POST['AddName'], $_POST['AddFirstName'], $_POST['AddBio']);
        }

    }

}

?>