import React, {Component} from 'react';
import Nav from '../Nav/Nav';



export default class Dashboard extends Component  {
    render (){
        console.log('---error',this.props.match)
        return (
            <div className ="Dashboard">
            <Nav/>
            <h1>Dashboard</h1>
            
            </div>


        

    )
}
}