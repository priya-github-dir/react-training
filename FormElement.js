import React from 'react';

class FormElement extends React.Component {
	// componentWillMount(){
	// 	alert("component will mount performed");
	// }
	constructor(){
		super();
		this.state = {
			userName: '',
			userId: '',
			userEmail:'',
			userPass:'',
			confPass:'',
			emailError:'',
			nameError:'',
			empidError:'',
			passMatched:''
		}
		this.handleUserName = this.handleUserName.bind(this); 
		 this.handleUserId = this.handleUserId.bind(this); 
		this.handleUserEmail = this.handleUserEmail.bind(this); 
		this.handleUserPass = this.handleUserPass.bind(this); 
		this.handleConfPass = this.handleConfPass.bind(this); 
		this.handleUserSubmit = this.handleUserSubmit.bind(this);
	};

	handleUserName(e){
		this.setState({ userName: e.target.value});
	}
	handleUserId(e){
		this.setState({ userId: e.target.value});
	}
	handleUserEmail(e){
		this.setState({ userEmail: e.target.value});
		// var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		// let x=(!(this.state.userEmail).match(re))?"Email  is not valid":'Email is valid';
		// this.setState({emailError:x});
	}


	handleUserPass(e){
		this.setState({userPass:e.target.value});
	}
	handleConfPass(e){
		this.setState({confPass:e.target.value});
	}
	
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    
	handleUserSubmit(e){
		e.preventDefault();
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let x=(!(this.state.userEmail).match(re))?"Email  is not valid":'Email is valid';
		this.setState({emailError:x});

		var tex = /^[a-zA-Z\s]+$/;
		let name = (!(this.state.userName).match(tex))?"Name is not a string" : "Name is valid";
		this.setState({nameError:name});

		var emp = /^[0-9]{1,10}$/;
		let empid = (!(this.state.userId).match(emp))?"Id should be a number" : "valid";
		this.setState({empidError:empid});

		let matching = (!(this.state.userPass).match(this.state.confPass))?'password should match' : 'password matched'
		this.setState({passMatched:matching});
	}
	// componentDidMount(){
	// 	alert('component did mount performed');
	// }
	render(){
		
		return(
			<div>
				<table>
					<tbody>
					<tr>
						<td>Name:</td>
						<td><input type="text" onChange={this.handleUserName} value={this.state.userName}/ ></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td>{this.state.userName}</td>
						<td>{this.state.nameError}</td>
					</tr>
					<tr>
						<td>Emp ID:</td>
						<td><input type="text" onChange={this.handleUserId} value={this.state.userId}/></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td>{this.state.userId}</td>
						<td>{this.state.empidError}</td>
					</tr>
					<tr>
						<td>Email ID:</td>
						<td><input type="email" onChange={this.handleUserEmail} value={this.state.userEmail}/></td>	
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td>{this.state.userEmail}</td>
						<td>{this.state.emailError}</td>
					</tr>
					<tr>
						<td>Password:</td>
						<td><input type="password" onChange={this.handleUserPass} value={this.state.userPass} /></td>
					</tr>
					<tr>
						<td>Confirm:</td>
						<td><input type="password" onChange={this.handleConfPass} value={this.state.confPass} /></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td>{this.state.passMatched}</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td><input type="submit" onClick={this.handleUserSubmit} value="Submit"/></td>
					</tr>
					</tbody>
				</table>
		    </div>
		);
	}
}

export default FormElement;