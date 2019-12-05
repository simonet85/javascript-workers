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
			let jsonTest = {
				'id': '50',
				'name': 'Kamren Carter',
				'age': '74',
				'city': '525 Hand Loop',
				'bio': 'Eos voluptatibus neque et qui aperiam. Fuga et nostrum expedita commodi maxime porro.'
			}
	  		//let textContent = e.data;
	  		//textPlaceholder.innerHTML = textContent;
	  		for(let fieldName of fields) {
				document.getElementsByClassName(fieldName)[0].innerHTML = jsonTest[fieldName];
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


