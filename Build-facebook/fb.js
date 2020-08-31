
var database = [
	{
		username:'David',
		password: 'developer'	
	},
	{
		username:'Sally',
		password: 'developer'
	},
	{
		username:'Ingrid',
		password: 'developer'
	}
]

var newsFeed = [
{
	username: 'Bode',
	Timeline: 'nextup here',
},
{
	username: 'Simi',
	Timeline: 'wait o',
},
{
	username: 'Tony',
	Timeline: 'wonder',
}

];

var userNamePrompt = prompt("what's your username? ");
var passwordPrompt = prompt("what's your password? ");

function isUserValid(username, password){
	for(var i=0; i < database.length; i++){
		if(database[i].username===username &&
			database[i].password=== password){

			return true;
		}
	} 
		return false;
		

}

function signIn(username, password){

	if (isUserValid(username, password)) 
	{
		console.log(newsFeed);
		alert("Hi "+ username +"! you've been logged in!")
	} 
	else {
		alert("Sorry, wrong username and password!");
	}
	
}

signIn(userNamePrompt, passwordPrompt);
