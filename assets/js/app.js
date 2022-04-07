var cl = console.log;

var x = 10;
cl(x);

y = x;

cl(y);

// primitive >> hold on value 

// NOn-primitive >> hold on referance

var person = {
    fname : "johne",
    lname: "doe",
    profile : "MEAN Stack",
    place : "puna",
    candrive : true,
}
var p1 = person;
cl(p1);

p1.fname = "tony";
cl(p1);  

p1.fname = "stark";

cl(p1)

