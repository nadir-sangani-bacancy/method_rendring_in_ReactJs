import React from 'react';

class Bindmethodwithparameter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input : '',
            firstname :'',
            lastname : ''
        }
    }

    inputChange(fname,lname,e){
        this.setState({input : e.target.value , firstname : fname ,lastname : lname })
        
    }



    render(){
        return(
            
            <div align="center">
                <br/>
                <p>Inline method binding</p>
                <input onChange={this.inputChange.bind(this,'nadir','sangani')}></input><br />
                <p>Value :{this.state.input}</p>
                <p>firstname: {this.state.firstname}</p>
                <p>lastname: {this.state.lastname}</p>
            </div>
        )
    }

}

export default Bindmethodwithparameter;