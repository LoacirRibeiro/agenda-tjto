import React, { useState } from "react";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";


function Pesquisa(){

    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState(false);

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
      },
      {
        categoria: "Gabinete Desa. Ângela Issa Haonat",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4360",
                email: "",
                endereco:
                  "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Desa. Ângela Issa Haonat",
            },
            {
                id: "Assessoria",
                fone: "(63) 3218-4361",
                email: "gabdes.angelahaonat@tjto.jus.br",
                endereco:
                  "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Desa. Ângela Issa Haonat",
            },
        ]
      },
      {
        categoria: "Gabinete Desa. Ângela M. Ribeiro Prudente",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4360",
                email: "",
                endereco:
                  "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Desa. Ângela Issa Haonat",
              },
              {
                id: "Assessoria",
                fone: "(63) 3218-4361",
                email: "gabdes.angelahaonat@tjto.jus.br",
                endereco:
                  "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Desa. Ângela Issa Haonat",
              },
        ]
      },
      {
        categoria: "Gabinete Des. Adolfo Amaro Mendes",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4340",
                email: "gabdes.adolfoamaro@tjto.jus.br",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. Adolfo Amaro Mendes",
              },
              {
                id: "Assessoria Jurídica",
                fone: "(63) 3218-4341 / 4342",
                email: "",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "",
              },
              {
                id: "Chefe de Gabinete",
                fone: "(63) 3218-4339",
                email: "",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "",
              },
        ]
      },
      {
        categoria: "Gabinete Desa. Etelvina Maria Sampaio Felipe",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4340",
                email: "gabdes.adolfoamaro@tjto.jus.br",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. Adolfo Amaro Mendes",
              },
              
        ]
      },
      {
        categoria: "Gabinete Desa. Jacqueline Adorno de La Cruz Barbosa",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4312",
                email: "",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Desa. Jacqueline Adorno de La Cruz Barbosa",
              },
              {
                id: "Assessoria Jurídica",
                fone: "(63) 3218-4318 / 4316 / 4309",
                email: "gabdes.jacquelineadorno@tjto.jus.br",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Desa. Jacqueline Adorno de La Cruz Barbosa",
              },
              
        ]
      },
      {
        categoria: "Gabinete Desa. Maysa Vendramini Rosal",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4428",
                email: "",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Desa. Maysa Vendramini Rosal",
              },
              {
                id: "Assessoria Jurídica",
                fone: "(63) 3218-4429 / 4432 / 4427",
                email: "gabdes.maysa@tjto.jus.br",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Desa. Maysa Vendramini Rosal",
              },
              
              
        ]
      },
      {
        categoria: "Gabinete Des. Eurípedes Lamounier",
        items: [
            {
                id: "Recepção/Secretária",
                fone: "(63) 3218-4331",
                email: "gabdes.euripedeslamounier@tjto.jus.br",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. Eurípedes Lamounier",
              },
              {
                id: "Assessoria jurídica",
                fone: "	(63) 3218-4332",
                email: "",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. Eurípedes Lamounier",
             },
                     
              
              
        ]
      },
      {
        categoria: "Gabinete Des. Helvécio de Brito Maia Neto",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4324",
                email: "gabdes.helveciomaia@tjto.jus.br",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. Helvécio de Brito Maia Neto",
            },   
        ]
      },
      {
        categoria: "Gabinete Des. João Rigo Guimarães",
        items: [
            {
                id: "Recepção",
                fone: "(63) 3218-4506",
                email: "",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. João Rigo Guimarães",
              },
              {
                id: "Assessoria",
                fone: "(63) 3218-4505",
                email: "gabdes.joaorigo@tjto.jus.br",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. João Rigo Guimarães",
              },
              {
                id: "Chefe de Gabinete",
                fone: "(63) 3218-4362",
                email: "",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. João Rigo Guimarães",
              },
        ]
      },
      {
        categoria: "Gabinete Des. Marco Villas Boas",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4346",
                email: "",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. Marco Villas Boas",
              },
              {
                id: "Chefe de Gabinete",
                fone: "(63) 3218-4317",
                email: "gabdes.marcosvillasboas@tjto.jus.br",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Des. Marco Villas Boas",
              },
        ]
      },
      {
        categoria: "Gabinete Des. Pedro Nelson de Miranda Coutinho",
        items: [
            {
                id: "Assessoria",
                fone: "(63) 3218-4501",
                email: "gabdes.pedronelson@tjto.jus.b",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: " Des. Pedro Nelson de Miranda Coutinho",
              },
              {
                id: "Gabinete",
                fone: "(63) 3218-4475 / 4474",
                email: "",
                endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: " Des. Pedro Nelson de Miranda Coutinho",
              },
        ]
      },
      {
        categoria: "Gabinete Juiz Convocado Jocy Gomes de Almeida",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4367",
                email: "gab2jocy@gmail.com",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Juiz Convocado Jocy Gomes de Almeida",
              },
        ]
      },
      {
        categoria: "Diretoria Administrativa",
        items: [
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
        ]
      },
      {
        categoria: "Diretoria Controladoria Interna",
        items: [
          {
            id: "Gabinete do Diretor(a)",
            fone: "(63) 3218-4322",
            email: "dicin@tjto.jus.br",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Analistas",
            fone: "(63) 3218-4445",
            email: "",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Auditoria",
            fone: "(63) 3218-4327",
            email: "",
            endereco: "",
            responsavel: "",
          },
          
        ]
      },
      {
        categoria: "Diretoria de Gestão de Pessoas",
        items: [
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
      },
      {
        categoria: "Diretoria de Infraestrutura e Obras",
        items: [
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
        ]
      },
      {
        categoria: "Diretoria de Tecnologia de Informação",
        items: [
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
      },
      {
        categoria: "Diretoria do Centro de Comunicação Social",
        items: [
          {
            id: "Gabinete do Diretor(a)",
            fone: "(63) 3218-4266",
            email: "cerimonial@tjto.jus.br",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "Dr(a) Kézia Reis de Souza",
          },
          {
            id: "Assessoria de Cerimonial",
            fone: "(63) 3218-4305 / 4441",
            email: "tjtocerimonial@gmail.com",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-0076",
            responsavel: "",
          },
          {
            id: "Assessoria de Imprensa",
            fone: "(63) 3218-4437",
            email: "tjtoascom@gmail.com",
            endereco: "  Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
        ]
      },
      { categoria: "Diretoria Financeira",
       
        items: [
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
      },
      {
        categoria: "Diretoria Geral",
        items: [
          {
            id: "Gabinete do(a) Diretor(a)",
            fone: "63 3218-4289",
            email: "dg@tjto.jus.br",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "Dr(a) Ana Carina Mendes Souto",
          },
          {
            id: "Recepção",
            fone: "63 3218-4375",
            email: "dg@tjto.jus.br",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
          {
            id: "Assessoria Técnica da Diretoria-Geral",
            fone: "63 3218-4252",
            email: "astdg@tjto.jus.br",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
          {
            id: "Controle Interno da Diretoria-Geral",
            fone: "63 3901-9049",
            email: "coidg@tjto.jus.br",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
          {
            id: "Coordenadoria de Assessoramento Jurídico-Administrativo",
            fone: "63 3218-4373",
            email: "dg@tjto.jus.br",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
          {
            id: "Divisão de Planejamento e Orçamento da Diretoria-Geral",
            fone: "63 3218-4450",
            email: "dg@tjto.jus.br",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
          {
            id: "Junta Médica",
            fone: "63 3218-4447",
            email: "juntamedica@tjto.jus.br",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
          {
            id: "Secretaria de Processos Administrativos",
            fone: "63 3218-4308",
            email: "spadg@tjto.jus.br",
            endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-00Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Diretoria Judiciária",
        items: [
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
      },
      {
        categoria: "Divisão de Contrainteligência do NIS",
        items: [
          {
            id: "Divisão de Contrainteligência do NIS",
            fone: "(63) 3901-9228",
            email: "",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "Tenente-Coronel Presley Cruz Nunes",
          },
        ]
      },
      {
        categoria: "Divisão de Serviços Gerais do Tribunal de Justiça",
        items: [
          {
            id: "Copa Central",
            fone: "(63) 3218-4400",
            email: "",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel:"" ,
          },
          {
            id: "Recepção",
            fone: "	(63) 3218-4401",
            email: "",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
          {
            id: "Sala da Limpeza",
            fone: "(63) 3218-4414	",
            email: "",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Corregedoria-Geral de Justiça",
        items: [
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
        ]
      },
      {
        categoria: "Escola Superior da Magistratura Tocantinense",
        items: [
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
        ]
      },
      {
        categoria: "Comarcas de 1ª Entrância",
        items: [
          {
            id: "Araguacema ",
            fone: "(63) 3472-1155 / 1005 / 1547",
            endereco: "Rua da Justiça, s/n, Setor Planalto - CEP: 77690-000 ",
            responsavel: "Cledson José Dias Nunes",
            situacao: 'Respondendo',
          },
          {
            id: "Goiatins",
            fone: "(63) 3469-1033 ",
            endereco: "Av. Bernado Sayão, esquina com Rua Paranaíba, Quadra 12, Setor 02, Lote 174 - CEP: 77770-000",
            responsavel: "Herisberto e Silva Furtado Caldas",
            situacao: 'Respondendo',
          },
          {
            id: "Itacajá",
            fone: "(63) 3439-1422 / 4417 / 4420",
            endereco: "Rua C, s/nº, Centro - CEP: 77620-000 ",
            responsavel: "Luciana Costa Aglantzakis ",
            situacao: 'Respondendo',
          },
          {
            id: "Novo Acordo",
            fone: "(63) 3369-1168 ",
            endereco: "Rua Silvestrina Guimarães, s/nº, centro - CEP: 77610-000 ",
            responsavel: "Aline Marinho Bailão Iglesias",
            situacao: 'Titular',
          },
          {
            id: "Ponte Alta do Tocantins",
            fone: "(63) 3378-1410 / 1133 ",
            endereco: "Avenida Barão do Rio Branco, s/n, Setor Aeroporto - CEP: 77590-000 ",
            responsavel: "Jorge Amâncio de Oliveira ",
            situacao: 'Titular',
          },
          {
            id: "Wanderlândia",
            fone: "(63) 3453-1138 (99979 1254",
            endereco: "Rua Raimundo Pinto s/n, Centro - CEP: 77860-000 ",
            responsavel: "José Carlos Ferreira Machado",
            situacao: 'Titular',
          },
        ]
      },
      {
        categoria: "Comarcas de 2ª Entrância",
        items: [
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
      },
      {
        categoria: "Comarcas de 3ª Entrância",
        items: [
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
      },
      {
        categoria: "Asmeto ",
        items: [
          {
            id: "ASMETO(Associação dos Magistrados do Tocantins)",
            fone: "(63) 3223-9300",
            email: "",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-013",
            responsavel: "Juíza Odete Batista Dias Almeida",
          },
        ]
      },
      {
        categoria: "Assessoria Militar",
        items: [
          {
            id: "Assessoria Militar - Gabinete",
            fone: "(63) 3218-4364",
            email: "asmil@tjto.jus.br",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "Coronel Jaizon Veras Barbosa",
          },
          {
            id: "Assessoria Militar Contratos",
            fone: "(63) 3218-4525",
            email: "",
            endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
          {
            id: "Guarita",
            fone: "(63) 3218-4476",
            email: "",
            endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
          {
            id: "Sala de Monitoramento",
            fone: "(63) 3218-4402",
            email: "",
            endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "ASTJ",
        items: [
          {
            id: "ASTJ (Associação dos Servidores do Tribunal de Justiça)",
            fone: "(63) 3218-4405",
            email: "",
            endereco: "",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Comissão de Jurisprudencia e Documentação",
        items: [
          {
            id: "Comissão de Jurisprudencia e Documentação",
            fone: "(63) 3218-4515",
            email: "",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-034",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Comissão de Seleção e Treinamento",
        items: [
          {
            id: "Comissão de Seleção e Treinamento",
            fone: "(63) 3218-4313",
            email: "",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-035",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Conselho da Magistratura",
        items: [
          {
            id: "Recepção / Secretário",
            fone: "(63) 3218-4314",
            email: " ",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: " Rita de Cacia Abreu de Aguiar",
          },
        ]
      },
      {
        categoria: "Coordenadoria de Gestão Estratégica, Estatística e Projetos",
        items: [
          {
            id: "Assessoria de Estatística)",
            fone: "(63) 3218-4485",
            email: "estatisticacoges@tjto.jus.br",
            endereco: " Quadra 103 Norte, Rua NO 11 com Av. NS 01 Lote 02, Anexo I. Plano Diretor Norte. Palmas-TO - CEP: 77001-036",
            responsavel: "Luciene das Graças Dantas",
            situacao: "coordenadora responsável"
          },
          {
            id: "Analistas",
            fone: "(63) 3218-4445",
            email: "",
            endereco: "",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Coordenadoria Estadual da Mulher em Situação de Violência Doméstica e Familiar",
        items: [
          {
            id: "Gabinete do Diretor(a)",
            fone: "(63) 3218-4322",
            email: "dicin@tjto.jus.br",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Analistas",
            fone: "(63) 3218-4445",
            email: "",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Auditoria",
            fone: "(63) 3218-4327",
            email: "",
            endereco: "",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Espaço Saúde",
        items: [
          {
            id: "Gabinete do Diretor(a)",
            fone: "(63) 3218-4322",
            email: "dicin@tjto.jus.br",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Analistas",
            fone: "(63) 3218-4445",
            email: "",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Auditoria",
            fone: "(63) 3218-4327",
            email: "",
            endereco: "",
            responsavel: "",
          },
          
        ]
      },
      {
        categoria: "Junta Médica",
        items: [
          {
            id: "Gabinete do Diretor(a)",
            fone: "(63) 3218-4322",
            email: "dicin@tjto.jus.br",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Analistas",
            fone: "(63) 3218-4445",
            email: "",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Auditoria",
            fone: "(63) 3218-4327",
            email: "",
            endereco: "",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Justiça Militar",
        items: [
          {
            id: "Gabinete do Diretor(a)",
            fone: "(63) 3218-4322",
            email: "dicin@tjto.jus.br",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Analistas",
            fone: "(63) 3218-4445",
            email: "",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Auditoria",
            fone: "(63) 3218-4327",
            email: "",
            endereco: "",
            responsavel: "",
          },
          
        ]
      },
      {
        categoria: "Justiça Móvel",
        items: [
          {
            id: "Gabinete do Diretor(a)",
            fone: "(63) 3218-4322",
            email: "dicin@tjto.jus.br",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Analistas",
            fone: "(63) 3218-4445",
            email: "",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Auditoria",
            fone: "(63) 3218-4327",
            email: "",
            endereco: "",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Núcleo de Apoio as Comarcas",
        items: [
          {
            id: "Gabinete do Diretor(a)",
            fone: "(63) 3218-4322",
            email: "dicin@tjto.jus.br",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Analistas",
            fone: "(63) 3218-4445",
            email: "",
            endereco: "",
            responsavel: "",
          },
          {
            id: "Auditoria",
            fone: "(63) 3218-4327",
            email: "",
            endereco: "",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Diretoria Administrativa",
        items: [
            {
                id: "Recepção / Secretária",
                fone: "(63) 3218-4367",
                email: "gab2jocy@gmail.com",
                endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
                responsavel: "Juiz Convocado Jocy Gomes de Almeida",
              },
        ]
      },
      {
        categoria: "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos",
        items: [
          {
            id: "NUPEMEC",
            fone: "(63) 3218 4348",
            email: "nupemectjto@gmail.com",
            endereco: " Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
            responsavel: " Dra. Silvana Maria Parfieniuk",
          },
        ]
      },
      {
        categoria: "OAB",
        items: [
          {
            id: "OAB",
            fone: "(63) 3212-1776",
            email: "",
            endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-039",
            responsavel: "",
          },
        ]
      },
      {
        categoria: "Ouvidoria Judiciária",
        items: [
          {
            id: "Assistentes Sociais",
            fone: "(63) 3218-4379",
            email: " ",
            endereco: "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-011",
            responsavel: "",
          },
        ]
      },
    ];


    
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
      setShowResults(true); // Mostrar resultados quando houver termo de busca
    };
  
    // Filtrar itens com base no termo de busca
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
        <div className="topo">
                <div className="container ">
                    <div className="tjto">
                        <h1 className="contact">Contatos</h1>
                        <h4 className="descricao">Telefones, Endereços e e-mails</h4>
                        <p className="textDesc">buscar contato junto ao Poder Judiciário do Tocantins.</p>
                    </div>
                    <div className="inputDiv ">
                        <input 
                            type='text' 
                            placeholder='Ex: TJTO Anexo 1'
                            value={searchTerm}
                            onChange={handleChange}>
                              
                              
                        </input>
                        <button className="btnp">
                         Pesquisar
                        </button>
                    </div>
                 </div>
            </div>
        
        {showResults && (
          <>
            <div className="title">
              <p>Resultado da Busca</p>
            </div>
            <ul className="itens">
              {/* Exibir os itens filtrados */}
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
          </>
        )}
      </div>
    );
};

export default Pesquisa;
