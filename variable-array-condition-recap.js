// variables
var bottleColor = "green";
var waterQuantity = 1;
var isFull = true;

// array
var items = ["bottle", "mug", "paper", "pen"];
items.indexOf("chocolate"); // -1
items.push("envelop");
items.push("watch");
items.pop();

// conditionals
if(items.length >= 4){
    console.log("You have too many stuff on your desk");
}
else if(items.length < 4 && items.length >= 00){
    console.log("Oriented desk");
}
else{
    console.log("You have a clean desk");
}