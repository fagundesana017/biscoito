import React, { Component } from "react";

import './openButton.css';

class OpenButton extends Component{
    render(){
        return(
           <div>
               <button className="button" onClick={this.props.acaoBtn}>{this.props.nome}</button>
           </div>
        );
    }
}

export default OpenButton;
