import React from 'react';

class SiblingComponent extends React.Component{
	render(){
		var parentname = this.props.parentname;
		return(
		<div>
			<h2>Welcome {parentname} to react world :)</h2>
			<p>Your "{parentname}" name-details are incomplete. </p>
			<p>******End of sibling component*******</p>
		</div>
		);
	}
}

module.exports = SiblingComponent;