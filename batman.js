/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);
/*
00 10 20 30 1 2 3 4 5 6 7 8 9 10
01 11 21 31
02 12 22 32
03 13 23 33
*/

// game loop
var X=X0;
var Y=Y0;
var B=H;
var I=0;
var D=W;
var T=0;
function Distmedia(a,b) {
    return Math.floor((Math.abs(a-b))/2);
}
function Down() {
    T=Y;
        Y+= Distmedia(Y,B);
}
function R() {
    I=X;
        X+= Distmedia(X,D);
}
function U() {
    if(Y==1){
        Y=0;
    } else {
    B=Y;  
        Y-= Distmedia(Y,T);
}}
function L() {
    if(X==1){
        X=0;
    } else {
    D=X;
    X-= Distmedia(X,I);}
}
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    switch(bombDir){
        case "D":
            Down();                        
            break;
        case "DR":
           Down();
            R();
            break;
        case "R":
            R();            
            break;
        case "UR":
            U();
            R();
            break;
        case "U":
            U();             
            break;
        case "UL":
            U();
            L();
            break;
        case "L":
            L();
            break;
        case "DL":
            Down();
            L();
            break;
                }
        

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    


    // the location of the next window Batman should jump to.
    console.log(X,Y);
    
}