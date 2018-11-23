-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 23 Novembre 2018 à 17:13
-- Version du serveur :  5.7.24-0ubuntu0.16.04.1
-- Version de PHP :  7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Restaurant`
--

-- --------------------------------------------------------

--
-- Structure de la table `Booking`
--

CREATE TABLE `Booking` (
  `Id` int(11) NOT NULL,
  `BookingDate` date NOT NULL,
  `BookingTime` time NOT NULL,
  `NumberOfSeats` tinyint(4) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `CreationTimestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Booking`
--

INSERT INTO `Booking` (`Id`, `BookingDate`, `BookingTime`, `NumberOfSeats`, `User_Id`, `CreationTimestamp`) VALUES
(24, '2018-01-01', '11:00:00', 1, 26, '2018-10-30 12:56:02'),
(25, '2018-01-01', '11:00:00', 1, 26, '2018-10-30 12:59:14'),
(26, '2018-10-16', '11:00:00', 1, 26, '2018-10-30 12:59:51'),
(27, '2018-01-01', '11:00:00', 1, 26, '2018-11-05 14:57:22'),
(28, '2018-01-01', '11:00:00', 1, 26, '2018-11-05 15:24:41');

-- --------------------------------------------------------

--
-- Structure de la table `Meal`
--

CREATE TABLE `Meal` (
  `Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Photo` varchar(30) NOT NULL,
  `Description` varchar(250) NOT NULL,
  `QuantityInStock` tinyint(4) NOT NULL,
  `BuyPrice` double NOT NULL,
  `SalePrice` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Meal`
--

INSERT INTO `Meal` (`Id`, `Name`, `Photo`, `Description`, `QuantityInStock`, `BuyPrice`, `SalePrice`) VALUES
(1, 'Coca-Cola', 'coca.jpeg', 'Du délicieux coca au goût subtile de cerise !', 72, 0.6, 3),
(2, 'Okonomiyaki', 'oko.jpg', 'Nos okonomiyaki ', 18, 2.75, 5.5),
(3, 'Goku Burger', 'burger.jpeg', 'Burger Americano - Japonais champion de France 2017. Pain au charbon végétal, viande Française, sauces maison. Servie avec des frites de patates douces.', 14, 6, 12.5),
(4, 'Tokoyaki', 'toko.jpeg', 'Nos tokoyaki maison ravira les plus gourmands et les puristes : tous les ingrédients sont naturels !\nÀ consommer sans modération', 9, 3, 6.75),
(5, 'Donuts', 'donuts.jpeg', 'Les donuts sont fabriqués le matin même et sont recouvert d\'une délicieuse sauce au chocolat !', 16, 3, 6.2),
(6, 'Sake', 'sake.jpeg', 'Son goût sucré avec de l\'amande vous ravira !', 53, 0.5, 2.9),
(7, 'Milkshake', 'milshake.jpeg', 'Notre milkshake bien crémeux contient des morceaux d\'Oréos et est accompagné de crème chantilly et de smarties en guise de topping. Il éblouira vos papilles !', 12, 2, 5.35),
(8, 'Frites de patate douce ', 'frites.jpeg', 'Aaaaaah ces merveilleux bâtonnets de pomme de terre qui nous régalent depuis qu\'on est petit. Venez déguster les notres, elles sont faites maison !', 127, 0.5, 2.5),
(9, 'Ramen', 'ramen.jpg', 'ce qui est chouette avec le ramen c’est que c’est un plat complet, équilibré et peu cher et bien sûr super bon ', 55, 0.7, 3.5),
(10, 'Gillian Anderson', 'poisson.jpeg', 'Pourquoi ne pas profiter de votre repas avec la charmante compagnie de l\'héroine de X-Files ? L\'Amérique comme vous l\'avez toujours rêvé...', 1, 0, 4000),
(11, 'Sarah Michelle Gellar', 'the.jpeg', 'Le thé sencha est un thé vert à la saveur délicate et suave. Boire quelques gorgées fumantes est très relaxant et chaleureux.\n\nSes vertus de longévité et de santé sont infinies. Découvrons-les autour d\'une tasse de thé conviviale.', 1, 0, 3000);

-- --------------------------------------------------------

--
-- Structure de la table `Order`
--

