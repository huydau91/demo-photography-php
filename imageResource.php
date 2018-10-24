<?php

include('./systemConfig.php');

class imageResources {
    private $dbReference;
    var $dbConnect;
    var $result;

    function __construct(){

    }
    
    function __destruct(){
    
    }

    function getAllImageResource(){
        $this->dbReference = new systemConfig();
        $this->dbConnect = $this->dbReference->connectDB();
        if ($this->dbConnect == NULL) {
            $this->dbReference->sendResponse(503, '{"error_message":'.$this->dbReference->getStatusCodeMeeage(503).'}');
        } else {
            $sql = 'SELECT * FROM goi_chup';
            $number_per_page = $_POST['number_per_page'];
            $page = ($_POST['page']-1)*$number_per_page +1;
            $page_next = $_POST['page']*$number_per_page;
        
            if ($page != NULL && $number_per_page != NULL) {
                $sql = 'SELECT * FROM goi_chup WHERE id BETWEEN $page AND $page_next';
            }

            $this->result = $this->dbConnect->query($sql);
            if ($this->result->num_rows > 0) {
                $resultSet = array();
                while($row = $this->result->fetch_assoc()) {
                    $resultSet[] = $row;
                }
                
                $this->dbReference->sendResponse(200,'{"items"'.json_encode($resultSet).'}');

            } else {
                $this->dbReference->sendResponse(200,'{"items":null}');
            }
        }
    }
}

?>