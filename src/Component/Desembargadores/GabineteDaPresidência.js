import React, { useState } from "react";
import { MdPhone, MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";

function GabineteDaPresidencia() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      categoria: "Gabinete da Presidência",
      items: [
        {
          id: "Recepção",
          fone: "(63) 3218-4302",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: "Desa. Etelvina Maria Sampaio"
        },
        {
          id: "NIS – Núcleo de Inteligência e Segurança Institucional",
          fone: "(63) 3218-4349",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: ""
        },
        {
          id: "Assessoria Administrativa",
          fone: "(63) 3218-4307 / 4310",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: ""
        },
        {
          id: "Assessoria Jurídica",
          fone: "(63) 3218-4304 / 4409",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: ""
        },
        {
          id: "Gabinete Juiz Auxiliar",
          fone: "(63) 3218-4446 / 4593",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: ""
        },
        {
          id: "GMF",
          fone: "(63) 3218-4235",
          email: "",
          endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
          responsavel: ""
        }
      ]
    }
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = categories.flatMap(category =>
    category.items.filter(item =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.responsavel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.categoria.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container">
      <div className="inputDiv">
        <input 
          type='text' 
          placeholder='Buscar...'
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="title">
        <p>Resultado da Busca</p>
      </div>
      <ul className="itens">
        {filteredItems.map((item, chave) => (
          <li className="divContainer" key={chave}>
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
                    {item.id}
                  </button>
                </h2>
                <div
                  id={"collapseOne_" + chave}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="conteudoContato">
                      <p>
                        <MdPhone className="icon" />
                        <span className="telText">Telefone: {item.fone}</span>
                      </p>

                      <p>
                        <TfiEmail className="icon" />
                        <span className="telText">Email: {item.email}</span>
                      </p>

                      <p>
                        <MdOutlineLocationOn className="icon" />
                        <span className="telText">
                          Localização: {item.endereco}
                        </span>
                      </p>

                      <div className="linha"></div>

                      <p>
                        <VscAccount className="icon" />
                        <span className="telText">{item.responsavel}</span>
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

export default GabineteDaPresidencia;
