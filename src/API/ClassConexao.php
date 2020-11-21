<?php

abstract class ClassConexao
{
    #conexão com o banco de dados
    protected function conectaDB()
    {
        try {
            $con = new PDO("mysql:host=localhost;dbname=fseletro", "root", "");
            return $con;
        } catch (PDOException $Erro) {
            return $Erro->getMessage();
        }
    }
}
