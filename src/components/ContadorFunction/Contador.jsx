import React from 'react'
import './Contador.css'
import Display from './Display'
import Button from './Button'
import PassoForms from './PassoForms'

class ContadorFunction extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0, 
        passo: this.props.passoInicial || 5, 
    }

    inc = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }
    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) =>{
        this.setState({passo: novoPasso});
    }

  render() {
    return(
        <div className='Contador'>
            <h2>Contador</h2>
            <p>Valor Incial: {this.props.numeroInicial}</p>
            <Display numero={this.state.numero}></Display>
            <PassoForms passo={this.state.passo} setPasso={this.setPasso}/>
            <Button setInc={this.inc} setDec={this.dec}></Button>
        </div>
    )
  }
} export default ContadorFunction
