import React from "react";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function EscolaSuperiorDaMagistraturaTocantinense(){
    const item = [
        {
          id: "Secretária da Diretoria Executiva",
          fone: "(63) 3218-4258",
          email: "diretoriaesmat@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: " Des. Marco Villas Boas",
        },
        {
          id: "Almoxarifado",
          fone: "(63) 3218-4246",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Assessoria Acadêmica e Pedagógica",
          fone: "(63) 3218-4230",
          email: "assessoriaesmat@gmail.com",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Assessoria de Comunicação",
          fone: "((63) 3218-4259",
          email: "ascomesmat@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Assessoria de Planejamento e Desenvolvimento Institucional",
          fone: "(63) 3218-4230",
          email: "assessoriaesmat@gmail.com",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Biblioteca",
          fone: "(63) 3218-4357",
          email: "biblioteca.esmat@gmail.com",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Copa ",
          fone: "	(63) 3218-2268",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Diretoria Executiva",
          fone: "(63) 3218-4258",
          email: "diretoriaesmat@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Diretoria Geral",
          fone: "(63) 3218-4258",
          email: "diretoriaesmat@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Divisão Administrativa",
          fone: "(63) 3218-4390",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Divisão Financeira",
          fone: "(63) 3218-4245",
          email: "esmat.financeiro@gmail.com",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Editora",
          fone: "(63) 3218-4232",
          email: "revistaesmat@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Estúdio de Gravação/Edição",
          fone: "(63) 3218-4249",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Núcleo de Capacitação e Aperfeiçoamento de Servidores",
          fone: "(63) 3218-4250",
          email: "nucas@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Núcleo de Formação e Aperfeiçoamento de Magistrados",
          fone: "(63) 3218-4408",
          email: "nufam@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Recepção",
          fone: "	(63) 3218-4229",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Revisora",
          fone: "(63) 3218-2140",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Secretaria Acadêmica",
          fone: "(63) 3218-4256",
          email: "saesmat@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Secretaria de Mestrado",
          fone: "(63) 3218-4247",
          email: "ppgpjdh@mail.uft.edu.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Supervisão Administrativa e Tecnológica",
          fone: "(63) 3218-4280",
          email: "tecnologiaesmat@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
      
      ];
    
      return (
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
                            <span className="telText">{index.responsavel}</span>
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

export default EscolaSuperiorDaMagistraturaTocantinense;