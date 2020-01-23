import React from 'react';

class Inlinemethodbinexping extends React.Component{
    
    constructor (props){
        super(props)
        this.state ={
            input : ''
        }
    }
    inputChange(e){
        this.setState({input : e.target.value})
    }
    
    
    render(){
        return(
            <div align="center">
                <p>Inline method binding</p>
                <input onChange={this.inputChange.bind(this)}></input><br />
                <p>Value :{this.state.input}</p>
            </div>
        );
    }
}  
export default Inlinemethodbinexping;