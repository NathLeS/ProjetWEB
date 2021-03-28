<?php

class StudentManager {
    private $pdo;
    private $user = 'root';
    private $pass = 'elise230501';
    //private $error = '';

    public function __construct() {
        $this->pdo = new PDO('mysql:host=localhost;dbname=ProjetWEB', $this->user, $this->pass, 
        [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ          //connexion à la BDD et par défault on récupère sous forme d'objet tous les PDO
        ]);    
    }

    public function UPDATE($id, $lastName, $firstName) {
        $query = $this->pdo->prepare("UPDATE etudiant SET Nom_etudiant = :lastName, Prenom_etudiant = :firstName, Biographie_etudiant = 'oui' WHERE Id_etudiant = :id");             //requête SQL  
        $query->execute([
            'lastName' => $lastName,
            'firstName' => $firstName,
            'id' => $id
            ]);
        $query->fetch(); 
    }

    public function CREATE($lastName, $firstName, $bio){
        $query = $this->pdo->prepare("INSERT INTO etudiant(Nom_etudiant, Prenom_etudiant, Biographie_etudiant) VALUES(:lastName, :firstName, :bio)");
        $query-> execute([
            'lastName' => $lastName,
            'firstName' => $firstName,
            'bio'=> $bio
        ]);
        $query->fetch();
    }

}