import React from "react";
import '../stylesheets/Testimony.css'

function Testimony(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../images/${props.imagen}.png`)}
        alt='Foto de Emma'/>
      <div className="contenerdor-texto-testimonio">
        <p className="nombre-testimonio"> {props.nombre} en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio"> {props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimony
