import React from 'react';

class Bindingmethodusingarrowwithparameter extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            input :'',
            firstname : '',
            lastname : ''
        }
    }

    inputChange(fname,lname,e){
        this.setState({firstname : fname , lastname : lname, input : e.target.value});
    }
    

    render(){
        return(
            <div align="center">
            <br/>
            <p>Method binding using arrow function..</p><br/>
            <input onChange={(e)=>this.inputChange('nadir', 'sangnai', e)} type="text" /><br/>
            <p>value is :- {this.state.input}</p>
            <p>firstname {this.state.firstname}</p>
            <p>lastname {this.state.lastname}</p>
        </div>
        )
    }




}

export default Bindingmethodusingarrowwithparameter;