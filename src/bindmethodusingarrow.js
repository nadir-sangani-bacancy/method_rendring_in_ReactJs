import React from 'react';

class Bindmethodusingarrow extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input : ''
        }
    }
    
    inputChange(e){
        this.setState({input : e.target.value});
    }

    render(){
        return(
            <div align="center">
                <br/>
                <p>Method binding using arrow function..</p><br/>
                <input onChange={(e)=>this.inputChange(e)} type="text" /><br/>
                <p>value is :- {this.state.input}</p>
            </div>
        )
    }

}




export default Bindmethodusingarrow;