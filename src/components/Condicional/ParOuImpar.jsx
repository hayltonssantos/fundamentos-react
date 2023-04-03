import React from 'react'

export default function ParOuImpar({numero1,  numero2}) {
    const numberChoice = parseInt(Math.random() * (numero1 - numero2) + numero2) 
    const isPar = numberChoice % 2 === 0
    return (
    <div>
        <h2>This number select is <strong>{numberChoice}</strong></h2>
        {isPar ? 
            <span>Par</span> : 
            <span>Impar</span>
        }
    </div>
  )
}
