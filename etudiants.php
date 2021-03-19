<?php

require_once("assets/vendors/smarty/libs/Smarty.class.php");

$smarty = new Smarty();
$smarty->setTemplateDir('View');
$smarty->display('etudiants.tpl');