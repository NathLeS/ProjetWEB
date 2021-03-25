<?php

class StudentManager {
    private $pdo;
    private $user = 'root';
    private $pass = 'elise230501';
    //private $error = '';

    public function __construct(){
        $this->pdo = new PDO('mysql:host=localhost;dbname=ProjetWEB', $this->user, $this->pass, 
        [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ          //connexion à la BDD et par défault on récupère sous forme d'objet tous les PDO
        ]);    
    }

}