/* Previous tasks code

//alert asking users to type their name
var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);



//testing escape quote
var firstSentence = 'I like a song that is called "Only you".';
var secondSentence = "I love a song that is called 'Only you'.";

console.log(firstSentence);
console.log(secondSentence);

// declaring variables and returning the area of a triange
var a = 12;
    h = 13;
triangleArea = (a * h / 2);

console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
 */


//if statement checking whether number is positive or negative

// var a = 23;
// var b = 45;
// var value = (a * a) + (2 * a * b) - (b * b);
//
// console.log(value);
//
// if (value > 0) {
//     console.log(value + ' = wynik jest dodatni');
// }
//
// else if (value < 0) {
//     console.log(value + ' = wynik jest ujemny');
// }
// else {
//     console.log(' wynik to "0"');
// }



function getTriangleArea(a,h) {
    var value = a * h / 2;

    if ((a > 0) && (h > 0 )) {
        return (a * h / 2);
    }
    else {
        console.log('nieprawidłowe dane');
    }
}

console.log("'Zadanie 9.1' outcome = " + getTriangleArea(43, 6));

var triangle1Area = getTriangleArea(12, 11);
var triangle2Area = getTriangleArea(13, 19);
var triangle3Area = getTriangleArea(16, 13);
console.log("First example outcome = " + triangle1Area);
console.log("Second example outcome = " + triangle2Area);
console.log("Third example outcome = " + triangle3Area);