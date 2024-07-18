import React from "react";

import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

function ComarcasDe1Entrância(){
    const item = [
        {
          id: "Araguacema ",
          fone: "(63) 3472-1155 / 1005 / 1547",
          endereco: "Rua da Justiça, s/n, Setor Planalto - CEP: 77690-000 ",
          responsavel: "Cledson José Dias Nunes",
          situacao: 'Respondendo',
        },
        {
          id: "Goiatins",
          fone: "(63) 3469-1033 ",
          endereco: "Av. Bernado Sayão, esquina com Rua Paranaíba, Quadra 12, Setor 02, Lote 174 - CEP: 77770-000",
          responsavel: "Herisberto e Silva Furtado Caldas",
          situacao: 'Respondendo',
        },
        {
          id: "Itacajá",
          fone: "(63) 3439-1422 / 4417 / 4420",
          endereco: "Rua C, s/nº, Centro - CEP: 77620-000 ",
          responsavel: "Luciana Costa Aglantzakis ",
          situacao: 'Respondendo',
        },
        {
          id: "Novo Acordo",
          fone: "(63) 3369-1168 ",
          endereco: "Rua Silvestrina Guimarães, s/nº, centro - CEP: 77610-000 ",
          responsavel: "Aline Marinho Bailão Iglesias",
          situacao: 'Titular',
        },
        {
          id: "Ponte Alta do Tocantins",
          fone: "(63) 3378-1410 / 1133 ",
          endereco: "Avenida Barão do Rio Branco, s/n, Setor Aeroporto - CEP: 77590-000 ",
          responsavel: "Jorge Amâncio de Oliveira ",
          situacao: 'Titular',
        },
        {
          id: "Wanderlândia",
          fone: "(63) 3453-1138 (99979 1254",
          endereco: "Rua Raimundo Pinto s/n, Centro - CEP: 77860-000 ",
          responsavel: "José Carlos Ferreira Machado",
          situacao: 'Titular',
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
                        <MdOutlineLocationOn className="icon" />
                        <span className="telText">
                          Localização: {index.endereco}
                        </span>
                      </p>

                      <div className="linha"></div>

                      <p>
                        <VscAccount className="icon" />
                        <span className="telText">{index.responsavel}</span>
                        <span className="tag">{index.situacao}</span>
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

export default ComarcasDe1Entrância;