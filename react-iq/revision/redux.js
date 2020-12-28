
//React Interview Questions and answers 2019 | Best Commonly Asked | Part -3

//1. What are some alternatives to redux?

//mobX
//apollo client + graphQL: no need for Redux
//RxJS (Reactive extension)

//--------------

//2.
// What is redux //! middleware?
//post request to server => DB
//action to reducer => store

//If there is a error with the communication with the server, 
//the new data will be stored locally only, but not save in DB permanently
//They should be in sync but it fail.

//!with middleware 
//post to the server, if a positive response comes back
//the middleware updates the store

//---------------

//3. What is the difference between redux-saga and redux-thunk?
//they are both redux middleware 

//Instead of dispatching a action directly, you create a action creator
//! Action creator 
//It is a function that first does things that are asynchronous, like saving data
//this will be a promise, and when the promise resolves (positive response), then you send a action 
//The response determines if that action should be dispatched or not.


//! Redux Saga
// Instead of creating a action creator, you just dispatch the action:
//Saga catches that action from the middle and does the same thing.

//It use a special function: generator function

function* gen(){
    yield doFirst()
    yield doSecond()}


    //again
    //redux thunk: use some sort of promise which if it returns a positive answer the store is updated
    //function only executes when the promises is resolved.

    //Redux Saga uses generator function, here things are more synchronous
// yield doFirst()
// yield doSecond()
//clear syntax!!!
//!In saga you can cancel action


//There is still redux promise and others

//-------------------------------------------------
    