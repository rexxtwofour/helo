import React, { Component } from 'react';
import routes from './routes';
import './App.css';







class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        { routes ()}
        </header>  
      </div>
    );
  }
}






export default App;
// app.use( express.static( `${__dirname}/../build` ) )







// import Nav from './component/Nav/Nav';
// import Auth from './component/Auth/Auth';
// import Dashboard from './component/Dashboard/Dashboard';
// import Form from './component/Form/Form';
// import Post from './component/Post/Post';

{/* <Nav/>
<Auth/>
<Dashboard/>
<Form/>
<Post/> */}