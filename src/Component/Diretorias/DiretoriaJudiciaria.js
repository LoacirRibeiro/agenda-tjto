import React from "react";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function DiretoriaJudiciaria(){
    const item = [
        {
          id: "Gabinete do(a) Diretor(a)",
          fone: "(63) 3218-4467",
          email: "dijud@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "Dr(a) Wallson Brito da Silva",
        },
        {
          id: "Gabinete da Diretoria",
          fone: "(63) 3218-4234",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Recepção / Secretária",
          fone: "(63) 3218-4461",
          email: "distribuição@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "Dr(a) Wallson Brito da Silva",
        },
        {
          id: "Secretaria de Recursos Constitucionais",
          fone: "(63) 3218-4438",
          email: "francisco.sobrinho@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "1ª Câmara Cível - Secretário - Adalberto Avelino de Oliveira - Setor de Análise",
          fone: "(63) 3218-4524 / 4466",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "1ª Câmara Cível - Setor de Julgamento",
          fone: "(63) 3218-4377",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "1ª Câmara Criminal - Secretário - Wandelberte Rodrigues de Oliveira",
          fone: "(63) 3218-4470 / 3218-4434",
          email: "1acamaracriminal@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "2ª Câmara Cível - Secretário - Carlos Galvão",
          fone: "(63) 3218-5568 / 4336 / 4337",
          email: "2camaracivel@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "2ª Câmara Criminal - Secretária - Maria Sueli S. Amaral Cury",
          fone: "(63) 3218-4334 / 3218-4335",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Arquivo Geral",
          fone: "	(63) 3218-4417",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Contadoria Judicial",
          fone: "(63) 3218-4490 / (63) 3218-4238",
          email: "cojuntjto.contadoria@gmail.com",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Diario da Justiça",
          fone: "(63) 3218-4443",
          email: "dj@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Divisão de Análise/Baixa processual",
          fone: "(63) 3218-4462",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Divisão de Distribuição de Processsos",
          fone: "(63) 3218-4481",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Divisão de Precatórios",
          fone: "(63) 3218-4486 / (63) 3218-4224",
          email: "	precatorios@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Núcleo de Gerenciamento de Precedentes- NUGEP",
          fone: "(63) 3218-4477",
          email: "nugepac@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Núcleo de Parametrização - NUPARA",
          fone: "(63) 3218-4279",
          email: "nupara@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Oficiais de Justiça (2ª Instancia)",
          fone: "	(63) 3218-4483",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Secretaria do Pleno",
          fone: "(63) 3218-4473 / 4459 / 4406",
          email: "secpleno@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "",
        },
        {
          id: "Suporte E-Proc",
          fone: "(63) 3218-4248/ 4388",
          email: "processoeletronico@tjto.jus.br",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
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

export default DiretoriaJudiciaria;