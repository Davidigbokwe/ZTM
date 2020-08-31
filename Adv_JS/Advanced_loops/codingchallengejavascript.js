
// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that 
// if you enter HEX color format it returns RGB and 
// if you enter RGB color format it returns HEX.


//HEX CODE TO RGB CONVERTER 

function hex_converter(string){

	//Split the string of hex code without the #

	hex = string.split('') 

	// run loop to replace letters with numbers 

	for (var i = 0; i < hex.length; i++){
	    if (hex[i] == 'F' ){
	        hex[i] = 15;					
		}
		else if (hex[i] == 'E' ){
	        hex[i] = 14;
		}
		else if (hex[i] == 'D' ){
	       hex[i] = 13 ;
		}
		else if (hex[i] == 'C'){
	        hex[i] = 12 ;
		}
		else if (hex[i] == 'B'){
	        hex[i] =  11 ;
		}
		else if (hex[i] == 'A' ){
	        hex[i] = 10 ;
		}
		
    }  // Group numbers to get RGB -- HEX and RGB HAVE ONLY 6 CHARACTERS
    
	    group1 = Number((hex[0]) *16) + Number(hex[1])	
	    group2 = Number((hex[2]) *16) + Number(hex[3])
	    group3 = Number((hex[4]) *16) + Number(hex[5])
	    

    return`RGB(${ group1}, ${group2}, ${group3}) ---- Thank you Jesus!`
}




// RGB TO HEX CODE CONVERTER

function RGB_converter(a,b,c){

	// empty list to store hex decimal numbers for iteration
	liste = []

	//group and divide RGB BY 16 TO GET DECIMAL NUMBERS
	gru1 =Math.floor(a/16)
	besideIt = a - (gru1 * 16)
	liste.push(gru1, besideIt)

	gru2 =Math.floor(b/16)
	besideIt2 = b - (gru2 * 16)
	liste.push(gru2, besideIt2)

	gru3 = Math.floor(c/16)
	besideIt3 = c - (gru3 * 16)   
	liste.push(gru3, besideIt3)

	// Loop to replace decimal numbers with letters if necessary

	for (var i = 0; i < liste.length; i++){
	    if (liste[i] == 15){
	        liste[i] = 'F';
		}
		else if (liste[i] == 14){
	        liste[i] = 'E';
		}
		else if (liste[i] == 13){
	        liste[i] = 'D';
		}
		else if (liste[i] == 12){
	        liste[i] = 'C';
		}
		else if (liste[i] == 11){
	        liste[i] = 'B';
		}
		else if (liste[i] == 10){
	        liste[i] = 'A';
		}		
    } 
    // Turn list to string and remove commas using regular expression
    newer = liste.toString()
    final= newer.replace(/,/g, '')
    
    return 	`Hex code = #${final} ---- Thank you Jesus!`
}




// Question 2
// Write a javascript function that takes an array of numbers and a target number.
//  The function should find two different numbers in the array that,
//   when added together, give the target number.
//  For example: answer([1,2,3], 4)should return [1,3]

// FIND 2 NUMBERS IN ARRAY WHOSE SUM EQUALS TARGET NUMBER

new_one = []
function arrayo (arr, targ){
	for (num of arr){
		num2 = targ - num
		if(arr.includes(num2)){
			new_one.push(num)
			new_one.push(num2)
			 return new_one
			// return num num2
		}

	}
}











// // Question 1: Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e.
//  [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// STEP 1 - Understand the problem
// make a function that organizes into individual arrays that is ordered
// STEP 2 - PLAN & ATTACK
// 1) Sort the array from smallest to largest
// 2) Group numbers that occur more than once in individual arrays


// Create function that orders
 array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
 array.sort(function(a,b){return a-b})

 array.reduce((r, c, i, { [i - 2]: a, [i - 1]: b }) => {
             if (b !== c) return [...r, c];
             if (a !== c) return r.pop(), [...r, [b, c]];
             r[r.length - 1].push(c);
             return r;
        }, []);































// z = array.toString(',')

// function Counter(array){
// 	array.forEach(val => this[val] = (this[val] || 0)+1)
// }

// listerr = new Counter(z)

// // Answer - counter {1: 4, 2: 3, 4: 1, 5: 1, 10: 1, 20: 2, 391: 1, 392: 1, 591: 1}

// // Function that checks if value is .1
// listing = []
// newList =Object.entries(listerr)
// let i = 0
// While (i>newList.length){
// 	 for (items of newList){
// 			x=newList[0][0]
// 			y =newList[0][1]
// 			items = x.repeat(y)
// 			console.log(items)
// 	}

// }

// function arrayOrg (arr){
// 	new_array = arr.sort()
// 	for(let i = 0; i < new_array.length; i++){
// 		for(let j = 0; j < new_array.length; j++){
			
// 			new_list = []
// 			search = new_array[i]
// 			if(new_array[i] === search ){
// 				new_list.push(new_array[i])
// 				return new_array, new_list;

// 			}
// 	} 	


// }



for(i=0; i<i.length; i++){
	return i
}