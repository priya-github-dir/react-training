import React from 'react';
import InstanceComponent from  './InstanceComponent.jsx';	
import Style from './style.css';	
import './base.scss';																					

class AnotherApp extends React.Component {
	render(){
			
		return (
			<div>
				<h2 className="head-sec">Head</h2>
				
				<p>Another component data </p>
				<InstanceComponent />
				<p>Priya!!</p>
			</div>
		);
	}
}


export default AnotherApp;