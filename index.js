function receivesAFunction(callback) {
    callback();
}


function returnsANamedFunction() {
    return returnsANamedFunction;
}


function returnsAnAnonymousFunction() {
    return () => 1 + 1 
}

/*
// function receivesAFunction(callback){
//     console.log(() => callback = "spy")
// }
// console.log(receivesAFunction('spy'))


// function receivesAFunction(callback){
//     callback();
// }
// console.log(receivesAFunction())
// function namedFunction(){
// }
// function returnsANamedFunction(){
//     return namedFunction;
// }
// function returnsAnAnonymousFunction(){
//    return () => 2+3
// }
*/


