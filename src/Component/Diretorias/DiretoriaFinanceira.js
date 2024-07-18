
import React from "react";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function DiretoriaFinanceira(){
    
        const item = [
            {
              id: "Gabinete do Diretor(a)",
              fone: "(63) 3218-4450",
              email: "difin@tjto.jus.br",
              endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
              responsavel: "Dr(a)  Gizelson Monteiro de Moura",
            },
            {
              id: "Divisão de Contabilidade",
              fone: "(63) 3218-4479",
              email: "difin@tjto.jus.br",
              endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
              responsavel: "",
            },
            {
              id: "Divisão de Execução Orçamentária e Financeira",
              fone: "(63) 3218-4451",
              email: "difin@tjto.jus.br",
              endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
              responsavel: "",
            },
            {
              id: "Divisão dos Fundos Especiais - DFESP",
              fone: "(63) 3218-4326",
              email: "dfesp@tjto.jus.br",
              endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
              responsavel: "",
            },
            {
              id: "Fundo Especial de Compensação da Gratuidade dos Atos de Registro Civil de Pessoas Naturais - FUNCIVIL",
              fone: "(63) 3218-4326",
              email: "dfesp@tjto.jus.br",
              endereco: "  Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
              responsavel: "",
            },
            {
              id: "Fundo Especial de Compensação e Eletronização de Serventias Extrajudiciais - FUNCESE",
              fone: "(63) 3218-4326",
              email: "dfesp@tjto.jus.br",
              endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
              responsavel: "",
            },
            {
              id: "Fundo Especial de Modernização e Aprimoramento do Poder Judiciário - FUNJURIS",
              fone: "(63) 3218-4326",
              email: "dfesp@tjto.jus.br",
              endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
              responsavel: "",
            },
            {
              id: "Fundo Estadual de Segurança dos Magistrados - FUNSEG",
              fone: "(63) 3218-4326",
              email: "dfesp@tjto.jus.br",
              endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
              responsavel: "",
            },
            {
              id: "Gerenciamento dos Débitos Processuais Finais - GDPF",
              fone: "(63) 3218-4449/ 4419 / 186",
              email: "gdpf@tjto.jus.br",
              endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
              responsavel: "",
            },
            {
              id: "Seção de Diárias",
              fone: "(63) 3218-4451",
              email: "dfesp@tjto.jus.br",
              endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
              responsavel: "",
            },
            {
              id: "Serviço de Acompanhamento de Arrecadação - SAAR",
              fone: "(63) 3218-4326",
              email: "dfesp@tjto.jus.br",
              endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
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

export default DiretoriaFinanceira;