import React from 'react'
import axios from 'axios'
import {getFriendById} from '../utils/FriendAPI'
import Loading from "./ContactList";

const ContactPage = (props)=> {
	    let friend = props.friends && props.friends.find(f => {
	    	return f.id.toString() ===  props.match.params.id
		})
		return (
			friend==null
			?	(<div className="loaderContainer">
					<Loading type="spin" color="#fff" className="loading"/>
				</div>)
			:
			<div className="contact-detail">
				<h2>Name: {friend.name}</h2>
				<h2>Age: { friend.age}</h2>
				<h2 className="friend-email">{friend.email}</h2>
			</div>
		)
}
export default ContactPage
