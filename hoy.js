//Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
//Create an array using forEach that contains the usernames of all players with a score bigger than 5.
//Tip: Use the ternary operator
//Find and display the total score of the users.

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];


 person = []
 scoreplus5 = []
 sum = []

 gameInfo.forEach((element,index) => { 
 person.push(element.username + "!");

 //sum+=element.score

})

gameInfo.forEach((element,index) =>{
if(element.score > 5)scoreplus5.push(element.username);
})

gameInfo.forEach((element,index) =>{
	sum = element.score;
})

console.log(person);
console.log(sum);
console.log(scoreplus5);























