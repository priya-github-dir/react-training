import React from 'react';

class PracProptypes extends React.Component{
	propTypes: {
		title: React.PropTypes.string.isRequired,
		author:React.PropTypes.string.isRequired,
		count:React.PropTypes.number.isRequired

	}

	render(){
		return(
				<div>
					<ul>
						<li>Title: 
							<span>{this.props.title}</span>
						</li>
						<li>Title: 
							<span>{this.props.author}</span>
						</li>
						<li>Title: 
							<span>{this.props.count}</span>
						</li>
					</ul>
				</div>
			);
	}
}

module.exports = PracProptypes2;