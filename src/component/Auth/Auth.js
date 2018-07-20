import React, {Component} from 'react';
import Nav from '../Nav/Nav';



export default class Auth extends Component  {
    constructor () {
        super() ;
        this.state = {
            username: "",
            password: ""
        }
    }
    render (){
        console.log('---error',this.props.match)
        return (
            <div className ="Auth">
            {this.props.match.path == '/' ? '':<Nav/>}
            <h1>Auth</h1>
            

            <input type="text" className="username"/>
            <input type="text" className="password"/>
            </div>


        

    )
}
}


