CREATE TABLE `Employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `dept` varchar(50) NOT NULL,
  `salary` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `sampledb`.`employees`
VALUES
(0, "emp 1", "dept 1",50000),
(0, "emp 2", "dept 2", 23000);



