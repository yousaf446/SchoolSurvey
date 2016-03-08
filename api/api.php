<?php

include_once 'db.php';
include_once 'function.php';

$key = (isset($_REQUEST['key']) && !empty($_REQUEST['key'])) ? $_REQUEST['key'] : "";
$aResult = array();
switch($key) {
    case 'schools':
        $word = (isset($_GET['word']) && !empty($_GET['word'])) ? $_GET['word'] : "";
        $schools = getallSchools($word);
        if($schools) {
            $aResult['status'] = true;
            $aResult['data'] = $schools;
        } else {
            $aResult['status'] = $schools;
            $aResult['data'] = "No data found";
        }
    break;

    case 'reviews':
        $reviewData = (json_decode(file_get_contents('php://input')));
        $teacher = (isset($reviewData->teacher) && !empty($reviewData->teacher)) ? $reviewData->teacher : "";
        $school = (isset($reviewData->school) && !empty($reviewData->school)) ? $reviewData->school : "";
        $role = (isset($reviewData->role) && !empty($reviewData->role)) ? $reviewData->role : "";
        $personal = (isset($reviewData->personal) && !empty($reviewData->personal)) ? $reviewData->personal : "";
        $behaviour = (isset($reviewData->behaviour) && !empty($reviewData->behaviour)) ? $reviewData->behaviour : "";
        $quality = (isset($reviewData->quality) && !empty($reviewData->quality)) ? $reviewData->quality : "";
        $workhour = (isset($reviewData->workhour) && !empty($reviewData->workhour)) ? $reviewData->workhour : "";
        $review = addReview($teacher, $school, $role, $personal, $behaviour, $quality, $workhour);
        if($review) {
            $aResult['status'] = true;
            $aResult['data'] = $review;
        } else {
            $aResult['status'] = false;
            $aResult['data'] = 'Internal Server Error';
        }
    break;
    case 'response':
        $responseData = (json_decode(file_get_contents('php://input')));
        $reviewID = (isset($responseData->reviewID) && !empty($responseData->reviewID)) ? $responseData->reviewID : 0;
        $email = (isset($responseData->email) && !empty($responseData->email)) ? $responseData->email : "";
        $response = (isset($responseData->response) && !empty($responseData->response)) ? $responseData->response : "";
        $result = addResponse($reviewID, $email, $response);
        if($result) {
            $aResult['status'] = true;
            $aResult['data'] = 'Response saved';
        } else {
            $aResult['status'] = false;
            $aResult['data'] = 'Internal Server Error';
        }
        break;
}

echo json_encode($aResult);