import React from "react";
import './style.css'


export default function ComponenteSobre(){
    return(
        <section className="secao secao-sobre">
            <div className="limita-secao">
                <h1 className="til">Sobre</h1>

                <p class="conteudo">  Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez no passado, ela
                vive se perguntando o que poderia ter acontecido caso tivesse vivido de maneira diferente. Após ser demitida e seu gato ser 
                atropelado, Nora vê pouco sentido em sua existência e decide colocar um ponto final em tudo. Porém, quando se vê na <span class="effect verde">Biblioteca
                    da Meia-Noite</span>, Nora ganha uma oportunidade única de viver todas as vidas que poderia ter vivido.
                Neste lugar entre a vida e a morte, e graças à ajuda de uma velha amiga, Nora pode, finalmente, se mudar para a Austrália,
                reatar relacionamentos antigos – ou começar outros –, ser uma estrela do rock, uma glaciologista, uma nadadora olímpica... 
                enfim, as opções são infinitas. Mas será que alguma dessas outras vidas é realmente melhor do que a que ela já tem?</p>
            </div>
        </section>
    );
}