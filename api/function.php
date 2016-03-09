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
function getReviews() {
    global $con;
    $sql = "SELECT school.*, review.*, count(review.school) as review_count FROM ".DB_DATABASE.".".DB_TABLE_REVIEW." review".chr(10);
    $sql .= "LEFT OUTER JOIN ".DB_DATABASE.".".DB_TABLE_SCHOOL." school".chr(10);
    $sql .= "ON review.school = school.id".chr(10);
    $sql .= "GROUP BY review.school".chr(10);
    //$sql .= "HAVING review_count > 3".chr(10);
    if ($result = $con->query($sql)) {
        $aData = array();
        while($row = $result->fetch_array())
            $aData[] = $row;
        return $aData;
    } else {
        return false;
    }
}

function getReviewDetail($school) {
    global $con;
    $sql = "SELECT school.*, review.* FROM ".DB_DATABASE.".".DB_TABLE_REVIEW." review".chr(10);
    $sql .= "JOIN ".DB_DATABASE.".".DB_TABLE_SCHOOL." school".chr(10);
    $sql .= "ON review.school = school.id".chr(10);
    $sql .= "WHERE review.school = $school".chr(10);
    if ($result = $con->query($sql)) {
        $aData = array();
        while($row = $result->fetch_array())
            $aData[] = $row;
        $filteredData = filterDetail($aData);
        return $filteredData;
    } else {
        return false;
    }
}

function filterDetail($aData) {
    $aFilter = array();
    foreach($aData as $thisReview) {
        $filter  = array();
        $filter['teacher'] = $thisReview['teacher'];
        $filter['school'] = $thisReview['name'];
        $filter['role'] = filterRole(json_decode($thisReview['role']));
        $filter['personal'] = filterAnswer(json_decode($thisReview['personal']));
        $filter['behaviour'] = filterAnswer(json_decode($thisReview['behaviour']));
        $filter['quality'] = filterQuality(json_decode($thisReview['quality']));
        $filter['workhour'] = $thisReview['workhour'];
        $filter['email'] = $thisReview['email'];
        $filter['response'] = $thisReview['response'];
        $aFilter[] = $filter;
    }
    return $aFilter;
}

function filterRole($role) {
    $roleArray = array();
    foreach($role as $thisRole) {
        if($thisRole->status) {
            $roleArray[] = $thisRole->name;
        }
    }
    return implode(',', $roleArray);
}

function filterAnswer($answer) {
    $answerArray = array();
    foreach($answer as $section) {
        $count = 0; $total = 0;
        foreach($section as $question) {
            $total = $total + $question->a;
            $count++;
        }
        $answerArray[] = intval($total/$count);
    }
    return implode(',', $answerArray);
}

function filterQuality($quality) {
    $qualityArray = array();
    foreach($quality as $thisQuality) {
        if($thisQuality->status) {
            $qualityArray[] = $thisQuality->name;
        }
    }
    return implode(',', $qualityArray);
}