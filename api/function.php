<?php

function getallSchools($word) {
    global $con;
    $sql = "SELECT name,id FROM ".DB_DATABASE.".".DB_TABLE_SCHOOL." WHERE lat IS NOT NULL AND lng IS NOT NULL";
    if(!empty($word)) $sql .= " AND name LIKE '%".$word."%'";
    $sql .= " LIMIT 5";
    if ($result = $con->query($sql)) {
        $aData = array();
        while($row = $result->fetch_array())
            $aData[] = $row;
        $aSchool = array();
        foreach($aData as $thisRow) {
            $thisSchool = array();
            $thisSchool['value'] = utf8_encode($thisRow['name']);
            $thisSchool['data'] = $thisRow['id'];
            $aSchool[] = $thisSchool;
        }
        return $aSchool;
    } else {
        return false;
    }
}

function addReview($teacher, $school, $role, $personal, $behaviour, $quality, $workhour) {
    global $con;
    $role = json_encode($role);
    $personal = json_encode($personal);
    $behaviour = json_encode($behaviour);
    $quality = json_encode($quality);
    $sql = "INSERT INTO ".DB_DATABASE.".".DB_TABLE_REVIEW." (teacher, school, role, personal, behaviour, quality, workhour) VALUES".chr(10);
    $sql .= "('$teacher', $school, '$role', '$personal', '$behaviour', '$quality', '$workhour')";
    if($con->query($sql)) {
        return $con->insert_id;
    } else {
        return false;
    }
}

function addResponse($id, $email, $response) {
    global $con;
    $sql = "UPDATE ".DB_DATABASE.".".DB_TABLE_REVIEW.chr(10);
    $sql .= "SET email = '$email', response = '$response'".chr(10);
    $sql .= "WHERE id = ".$id;
    if($con->query($sql)) {
        return true;
    } else {
        return false;
    }
}