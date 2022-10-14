import React from "react";
import { BoxPaginaPrincipal } from "./styled";
import { Imagem } from "./styled";
import { TituloH4 } from "./styled";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPaginaPrincipal onClick={reproduzVideo}>
      <Imagem src={props.image1} alt={props.textoAlternativo} />
      <TituloH4>{props.titulo}</TituloH4>
    </BoxPaginaPrincipal>
  );
}

export default CardVideo;
