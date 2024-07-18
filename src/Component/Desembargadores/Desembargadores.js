import React from "react";
import { Link } from "react-router-dom";

function Desembargadores(){

    const items = [
        
    ]
    
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
                                <Link to='/GabineteDaPresidencia'>
                                    <p>Gabinete da Presidência</p>
                                </Link>
                            </div>
                            <div className="box">
                                <Link to='/DesAdolfoAmaroMendes'>
                                <p>Gabinete Des. Adolfo Amaro Mendes</p>
                                </Link>
                            </div>
                            <div className="box">
                                <Link to='/DesEurípedesLamounier'>
                                    <p>Gabinete Des. Eurípedes Lamounier</p>
                                </Link>
                            </div>
                            <div className="box">
                                <Link to='/DesHelvéciodeBritoMaiaNeto'>
                                    <p>Gabinete Des. Helvécio de Brito Maia Neto</p>
                                </Link>
                            </div>
                            <div className="box">
                                <Link to='/DesJoãoRigoGuimarães'>
                                <p>Gabinete Des. João Rigo Guimarães</p>
                                </Link>
                            </div>
                            <div className="box">
                            <Link to='/DesMarcoVillasBoas'>
                                <p>Gabinete Des. Marco Villas Boas</p>
                            </Link>
                            </div>
                            <div className="box">
                            <Link to='/DesPedroNelsondeMirandaCoutinho'>
                                <p>Gabinete Des. Pedro Nelson de Miranda Coutinho</p>
                            </Link>
                            </div>
                            <div className="box">
                            <Link to='/DesaÂngelaIssaHaonat'>
                                <p>Gabinete Desa. Ângela Issa Haonat</p>
                                </Link>
                            </div>
                            <div className="box">
                            <Link to='/DesaÂngelaMRibeiroPrudente'>
                                <p>Gabinete Desa. Ângela M. Ribeiro Prudente</p>
                            </Link>
                            </div>
                            <div className="box">
                            <Link to='/DesaEtelvinaMariaSampaioFelipe'>
                                <p>Gabinete Desa. Etelvina Maria Sampaio Felipe</p>
                            </Link>
                            </div>
                            <div className="box">
                            <Link to='/DesaJacquelineAdornoDeLaCruzBarbosa'>
                                <p>Gabinete Desa. Jacqueline Adorno de La Cruz Barbosa</p>
                            </Link>
                            </div>
                            <div className="box">
                            <Link to='/DesaMaysaVendraminiRosal'>
                                <p>Gabinete Desa. Maysa Vendramini Rosal</p>
                            </Link>
                            </div>
                            <div className="box">
                            <Link to='/JuizConvocadoJocyGomesDeAlmeida'>
                                <p>Gabinete Juiz Convocado Jocy Gomes de Almeida</p>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
   
};

export default Desembargadores;