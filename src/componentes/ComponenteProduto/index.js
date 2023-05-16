import React from "react";
import './style.css';


export default function ComponenteProduto(){
    return(
        <section className="secao secao-produto">
            <div className="limita-secao">
            <div>
                <h2><span class="verde">Com verniz fosforescente!</span></h2>
            </div>
            <div>
                <img src=".\assets\livro-exemplar.png"></img>
            </div>
                <p className="desc">A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo.</p>
            <div class="link-compra">
                <a link class="botao amazon" href="https://www.amazon.com.br/Biblioteca-Meia-Noite-Matt-Haig/dp/6558380544" target="_blank">COMPRAR</a>
        </div>
        </div>
        </section>
    );
}