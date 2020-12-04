-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Dez-2020 às 23:06
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(1, 'Cristiano', 'minha primeira msg.', '2020-10-25 22:06:39'),
(8, 'Joao', 'outra msgm aqui.', '2020-10-25 22:49:36'),
(43, 'Eli', 'agora vai', '2020-11-26 18:07:50'),
(44, 'Cristiano', 'Aqui foi ', '2020-12-01 21:18:33'),
(45, 'Cristiano', 'ola', '2020-12-01 22:54:47'),
(46, 'Cristiano', 'agora foi neh', '2020-12-03 12:30:11'),
(47, 'joao', 'de novo', '2020-12-03 12:35:06');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `idpedidos` int(11) NOT NULL,
  `nomeCliente` varchar(100) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `Produto` varchar(100) DEFAULT NULL,
  `valorUnitario` float DEFAULT NULL,
  `quantidade` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`idpedidos`, `nomeCliente`, `endereco`, `telefone`, `Produto`, `valorUnitario`, `quantidade`) VALUES
(1, 'Jose', NULL, '1111-2222', 'Geladeira', 1500, 2),
(2, 'Joao', 'Rua B', '2222-3333', 'microondas', 500, 3),
(3, 'Ana', 'Rua C', '3333-4444', 'lavadora', 2000, 5),
(4, 'Amelia', 'Rua D', '4444-5555', 'batedeira', 1000, 4);

-- --------------------------------------------------------

SELECT * FROM `pedidos` inner JOIN produtos on pedidos.idproduto = produtos.idproduto

SELECT *, valorUnitario*quantidade as total FROM `pedidos` inner JOIN produtos on pedidos.idproduto = produtos.idproduto

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idproduto`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`) VALUES
(1, 'geladeira', 'Geladeira Frost free Brastemp side Inverse 540L', '6389.00', '5019.00', 'img/Geladeira Frost Free Brastemp Side Inverse 540 litros.jpg'),
(2, 'geladeira', 'Geladeira Frost Free Brastemp Branca 375 litros', '2068.00', '1910.90', 'img/Geladeira Frost Free Brastemp Branca 375 litros.jpg'),
(3, 'geladeira', 'Geladeira Frost Free Consul Prata 340 litros', '2199.00', '2069.00', 'img/Geladeira Frost Free Consul Prata 340 litros.jpg'),
(4, 'fogao', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', '1200.00', '1129.00', 'img/Fogão 4 Bocas Consul Inox com Mesa de Vidro.jpg'),
(5, 'fogao', 'Fogão de Piso 4 Bocas Atlas Monaco com Acedimento Automático', '600.00', '519.70', 'img/Fogão de Piso 4 Bocas Atlas Monaco com Acedimento Automático.jpeg'),
(6, 'microondas', 'Micro-ondas Consul 32 Litros Inox 220v', '580.00', '409.88', 'img/Micro-ondas Consul 32 Litros Inox 220v.jpg'),
(7, 'microondas', 'Microondas 25L Espelhado Philco 220v', '508.70', '464.53', 'img/Microondas 25L Espelhado Philco 220v.jpg'),
(8, 'microondas', 'Forno de Microondas Eletrolux 20L Branco', '459.00', '436.05', 'img/Forno de Microondas Eletrolux 20L Branco.jpg'),
(9, 'lavaLoucas', 'Lava-Louças Electrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch', '3500.00', '2799.00', 'img/Lava-Louças Electrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch.jpg'),
(10, 'lavaLoucas', 'Lava Louça Compacta 8 Serviços Branca 127V Brastemp', '2070.50', '1730.61', 'img/Lava Louça Compacta 8 Serviços Branca 127V Brastemp.jpg'),
(11, 'lavadora', 'Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca', '1500.00', '1214.10', 'img/Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca.jpg'),
(12, 'lavadora', 'Lavadora de Roupas Philco Inverter 12KG', '2300.00', '2179.90', 'img/Lavadora de Roupas Philco Inverter 12KG.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedidos`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idproduto`),
  ADD UNIQUE KEY `imagem` (`imagem`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedidos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
