import React from "react";
import './App.css'
import Primeiro from './components/Basicos/Primeiro'
import ComParametro from './components/Basicos/ComParametro'
import Fragmento from './components/Basicos/Fragmento'
import Aleatorio from "./components/Basicos/Aleatorio";
import Cards from "./components/layout/Cards";
import Familia from "./components/Basicos/Familia";
import FamiliaMembro from "./components/Basicos/FamiliaMembro";
import ListaAlunos from "./components/Repetição/ListaAlunos";
import ListaProdutos from "./components/Repetição/ListaProdutos";
import ParOuImpar from "./components/Condicional/ParOuImpar";
import UsuarioInfo from "./components/Condicional/UsuarioInfo";
import DiretaPai from "./components/Comunicacao/DiretaPai";
import IndiretaPai from "./components/Comunicacao/IndiretaPai";
import Input from "./components/Formulario/Input";
import ContadorClass from "./components/ContadorClass/Contador";
import ContadorFunction from "./components/ContadorFunction/Contador";
import Mega from "./components/Mega/Mega";
const tag = <strong>Ola React</strong>

export default (props) =>{
    return (
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className="Cards">
            
            <Cards titulo="013 - ContadorFunction" color="#0f022f3f">
               <Mega qtd={8}></Mega>
            </Cards>

            <Cards titulo="012 - ContadorFunction" color="#44a987">
                <ContadorFunction numeroInicial={10}></ContadorFunction>
            </Cards>

            <Cards titulo="012 - Contador" color="#44a987">
                <ContadorClass numeroInicial={10}></ContadorClass>
            </Cards>

            <Cards titulo="011 - Componente controlado" color="#44a987">
                <Input></Input>
            </Cards>

            <Cards titulo="010 - Comunicacao Indireta" color="#444987">
                <IndiretaPai></IndiretaPai>
            </Cards>

            <Cards titulo="009 - Comunicacao direta" color="#789541">
                <DiretaPai></DiretaPai>
            </Cards>

            <Cards titulo="008 - Par ou impar" color="#663">
                <ParOuImpar numero1={23} numero2={560}/>
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                <UsuarioInfo ></UsuarioInfo>
            </Cards>
            <Cards titulo='007 - Desafio Produtos'>
                <ListaProdutos></ListaProdutos>
            </Cards>

            <Cards titulo='006 - Repetição' color='#339'>
                <ListaAlunos></ListaAlunos>
            </Cards>

            <Cards titulo='005 - Componentes com filhos' color='#444'>
                <Familia sobrenome='Silva'>
                    <FamiliaMembro nome="Sophia"/> 
                    <FamiliaMembro nome="Thomas"/>
                    <FamiliaMembro nome="Miguel"/>
                </Familia>
            </Cards>

            <Cards titulo='#004 - Desafio aleatorio' color='#d69cbc'>
                <Aleatorio um={1} dois={7}/>
            </Cards>
            
            <Cards titulo='#003 - Fragmento' color='#191970'>
                <Fragmento/>
            </Cards>

            <Cards titulo='#002 - Com Parametro' color='#9CCFE7'>
                <ComParametro 
                titulo='Situação aluno'
                aluno='Pedro'
                nota={9.3}
                />
            </Cards>
            
            <Cards titulo='001- Primeiro' color='#FFFFC2'>
                <Primeiro/>
            </Cards>
        </div>
    </div>
    );
}