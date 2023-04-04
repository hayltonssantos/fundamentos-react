import React from 'react'
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props) {
  return (
    <div>
        <DiretaFilho nome={'Junin'} idade={20} nerd={true}/>
        <p></p>
        <DiretaFilho nome={'PaulaD'} idade={20} nerd={true}/>
    </div>
  )
}
