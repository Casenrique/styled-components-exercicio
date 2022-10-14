import React from "react";
import { createGlobalStyle } from "styled-components";
import TelaInteira from "./Componentes/TelaInteira/styled";
import Header from "./Componentes/Header/styled";
import Main from "./Componentes/Main/styled";
import Nav from "./Componentes/Nav/styled";
import ItemLista from "./Componentes/ItemLista/styled";
import PainelDeVideos from "./Componentes/PainelDeVideos/styled"
import CardVideo from "./Componentes/CardVideo/CardVideo";
import { Footer, TituloH4 } from "./Componentes/Footer/styled";
// import "./styles.css";


const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
        <GlobalStyle/>
        <TelaInteira>
          <Header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
          </Header>

          <Main>
            <Nav>
              <ul>
                <ItemLista>Início</ItemLista>
                <ItemLista>Em alta</ItemLista>
                <ItemLista>Inscrições</ItemLista>
                <hr />
                <ItemLista>Originais</ItemLista>
                <ItemLista>Histórico</ItemLista>
              </ul>
            </Nav>

            <PainelDeVideos>
              <CardVideo
                image1={card1.imagemDoVideo}
                titulo={card1.titulo}
                textoAlternativo={card1.textoAlternativo}
              />
            </PainelDeVideos>
          </Main>

          <Footer>
            <TituloH4>Oi! Eu moro no Footer!</TituloH4>
          </Footer>
        </TelaInteira>
      </div>
  );
}
