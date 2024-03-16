// function double(num1)
// {
//     return num1*2;
// }

// var num1 = 4;
// var num2 = 6;

// // var answer = muktiply(num1,num2);
// // console.log("the solution is " , answer);

// function increment(num1)
// {
//     return num1++;
// }

// var answer2= increment(double(num1));
// console.log("the soln 2 is" + answer2);

/*let counter =3;
function example(){
 console.log(counter);
 counter=counter-1;
 if(counter===0) return;
 example();
}

example();

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())
*/

// Task 1: Build a function-based console log message generator
function consoleStyler(color , background , fontSize , txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message , style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions")
    {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else
    {
        console.log(message, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
celebrateStyler('birthday')


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate( 'ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions')
