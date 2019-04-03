import axios from 'axios'
//const api = process.evn.REACT_APP_FRIEND_API_URL || 'http://localhost:5000'
const api = 'http://localhost:5000'

let token = localStorage.token

if(!token)
	token = localStorage.token = Math.random().toString(36).substring(-8)
	
const headers = {
	'Accept': 'application/json',
	'Authorization': token
}

export const getFriends = ()=>{
	axios.get(`${api}/friends`, {headers})
		.then(res => {
			console.log('res.data', res.data)
			return res.data
		})
		.catch(err => console.log(err))
}

export const getFriendById = (id)=>{
	axios.get(`${api}/friend/${id-1}`, {headers})
		.then(res => res.data)
		.catch(err => console.log(err))
}

export const deleteFriendById = (id)=>{
	axios.delete(`${api}/friend/${id}`, {headers})
	.then(res => res.data)
	.catch(err => console.log(err))
}


export const addFriend= (friendObj)=>{
}

