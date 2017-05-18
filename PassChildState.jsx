import React from 'react';

class PassChildState extends React.Component {
	handleChange(e) {
    var name = e.target.value;
    alert('priya');
    this.props.onChange(name);
  }
	render(){
		return(
			<div>
				<h3>Hey, my name is {this.props.name}!!!</h3>
				<button onClick={this.props.myclick}>Click here</button>
				<p>
					<select id="great-names" onChange={this.handleChange}>
			          <option value="priya">
			            priya
			          </option>

			          <option value="Gromulus">
			            Gromulus
			          </option>

			          <option value="Thinkpiece">
			            Thinkpiece
			          </option>
			        </select>
			    </p>
			</div>
		);
	}
}

module.exports = PassChildState;