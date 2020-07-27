-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-07-2020 a las 23:39:36
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `flujo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documento`
--

CREATE TABLE `documento` (
  `carnet` text DEFAULT NULL,
  `notas` text DEFAULT NULL,
  `titulo` text DEFAULT NULL,
  `boleta` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `documento`
--

INSERT INTO `documento` (`carnet`, `notas`, `titulo`, `boleta`) VALUES

('165', 'presento', 'presento', 'presento'),
('1923', 'presento', 'presento', 'presento'),
('23564', 'presento', 'presento', 'presento'),
('54987', 'presento', 'presento', 'presento'),
('17891','presento', 'presento', 'presento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proceso`
--

CREATE TABLE `proceso` (
  `codFlujo` varchar(3) DEFAULT NULL,
  `codProceso` varchar(4) DEFAULT NULL,
  `codProcesoSiguiente` varchar(4) DEFAULT NULL,
  `tipo` varchar(1) DEFAULT NULL,
  `codRol` varchar(4) DEFAULT NULL,
  `pantalla` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proceso`
--

INSERT INTO `proceso` (`codFlujo`, `codProceso`, `codProcesoSiguiente`, `tipo`, `codRol`, `pantalla`) VALUES
('F1', 'P1', 'P2', 'I', 'E', 'averigua.inc.php'),
('F1', 'P2', 'P3', 'P', 'E', 'listadocumentos.php'),
('F1', 'P3', 'P4', 'P', 'E', 'inserciondocumentos.php'),
('F1', 'P4', NULL, 'C', 'K', 'documentos.php'),
('F1', 'P5', 'P7', 'P', 'K', 'bienvenida.php'),
('F1', 'P6', NULL, 'F', NULL, 'finalizacion.php');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `procesocondicion`
--

CREATE TABLE `procondicionales` (
  `codFlujo` varchar(3) DEFAULT NULL,
  `codProceso` varchar(4) DEFAULT NULL,
  `codProcesoSI` varchar(4) DEFAULT NULL,
  `codProcesoNO` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `procondicionales`
--

INSERT INTO `procondicionales` (`codFlujo`, `codProceso`, `codProcesoSI`, `codProcesoNO`) VALUES
('F1', 'P4', 'P5', 'P6');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
