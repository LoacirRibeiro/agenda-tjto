import React from "react";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function DiretoriaDeTecnologiaDeInformação(){
    const item = [
        {
          id: "Secretária do Diretor(a)",
          fone: "(63) 3218-4410",
          email: "dtinf@tjto.jus.br",
          endereco: "Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "Dr(a) Alice Carla de Sousa Setubal",
        },
        {
          id: "Assessoria do Gabinete do Diretor",
          fone: "0800 721 8044",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Central de Serviços",
          fone: "(63) 3218-4327",
          email: "servicedesk@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Divisão de Manutenção e Suporte ao Usuário - DMSU",
          fone: "(63) 3218-2485",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Divisão de Sistemas - DSI",
          fone: "(63) 3218-2496",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Gabinete do Diretor",
          fone: "(63) 3218-4518",
          email: "gabdti@tjto.jus.br",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
          responsavel: "",
        },
        {
          id: "Suporte de Serviço de Telecomunicação - SERTEL",
          fone: "(63) 3218-4221",
          email: "",
          endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
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

export default DiretoriaDeTecnologiaDeInformação;