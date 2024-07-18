
import React from "react";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function DiretoriaGeral(){
    const item = [
        {
          id: "Gabinete do(a) Diretor(a)",
          fone: "63 3218-4289",
          email: "dg@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "Dr(a) Ana Carina Mendes Souto",
        },
        {
          id: "Recepção",
          fone: "63 3218-4375",
          email: "dg@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Assessoria Técnica da Diretoria-Geral",
          fone: "63 3218-4252",
          email: "astdg@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Controle Interno da Diretoria-Geral",
          fone: "63 3901-9049",
          email: "coidg@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Coordenadoria de Assessoramento Jurídico-Administrativo",
          fone: "63 3218-4373",
          email: "dg@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Divisão de Planejamento e Orçamento da Diretoria-Geral",
          fone: "63 3218-4450",
          email: "dg@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Junta Médica",
          fone: "63 3218-4447",
          email: "juntamedica@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Secretaria de Processos Administrativos",
          fone: "63 3218-4308",
          email: "spadg@tjto.jus.br",
          endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-00Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
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

export default DiretoriaGeral;