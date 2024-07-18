import React from "react";

import { Link } from "react-router-dom";

function Diretorias(){
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
                            <Link to='/DiretoriaAdm'>
                                <p>Diretoria Administrativa</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/DiretoriaControladoriaInterna'>
                            <p>Diretoria Controladoria Interna</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/DiretoriaDeGestaoDePessoas'>
                                <p>Diretoria de Gestão de Pessoas</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/DiretoriaDeInfraestruturaEObras'>
                                <p>Diretoria de Infraestrutura e Obras</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/DiretoriaDeTecnologiaDeInformação'>
                            <p>Diretoria de Tecnologia de Informação</p>
                            </Link>
                        </div>
                        <div className="box">
                        <Link to='/DiretoriaDoCentroDeComunicaçãoSocial'>
                            <p>Diretoria do Centro de Comunicação Social</p>
                        </Link>
                        </div>
                        <div className="box">
                        <Link to='/DiretoriaFinanceira'>
                            <p>Diretoria Financeira</p>
                        </Link>
                        </div>
                        <div className="box">
                        <Link to='/DiretoriaGeral'>
                            <p>Diretoria Geral</p>
                            </Link>
                        </div>
                        <div className="box">
                        <Link to='/DiretoriaJudiciaria'>
                            <p>Diretoria Judiciária</p>
                        </Link>
                        </div>
                        <div className="box">
                        <Link to='/DivisãodeContrainteligênciadoNIS'>
                            <p>Divisão de Contrainteligência do NIS</p>
                        </Link>
                        </div>
                        <div className="box">
                        <Link to='/DivisãoDeServiçosGeraisdoTribunalDeJustiça'>
                            <p>Divisão de Serviços Gerais do Tribunal de Justiça</p>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Diretorias;
