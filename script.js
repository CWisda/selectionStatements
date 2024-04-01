const superMan = "Clark Kent"; 
let friend = "Lois Lane";
let friend2 = "Jimmy Olsen";

//Superman is taking his friend to the local fair for a day of fun.

let adultTicket = 10.00;
let childTicket = 5.00; 

let totalPrice = adultTicket * 3; 

let superManWallet = 25; 

if (superManWallet >= totalPrice) {
    console.log(`Clark Kent and his friends have a fun time`);
} else { 
   // console.log(`${friend} and ${friend2} complain to Clark Kent`);
   superManWallet += 50; 
   console.log(`${superMan} has ${superManWallet} and can now afford the ${totalPrice} to get them into the fair.`);
}

// starting the variable with "is" denotes a boolean type
let isWearingGlasses = false;

if (isWearingGlasses) {
    console.log(`${friend} chats happily with ${superMan}`);
} else if  (superManWallet <= 0) {
    console.log(`${superMan} steals money using his superpowers`);
    superManWallet += 20;
} else {
    console.log(`${superMan} saves the day!!`);
}

// Get some user input!!
// prompt the user for input

let userInput = window.prompt("Hey User, give me a verb");

console.log(`${superMan} ${userInput}ed to the bank.`)



//Switch Case Statements

let color = "orange";

switch (color) {
    case "red" : 
    console.log("green");
    break;
    case "orange" :
    console.log("blue");
    break;
    case "yellow" : 
    console.log("purple");
    break;
    default : 
    console.log("invalid color selection"); 
}


superManWallet = 0; 
const input = prompt("Enter your favorite progarmming language"); 

switch (input) {
    case "JS" :
        console.log("10 points to Gryffindor");
        break;
    case "CSS" :
        console.log("20 points to Gryffindor");
        break; 
    case "Rust" :
        console.log("10 points from Gryffindor");
        console.log("10 points to Ravenclaw.");
        break;
    case "C" : 
        console.log("100 points to Hufflepuff");
        break;
    default : 
        console.log("I don't know that language"); 
        break;
}