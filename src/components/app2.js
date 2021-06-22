import { valueToNode } from "@babel/types";
import { Component } from "react";

class App2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            key : "try to change it"
        };
    }

    handleBtn = () => {
        this.setState({
            key :  "this will change the state"
        }) ;
    };

    render(){
        return (
            <div>
            <h1>{this.state.key}</h1>
            <h2>This is my component</h2>
            <h3>click on button</h3>
            <button onClick={this.handleBtn}>Click me</button>
            </div>
        )
    }
}

export default App2;

