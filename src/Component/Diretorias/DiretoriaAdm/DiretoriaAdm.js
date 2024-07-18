import React from "react";
import "./DiretoriaAdm.css";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function DiretoriaAdm() {
  const item = [
    {
      id: "Recepção - Anexo I",
      fone: "(63) 3218-1086",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel:     "Ronilson Pereira da Silva",
    },
    {
      id: "Recepção - TJ",
      fone: "(63) 3218-4300 / 4401",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Recepção - Gabinete",
      fone: "(63) 3218-4283 / 4386",
      email: "diadm@tjto.jus.br",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "Ronilson Pereira da Silva",
    },
    {
      id: "Assessoria da Diretoria Administrativa (ASDIADM)",
      fone: "(63) 3218-4385",
      email: "diadm@tjto.jus.br",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Central de Compras (CCOMPRAS)",
      fone: "(63) 3218-4380 / 4457 / 4496 / 4397",
      email: "compras@tjto.jus.br",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Comissão Permanente de Licitação - Anexo I (COLIC)",
      fone: "(63) 3218-4590",
      email: "cpl@tjto.jus.br",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Copa - 2º Piso - TJ",
      fone: "(63) 3218-4444",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Copa Central - Térreo - TJ",
      fone: "(63) 3218-4400",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Copa Presidência - TJ",
      fone: "(63) 3218-4418",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Correspondência - TJ",
      fone: "(63) 3218-4512",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Divisão Contratos e Convênios (DCC)",
      fone: "(63) 3218-4383 / 4453",
      email: "dcc@tjto.jus.br",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Divisão de Almoxarifado - Anexo II (SADIST)",
      fone: "(63) 3218-4391 / 4392",
      email: "almoxarifado@tjto.jus.br",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Divisão de Correspondência - Anexo I (DCOREP",
      fone: "(63) 3218-4415",
      email: "correspondencia@tjto.jus.br",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Divisão de Patrimônio - Anexo II (DPATR",
      fone: "(63) 3218-4393 / 4237",
      email: "patrimonio@tjto.jus.b",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Divisão de Serviços Gerais - Anexo I (DSG)",
      fone: "(63) 3218-4399",
      email: "dsg@tjto.jus.br",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Motoristas - Anexo I",
      fone: "(63) 3218-4374",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Motoristas - Anexo II (SETRAN)",
      fone: "(63) 3218-1086",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Motoristas - Desembargadores TJ (SETRAN)",
      fone: "(63) 3218-4365",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Serviço de Elaboração de Editais da Divisão de Contratos e Convênios (SEDCC)",
      fone: "(63) 3901-9611",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Serviço de Limpeza - Anexo I",
      fone: "(63) 3218-4294",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Serviço de Limpeza - TJ",
      fone: "(63) 3218-4414",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Serviço de Transporte - Anexo I (SETRAN)",
      fone: "(63) 3218-4395",
      email: "setran@tjto.jus.br",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
      responsavel: "",
    },
    {
      id: "Serviços Gerais - TJ (DSG)",
      fone: "(63) 3218-4387",
      email: "",
      endereco: "Quadra 103 Norte, Rua NO 11 Lote 02. Edifício Amaro Empresarial, Anexo I.  Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
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

export default DiretoriaAdm;
