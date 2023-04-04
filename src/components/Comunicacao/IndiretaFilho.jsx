import React from 'react'


export default function IndiretaFilho(props) {
  const min = 50
  const max = 100
  const gerarIdade = () => parseInt(Math.random() * (min - max) + 50)
  
  return (
    // Nome Idade Nerd
    <div>
       <div>Filho</div>
       <button onClick={
        function(e){
          props.quandoClicar('Joao', gerarIdade(),true)
        }
       }>Fornecer infs</button>
    </div>
  )
}
