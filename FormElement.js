import React from 'react';

class FormElement extends React.Component {
	componentWillMount(){
		alert("component will mount performed");
	}
	constructor(){
		super();
		this.state = {userInput: ''}
		this.handleUserInput = this.handleUserInput.bind(this); 
	};

	handleUserInput(e){
		this.setState({ userInput: e.target.value});
	}
	componentDidMount(){
		alert('component did mount performed');
	}
	render(){
		
		return(
			<div>
		        <input 
		          type="text" 
		          onChange={this.handleUserInput} value={this.state.userInput}/>
		        <h3>{this.state.userInput}</h3>
		      </div>
		);
	}
}

export default FormElement;