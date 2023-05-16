import React from 'react';
import './style.css'

export default function ComponenteFundo(props){
    return(
        <section className='secao secao-fundo'>
            <div>
                <h1 className='fundo-titulo effect'>{props.titulo}</h1>
            </div>
        </section>
    );
}