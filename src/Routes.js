import React from "react";


import { Routes, Route } from "react-router-dom";

import DiretoriaAdm from "./Component/Diretorias/DiretoriaAdm/DiretoriaAdm";
import Diretorias from "./Component/Diretorias/Diretorias";
import DiretoriaDeGestaoDePessoas from "./Component/Diretorias/DiretoriaDeGestaoDePessoas";
import DiretoriaControladoriaInterna from "./Component/Diretorias/DiretoriaControladoriaInterna";
import DiretoriaDeInfraestruturaEObras from "./Component/Diretorias/DiretoriaDeInfraestruturaEObras";
import DiretoriaDeTecnologiaDeInformação from "./Component/Diretorias/DiretoriaDeTecnologiaDeInformação";
import DiretoriaDoCentroDeComunicaçãoSocial from "./Component/Diretorias/DiretoriaDoCentroDeComunicaçãoSocial";
import DiretoriaFinanceira from "./Component/Diretorias/DiretoriaFinanceira";
import DiretoriaGeral from "./Component/Diretorias/DiretoriaGeral";
import DivisãodeContrainteligênciadoNIS from "./Component/Diretorias/DivisãodeContrainteligênciadoNIS";
import DivisãoDeServiçosGeraisdoTribunalDeJustiça from "./Component/Diretorias/DivisãoDeServiçosGeraisdoTribunalDeJustiça";
import DiretoriaJudiciaria from "./Component/Diretorias/DiretoriaJudiciaria";
import Desembargadores from "./Component/Desembargadores/Desembargadores";
import GabineteDaPresidencia from './Component/Desembargadores/GabineteDaPresidência';
import DesAdolfoAmaroMendes from './Component/Desembargadores/DesAdolfoAmaroMendes';
import DesEurípedesLamounier from './Component/Desembargadores/DesEurípedesLamounier';
import DesHelvéciodeBritoMaiaNeto from './Component/Desembargadores/DesHelvéciodeBritoMaiaNeto';
import DesJoãoRigoGuimarães from './Component/Desembargadores/DesJoãoRigoGuimarães';
import DesMarcoVillasBoas from './Component/Desembargadores/DesMarcoVillasBoas';
import DesPedroNelsondeMirandaCoutinho from './Component/Desembargadores/DesPedroNelsondeMirandaCoutinho';
import DesaÂngelaIssaHaonat from './Component/Desembargadores/DesaÂngelaIssaHaonat';
import DesaÂngelaMRibeiroPrudente from './Component/Desembargadores/DesaÂngelaMRibeiroPrudente';
import DesaEtelvinaMariaSampaioFelipe from './Component/Desembargadores/DesaEtelvinaMariaSampaioFelipe';
import DesaJacquelineAdornoDeLaCruzBarbosa from './Component/Desembargadores/DesaJacquelineAdornoDeLaCruzBarbosa';
import DesaMaysaVendraminiRosal from './Component/Desembargadores/DesaMaysaVendraminiRosal';
import JuizConvocadoJocyGomesDeAlmeida from './Component/Desembargadores/JuizConvocadoJocyGomesDeAlmeida';
import CorregedoriaGeralDeJustica from "./Component/CorregedoriaGeralDeJustiça/CorregedoriaGeralDeJustica";
import EscolaSuperiorDaMagistraturaTocantinense from "./Component/EscolaSuperiorDaMagistraturaTocantinense/EscolaSuperiorDaMagistraturaTocantinense";
import Foruns from "./Component/Foruns/Foruns";
import ComarcasDe1Entrância from "./Component/Foruns/ComarcasDe1Entrância";
import ComarcasDe2Entrância from "./Component/Foruns/ComarcasDe2Entrância";
import ComarcasDe3Entrância from "./Component/Foruns/ComarcasDe3Entrância";
import TribunalDeJusticaTocantins from "./Component/TribunalDeJusticaTocantins/TribunalDeJusticaTocantins";
import Asmeto from "./Component/TribunalDeJusticaTocantins/Asmeto"
import Astj from './Component/TribunalDeJusticaTocantins/Astj'
import ComissãoDeJurisprudenciaEDocumentação from './Component/TribunalDeJusticaTocantins/ComissãoDeJurisprudenciaEDocumentação'
import ComissãoDeSeleçãoETreinamento from './Component/TribunalDeJusticaTocantins/ComissãoDeSeleçãoETreinamento'
import ConselhoDaMagistratura from './Component/TribunalDeJusticaTocantins/ConselhoDaMagistratura'
import CoordenadoriaDeGestãoEstratégica from './Component/TribunalDeJusticaTocantins/CoordenadoriaDeGestãoEstratégica'
import CoordenadoriaEstadualDaMulher from './Component/TribunalDeJusticaTocantins/CoordenadoriaEstadualDaMulher'
import EspacoSaude from './Component/TribunalDeJusticaTocantins/EspacoSaude'
import JuntaMedica from './Component/TribunalDeJusticaTocantins/JuntaMedica'
import JusticaMilitar from './Component/TribunalDeJusticaTocantins/JusticaMilitar'
import NúcleoDeApoioAsComarcas from './Component/TribunalDeJusticaTocantins/NúcleoDeApoioAsComarcas'
import NucleoPermanentedeMetodos from './Component/TribunalDeJusticaTocantins/NucleoPermanentedeMetodos'
import Oab from './Component/TribunalDeJusticaTocantins/Oab'
import OuvidoriaJudiciaria from './Component/TribunalDeJusticaTocantins/OuvidoriaJudiciaria'
import ServicoSocial from './Component/TribunalDeJusticaTocantins/ServicoSocial'
import AssessoriaMilitar from './Component/TribunalDeJusticaTocantins/AssessoriaMilitar'
import Pesquisa from "./Component/Pesquisa/Pesquisa";






