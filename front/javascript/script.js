document.addEventListener("DOMContentLoaded",() => {
	if (window.Worker) {
		let worker = new Worker('./javascript/dist/worker-bundled.js');

		let btnRefresh = document.getElementById("refresh");
		let textPlaceholder = document.getElementById("text-placeholder");
		let container = document.getElementsByClassName("container")[0];

		btnRefresh.addEventListener("click",() => {
		  textPlaceholder.innerHTML = '';
		  textPlaceholder.classList.add('is-empty');
		  container.classList.add('is-loading');
		  worker.postMessage('test');
		});

		worker.onmessage = function(e) {
	  		let textContent = e.data;
	  		textPlaceholder.innerHTML = textContent;
	  		container.classList.remove('is-loading');
	  		textPlaceholder.classList.remove('is-empty');
		}
	}
})
