import React from "react";

import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

function ComarcasDe2Entrância(){
    const item = [
        {
            id: "Alvorada",
            fone: "(63) 3353-1633 / 1385",
            endereco: "Av. Bernado Sayão, s/n, Qd. 46 Lote 01 e 02, Setor Jorge Figueiras - CEP: 77480-000 ",
            responsavel: "Fabiano Gonçalves Marques ",
            situacao: 'Titular',
        },
        {
            id: "Ananás",
            fone: "(63) 3442-1580 ",
            endereco: "Rua Olavo Bilac, 2-18 Praça, Rua São Pedro, s/n, Centro - CEP: 77890-000",
            responsavel: "Wanessa Lorena Martins de Sousa",
            situacao: 'Respondendo',
        },
        {
            id: "Araguaçu ",
            fone: "(63) 3384-1211 ",
            endereco: "Praça Raul de Jesus Lima, Nº 08 - CEP: 77475-000",
            responsavel: "Keyla Suely Silva da Silva ",
            situacao: 'Titular',
        },
        {
            id: "Arapoema ",
            fone: "(63) 3435-1194 ",
            endereco: "Av. Castelo Branco, Nº 685, Centro - CEP: 77780-000",
            responsavel: "Frederico Paiva Bandeira de Souza",
            situacao: 'Auxiliando',
        },
        {
            id: "Colméia",
            fone: "(63) 3457-1361 / 1099 ",
            endereco: "Rua 7, Nº 600 - Praça da Justiça- Centro - CEP: 77725-000  ",
            responsavel: "Marcelo Eliseu Rostirolla",
            situacao: 'Titular',
        },
        {
            id: "Filadélfia ",
            fone: "(63) 3478-1100",
            endereco: "Av. Wilson Martins de Castro, s/n, Centro - CEP: 77795-000 ",
            responsavel: "Luatom Bezerra Adelino De Lima",
            situacao: 'Titular',
        },
        {
            id: "Formoso do Araguaia",
            fone: "(63) 3357-1291",
            endereco: "Av. Hermínio Azevedo Soares, nº 150, Centro - CEP: 77470-000",
            responsavel: "Valdemir Braga de Aquino Mendonça",
            situacao: 'Titular',
        },
        {
            id: "Itaguatins",
            fone: "(63) 3477-1204 / 3477-1317",
            endereco: "Rua Deocleciano Amorim, nº 760 - Vila Lausa Maria - CEP: 77920-000 ",
            responsavel: "Jefferson David Asevedo Ramos  ",
            situacao: 'Respondendo'
,
        },
        {
            id: "Miranorte",
            fone: "(63) 3355-1602 / 1904",
            endereco: "Rua 32, s/n, Setor Sul - CEP: 77660-000",
            responsavel: "Ricardo Gagliardi",
            situacao: 'Titular',
        },
        {
            id: "Natividade",
            fone: "(63) 3372-1414",
            endereco: "Rua Deputado Adail Viana Santana, quadra 16, lote 03, Setor Ginasial - CEP: 77370 000 ",
            responsavel: "Jorge Amâncio de Oliveira",
            situacao: 'Respondendo',
        },
        {
            id: "Palmeirópolis ",
            fone: "(63) 3386-1120 / 1074",
            endereco: "Avenida das Palmeiras, nº 288, Centro - CEP: 77365-000 ",
            responsavel: "Emanuela da Cunha Gomes",
            situacao: 'Titular',
        },
        {
            id: "Paranã",
            fone: "(63) 3371-1552/1224 ",
            endereco: "Rua E, Qd. 25, Palácio da Justiça, Fórum Joaquim Teotônio Segurado - Centro - CEP:77360-000",
            responsavel: "Frederico Paiva Bandeira de Souza",
            situacao: 'Titular',
        },
        {
            id: "Peixe",
            fone: "(63) 3356-1193 - 3356 1164",
            endereco: "Rua 13, Esq. com Av. Napoleão de Queiroz, Qda. 21, Lts: 01.02,15 e 16 Setor Central - CEP: 77460-000",
            responsavel: " Ana Paula Araujo Aires Toribio ",
            situacao: 'Titular',
        },
        {
            id: "Xambioá",
            fone: "(63) 3473-1487",
            endereco: "Avenida A, s/n, Setor Leste - CEP: 77880-000",
            responsavel: "José Carlos Ferreira Machado",
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

export default ComarcasDe2Entrância;