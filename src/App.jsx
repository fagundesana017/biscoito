import React, {Component} from "react";

import OpenButton from "./components/button/OpenButton.jsx";

import './style.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textF: ""
    };

   this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
        'A vida trará coisas boas se tiver paciência.',
        'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
        'Não compense na ira o que lhe falta na razão.',
        'Defeitos e virtudes são apenas dois lados da mesma moeda.',
        'A maior de todas as torres começa no solo.',
        'Não há que ser forte. Há que ser flexível.', 
        'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
        'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.' ,
        'A juventude não é uma época da vida, é um estado de espírito.' ,
        'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
        'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
        'Siga os bons e aprenda com eles.',
        'Não importa o tamanho da montanha, ela não pode tapar o sol.', 
        'O bom-senso vale mais do que muito conhecimento.', 
        'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
    ]
  }
  quebraBiscoito(){
  let state = this.state;
  let fraseAleatoria = Math.floor(Math.random() * this.frases.length);
  state.textF = this.frases[fraseAleatoria];
  this.setState(state)
  }

  render(){
    return (
      <div className="container"> 
         <img src={require('./assets/biscoito.png')} className='img' />
         <OpenButton nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
         <h3 className="textF">"{this.state.textF}"</h3>
      </div>
    );
  }

}

export default App;
