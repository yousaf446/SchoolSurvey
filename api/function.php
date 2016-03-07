<?php

function getallSchools() {
    global $con;
    $sql = "SELECT name,id FROM ".DB_DATABASE.".".DB_TABLE." WHERE lat IS NOT NULL AND lng IS NOT NULL";
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