const fs = require('fs')


fs.readFile('./hello.txt',(err, data)=>{
	if(err){
		consle.log('errrrrrrrrr')
	}
	console.log('Async', data.toString());
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

//WRITE

fs.writeFile('bye.txt','balling', err=>{
	if(err){
		console.log(err)
	}
})

//DELETE
fs.unlink('./bye.txt', err=>{
	
	if(err){
		console.log(err)
	}
	console.log('Inception')
})






//Append

// fs.appendFile('./hello.txt', ' This is so cool', err=>{
// 	if(err){
// 		console.log(err)
// 	}
// })