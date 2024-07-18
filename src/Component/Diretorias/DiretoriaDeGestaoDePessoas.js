import React from "react";

import { VscAccount } from "react-icons/vsc";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

function DiretoriaDeGestaoDePessoas(){
    const item = [
        {
          id: "Recepção",
          fone: "(63) 3218-4422",
          email: "digep@tjto.jus.br",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Gabinete do Diretor(a)",
          fone: "(63) 3218-4422 / 4423",
          email: "digep@tjto.jus.br",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Assessoria de Projetos da Gestão de Pessoas",
          fone: "(63) 3218-4315",
          email: "aspgp@tjto.jus.br",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Assessoria Jurídica da Gestão de Pessoas",
          fone: "(63) 3218-4430",
          email: "asjurgp@tjto.jus.br",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Centro de Saúde",
          fone: "(63) 3218-4420",
          email: "",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Centro de Saúde - Sala de Acupuntura",
          fone: "(63) 3218-5271",
          email: "",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Divisão de Atendimento de Gestão de Pessoas - Seção de Serviço de Atendimento ao Servidor",
          fone: "(63) 3218-4251",
          email: "sates@tjto.jus.br",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Divisão de Atendimento de Gestão de Pessoas - Seção de Serviço de Suporte ao eGESP",
          fone: "	(63) 3218-4424/4355/4241",
          email: "see@tjto.jus.b",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Divisão de Folha de Pagamento - DFPG",
          fone: "(63) 3218-1093",
          email: "",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Divisão de Folha de Pagamento - DFPG - Seção de Cálculo/Seção de Lançamentos e Conferências",
          fone: "(63) 3218-4464",
          email: "folpag@tjto.jus.b",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Divisão de Gestão de Pessoas",
          fone: "(63) 3218-4299",
          email: "",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Divisão de Gestão de Pessoas - Seção de Serviço de Acompanhado na Carreira",
          fone: "(63) 3218-4295",
          email: "seac@tjto.jus.br",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Divisão de Gestão de Pessoas - Seção de Serviço de Registros Funcionais de Magistrado",
          fone: "(63) 3218-4261",
          email: "semag@tjto.jus.br",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Divisão de Gestão de Pessoas - Seção de Serviço de Registros Funcionais de Servidores",
          fone: "(63) 3218-4424",
          email: "seser@tjto.jus.br",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Divisão de Gestão de Pessoas - Seção de Serviços de Estágio",
          fone: "(63) 3218-429",
          email: "seges@tjto.jus.br",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Grupo de Gerenciamento de Equipes Multidisciplinares",
          fone: "(63) 3218-4272/ 4273",
          email: "credenciamentoggem@tjto.jus.br",
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
 

export default DiretoriaDeGestaoDePessoas;