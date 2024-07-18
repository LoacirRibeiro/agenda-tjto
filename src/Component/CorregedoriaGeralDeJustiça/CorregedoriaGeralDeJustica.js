import React from "react";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function CorregedoriaGeralDeJustica(){
    const item = [
        {
          id: "Secretária do Gabinete do Corregedor",
          fone: "(63) 3218-4291 / (63) 3901-9091",
          email: "corregedoria@tjto.jus.br",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "Desa. Maysa Vendramini Rosal",
        },
        {
            id: "Recepção da Corregedoria",
            fone: "(63) 3218-4288 / (63) 3901-9090",
            email: "",
            endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
            responsavel: "",
        },
        {
          id: "Assessoria de Comunicação e Imprensa - ASCOM",
          fone: "(63) 3901-9057",
          email: "diadm@tjto.jus.br",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Assessoria de Planejamento, Projetos e Ações Estratégicas - ASPLAN",
          fone: "(63) 3218-1365",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Assessoria de Tecnologia da Informação e de Gestão de Sistemas - ASTIC",
          fone: "(63) 3218-4370 / (63) 3218-4293 / (63) 3901-9060 / (63) 3901-9065 / (63) 3901-9066 / (63) 3901-9068",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Assessoria Jurídica - ASJ",
          fone: "(63) 3218-4257",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Assessoria Jurídica Extrajudicial III",
          fone: "	(63) 3218-4257",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Comissão Estadual Judiciária de Adoção - CEJA",
          fone: "	(63) 3218-4278",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Comissão Permanente de Processo Administrativo Disciplinar - COMPAD",
          fone: "	(63) 3218-4356",
          email: "",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Comissão Permanente de Sindicância - COMSIND",
          fone: "(63) 3218-4356",
          email: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          endereco: "",
          responsavel: "",
        },
        {
          id: "Coordenadoria da Cidadania - COCID",
          fone: "(63) 3218-1642",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Coordenadoria de Administração - COAD",
          fone: "(63) 3218-4440",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Coordenadoria de Correição, Planejamento e Aprimoramento da 1ª Instância - CPLAN",
          fone: "(63) 3901-9059",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Coordenadoria de Serviços Notariais e de Registro - CSEX",
          fone: "(63) 3218-4267",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Copa",
          fone: "	(63) 3218-4267",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Divisão de Acompanhamento e Monitoramento das Atividades Correcionais e de Fiscalização dos Serviços Notariais e de Registro - DIVEX",
          fone: "(63) 3218-4586 / 4287",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Divisão de Correição e Inspeção - DIVCOR",
          fone: "(63) 3218-4509",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Divisão de Correição, Inspeção e Fiscalização dos Serviços Notariais e de Registro - DIVCOREX",
          fone: "(63) 3218-2043 / 2045",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Divisão de Monitoramento de Metas e Indicadores - DIVMON",
          fone: "(63) 3901-9061",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Divisão de Monitoramento Pós-Correcional - DIVPOS",
          fone: "(63) 3901-9056",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Divisão de Suporte e Planejamento à Gestão - DIVSUPLAN",
          fone: "(63) 98411-5576",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Gabinete dos Juízes Auxiliares",
          fone: "(63) 3218-4425 / 4286",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Grupo de Monitoramento e Fiscalização do Sistema Carcerário - GMF",
          fone: "(63) 3218-4235",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Núcleo de Apoio Técnico(NAT)",
          fone: "(63) 3218-4690",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Núcleo de Prevenção e Regularização Fundiária - NUPREF",
          fone: "	(63) 3218-4231",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Ouvidoria",
          fone: "0800 644 4334",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Recepção - Juízes Auxiliares",
          fone: "	(63) 3218-4431",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Seção de Registro Funcional, Controle e Cadastro de Pessoal - SEREGIS",
          fone: "	(63) 3218-4502",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Secretaria Administrativa de Procedimento e Arquivo",
          fone: "(63) 3218-4508",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Serviço de Distribuição, Protocolo e Atendimento",
          fone: "(63) 3218-4282 ",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
          responsavel: "",
        },
        {
          id: "Serviço Disciplinar e de Movimentação de Magistrado - SEMAGIS",
          fone: "(63) 3218-4281",
          email: "",
          endereco: "Quadra 103 Norte, Rua NO 07, Complemento N2 CJ 01 LT. 41 T 01C - Anexo III. - Palmas-TO - CEP: 77001-032",
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
};
export default CorregedoriaGeralDeJustica;