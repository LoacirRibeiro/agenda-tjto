import React from "react";

import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function CoordenadoriaDeGestãoEstratégica (){
    const item = [
        {
          id: "Assessoria de Estatística)",
          fone: "(63) 3218-4485",
          email: "estatisticacoges@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "Luciene das Graças Dantas",
          situacao: "coordenadora responsável"
        },
        {
          id: "Analistas",
          fone: "(63) 3218-4445",
          email: "",
          endereco: "",
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

export default CoordenadoriaDeGestãoEstratégica;