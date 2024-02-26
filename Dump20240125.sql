-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: onlinestore
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` varchar(64) NOT NULL,
  `order_email` varchar(256) NOT NULL,
  `order_totalCost` decimal(10,2) unsigned NOT NULL,
  `order_cardNumber` bigint NOT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `order_id_UNIQUE` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `pdt_index` int unsigned NOT NULL,
  `pdt_name` varchar(45) NOT NULL,
  `pdt_code` varchar(64) NOT NULL,
  `pdt_price` decimal(10,2) unsigned NOT NULL,
  `pdt_quantity` int unsigned NOT NULL,
  `pdt_description` longtext NOT NULL,
  PRIMARY KEY (`pdt_index`),
  UNIQUE KEY `pdt_index_UNIQUE` (`pdt_index`),
  UNIQUE KEY `pdt_code_UNIQUE` (`pdt_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user-credentials`
--

DROP TABLE IF EXISTS `user-credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user-credentials` (
  `user_credentials_email` varchar(256) NOT NULL,
  `user_credentials_password` varchar(256) NOT NULL,
  PRIMARY KEY (`user_credentials_email`),
  UNIQUE KEY `user_credentials_email_UNIQUE` (`user_credentials_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user-credentials`
--

LOCK TABLES `user-credentials` WRITE;
/*!40000 ALTER TABLE `user-credentials` DISABLE KEYS */;
/*!40000 ALTER TABLE `user-credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user-wallet`
--

DROP TABLE IF EXISTS `user-wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user-wallet` (
  `user_wallet_cardholderName` varchar(45) NOT NULL,
  `user_wallet_cardNumber` bigint NOT NULL,
  `user_wallet_expiry` varchar(256) NOT NULL,
  `user_wallet_CVV` int unsigned NOT NULL,
  PRIMARY KEY (`user_wallet_cardNumber`),
  UNIQUE KEY `user_wallet_cardNumber_UNIQUE` (`user_wallet_cardNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user-wallet`
--

LOCK TABLES `user-wallet` WRITE;
/*!40000 ALTER TABLE `user-wallet` DISABLE KEYS */;
/*!40000 ALTER TABLE `user-wallet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_firstName` varchar(45) NOT NULL,
  `user_lastName` varchar(45) DEFAULT NULL,
  `user_email` varchar(256) NOT NULL,
  `user_countryCode` varchar(256) NOT NULL,
  `user_contactNumber` varchar(256) NOT NULL,
  `user_address1` varchar(256) NOT NULL,
  `user_address2` varchar(256) DEFAULT NULL,
  `user_country` varchar(45) NOT NULL,
  `user_ZIP` varchar(256) NOT NULL,
  PRIMARY KEY (`user_email`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-25 19:15:24
