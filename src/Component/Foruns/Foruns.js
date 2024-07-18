import React from "react";
import { Link } from "react-router-dom";

function Foruns() {
    return(
        <div className="home">
            <div className="topo">
                <div className="container ">
                    <div className="tjto">
                        <h1 className="contact">Contatos</h1>
                        <h4 className="descricao">Telefones, Endereços e e-mails</h4>
                        <p className="textDesc">buscar contato junto ao Poder Judiciário do Tocantins.</p>
                    </div>
                    <div className="inputDiv ">
                        <input 
                            type='text' 
                            placeholder='Ex: TJTO Anexo 1'>
                        </input>
                        <button className="btnp">
                         Pesquisar
                        </button>
                    </div>
                 </div>
            </div>

            <div  className="containerDiv">
                <div className="center">
                    <h1 className="titulo">Pesquisa por Área</h1>
                    <p className="descTitle"> Escolha um dos campos abaixo</p>
                </div>
                <div className="campoBoxDiv">
                    <div className="campoBox">
                        <div className="box">
                            <Link to='/ComarcasDe1Entrância'>
                                <p>Comarcas de 1ª Entrância</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/ComarcasDe2Entrância'>
                            <p>Comarcas de 2ª Entrância</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/ComarcasDe3Entrância'>
                            <p>Comarcas de 3ª Entrância</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foruns;