CREATE TABLE `Order` (
  `Id` int(11) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `TotalAmount` double DEFAULT NULL,
  `TaxRate` float DEFAULT NULL,
  `TaxAmount` double DEFAULT NULL,
  `CreationTimestamp` datetime DEFAULT NULL,
  `CompleteTimestamp` datetime DEFAULT NULL,
  `Statut` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Order`
--

INSERT INTO `Order` (`Id`, `User_Id`, `TotalAmount`, `TaxRate`, `TaxAmount`, `CreationTimestamp`, `CompleteTimestamp`, `Statut`) VALUES
(6, 13, 100, 0.2, 20, '2018-02-02 00:00:00', '2018-02-01 00:00:00', NULL),
(7, 26, 20, 90, 18, '2018-11-06 16:04:13', '2018-11-06 16:04:13', 'not payed'),
(13, 26, 20, 93.25, 18.65, '2018-11-07 11:01:49', '2018-11-07 11:01:49', 'not payed'),
(14, 26, 20, 93.25, 18.65, '2018-11-07 11:05:55', '2018-11-07 11:05:55', 'not payed'),
(15, 26, 20, 24093.2, 4818.65, '2018-11-07 11:06:26', '2018-11-07 11:06:26', 'not payed'),
(16, 26, 20, 24093.2, 4818.65, '2018-11-07 11:07:11', '2018-11-07 11:07:11', 'not payed'),
(17, 26, 20, 24093.2, 4818.65, '2018-11-07 12:02:09', '2018-11-07 12:02:09', 'not payed'),
(18, 26, 20, 24093.2, 4818.65, '2018-11-07 12:02:28', '2018-11-07 12:02:28', 'not payed'),
(19, 26, 20, 293.25, 58.65, '2018-11-07 12:18:58', '2018-11-07 12:18:58', 'not payed'),
(20, 26, 20, 293.25, 58.65, '2018-11-07 12:20:06', '2018-11-07 12:20:06', 'not payed'),
(21, 26, 20, 293.25, 58.65, '2018-11-07 12:22:02', '2018-11-07 12:22:02', 'not payed'),
(22, 26, 20, 293.25, 58.65, '2018-11-07 12:23:33', '2018-11-07 12:23:33', 'not payed'),
(23, 26, 20, 293.25, 58.65, '2018-11-08 09:55:01', '2018-11-08 09:55:01', 'not payed'),
(24, 26, 20, 293.25, 58.65, '2018-11-08 09:58:36', '2018-11-08 09:58:36', 'not payed'),
(25, 26, 20, 293.25, 58.65, '2018-11-08 09:59:13', '2018-11-08 09:59:13', 'not payed'),
(26, 26, 20, 293.25, 58.65, '2018-11-08 09:59:37', '2018-11-08 09:59:37', 'not payed'),
(27, 26, 20, 293.25, 58.65, '2018-11-08 11:36:17', '2018-11-08 11:36:17', 'not payed'),
(28, 26, 20, 293.25, 58.65, '2018-11-08 11:36:34', '2018-11-08 11:36:34', 'not payed'),
(29, 26, 20, 293.25, 58.65, '2018-11-08 11:38:01', '2018-11-08 11:38:01', 'not payed');

-- --------------------------------------------------------

--
-- Structure de la table `OrderLine`
--

CREATE TABLE `OrderLine` (
  `Id` int(11) NOT NULL,
  `QuantityOrdered` int(4) NOT NULL,
  `Meal_Id` int(11) NOT NULL,
  `Order_Id` int(11) NOT NULL,
  `PriceEach` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `OrderLine`
--

INSERT INTO `OrderLine` (`Id`, `QuantityOrdered`, `Meal_Id`, `Order_Id`, `PriceEach`) VALUES
(12, 5, 6, 7, 2.9),
(13, 23, 9, 7, 3.5),
(16, 23, 9, 21, 3.5),
(17, 23, 9, 22, 3.5),
(18, 23, 4, 22, 6.75),
(19, 23, 8, 22, 2.5),
(20, 23, 9, 23, 3.5),
(21, 23, 4, 23, 6.75),
(22, 23, 8, 23, 2.5),
(23, 23, 9, 24, 3.5),
(24, 23, 4, 24, 6.75),
(25, 23, 8, 24, 2.5),
(26, 23, 9, 25, 3.5),
(27, 23, 4, 25, 6.75),
(28, 23, 8, 25, 2.5),
(29, 23, 9, 26, 3.5),
(30, 23, 4, 26, 6.75),
(31, 23, 8, 26, 2.5),
(32, 23, 9, 27, 3.5),
(33, 23, 4, 27, 6.75),
(34, 23, 8, 27, 2.5),
(35, 23, 9, 28, 3.5),
(36, 23, 4, 28, 6.75),
(37, 23, 8, 28, 2.5),
(38, 23, 9, 29, 3.5),
(39, 23, 4, 29, 6.75),
(40, 23, 8, 29, 2.5);

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `Id` int(11) NOT NULL,
  `FirstName` varchar(40) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `BirthDate` date NOT NULL,
  `Address` varchar(250) NOT NULL,
  `City` varchar(40) NOT NULL,
  `ZipCode` char(5) NOT NULL,
  `Country` varchar(20) DEFAULT NULL,
  `Phone` char(10) NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `LastLoginTimestamp` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `User`
--

INSERT INTO `User` (`Id`, `FirstName`, `LastName`, `Email`, `Password`, `BirthDate`, `Address`, `City`, `ZipCode`, `Country`, `Phone`, `CreationTimestamp`, `LastLoginTimestamp`) VALUES
(13, 'Lany', 'Drak', 'lanydrak@gmail.com', '$2y$11$da49ee0166983095e516dOBi2NgIUK/LtPMI7nJz6grrrX458Ak4i', '1980-09-18', '4 rue Robert Aylé', 'Asnières-sur-Seine', '92600', 'France', '0612562798', '2016-03-04 10:54:16', NULL),
(14, 'Yann', 'Amarre', 'yanamarre@laposte.fr', '$2y$11$cafed1e6068a72ed41ebbu70q8kDo3bwl1UlLjfhLRLmYeMtWn3Gm', '1985-06-12', '18 rue Du Ralbolle', 'Nice', '06000', 'France', '0644328599', '2016-03-08 14:50:01', NULL),
(15, 'Jean', '', 'jean@yahoo.fr', '$2y$11$2f7b7170d65112f5957e8ez7CDymXyJ6gF4Mj9eRO.DBqeDW4wzey', '0000-00-00', '', '', '', '', '', '2016-03-08 15:07:47', NULL),
(16, 'Vincent', 'Tim', '20cent@caramail.com', '$2y$11$244ed51efc8ad70ca1e54O99tttnqTySf.cWMNRJZr4zJue933dCW', '2016-03-26', '15 rue Victor Hugo', 'Poitiers', '86000', 'France', '0645847710', '2016-03-10 11:45:10', NULL),
(17, 'Marie-Odile2', 'Duchemin', 'mo@coucou', '$2y$11$441546026f24de3bbbd01eJ4RaWveSpe9K7GsylqhKUwjch80oaY.', '1995-06-16', 'btrsbtrzesgbtersbvtersv', 'vfreqzfvrevre', 'AAAAA', 'cfrsqezvfreqgresq', '125123', '2016-03-10 12:05:00', NULL),
(18, 'Michel', 'Moustache', 'michel.moustache@csvs', '$2y$11$b3e71948269136c994facew9ccZNQcpiWWYaZMRm8SzWrHYru//EO', '1966-08-24', 'vfqdsvreqsvrsevres', 'vresvresvres', 'AAAAA', 'vfdsvrfqsevrfqse', '100100', '2016-03-10 12:07:02', NULL),
(19, 'baba', 'ha', 'root', 'troiswa', '1940-01-01', 'chez baba', 'babaland', '00000', 'france', '0000000000', '2018-10-29 16:53:11', NULL),
(22, 'babadfssdfsdfsdf', 'hafdssdfsdfdsf', 'rootfdsfdsf', '$2y$11$76f4461ae6f3a6dd46650OUPX4c4vERT9Y.K//bwvp9yx6Yp4Vo4u', '1940-01-01', 'chez babafsdfsdfsdfsdfsd', 'babaland', '00000', 'france', '0000000000', '2018-10-29 17:06:55', NULL),
(26, 'baba', 'ha', 'roota', '$2y$11$f679324d6c0c6c02500a4ueENNnlJDokLkkQwvWX7QB5.eZuB4i4C', '1940-01-01', 'chez baba', 'babaland', '00000', 'URSS', '0000000000', '2018-10-30 10:26:39', NULL),
(27, 'baba', 'ha', 'rootb', '$2y$11$ca4b32af75fe0e03bbbd4O3Ba6syr5bMP3b5ML3mh81hEjyaAZDJy', '1940-01-01', 'chez baba', 'babaland', '00000', 'URSS', '0000000000', '2018-10-30 10:35:56', NULL),
(29, 'baba', 'ha', 'rootc', '$2y$11$2070e867d65cea3359935OQiKNZwB7mJmfNgRsR1kn8K7kThzD6G6', '1940-01-01', 'chez baba', 'babaland', '00000', 'URSS', '0000000000', '2018-10-30 10:36:29', NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Booking`
--
ALTER TABLE `Booking`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `User_Id` (`User_Id`);

--
-- Index pour la table `Meal`
--
ALTER TABLE `Meal`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Order`
--
ALTER TABLE `Order`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `User_Id` (`User_Id`);

--
-- Index pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UniciteMealOrder` (`Meal_Id`,`Order_Id`),
  ADD KEY `Meal_Id` (`Meal_Id`),
  ADD KEY `Order_Id` (`Order_Id`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Booking`
--
ALTER TABLE `Booking`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT pour la table `Meal`
--
ALTER TABLE `Meal`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `Order`
--
ALTER TABLE `Order`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Booking`
--
ALTER TABLE `Booking`
  ADD CONSTRAINT `Booking_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Order`
--
ALTER TABLE `Order`
  ADD CONSTRAINT `Order_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  ADD CONSTRAINT `OrderLine_ibfk_1` FOREIGN KEY (`Meal_Id`) REFERENCES `Meal` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderLine_ibfk_2` FOREIGN KEY (`Order_Id`) REFERENCES `Order` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
