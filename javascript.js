function add7(num) {
    return num + 7;
}
console.log(add7(10));

function  multiply( a, b ) {
    return a * b;
}
console.log( multiply( 3, 2 ));

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aCbD"));