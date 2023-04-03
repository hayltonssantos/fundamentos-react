import React from "react";

export default function Aleatorio(props){

    const random = parseInt(Math.random() * (props.um - props.dois) + props.dois);
    return(
    <div>
        <h2>Valor Aleatorio</h2>
        <p>
            Valor minimo: <strong>{props.um}</strong>
        </p>
        <p>
            Valor maximo: <strong>{props.dois}</strong>
        </p>
        <p>
            Valor Aleatorio: <strong>{random}</strong>
        </p>
    </div>
    )
}