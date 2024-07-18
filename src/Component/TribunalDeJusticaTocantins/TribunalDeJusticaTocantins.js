import React from "react";
import { Link } from "react-router-dom";
import './TribunalDeJusticaTocantins.css'

function TribunalDeJusticaTocantins(){
    return(
        <div className="Tribunal">
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
                            <Link to='/Asmeto'>
                                <p>ASMETO (Associação dos Magistrados do Tocantins)</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/AssessoriaMilitar'>
                            <p>Assessoria Militar</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/Astj'>
                            <p>ASTJ (Associação dos Servidores do Tribunal de Justiça)</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/ComissãoDeJurisprudenciaEDocumentação'>
                            <p>Comissão de Jurisprudencia e Documentação</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/ComissãoDeSeleçãoETreinamento'>
                            <p>Comissão de Seleção e Treinamento</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/ConselhoDaMagistratura'>
                            <p>Conselho da Magistratura</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/CoordenadoriaDeGestãoEstratégica'>
                            <p>Coordenadoria de Gestão Estratégica, Estatística e Projetos</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/CoordenadoriaEstadualDaMulher'>
                            <p>Coordenadoria Estadual da Mulher em Situação de Violência Doméstica e Familiar</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/EspacoSaude'>
                            <p>Espaço Saúde</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/JuntaMedica'>
                            <p>Junta Médica</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/JusticaMilitar'>
                            <p>Justiça Militar</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/JusticaMovel'>
                            <p>Justiça Móvel</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/NúcleoDeApoioAsComarcas'>
                            <p>Núcleo de Apoio as Comarcas</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/NucleoPermanentedeMetodos'>
                            <p>Núcleo Permanente de Métodos Consensuais de Solução de Conflitos</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/Oab'>
                            <p>OAB</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/OuvidoriaJudiciaria'>
                            <p>Ouvidoria Judiciária</p>
                            </Link>
                        </div>
                        <div className="box">
                            <Link to='/ServicoSocial'>
                            <p>Serviço Social</p>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TribunalDeJusticaTocantins;