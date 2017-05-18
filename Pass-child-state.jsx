import React from 'react';

class PassChildState extends React.Component {
	render(){

		return(
			<h1>Hey, my name is {this.props.name}!</h1>
		);
	}
}

module.exports = PassChildState;