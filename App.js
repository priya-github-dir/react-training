import React from 'react';
import PropType from 'prop-types';
class App extends React.Component {
   render() {
      return (
         <div>
            <h3>Array:{this.props.myArray}</h3>
            <p>name: {this.props.name}</p>
         </div>
      );
   }
}

App.propTypes = {
	myArray: React.PropTypes.array.isRequired,
	name:React.PropTypes.string
};

App.defaultProps = {
   myArray: [1,2,3,4,5]
   };

export default App;


2nd program Router

import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
//import {Route} from 'react-router-dom';;
//npm install --save react-router-dom

var emp = {id: "2009" , name:"priya"};
class App extends React.Component {
   render() {
      return (
      <Router>
         <div>
            <h2>!!!</h2>
            <p>{emp.id}</p>
            <p>{emp.name}</p>
            <Link to = "/home">Home</Link>
            <Route path = "/home" component = {form} />

            <Link to = "/home">Home</Link>
            <Route exact path = "/" component = {form} /> //if by deafult rendering is performed
         </div>
      </Router>
      );
   }
}

export default App;

3rd 

import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';


var emp = {id: "2009" , name:"priya" , mood: "happy"};
class App extends React.Component {
   render() {
      return (
      <Router>
         <div>
            <h2>!!!</h2>
            <p>{emp.id}</p>
            <p>{emp.name}</p>
            <Link to = "/home">Home</Link>
            <Route  path = "/home" component = {Home} />


            <p>{emp.mood}</p>
            <Link to = "/form">Home</Link>
            <Route path = "/form" component = {Form} />
            <Switch>
               <Route  path = "/home" render={
               
               } />
            </Switch>
         </div>
      </Router>
      );
   }
}

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}

class Form extends React.Component {

   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   render() {
      return (
         <div>
            <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}

export default App;

npm install css-loader --save-dev

npm install --save-dev stle-loader
npm install sass-loader node-sass --save-dev
//extract sass plugin

npm install --save-dev extract-text-webpack-plugin

yarn add redux thunk

http://rest.learncode.academy/api/ttn/users