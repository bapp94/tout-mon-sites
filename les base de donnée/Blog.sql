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
-- Base de données :  `Blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `Author`
--

CREATE TABLE `Author` (
  `Id` int(11) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Author`
--

INSERT INTO `Author` (`Id`, `FirstName`, `LastName`) VALUES
(1, 'JC', 'VD'),
(2, 'Sylvester', 'Stallone'),
(3, 'Terry', 'Crews'),
(4, 'jet', 'li');

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Category`
--

INSERT INTO `Category` (`Id`, `Name`) VALUES
(1, 'le feu sa brule'),
(2, 'et l\'eau sa mouille');

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `Id` int(11) NOT NULL,
  `NickName` varchar(50) NOT NULL,
  `Content` text NOT NULL,
  `CreationTimesTamp` datetime NOT NULL,
  `Post_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `comment`
--

INSERT INTO `comment` (`Id`, `NickName`, `Content`, `CreationTimesTamp`, `Post_Id`) VALUES
(1, 'gregerger', 'grgergerg', '2018-10-16 12:26:05', 10),
(2, 'hgfhfggfdgdfg', 'gfdgdfgdfg', '2018-10-16 12:33:57', 10),
(3, 'fdsfsdf', 'fdsfsdfsdf', '2018-10-16 12:36:43', 10),
(4, 'gregerg', 'gregergre', '2018-10-16 12:37:09', 10),
(5, 'gregerg', 'gregergre', '2018-10-16 12:37:09', 10),
(6, 'hfghfgh', 'hgfhfghfg', '2018-10-16 12:41:42', 10),
(7, 'gfdgdf', 'gfdgdfg', '2018-10-16 12:42:34', 16),
(8, 'gfdgdfg', 'gfgdfgdfgdfg', '2018-10-16 12:52:08', 11),
(9, 'd', 'd', '2018-10-16 12:55:52', 10);

-- --------------------------------------------------------

--
-- Structure de la table `Post`
--

CREATE TABLE `Post` (
  `Id` int(11) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Content` text NOT NULL,
  `CreationTimesTamp` datetime NOT NULL,
  `Author_id` int(11) NOT NULL,
  `Categorie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Post`
--

INSERT INTO `Post` (`Id`, `Title`, `Content`, `CreationTimesTamp`, `Author_id`, `Categorie_id`) VALUES
(14, 'gre', 'gre', '2018-10-16 10:23:16', 1, 1),
(15, 'bravo les conneries', 'gfddgdfgfdgdfg', '2018-10-16 10:24:56', 1, 1),
(16, 'bravo les conneries', 'gdfgdfgdfgdfg', '2018-10-16 10:30:17', 1, 1),
(17, 'hgdhgdf', 'ghdfghdfghdfghdfghdfghdfgh', '2018-10-17 14:55:03', 3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `Id` int(11) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Users`
--

INSERT INTO `Users` (`Id`, `FirstName`, `LastName`, `Email`, `Password`) VALUES
(1, 'salut', 'yo', 'baptiste@mail.com', '123456789'),
(2, 'Grand ', 'salutation ', 'Homme@gmail.com', 'troiswa'),
(3, 'biebn ', 'salutation ', 'roo', '$2y$11$a12433fbddd6cb818ae3eurk8Kbnd7RTQ.Wwy6FzqHlQ5lZrm7fVK'),
(4, 'salut', 'salutation ', 'root', '$2y$11$364dadda8a9c5e561abb0uD3Cu1VImQ1YkFAGhd9sdA7A/pHzpCpC'),
(5, 'b', 'a', 'root', '$2y$11$0dac77245061625ff327cuVJWwFpl4nUc1R5Pr2EAcds1q67idaNe'),
(6, 'b', 'b', 'b', '$2y$11$d55ecf81fe4708b7d017eu0f6tEfmVYNc5JGT3DHzoUevGfa6galm');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Author`
--
ALTER TABLE `Author`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Author`
--
ALTER TABLE `Author`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `Post`
--
ALTER TABLE `Post`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
