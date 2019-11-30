const axios = require('axios');

onmessage = (e) => {
  	axios.get('https://baconipsum.com/api/?type=meat-and-filler')
      	 .then(response => (postMessage(response.data)))
}