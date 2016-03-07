<?php

include_once 'db.php';
include_once 'function.php';

$key = (isset($_GET['key']) && !empty($_GET['key'])) ? $_GET['key'] : "";
$aResult = array();
switch($key) {
    case 'schools':
        $schools = getallSchools();
        if($schools) {
            $aResult['status'] = true;
            $aResult['data'] = $schools;
        } else {
            $aResult['status'] = $schools;
            $aResult['data'] = "No data found";
        }
    break;
}

echo json_encode($aResult);