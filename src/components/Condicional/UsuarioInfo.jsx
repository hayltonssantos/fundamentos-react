import React from 'react'
import If, {Else} from './if.js'

export default function UsuarioInfo(props){
    const usuario =  props.usuario || {}  
    return (
        <div>
            {/* <If test={props.usuario && props.usuario.nome}>
                Seja bem vindo <strong>{props.usuario.nome}</strong>
            </If> */}
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
                <Else test={!usuario || !usuario.nome}>
                    Seja bem vindo <strong>Usuario</strong>
                </Else>
            </If> 
        </div>
    )
}