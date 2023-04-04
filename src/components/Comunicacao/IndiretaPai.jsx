import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'
export default function IndiretaPai(props) {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState('?')
    const [nerd, setNerd] = useState('?')

    function fornecerInformacoes(nome,idade,nerd){
      setNome(nome)
      setIdade(idade)
      setNerd(nerd)
    }
  return (
    <div>
        <div>
          <span>{nome} </span>
          <span><stong>{idade} </stong></span>
          <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
        </div>
        <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  )
}
