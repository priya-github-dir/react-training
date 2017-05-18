import React from 'react';
import ChildComponent from './ChildComponent.jsx';
import SiblingComponent from './SiblingComponent.jsx';

class ParentComponent extends React.Component{
	constructor(){
		super();

		this.state = {
			name:"priyasingh"
		}
		
	};

		changeName(newName) {
		    this.setState({
		      name: newName
		    });
		  }

		render(){
			return(
				<div>
					<h3>My name is as follows.. {this.state.name}</h3>
					<ChildComponent name= {this.state.name} onChange= {this.changeName.bind(this)} />
					<SiblingComponent parentname={this.state.name} />
					<p>--------End of parent component------</p>
				</div>
			);
		}
}

export default ParentComponent;