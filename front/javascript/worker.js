const axios = require('axios');

const apiMaxId = 54;

onmessage = (e) => {
	console.log('here')
	let id = (Math.floor(Math.random() * Math.floor(apiMaxId))) + 1
  	postMessage('a')
  	//axios.get('http://js-worker.local/' + id)
    //  	 .then(response => (postMessage(response.data)))
}