function AppRouter(){
    return(
        <div>
            <Routes>                  
                <Route path='/DiretoriaAdm' element={<DiretoriaAdm />} /> 
                <Route path='/Diretorias' element={<Diretorias />} /> 
                <Route path='/DiretoriaDeGestaoDePessoas' element={<DiretoriaDeGestaoDePessoas />} /> 
                <Route path='/DiretoriaControladoriaInterna' element={<DiretoriaControladoriaInterna />} /> 
                <Route path='/DiretoriaDeInfraestruturaEObras' element={<DiretoriaDeInfraestruturaEObras />} /> 
                <Route path='/DiretoriaDeTecnologiaDeInformação' element={<DiretoriaDeTecnologiaDeInformação />} /> 
                <Route path='/DiretoriaDoCentroDeComunicaçãoSocial' element={<DiretoriaDoCentroDeComunicaçãoSocial />} /> 
                <Route path='/DiretoriaFinanceira' element={<DiretoriaFinanceira />} /> 
                <Route path='/DiretoriaGeral' element={<DiretoriaGeral />} /> 
                <Route path='/DiretoriaJudiciaria' element={<DiretoriaJudiciaria />} /> 
                <Route path='/DivisãodeContrainteligênciadoNIS' element={<DivisãodeContrainteligênciadoNIS />} /> 
                <Route path='/DivisãoDeServiçosGeraisdoTribunalDeJustiça' element={<DivisãoDeServiçosGeraisdoTribunalDeJustiça />} /> 
                <Route path='/Desembargadores' element={<Desembargadores />} /> 
                <Route path='/GabineteDaPresidencia' element={<GabineteDaPresidencia />} /> 
                <Route path='/DesAdolfoAmaroMendes' element={<DesAdolfoAmaroMendes />} /> 
                <Route path='/DesEurípedesLamounier' element={<DesEurípedesLamounier />} /> 
                <Route path='/DesHelvéciodeBritoMaiaNeto' element={<DesHelvéciodeBritoMaiaNeto />} /> 
                <Route path='/DesJoãoRigoGuimarães' element={<DesJoãoRigoGuimarães />} /> 
                <Route path='/DesMarcoVillasBoas' element={<DesMarcoVillasBoas />} /> 
                <Route path='/DesPedroNelsondeMirandaCoutinho' element={<DesPedroNelsondeMirandaCoutinho />} /> 
                <Route path='/DesaÂngelaIssaHaonat' element={<DesaÂngelaIssaHaonat />} /> 
                <Route path='/DesaÂngelaMRibeiroPrudente' element={<DesaÂngelaMRibeiroPrudente />} /> 
                <Route path='/DesaEtelvinaMariaSampaioFelipe' element={<DesaEtelvinaMariaSampaioFelipe />} /> 
                <Route path='/DesaJacquelineAdornoDeLaCruzBarbosa' element={<DesaJacquelineAdornoDeLaCruzBarbosa />} /> 
                <Route path='/DesaMaysaVendraminiRosal' element={<DesaMaysaVendraminiRosal />} /> 
                <Route path='/JuizConvocadoJocyGomesDeAlmeida' element={<JuizConvocadoJocyGomesDeAlmeida />} /> 
                <Route path='/CorregedoriaGeralDeJustica' element={<CorregedoriaGeralDeJustica />} /> 
                <Route path='/EscolaSuperiorDaMagistraturaTocantinense' element={<EscolaSuperiorDaMagistraturaTocantinense />} /> 
                <Route path='/Foruns' element={<Foruns />} /> 
                <Route path='/ComarcasDe1Entrância' element={<ComarcasDe1Entrância />} /> 
                <Route path='/ComarcasDe2Entrância' element={<ComarcasDe2Entrância />} /> 
                <Route path='/ComarcasDe3Entrância' element={<ComarcasDe3Entrância />} /> 
                <Route path='/TribunalDeJusticaTocantins' element={<TribunalDeJusticaTocantins />} /> 
                <Route path='/Asmeto' element={<Asmeto />} /> 
                <Route path='/AssessoriaMilitar' element={<AssessoriaMilitar />} /> 
                <Route path='/Astj' element={<Astj />} /> 
                <Route path='/ComissãoDeJurisprudenciaEDocumentação' element={<ComissãoDeJurisprudenciaEDocumentação />} /> 
                <Route path='/ComissãoDeSeleçãoETreinamento' element={<ComissãoDeSeleçãoETreinamento />} /> 
                <Route path='/ConselhoDaMagistratura' element={<ConselhoDaMagistratura />} /> 
                <Route path='/CoordenadoriaDeGestãoEstratégica' element={<CoordenadoriaDeGestãoEstratégica />} /> 
                <Route path='/CoordenadoriaEstadualDaMulher' element={<CoordenadoriaEstadualDaMulher />} /> 
                <Route path='/EspacoSaude' element={<EspacoSaude />} /> 
                <Route path='/JuntaMedica' element={<JuntaMedica />} /> 
                <Route path='/JusticaMilitar' element={<JusticaMilitar />} /> 
                <Route path='/NúcleoDeApoioAsComarcas' element={<NúcleoDeApoioAsComarcas />} /> 
                <Route path='/NucleoPermanentedeMetodos' element={<NucleoPermanentedeMetodos />} /> 
                <Route path='/Oab' element={<Oab />} /> 
                <Route path='/OuvidoriaJudiciaria' element={<OuvidoriaJudiciaria />} /> 
                <Route path='/ServicoSocial' element={<ServicoSocial />} /> 
                <Route path='/Pesquisa' element={<Pesquisa />} /> 
            </Routes>
        </div>
    );
};

export default AppRouter;