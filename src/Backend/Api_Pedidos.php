<?php

include("ConnectDB.php");

class ClassPedido extends ClassConexao
{
    #Exibição dos produtos em um json
    public function exibeProdutos()
    {
        $BFetch = $this->conectaDB()->prepare("SELECT *, valorUnitario*quantidade as total FROM `pedidos` inner JOIN produtos on pedidos.idproduto = produtos.idproduto");
        $BFetch->execute();

        $J = [];
        $I = 0;

        while ($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "idpedidos" => $Fetch['idpedidos'],
                "nomeCliente" => $Fetch['nomeCliente'],
                "endereco" => $Fetch['endereco'],
                "telefone" => $Fetch['telefone'],
                "valorUnitario" => $Fetch['valorUnitario'],
                "quantidade" => $Fetch['quantidade'],  
                "descricao" => $Fetch['descricao'],   
                "total" => $Fetch['total'],             
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-Type: application/json");
        echo json_encode($J);
    }
}

$Produtos = new ClassPedido ();
$Produtos->exibeProdutos ();