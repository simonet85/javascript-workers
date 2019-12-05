const axios = require('axios');

const apiMaxId = 49;

onmessage = (e) => {
	console.log('here')
	let id = (Math.floor(Math.random() * Math.floor(apiMaxId))) + 1
  	axios.get('http://js-worker.local/' + id)
     	 .then(response => (postMessage(response.data)))
}