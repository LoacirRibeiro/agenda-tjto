

import React from "react";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function DiretoriaDoCentroDeComunicaçãoSocial(){
    
        const item = [
            {
              id: "Gabinete do Diretor(a)",
              fone: "(63) 3218-4266",
              email: "cerimonial@tjto.jus.br",
              endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
              responsavel: "Dr(a) Kézia Reis de Souza",
            },
            {
              id: "Assessoria de Cerimonial",
              fone: "(63) 3218-4305 / 4441",
              email: "tjtocerimonial@gmail.com",
              endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-0076",
              responsavel: "",
            },
            {
              id: "Assessoria de Imprensa",
              fone: "(63) 3218-4437",
              email: "tjtoascom@gmail.com",
              endereco: "  Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
              responsavel: "",
            },
            
        ]
            return(
            <div className="container">
          <div className="title">
            <p>Resultado da Busca</p>
          </div>
          <ul className="itens">
            {item.map((index, chave) => (
              <li className="divContainer" key={index}>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapseOne_" + chave}
                        aria-expanded="true"
                        aria-controls={"collapseOne_" + chave}
                      >
                        {index.id}
                      </button>
                    </h2>
                    <div
                      id={"collapseOne_" + chave}
                      className="accordion-collapse collapse "
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="conteudoContato">
                          <p>
                            <MdPhone className="icon" />
                            <span className="telText">Telefone: {index.fone}</span>
                          </p>
    
                          <p>
                            <TfiEmail className="icon" />
                            <span className="telText">Email: {index.email}</span>
                          </p>
    
                          <p>
                            <MdOutlineLocationOn className="icon" />
                            <span className="telText">
                              Localização: {index.endereco}
                            </span>
                          </p>
    
                          <div className="linha"></div>
    
                          <p>
                            <VscAccount className="icon" />
                            <span className="telText"> {index.responsavel}</span>
                            <span className="tag">Responsável</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    
}

export default DiretoriaDoCentroDeComunicaçãoSocial;