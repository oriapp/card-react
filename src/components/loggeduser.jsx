import React, {Component} from 'react';

class LoggedUser extends Component{
    state = {
        email: "plbwymw@gmail.com",
    };
    
    render(){
        return (
            <React.Fragment>
                <p>{this.state.email}</p>
            </React.Fragment>
        );
    }
}

export default LoggedUser;