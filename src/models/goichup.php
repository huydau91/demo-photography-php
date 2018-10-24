<?php

    class GoiChup {
        private $conn;
        private $table = 'goi_chup';

        public $id;
        public $title;
        public $description;
        public $date;
        public $content;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function __destruct() {

        }

        public function read() {
            $query = "SELECT * FROM goi_chup ORDER BY date";

            $list_goichup = $this->conn->prepare($query);

            $list_goichup->execute();

            return $list_goichup;
        }
    }

?>