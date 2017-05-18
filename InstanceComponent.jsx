import React from 'react';


class InstanceComponent extends React.Component {
   render() {
   const header= ".header{background-color:blue}";
      return (
      	<div>
      		<h1 className="header">Header-</h1>
      		<style>{header}</style>
      		<h3 className="sub-head">Sub heading</h3>
			<ul>
		    <li style={{"background-color": "green"}}> List 1</li>
		    <li> List 2</li>
		    <li> List 3</li>
		    <li> List 4</li>
		  </ul>
		
		</div>
      );
   }
}



export default InstanceComponent;