import React from "react";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

function ComarcasDe3Entrância(){
    const item = [
        {
            id: "Araguaína",
            fone: "(63) 3501-1500 / 1501 / 1502",
            endereco: "Av. Filadélfia, nº 3650 - Setor das Autarquias Estaduais - CEP: 77813-905 ",
            responsavel: "Fabiano Ribeiro",
            situacao: 'Respondendo',
        },
        {
            id: "Araguatins",
            fone: "(63) 3474-1499 ",
            endereco: "Av. Araguaia, nº 1210 - CEP: 77950-000 ",
            responsavel: "Nely Alves da Cruz",
            situacao: 'Respondendo',
        },
        {
            id: "Arraias ",
            fone: "(63) 3653-1601 / 2003",
            endereco: "Rua 18 Qd. 46 Lt. 10 - Setor Parque das Colinas - CEP: 77330-000  ",
            responsavel: "Márcio Ricardo Ferreira Machado",
            situacao: 'Respondendo',
        },
        {
            id: "Augustinópolis ",
            fone: "(63) 3456- 0123/1271",
            endereco: " Rua Antonio Mauro do Nascimento, s/n, Setor Bela Vista - CEP: 77960-000",
            responsavel: "Jefferson David Asevedo Ramos",
            situacao: 'Titular',
        },
        {
            id: "Colinas do Tocantins",
            fone: "(63) 3476-1671/ 2014",
            endereco: "Rua Presidente Dutra Nº 337 - Centro - CEP: 77760-000",
            responsavel: "Marcelo Laurito Paro ",
            situacao: 'Respondendo',
        },
        {
            id: "Cristalândia",
            fone: "(63) 3354 0427/1657",
            endereco: " Av. Madre verônica n°580, centro - CEP: 77490-000 ",
            responsavel: "Wellington Magalhães ",
            situacao: 'Titular',
        },
        {
            id: "Dianópolis",
            fone: "(63) 3692-1866/1538/1129",
            endereco: "Rua do Ouro Nº 235 Qd 69 A Lt 01- Setor Novo Horizonte - CEP: 77300-000  ",
            responsavel: "Rodrigo da Silva Perez Araujo",
            situacao: 'Respondendo',
        },
        {
            id: "Guaraí",
            fone: "(63) 3464-1042/ 4171/ 2726",
            endereco: " Rua 8, esquina com Av. Paraná - CEP: 77700-000 ",
            responsavel: "Fábio Costa Gonzaga ",
            situacao: 'Respondendo',
        },
        {
            id: "Gurupi",
            fone: "(63) 3311-2850",
            endereco: "Av. Rio Grande do Norte, s/n, Entre as Ruas 3 e 4 - CEP: 77410-080 ",
            responsavel: "Edilene Pereira de Amorim Alfaix Natário",
            situacao: 'Respondendo',
        },
        {
            id: "Miracema do Tocantins",
            fone: "(63) 3366-1585 / 1131 /2641",
            endereco: "Rua Tocantins, s/n, esquina com a Rua Paranaíba, Setor Santa Filomena - CEP: 77650-000 ",
            responsavel: "Marcello Rodrigues de Ataídes ",
            situacao: 'Respondendo',
        },
        {
            id: "Palmas",
            fone: "(63) 3218-4531 / 4285 /4371",
            endereco: "Av. Teotônio Segurado, 502 Sul, Fórum Marquês São João da Palma - CEP: 77021-654 ",
            responsavel: "Flávia Afini Bovo ",
            situacao: 'Respondendo',
        },
        {
            id: "Paraíso do Tocantins",
            fone: "(63) 3602-1360 / 3361-1127",
            endereco: " Avenida Bernardo Sayão Esquina C/ Rua Osvaldo Aranha, Qd-50 A Lote 03 - CEP:77000-600",
            responsavel: "Renata do Nascimento e Silva ",
            situacao: 'Respondendo',
        },
        {
            id: "Pedro Afonso ",
            fone: "(63) 3466-1221/ 1407",
            endereco: "Avenida João Damasceno de Sá, nº 1000, Setor Aeroporto - CEP: 77710-000 ",
            responsavel: "Milton Lamenha de Siqueira",
            situacao: 'Respondendo',
        },
        {
            id: "Porto Nacional",
            fone: "(63) 3363-1144 / 1720",
            endereco: "Área do Centro Olímpico Ademar Ferreira da Silva, s/nº - Anel Viário, Centro - CEP:77500-000 ",
            responsavel: "Elias Rodrigues dos Santos",
            situacao: 'Respondendo',
        },
        {
            id: "Taguatinga",
            fone: "(63) 3654-1332 / 36542266",
            endereco: "Rua 21, lote 1, quadra 6- Setor: Waldemar Carlos de França, esquina com a rua Pedrode Sousa Regino. - CEP: 77320-000 ",
            responsavel: "Vandré Marques e Silva",
            situacao: 'Respondendo',
        },
        {
            id: "Tocantinópolis",
            fone: "(63) 3471-3070 / 3280",
            endereco: "Rua XV de Novembro, Nº 700- Centro - CEP: 77900-000 ",
            responsavel: "Helder Carvalho Lisboa ",
            situacao: 'Respondendo',
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

export default ComarcasDe3Entrância;