//First Class Functions: passing functions as arguments
//callback

function add(first, second, callback){
    console.log(first*second);
    callback()
}



add(2,3, function(){
    console.log('done')
})//6 done


add(4,5, function(){
    console.log('done again')
})//20 done again

//A function is a first object?
//a function is a variable
function logDone(){
    console.log('done from func')
}

add(78,4453, logDone)//347334 done from func
//---
//Two ways to work
//1.
function add(first, second, callback){
    console.log(first*second);
    callback()//you call here
}

function logDone(){
    console.log('done from func')
}

//you don't call on logDone
add(78,4453, logDone)//347334

//2.
function add(first, second, callback){
    console.log(first*second);
    //you don't call here
}

function logDone(){
    console.log('done from func')
}

//you call the func here
add(78,4453, logDone())//347334


//--You can do your callback optional

function add(first, second, callback){
    console.log(first*second);
if(callback){
    console.log('there is a callback func')
    callback();
}}

function logDone(){
    console.log('done from func')
}

//you call the func here
add(78,4453, logDone())
//done from func
// VM1056:4 347334
//here there is no callback



//--You can do your callback optional

function add(first, second, callback){
    console.log(first*second);
if(callback){
    console.log('there is a callback func')
    callback();
}}

function logDone(){
    console.log('done from func')
}

//you call the func here
add(78,4453, logDone)
// 347334
// VM1129:4 there is a callback func
// VM1129:9 done from func