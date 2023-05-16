import React from "react";
import ComponenteFundo from "../ComponenteFundo";
import ComponenteSobre from "../ComponenteSobre";
import ComponenteCitacao from "../ComponenteCitacao";
import './style.css'
import ComponenteProduto from "../ComponenteProduto";
import ComponenteAutor from "../ComponenteAutor";

export default function PaginaPrincipal(){
    return(
        <div className="all">
            <ComponenteFundo titulo="A Biblioteca da Meia-noite"/>
            <ComponenteSobre/>
            <ComponenteCitacao/>
            <ComponenteFundo/>
            <ComponenteProduto/>
            <ComponenteAutor/>
        </div>
    );
}