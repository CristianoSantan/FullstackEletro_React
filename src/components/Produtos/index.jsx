// Dependencias e biblioteca.
import React from 'react';

// Style, imgs, etc.
// import './styles.css';

const Produtos = () => {
    return (

        <main>
            <header class="container-fluid pl-4 bg-secondary text-white">
                <div class="container">
                    <h2>Produtos</h2>
                </div>
            </header>
            <div class="container">
                <div class="dropdown-show d-flex justify-content-center my-4">
                    <a class="btn dropdown-toggle d-flex align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p class="my-auto">Categorias</p>
                    </a>

                    <div class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                        <button class="dropdown-item" type="button" onclick="exibirTodos()">Todos(12)</button>
                        <button class="dropdown-item" type="button" onclick="exibirCategoria('geladeira')">Geladeiras(3)</button>
                        <button class="dropdown-item" type="button" onclick="exibirCategoria('fogao')">Fogões(2)</button>
                        <button class="dropdown-item" type="button" onclick="exibirCategoria('microondas')">Microondas(3)</button>
                        <button class="dropdown-item" type="button" onclick="exibirCategoria('lavadora')">Lavadora de Roupas(2)</button>
                        <button class="dropdown-item" type="button" onclick="exibirCategoria('lavaLoucas')">Lava Louças(2)</button>
                    </div>
                </div>

                <section class="row d-flex justify-content-between py-4">

                    {/* <?php
                $dados_json = file_get_contents("http://localhost/FullStackEletro/FullStackEletroRECODE/getContent.php?table=produtos");

                $dados = json_decode($dados_json, true);

                foreach ($dados as $key => $rows) {
                ?>

                    <div class="boxProduto col-lg-3 col-md-4 col-sm-6 col-xs-9 text-center" id="<?php echo $rows["categoria"]; ?>">
                        <img height="120" src="<?php echo $rows["imagem"]; ?>" onclick="destaque(this)"/>
                        <p class="border-bottom mb-0"><?php echo $rows["descricao"]; ?></p>
                        <p class="mb-0"><s>R$ <?php echo number_format($rows["preco"], 2, ",", "."); ?></s></p>
                        <p class="mb-0" style="font-size: 1.4rem; color: red;">R$ <?php echo number_format($rows["precofinal"], 2, ",", "."); ?></p>
                    </div>

                <?php
                }
                ?> */}
                </section>
            </div>
        </main>
    );
}

export default Produtos;