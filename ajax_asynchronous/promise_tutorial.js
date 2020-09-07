const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>{
	return fetch(url).then(resp=>resp.json())

})).then(results =>{
	console.log(results[0])
	console.log(results[1])
	console.log(results[0])
}).catch(() => console.log('error'))



const promise = new Promise((resolve, reject) =>{
if(true){
	resolve('stuff worked')
	}else{
		reject('Errot, it broke')
	}		
})

promise
.then(result => result +'!')
.then(result2 => {
	console.log(results2)
})

.catch(() => console.log('error'))