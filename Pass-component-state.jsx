import React from 'react';
import Pass-child-state from './Pass-child-state.jsx'
class Pass-component-state extends React.Component {
	 constructor(){
		super();

		this.state = {
			name:"priya"
		}
  };
	  render(){
	  	return(
	  		<div><Child name= {this.state.name}/></div>
	  	);
	  }

  }

  export default Pass-component-state;