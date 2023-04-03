import React from 'react'
import alunos from '../../data/alunos'

export default function ListaAlunos() {
/*     const li1 = (
        <li>
            {alunos[0].id}. {alunos[0].name} » {alunos[0].nota} 
        </li>
    ); */

    const alunosLI = alunos.map((aluno) =>{
        return (
            <li key={aluno.id}>
                {aluno.id}. {aluno.name} » {aluno.nota} 
            </li>
        )
    })
  return (
    <div>
        <ul style={{listStyle: 'none'}}>
            {alunosLI}
        </ul>
    </div>
  )
}
