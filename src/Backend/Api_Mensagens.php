<?php

include("ConnectDB.php");

class ClassMensagens extends ClassConexao
{
    #Exibição das mensagens em json
    public function exibeMsg()
    {
        $BFetch = $this->conectaDB()->prepare("select * from comentarios order by data desc");
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

    //Função para Gravar a mensagem no BANCO
    public function gravarMensagem()
    {

        if (isset($_POST['nome']) && isset($_POST['msg'])) {
            $nome = $_POST['nome'];
            $msg = $_POST['msg'];

            $conexao = $this->conectaDB();

            $sql = "insert into comentarios (nome, msg) values ('$nome','$msg')";
            $result = $conexao->query($sql);
        }
        $M[] = [
            "resultado" => $result
        ];

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($M);
    }

    //Função para rota do PHP
    public function rota()
    {
        $metodo = $_SERVER['REQUEST_METHOD'];

        switch ($metodo) {
            case 'GET':
                $this->exibeMsg();
                break;
            case 'POST':
                $this->gravarMensagem();
                break;
            default:
                # code...
                break;
        }
    }
}

$Mensagens = new ClassMensagens();
$Mensagens->rota();
