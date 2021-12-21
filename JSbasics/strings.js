// string literals
var firstName = "Arohan";
var lastName = "Agate";

// escape characters
var myStr = "NBA superstar LeBron James once said, \"Strive for greatness.\"";
console.log(myStr);

// strings with single quotes
var myStr2 = 'NBA superstar LeBron James once said, "Strive for greatness."';
console.log(myStr2);

// escape sequences in Strings
/*
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

var str = 'FirstLine\n\t\\SecondLine\nThirdLine';
console.log(str);

// concatenating Strings with the +(=) operator
var str1 = 'I come first.' + 'I come second.';
str1 += ' I come third.';
console.log(str1);

// concatenating strings variables
var name = 'Arohan';
var intro = 'My name is ' + name;
console.log(intro);

// finding the length of a string
var str2 = 'Hello';
var str2Length = str2.length;

// bracket notation to find characters in string
var str3 = 'JavaScript';
var firstLetter = str3[0]; // first letter
var lastLetter = str3[str3.length-1]; // last letter

//strings are immutable