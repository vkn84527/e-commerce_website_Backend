-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2021 at 08:52 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `squareboatdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(1) NOT NULL,
  `admin_name` varchar(25) NOT NULL,
  `admin_phone` varchar(25) NOT NULL,
  `admin_email` varchar(25) NOT NULL,
  `admin_password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_phone`, `admin_email`, `admin_password`, `created_at`) VALUES
(1, 'Admin1', '1234567890', 'admin@gmail.com', '$2a$10$eNkvKez.MBBTZ8YiaqP9ouni1NaFM4I9dX1Gm7Z/AxiRuRwFE7vp2', '2021-10-09 15:47:38');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(25) NOT NULL,
  `customer_phone` varchar(25) NOT NULL,
  `customer_email` varchar(25) NOT NULL,
  `customer_password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `customer_phone`, `customer_email`, `customer_password`, `created_at`) VALUES
(1, 'customer1', '1234567890', 'customer@gmail.com', '$2a$10$qAKpzETIPpPKDrQBuVB/weMT.JBv7zORdaXCkmh4zlwLvMUNqpIk.', '2021-10-09 15:50:02'),
(4, 'customer2', '1234567890', 'customer2@gmail.com', '$2a$10$6TwRRjrFFzlbo1bH7iQTFOHt29YdscsR5h224lqrxrvmoWmqw5n.q', '2021-10-10 06:44:11');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `product_price` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`order_id`, `product_id`, `admin_id`, `created_at`, `product_price`, `customer_id`) VALUES
(1, 5, 1, '2021-10-09 18:24:51', 500, 1),
(2, 1, 5, '2021-10-09 18:26:29', 500, 1),
(3, 5, 1, '2021-10-09 18:27:53', 500, 1),
(4, 5, 1, '2021-10-09 18:28:40', 500, 1),
(5, 5, 1, '2021-10-09 18:32:27', 500, 1),
(6, 5, 1, '2021-10-09 18:33:09', 500, 1),
(7, 5, 1, '2021-10-09 18:36:55', 500, 1),
(8, 1, 1, '2021-10-09 18:44:04', 1000, 1),
(9, 6, 1, '2021-10-10 06:51:59', 13000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(101) NOT NULL,
  `product_title` varchar(25) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `product_description` varchar(200) DEFAULT NULL,
  `product_price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_title`, `admin_id`, `created_at`, `product_description`, `product_price`) VALUES
(1, 'shirt', 1, '2021-10-09 17:33:58', 'men-shirt', 1000),
(5, 'T-shirt', 1, '2021-10-09 17:34:40', 'Mens-T-shirt', 500),
(6, 'Redmi 9 prime', 1, '2021-10-10 06:48:19', 'Redmi phone', 13000),
(7, 'Redmi 9', 1, '2021-10-10 06:48:40', 'Redmi phone', 10000),
(9, 'Nokia 1500 ', 1, '2021-10-10 06:51:34', 'Nokia phone', 3000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(101) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
