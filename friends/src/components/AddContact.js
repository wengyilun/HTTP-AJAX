
import React, {Component} from "react"
import serializeForm from 'form-serialize'

class AddContact extends Component {
	state = {
		name:'',
		age: 0,
		email: ''
	}
	
	onAddContact =(e)=>{
		e.preventDefault()
		const values = serializeForm(e.target, { hash: true })
		if(this.props.onAddContact){
			this.props.onAddContact(values)
		}
	}
	
	render(){
		return(
			<form onSubmit={this.onAddContact}>
				<label >Name:</label>
				<input type="text" id="nameInput" name="name"/>
				
				<label  >Age:</label>
				<input type="text" id="ageInput" name="age"/>
				
				<label  >email:</label>
				<input type="text" id="emailInput" name="email"/>
			</form>
		)
	}
}
export default AddContact

