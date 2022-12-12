// alert('its working!!')
 if (1 !== 1 ) {

    console.log("It's True!");
 };

//  Example 2

let rating = 2;

if (rating === 3) {
    console.log(" YOU ARE A SUPER STAR!")
} else {
    console.log("YOU ARE NOT A SUPER STAR, SORRYY TRY AGAIN")
}

// Example 3

let num = 100;

if (num % 2 === 0){
    console.log("This number is even")
} else {
    console.log("This number is not even")
}

// Example 4

let highScore = 1900;
let userScore = 400;

if (userScore > highScore) {
    console.log(`Congrats, you have the new highscore of ${userScore}`);
    highScore = userScore;
} else {
    console.log(`Good game, your score of ${userScore} did not beat high score of ${highScore}`);
}

// Example 5

/* let password = "lay";

if (password.length >= 6){
   

    if (password.indexOf(' ') === -1){
        console.log("valid password!");
        
    } 
    else {
        console.log("password is long enough but must not contain spaces");
        
    }

}
else {
    console.log("password must be longer!");
} */

let password = "lliouy";

if(password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("valid password");
    
} else {
    console.log("invalid password");
    
}

// Example 6 

let age = 65 ;

if (age < 6 ||  age >= 65) {
    console.log("YOU GET IN FOR FREE");
}
else {
    console.log("YOU MUST PAY!")
}

// Example 7 
// (!) OPERATOR

let loggedInUser ;

if (!loggedInUser) {
    console.log("GET OUT HERR!");
}

// Example 8

let flavor = "grape";

/* if (flavor  !== "grape" && flavor !== "cherry") {
    console.log('WE DON\'T HAVE THAT');
   
    
} else {
    console.log("great choice");
} */

if (!(flavor  === "grape" && flavor === "cherry")) {
    console.log('WE ONLY HAVE GRAPE AND CHERRY');
}

// Example 9
// SWITCH
let day = 5;
 switch (day) {
    case 1:
        console.log("SABTI");
        break;
    case 2:
        console.log("AXAD");
        break;
    case 3 :
        console.log("ISNIIN");
        break;
    case 4: 
        console.log("SALAASA");
        break;
    case 5:
        console.log("ARBACA");
        break;
    default:
        console.log("Invalid day")
        break;
 }

// Example 10

// Terniary Operators

// normal way ---> 

let nums = 7;

// if (nums === 7) {
//     console.log("lucky");
// } else {
//     console.log("bad");
// }

/* Terniary way---> */

nums === 7 ? console.log('good') : console.log('bad');

// normal way --->  Example 2

let  user = "offline"  ;
// let color;
// if (user === "offline") {
//     color = 'red';
// } else {
//     color = 'green';
// }
 
/* Terniary way---> */

let colors = user === "offline" ? 'red' : 'green';
