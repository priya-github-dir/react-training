import React from 'react';
import PassChildState from './PassChildState.jsx';

class PassComponentState extends React.Component {
	 constructor(props){	
		super(props);

		this.state = {
			name:"priya",
			totalClick:0
		}

		this.handleClick = this.handleClick.bind(this); 
		this.changeName = this.changeName.bind(this);
	};
		handleClick()
		{
			var total=this.state.totalClick;
			this.setState({ totalClick: total + 1 });
			console.log(total);
		}

		 changeName(newName) 
		 {

		    this.setState({ name: newName});
		    console.log(newName);

		 }
 
	  render(){
	  	return(
	  		<div>
	  			<h3>Hello This is passing states in components</h3>
	  			<PassChildState name= {this.state.name} myclick= {this.handleClick} onChange={this.changeName} />
	  				
	  		</div>
	  	);
	  }

  }

  export default PassComponentState;