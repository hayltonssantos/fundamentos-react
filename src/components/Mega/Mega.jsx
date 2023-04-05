import React, {useState} from 'react'
import './Mega.css'

export default function Mega(props) {

    function gerarNumerosNaoContidos(min,max,array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
        return array.includes(aleatorio) ? gerarNumerosNaoContidos(min,max,array) : aleatorio
    }
    
    function gerarNumeros(qtd){
       const numeros = Array(qtd)
       .fill(0)
       .reduce((nums) =>{
            const novoNumero = gerarNumerosNaoContidos(1,60,nums)
            return ([...nums, novoNumero])
       },[])
       .sort((n1,n2) => (n1-n2))
       return numeros
    
    }
    
    console.log(gerarNumeros(7)) 
    const [qtd, setQtd] = useState(props.qtd || 6)
    const numerosIniciais = gerarNumeros(qtd)
    const [numeros, setNumeros] = useState(numerosIniciais)
  return (
    <div className='Mega'>
        <h2>Mega</h2>
        <h3>{numeros.join(' ')}</h3>
        <div>
            <label>Quantidade de numeros:</label>
            <input type='number' 
                    min={6}
                    max={15}
                    value={qtd}
                    onChange={e => {
                        setQtd(+e.target.value)
                        setNumeros(gerarNumeros(qtd))   
                        }}    
            ></input>
        </div>
        <button onClick={_ => setNumeros(gerarNumeros(qtd))}>
            Gerar Numeros
        </button>
    </div>
  )
}
