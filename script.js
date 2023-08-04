//your JS code here. If required.
const promise1 = new Promise((resolve,reject) => {
	setTimeout (() => {
		resolve("Promise 1 Fulfilled");
	},2000)
})

const promise2 = new Promise((resolve,reject) => {
	setTimeout (() => {
		resolve("Promise 2 Fulfilled");
	},3000)
})

const promise3 = new Promise((resolve,reject) => {
	setTimeout (() => {
		resolve("Promise 3 Fulfilled");
	},1000)
})


// const promise = [promise1,promise2,promise3];

Promise.all([promise1,promise2,promise3]).then((values) => {
	const output = document.getElementById("output");
	output.innerHTML = `<tr>
          <th>Promise 1</th>
          <th>${values[0]}</th>
        </tr>
		<tr>
          <th>Promise 2</th>
          <th>${values[1]}</th>
        </tr>
		<tr>
          <th>Promise 3</th>
          <th>${values[2]}</th>
        </tr>`
})










