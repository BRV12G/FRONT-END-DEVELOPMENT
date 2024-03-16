function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")


var house = {
    rooms: 3,
    doors: 20,
    color: "yellow"
}

house.windows = 11
house.windows = 14

console.log(house)
console.log(house.rooms)


//math object

var decimal = Math.random() * 10 ;
console.log(decimal);

var h = Math.ceil(decimal);
console.log(h);

//typeof

var test =  typeof('hello');
var test2 = typeof(10);
var test3 = typeof([1,2])
var test4 = typeof(3>5);
console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);



// throw new Error();
// console.log("Hello");

// try {
//     Number(5).toPrecision(300)
//     } catch(e) {
//     console.log("There was an error")
//     }

var str = "Hello";
str.match("jello");