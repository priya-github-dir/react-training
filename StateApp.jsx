import React from 'react';

var green = '#39D1B4';
var yellow = '#FFD712';
class StateApp extends React.Component {
	 constructor(){
		super();

		this.state = {
		name : "Foo",
		id:28789,
		color:green
		}

		this.changeColor = this.changeColor.bind(this); 
  };
		changeColor() 
		{
			var color = this.state.color == green ? yellow : green;
			this.setState({ color: color });
		}
	render(){
		return(
			<div>
				<h3 style={{background: this.state.color}}>I am here for state</h3>
				<p>{this.state.name} , {this.state.id}</p>
				<button onClick={this.changeColor}>
		          Change color
		        </button>
			</div>
		);
	}
}

export default StateApp;