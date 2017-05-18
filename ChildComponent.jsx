import React from 'react';

class ChildComponent extends React.Component {

handleChange (e) {
    var name = e.target.value;
    this.props.onChange(name);
  }

	render(){
		return(
		<div>
			<h3>My name is {this.props.name}!!!</h3>
			<select id="great-names" onChange={this.handleChange.bind(this)}>
	          <option value="priyasingh">priyasingh</option>
	          <option value="Gromulus">Gromulus</option>
	          <option value="Thinkpiece">Thinkpiece</option>
	        </select>

		</div>
		);
	}
}

module.exports = ChildComponent;