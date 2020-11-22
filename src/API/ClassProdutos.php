<?php

include("ClassConexao.php");

class ClassProduto extends ClassConexao
{
    #Exibição dos produtos em um json
    public function exibeProdutos()
    {
        $BFetch = $this->conectaDB()->prepare("select * from produtos");
        $BFetch->execute();

        $J = [];
        $I = 0;

        while ($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "idproduto" => $Fetch['idproduto'],
                "categoria" => $Fetch['categoria'],
                "descricao" => $Fetch['descricao'],
                "preco" => $Fetch['preco'],
                "precofinal" => $Fetch['precofinal'],
                "imagem" => $Fetch['imagem'],                
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-Type: application/json");
        echo json_encode($J);
    }
}

$Produtos = new ClassProduto ();
$Produtos->exibeProdutos ();
