import React, { Component } from 'react';
import imagemBiscoito from "./assets/biscoito.jpg"
import imagemBiscoitoQuebrado from "./assets/biscoitoquebrado.jpg"
import './App.css'

class App extends Component{

    constructor(props){
    super(props);
    this.state = {
      imagem: imagemBiscoito,
      textoFrase:'',
      botaoClicado: false,
    };  

    this.frases = ['Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];
    this.quebraBiscoito= this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){
    let state = this.state;
    if(this.state.botaoClicado){
      state.textoFrase = '';   
      state.imagem = imagemBiscoito;


    }else{
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      state.textoFrase = '" '+this.frases[numeroAleatorio] +' "';
      state.imagem = imagemBiscoitoQuebrado;
    }
    this.setState(state);
    this.setState({botaoClicado:!this.state.botaoClicado})

  }



  render(){
    var textButton = 'Abrir Biscoito'
    if(this.state.botaoClicado){
      textButton = 'Outro Biscoito'
    }else{
      textButton = 'Abrir Biscoito'
    }

    return(
      <div className="container">
        {!this.state.botaoClicado && (<img src={imagemBiscoito} className="img"/>)}
        {this.state.botaoClicado && (<img src={imagemBiscoitoQuebrado} className="img"/>)}
        <Botao nome={textButton} acaoBtn={this.quebraBiscoito}/>        
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
        
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn} >{this.props.nome} </button>
      </div>
    )
  }
}

export default App;
