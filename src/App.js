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

    this.frases = ['A vida trará coisas boas se tiveres paciência',
    `Demonstre amor e alegria em todas as oportunidades e verás que a paz 
    nasce dentro de você`,
    'Não compense na ira o que lhe falta na razão',
    'Defeitos e virtudes são apenas dois lados da mesma moeda',
    'A maior de todas as torres começa no solo',
    'Não há que ser forte. Há que ser flexível',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    `Há três coisas que jamais voltam; a flecha lançada, a palavra dita 
    e a oportunidade perdida`,
    'A juventude não é uma época da vida, é um estado de espírito',
    `'Podemos escolher o que semear, mas somos obrigados a colher
     o que plantamos'`,
    `Dê toda a atenção para a formação dos teus filhos, sobretudo 
    por exemplos de tua própria vida.`,
    'Siga os bons e aprenda com eles',
    'Não importa o tamanho da montanha, ela não pode tapar o sol',
    'O bom-senso vai mais longe do que muito conhecimento',
    'Quem quer colher rosas deve suportar os espinhos',
    'São os nossos amigos que nos ensinam as mais valiosas lições',
    `Uma iniciativa mal-sucedida não significa o final de tudo. Sempre 
    existe uma nova oportunidade`,
    'Aquele que se importa com o sentimento dos outros, não é um tolo',
    'A adversidade é um espelho que reflete o verdadeiro eu',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos'];

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
        
        <div className="box"> 
          <h1>BISCOITO DA SORTE</h1>
          {!this.state.botaoClicado && (<img src={imagemBiscoito} className="img"/>)}
          {this.state.botaoClicado && (<img src={imagemBiscoitoQuebrado} className="img"/>)}
          <Botao nome={textButton} acaoBtn={this.quebraBiscoito}/>        
          <h3 className="textoFrase">{this.state.textoFrase}</h3>
        </div>
        
        
        
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
