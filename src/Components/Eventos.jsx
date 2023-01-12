import React, {Component} from 'react'
export default class Eventos extends Component{
        constructor(props){
                super(props)
                this.state={
                        contador:0
                }
                this.sumar = this.sumar.bind(this)
                this.restar = this.restar.bind(this)
        }
        sumar(e){
                console.log('Sumando');
                this.setState({
                        contador: this.state.contador +1
                })
        }
        restar(e){
                console.log('Restando');
                this.setState({
                        contador: this.state.contador -1
                })
        }
        render(){
                return(
                        <div>
                                <h2>
                                        Eventos de componentes de clase
                                </h2>
                                <nav>
                                        <button onClick={this.sumar}>+</button>
                                        <button onClick={this.restar}>-</button>
                                </nav>
                                <p>
                                        <b>{this.state.contador}</b>
                                </p>
                        </div>
                )
        }
}