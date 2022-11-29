-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: sql10.freesqldatabase.com    Database: sql10578828
-- ------------------------------------------------------
-- Server version	5.5.62-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `APLICATIVOS`
--

DROP TABLE IF EXISTS `APLICATIVOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `APLICATIVOS` (
  `app_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreapp` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`app_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `APLICATIVOS`
--

LOCK TABLES `APLICATIVOS` WRITE;
/*!40000 ALTER TABLE `APLICATIVOS` DISABLE KEYS */;
INSERT INTO `APLICATIVOS` VALUES (1,'Supermercado'),(2,'Administrador de Permisos');
/*!40000 ALTER TABLE `APLICATIVOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `APLICATIVOS_MENU`
--

DROP TABLE IF EXISTS `APLICATIVOS_MENU`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `APLICATIVOS_MENU` (
  `app_id` int(11) DEFAULT NULL,
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_menu` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`menu_id`),
  KEY `app_id` (`app_id`),
  CONSTRAINT `APLICATIVOS_MENU_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `APLICATIVOS` (`app_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `APLICATIVOS_MENU`
--

LOCK TABLES `APLICATIVOS_MENU` WRITE;
/*!40000 ALTER TABLE `APLICATIVOS_MENU` DISABLE KEYS */;
INSERT INTO `APLICATIVOS_MENU` VALUES (1,1,'Realizar venta de Productos'),(1,2,'Reponer productos en las gondolas'),(2,3,'Manejar la seguridad de la aplicacion.'),(1,4,'Contratar o despedir empleados');
/*!40000 ALTER TABLE `APLICATIVOS_MENU` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PERMISOS`
--

DROP TABLE IF EXISTS `PERMISOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PERMISOS` (
  `user_id` varchar(9) NOT NULL DEFAULT '',
  `app_id` int(11) NOT NULL DEFAULT '0',
  `rol_neg_id` int(11) NOT NULL DEFAULT '0',
  `fecha_solicitud` date NOT NULL,
  `fecha_autorizacion` date DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`app_id`,`rol_neg_id`),
  KEY `app_id` (`app_id`),
  KEY `rol_neg_id` (`rol_neg_id`),
  CONSTRAINT `PERMISOS_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `PERSONAS` (`user_id`),
  CONSTRAINT `PERMISOS_ibfk_2` FOREIGN KEY (`app_id`) REFERENCES `APLICATIVOS` (`app_id`),
  CONSTRAINT `PERMISOS_ibfk_3` FOREIGN KEY (`rol_neg_id`) REFERENCES `ROLES_NEGOCIO` (`rol_neg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PERMISOS`
--

LOCK TABLES `PERMISOS` WRITE;
/*!40000 ALTER TABLE `PERMISOS` DISABLE KEYS */;
INSERT INTO `PERMISOS` VALUES ('11111111',1,1,'2022-11-28','2022-11-28','AUTORIZADO'),('22222222',2,3,'2022-11-29','2022-11-29','AUTORIZADO'),('52122876',1,1,'2022-11-23','2022-11-24','AUTORIZADO'),('99999999',1,1,'2022-11-29','2022-11-29','AUTORIZADO'),('99999999',1,4,'2022-11-29','2022-11-29','DENEGADO'),('99999999',2,3,'2022-11-29','2022-11-29','AUTORIZADO');
/*!40000 ALTER TABLE `PERMISOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PERSONAS`
--

DROP TABLE IF EXISTS `PERSONAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PERSONAS` (
  `user_id` varchar(9) NOT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `departamento` varchar(50) DEFAULT NULL,
  `hashpwd` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PERSONAS`
--

LOCK TABLES `PERSONAS` WRITE;
/*!40000 ALTER TABLE `PERSONAS` DISABLE KEYS */;
INSERT INTO `PERSONAS` VALUES ('11111111','NoEs','Nestor','Comandante Braga 2715','Montevideo','Montevideo','$2b$10$VA.PGNnM4TcgQG7LaEIhfemkpkQDxPgMCLydAee2na04xaN7/Iln6'),('22222222','Juan carlos','Bodoque','Av. 31 minutos','Montevideo','Montevideo','$2b$10$MAEgHfpRNE3FtHKO2INbB.etwb1mOnu2HsqY1T6zPqjxRYnTJznVW'),('52122876','Santiago','Alonso','Defensa y Justicia','Montevideo','Montevideo','$2b$10$v72QC3k6LDo2nrQS2fyuMOtFNHO79r8wkT8YwWCUHZMUPssjcxbLO'),('99999999','Nestor','Martinez','Av. 8 de Octubre 2738','Montevideo','Montevideo','$2b$10$x2uR.DTJ1.oRjB0UR772OOuU07xvWsnqgNZ6AdQKqdoNtAQWlj7vu');
/*!40000 ALTER TABLE `PERSONAS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PERSONAS_PREGUNTAS`
--

DROP TABLE IF EXISTS `PERSONAS_PREGUNTAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PERSONAS_PREGUNTAS` (
  `user_id` varchar(9) NOT NULL DEFAULT '',
  `preg_id` int(11) NOT NULL DEFAULT '0',
  `respuesta` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`preg_id`),
  KEY `preg_id` (`preg_id`),
  CONSTRAINT `PERSONAS_PREGUNTAS_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `PERSONAS` (`user_id`),
  CONSTRAINT `PERSONAS_PREGUNTAS_ibfk_2` FOREIGN KEY (`preg_id`) REFERENCES `PREGUNTAS` (`preg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PERSONAS_PREGUNTAS`
--

LOCK TABLES `PERSONAS_PREGUNTAS` WRITE;
/*!40000 ALTER TABLE `PERSONAS_PREGUNTAS` DISABLE KEYS */;
INSERT INTO `PERSONAS_PREGUNTAS` VALUES ('11111111',1,'$2b$10$Ih2PNYyZeRes4aij0SzI3e4R9rdBe8liPadOo3oFYAfh/Bilx/wUW'),('22222222',2,'$2b$10$YGKllCJFcEf5MxiQDPt91eRW0J/AkE1D07gM1SkT/Cg0KSrxb3QYG'),('52122876',3,'$2b$10$FIKBJe1X.O54SitOKQsbQOt7vwlVnTo4/NQ4KmQfKrKokA5Xnq5uy'),('99999999',1,'$2b$10$9ybQ5y0jfsR9PFfU1TKrhOsJyTha4jGSvl680O9JnScmngitqOFWm');
/*!40000 ALTER TABLE `PERSONAS_PREGUNTAS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PREGUNTAS`
--

DROP TABLE IF EXISTS `PREGUNTAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PREGUNTAS` (
  `preg_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`preg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PREGUNTAS`
--

LOCK TABLES `PREGUNTAS` WRITE;
/*!40000 ALTER TABLE `PREGUNTAS` DISABLE KEYS */;
INSERT INTO `PREGUNTAS` VALUES (1,'Cual es mi color favorito?'),(2,'Cual es la mejor serie de todas?'),(3,'Cual es el nombre de mi mascota?');
/*!40000 ALTER TABLE `PREGUNTAS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `PREGUNTAS_USUARIOS`
--

DROP TABLE IF EXISTS `PREGUNTAS_USUARIOS`;
/*!50001 DROP VIEW IF EXISTS `PREGUNTAS_USUARIOS`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `PREGUNTAS_USUARIOS` AS SELECT 
 1 AS `user_id`,
 1 AS `pregunta`,
 1 AS `respuesta`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `ROLES_APLICATIVOS`
--

DROP TABLE IF EXISTS `ROLES_APLICATIVOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ROLES_APLICATIVOS` (
  `app_id` int(11) DEFAULT NULL,
  `rol_id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_rol` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rol_id`),
  KEY `app_id` (`app_id`),
  CONSTRAINT `ROLES_APLICATIVOS_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `APLICATIVOS` (`app_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ROLES_APLICATIVOS`
--

LOCK TABLES `ROLES_APLICATIVOS` WRITE;
/*!40000 ALTER TABLE `ROLES_APLICATIVOS` DISABLE KEYS */;
INSERT INTO `ROLES_APLICATIVOS` VALUES (1,1,'Cajero'),(1,2,'Reponedor'),(2,3,'Administrador de Seguridad'),(1,4,'Organizar el Staff');
/*!40000 ALTER TABLE `ROLES_APLICATIVOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ROLES_APLICATIVOS_MENU`
--

DROP TABLE IF EXISTS `ROLES_APLICATIVOS_MENU`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ROLES_APLICATIVOS_MENU` (
  `app_id` int(11) NOT NULL DEFAULT '0',
  `rol_id` int(11) NOT NULL DEFAULT '0',
  `menu_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`app_id`,`rol_id`,`menu_id`),
  KEY `rol_id` (`rol_id`),
  KEY `menu_id` (`menu_id`),
  CONSTRAINT `ROLES_APLICATIVOS_MENU_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `APLICATIVOS` (`app_id`),
  CONSTRAINT `ROLES_APLICATIVOS_MENU_ibfk_2` FOREIGN KEY (`rol_id`) REFERENCES `ROLES_APLICATIVOS` (`rol_id`),
  CONSTRAINT `ROLES_APLICATIVOS_MENU_ibfk_3` FOREIGN KEY (`menu_id`) REFERENCES `APLICATIVOS_MENU` (`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ROLES_APLICATIVOS_MENU`
--

LOCK TABLES `ROLES_APLICATIVOS_MENU` WRITE;
/*!40000 ALTER TABLE `ROLES_APLICATIVOS_MENU` DISABLE KEYS */;
INSERT INTO `ROLES_APLICATIVOS_MENU` VALUES (1,1,1),(1,2,2),(2,3,3),(1,4,4);
/*!40000 ALTER TABLE `ROLES_APLICATIVOS_MENU` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ROLES_NEGOCIO`
--

DROP TABLE IF EXISTS `ROLES_NEGOCIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ROLES_NEGOCIO` (
  `rol_neg_id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_rol_neg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rol_neg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ROLES_NEGOCIO`
--

LOCK TABLES `ROLES_NEGOCIO` WRITE;
/*!40000 ALTER TABLE `ROLES_NEGOCIO` DISABLE KEYS */;
INSERT INTO `ROLES_NEGOCIO` VALUES (1,'Cajero'),(2,'Reponedor'),(3,'Administrador de Seguridad'),(4,'Manager de Piso');
/*!40000 ALTER TABLE `ROLES_NEGOCIO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ROLES_NEGOCIO_APLICATIVOS`
--

DROP TABLE IF EXISTS `ROLES_NEGOCIO_APLICATIVOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ROLES_NEGOCIO_APLICATIVOS` (
  `rol_neg_id` int(11) NOT NULL DEFAULT '0',
  `app_id` int(11) NOT NULL DEFAULT '0',
  `rol_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`rol_neg_id`,`app_id`,`rol_id`),
  KEY `app_id` (`app_id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `ROLES_NEGOCIO_APLICATIVOS_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `APLICATIVOS` (`app_id`),
  CONSTRAINT `ROLES_NEGOCIO_APLICATIVOS_ibfk_2` FOREIGN KEY (`rol_id`) REFERENCES `ROLES_APLICATIVOS` (`rol_id`),
  CONSTRAINT `ROLES_NEGOCIO_APLICATIVOS_ibfk_3` FOREIGN KEY (`rol_neg_id`) REFERENCES `ROLES_NEGOCIO` (`rol_neg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ROLES_NEGOCIO_APLICATIVOS`
--

LOCK TABLES `ROLES_NEGOCIO_APLICATIVOS` WRITE;
/*!40000 ALTER TABLE `ROLES_NEGOCIO_APLICATIVOS` DISABLE KEYS */;
INSERT INTO `ROLES_NEGOCIO_APLICATIVOS` VALUES (1,1,1),(2,1,2),(4,1,1),(4,1,2),(4,1,4),(3,2,3);
/*!40000 ALTER TABLE `ROLES_NEGOCIO_APLICATIVOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `menusDisponiblesParaPersona`
--

DROP TABLE IF EXISTS `menusDisponiblesParaPersona`;
/*!50001 DROP VIEW IF EXISTS `menusDisponiblesParaPersona`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `menusDisponiblesParaPersona` AS SELECT 
 1 AS `user_id`,
 1 AS `nombreapp`,
 1 AS `descripcion_menu`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `permisosSolicitados`
--

DROP TABLE IF EXISTS `permisosSolicitados`;
/*!50001 DROP VIEW IF EXISTS `permisosSolicitados`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `permisosSolicitados` AS SELECT 
 1 AS `user_id`,
 1 AS `app_id`,
 1 AS `rol_neg_id`,
 1 AS `fecha_solicitud`,
 1 AS `fecha_autorizacion`,
 1 AS `estado`,
 1 AS `nombres`,
 1 AS `apellidos`,
 1 AS `direccion`,
 1 AS `ciudad`,
 1 AS `departamento`,
 1 AS `nombreapp`,
 1 AS `descripcion_rol_neg`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `rolesNegocioConAplicativos`
--

DROP TABLE IF EXISTS `rolesNegocioConAplicativos`;
/*!50001 DROP VIEW IF EXISTS `rolesNegocioConAplicativos`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `rolesNegocioConAplicativos` AS SELECT 
 1 AS `app_id`,
 1 AS `rol_neg_id`,
 1 AS `descripcion_rol_neg`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'sql10578828'
--

--
-- Final view structure for view `PREGUNTAS_USUARIOS`
--

/*!50001 DROP VIEW IF EXISTS `PREGUNTAS_USUARIOS`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50001 VIEW `PREGUNTAS_USUARIOS` AS select `PERSONAS_PREGUNTAS`.`user_id` AS `user_id`,`PREGUNTAS`.`pregunta` AS `pregunta`,`PERSONAS_PREGUNTAS`.`respuesta` AS `respuesta` from (`PERSONAS_PREGUNTAS` join `PREGUNTAS` on((`PERSONAS_PREGUNTAS`.`preg_id` = `PREGUNTAS`.`preg_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `menusDisponiblesParaPersona`
--

/*!50001 DROP VIEW IF EXISTS `menusDisponiblesParaPersona`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50001 VIEW `menusDisponiblesParaPersona` AS select `PERMISOS`.`user_id` AS `user_id`,`APLICATIVOS`.`nombreapp` AS `nombreapp`,`APLICATIVOS_MENU`.`descripcion_menu` AS `descripcion_menu` from ((((`PERMISOS` join `ROLES_NEGOCIO_APLICATIVOS` on(((`PERMISOS`.`app_id` = `ROLES_NEGOCIO_APLICATIVOS`.`app_id`) and (`PERMISOS`.`rol_neg_id` = `ROLES_NEGOCIO_APLICATIVOS`.`rol_neg_id`)))) join `ROLES_APLICATIVOS_MENU` on(((`PERMISOS`.`app_id` = `ROLES_APLICATIVOS_MENU`.`app_id`) and (`ROLES_NEGOCIO_APLICATIVOS`.`rol_id` = `ROLES_APLICATIVOS_MENU`.`rol_id`)))) join `APLICATIVOS_MENU` on((`ROLES_APLICATIVOS_MENU`.`menu_id` = `APLICATIVOS_MENU`.`menu_id`))) join `APLICATIVOS` on((`ROLES_APLICATIVOS_MENU`.`app_id` = `APLICATIVOS`.`app_id`))) where (`PERMISOS`.`estado` = 'AUTORIZADO') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `permisosSolicitados`
--

/*!50001 DROP VIEW IF EXISTS `permisosSolicitados`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50001 VIEW `permisosSolicitados` AS select `PERMISOS`.`user_id` AS `user_id`,`PERMISOS`.`app_id` AS `app_id`,`PERMISOS`.`rol_neg_id` AS `rol_neg_id`,`PERMISOS`.`fecha_solicitud` AS `fecha_solicitud`,`PERMISOS`.`fecha_autorizacion` AS `fecha_autorizacion`,`PERMISOS`.`estado` AS `estado`,`PERSONAS`.`nombres` AS `nombres`,`PERSONAS`.`apellidos` AS `apellidos`,`PERSONAS`.`direccion` AS `direccion`,`PERSONAS`.`ciudad` AS `ciudad`,`PERSONAS`.`departamento` AS `departamento`,`APLICATIVOS`.`nombreapp` AS `nombreapp`,`ROLES_NEGOCIO`.`descripcion_rol_neg` AS `descripcion_rol_neg` from (((`PERMISOS` join `PERSONAS` on((`PERSONAS`.`user_id` = `PERMISOS`.`user_id`))) join `APLICATIVOS` on((`PERMISOS`.`app_id` = `APLICATIVOS`.`app_id`))) join `ROLES_NEGOCIO` on((`PERMISOS`.`rol_neg_id` = `ROLES_NEGOCIO`.`rol_neg_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `rolesNegocioConAplicativos`
--

/*!50001 DROP VIEW IF EXISTS `rolesNegocioConAplicativos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50001 VIEW `rolesNegocioConAplicativos` AS select `ROLES_NEGOCIO_APLICATIVOS`.`app_id` AS `app_id`,`ROLES_NEGOCIO`.`rol_neg_id` AS `rol_neg_id`,`ROLES_NEGOCIO`.`descripcion_rol_neg` AS `descripcion_rol_neg` from (`ROLES_NEGOCIO` join `ROLES_NEGOCIO_APLICATIVOS` on((`ROLES_NEGOCIO`.`rol_neg_id` = `ROLES_NEGOCIO_APLICATIVOS`.`rol_neg_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-29 13:18:59
