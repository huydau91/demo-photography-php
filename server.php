<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$username = "photography";
$password = "123456";
$server   = "localhost";
$dbname   = "photography"; 

$connect = new mysqli($server, $username, $password, $dbname);

if ($connect->connect_error) {
    die("Không kết nối :" . $conn->connect_error);
    exit();
}
$sql = "SELECT * FROM goi_chup";
$ket_qua = $connect->query($sql);

if (!$ket_qua) {
    die("Không thể thực hiện câu lệnh SQL: " . $connect->connect_error);
    exit();
}

$list_goichup = array();

while ($row = mysqli_fetch_array($ket_qua)) {
    $list_goichup[] = array(
        'id'            => $row['id'],
        'title'         => $row['title'],
        'description'   => $row['description'],
        'date'          => $row['date'],
        'content'       => $row['content']
    );
}

$json = json_encode($list_goichup);

echo $json;

$connect->close();

?>