<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include('../../config/database.php');
include('../../models/goichup.php');


$database = new Database();

$db = $database->connect();

$list_goichup = new GoiChup($db);

$result = $list_goichup->read();

$num = $result->rowCount();

if ($num > 0) {
    $list_goichup_arr = array();

    while ($row = $result->fetch()) {
        $list_goichup_arr[] = array(
            'id'            => $row['id'],
            'title'         => $row['title'],
            'description'   => $row['description'],
            'date'          => $row['date'],
            'content'       => $row['content']
        );
    }
}

echo json_encode($list_goichup_arr);

?>