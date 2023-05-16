import React from "react";
import './style.css'


export default function ComponenteAutor(){
    return(
        <section className="secao secao-autor">
            <div className="limita-secao">
                <div>
                    <img src=".\assets\autor.jpg"></img>
                </div>
                
                <div class="conteudo">
                    <p>Matt Haig é o autor best-seller internacional de Razões para continuar vivo - a obra autobiográfica que permaneceu na lista
                        dos dez mais vendidos da Inglaterra por 46 semanas seguidas -, Observações sobre um planeta nervoso e seis romances para
                        adultos, incluindo A possessão do Sr. Cave, Como parar o tempo, Os humanos, Os Radley e Sociedade dos pais mortos. Matt 
                        também escreve livros premiados para crianças e adolescentes, incluindo Floresta sombria e Um menino chamado Natal, que está 
                        sendo adaptado para o cinema. Vencedor do Prêmio Goodreads de Ficção de 2020, A biblioteca da meia-noite é seu romance mais
                        recente e já vendeu mais de 2 milhões de exemplares no mundo todo. Seus livros já foram traduzidos para mais de 40 idiomas 
                        e venderam mais de 3 milhões de exemplares em todo o mundo.</p>
                </div>
                <div className="links-boxes">
                    <div className="link-box">
                        <img src=".\assets\icons\ig.png"></img>
                        <a href="https://www.instagram.com/mattzhaig/" target="_blank">/mattzhaig</a>
                    </div>
                    <div className="link-box">
                        <img src=".\assets\icons\tw.png"></img>
                        <a href="https://twitter.com/matthaig1" target="_blank">/matthaig1</a>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}