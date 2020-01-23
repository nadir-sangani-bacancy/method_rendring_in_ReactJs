import React from 'react';

class Bindmethodusingconstrucor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input : ''
        }
        this.inpputChange = this.inpputChange2.bind(this);
    }
inpputChange2(e){
    this.setState({input : e.target.value});
}

    render(){
        return(
            <div align="center">
                <br/>
                <p>Method binding with using constructor</p><br/>
                <input onChange={this.inpputChange} /><br/>
                <p>value is :- {this.state.input}</p>
            </div>
            
        )
    }
}

export default Bindmethodusingconstrucor;