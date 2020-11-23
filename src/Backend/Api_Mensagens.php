<?php

include("ClassConexao.php");

class ClassMensagens extends ClassConexao
{
    #Exibição das mensagens em json
    public function exibeMsg()
    {
        $BFetch = $this->conectaDB()->prepare("select * from comentarios");
        $BFetch->execute();

        $J = [];
        $I = 0;

        while ($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "id" => $Fetch['id'],
                "nome" => $Fetch['nome'],
                "msg" => $Fetch['msg'],
                "data" => $Fetch['data'],            
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-Type: application/json");
        echo json_encode($J);
    }
}

$Mensagens = new ClassMensagens ();
$Mensagens->exibeMsg ();