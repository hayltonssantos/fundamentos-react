import React from 'react'
import produtos from '../../data/produtos'

export default function ListaProdutos() {

    function getLinhas(){
        return produtos.map((produto, i) => {
            return (
                <tr className={i % 2 === 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace(',','.')}</td>
                </tr>
            )
        })
    }
  /*   const produtosLI = produtos.map((produto) => {
        return (
            <li key={produto.id}>
                {produto.nome} {produto.preco} 
            </li>
        )
    }) */
  return (
    <div className='TabelaProdutos'>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preco</th>
                </tr>
            </thead>
            <tbody>
                {getLinhas()}
            </tbody>
        </table>
    </div>
  )
}
