import React from 'react';
import { pageHeader } from './common/pageHeader';

export interface SignupProps {
    
}
 
export interface SignupState {
    
}
 
class Signup extends React.Component<SignupProps, SignupState> {
    state = {}
    render() { 
        return ( <div className="container">
        {pageHeader({title: "Sign up with react.ts"})}
        <div className="row">
          <div className="col-12">
            <p>Quick, time is running out and you will be sorry</p>

          </div>
        </div>
      </div> );
    }
}
 
export default Signup;
