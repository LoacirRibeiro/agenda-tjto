import React from "react";

import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function ComissãoDeSeleçãoETreinamento (){
    const item = [
        {
          id: "Comissão de Seleção e Treinamento",
          fone: "(63) 3218-4313",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-035",
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
                        <span className="telText"> Dr</span>
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
};

export default ComissãoDeSeleçãoETreinamento;