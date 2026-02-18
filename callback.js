function great(name){
    console.log("Hello " + name);
}
function processUserInput(callback){
    var namee = "Alice";
    callback(namee);
}
processUserInput(great);