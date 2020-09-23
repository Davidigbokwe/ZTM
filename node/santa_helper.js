// ( <-- this bracket means add 1 floor
// ) <-- this bracket means remove 1 floor
// read the file and find out what floor santa ends on
// use if statements to determine set santa ==0
// start
const fs = require('fs')
santa = 0
x ='('
y = ')'
fs.readFile('./santa_direction.txt',(err, data)=>{
	console.time("fun challenge")
	newData = data.toString();
	if(err){
		console.log('errrrrrrrrr')
	}

	for(char of newData){
		if(char === x){
			santa++
		}else if(char === y){
			santa--
		}

	}
	console.log(`The instructions take santa to floor ${santa}`)
	console.timeEnd("fun challenge")

})

// ANSWER The instructions take santa to floor 280
// fun challenge: 11.633ms


// --- Part Two ---
// Now, given the same instructions, find the position of the first character 
//that causes him to enter the basement (floor -1). 
//The first character in the instructions has position 1, the second character has position 2, and so on.

// For example:

// ) causes him to enter the basement at character position 1.
// ()()) causes him to enter the basement at character position 5.
// What is the position of the character that causes Santa to first enter the basement?

// Solving it
// What is the position of the character that causes the total of santa = -1
// we need to return the position where santa == -1`
function question(){
	fs.readFile('./santa_direction.txt',(err, data)=>{
	const directions = data.toString();
	const directionsArray = directions.split('');
	let acc =0
	let counter =0
	const answer = directionsArray.some((currentValue)=>{
		if(currentValue === '('){
			 acc+=1
		}else if(currentValue===')'){
			 acc-=1
		}
		counter++
		return acc <0
	})
	console.log(`Santa enters basement at ${counter}`)
})
}

question()