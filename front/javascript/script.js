document.addEventListener("DOMContentLoaded",() => {
	if (window.Worker) {
		let worker = new Worker('./javascript/dist/worker-bundled.js');

		let btnRefresh = document.getElementById("refresh");
		let textPlaceholder = document.getElementById("text-placeholder");

		btnRefresh.addEventListener("click",() => {
		  worker.postMessage('test');
		  console.log('Message envoyé au worker');
		});

		worker.onmessage = function(e) {
	  		let textContent = e.data;
	  		console.log('Message reçu depuis le worker '+ textContent);
	  		textPlaceholder.innerHTML = textContent;
		}
	}
})
