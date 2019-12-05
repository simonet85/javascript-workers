const fields = ['name', 'age', 'city', 'bio']

document.addEventListener("DOMContentLoaded",() => {
	if (window.Worker) {
		let worker = new Worker('./javascript/dist/worker-bundled.js');

		let btnRefresh = document.getElementById("refresh");
		let container = document.getElementsByClassName("container")[0];

		btnRefresh.addEventListener("click",() => {
		  cleanEntries();
		  container.classList.add('is-loading');
		  worker.postMessage('test');
		});

		worker.onmessage = function(e) {
	  		let jsonFetched = e.data;
	  		for(let fieldName of fields) {
				document.getElementsByClassName(fieldName)[0].innerHTML = jsonFetched[fieldName];
			}
	  		container.classList.remove('is-loading');
		}
	}
})

function cleanEntries() {
	for(let fieldName of fields) {
		document.getElementsByClassName(fieldName)[0].innerHTML = '';
	}
}


