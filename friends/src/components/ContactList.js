import React from 'react'
import PropTypes from 'prop-types'
import Loading from 'react-loading'
import {NavLink, Route} from "react-router-dom";
import ContactPage from "./ContactPage";

 const ContactList = (props)=> {
		return (
			props.friends===null
			?	(<div className="loaderContainer">
					<Loading type="spin" color="#fff" className="loading"/>
				</div>)
			:
			<div>
				<ul>
					{  props.friends && props.friends.map((friend, index) =>
						<NavLink to={`/friends/${index+1}`}  key={index}>
							<li className="friend-card">
								<h2>Name: {friend.name}</h2>
								<h2>Age: {friend.age}</h2>
								<h2 className="friend-email">{friend.email}</h2>
							</li>
						</NavLink>
					)}
				</ul>
				
			
			</div>
		)
	}

export default ContactList
