//--
//try, catch, finally, throw - error handling in JavaScript
//Used most when handling data from other sources or user input (those can be unreliable)
//Common to see see it with Ajax calls and async code
//error handling use the keywords:
//try, catch, finally, throw

//try{} - let's you test a block of code for error
//catch{} - let's you handle the error
//throw{} - let's you create custom errors
//finally{} - let's you execute code after try and catch, regardless of the result.


/* Try, catch, finally */

try {
    console.log('Start of try runs');
    
    unicycle;//this is the error, there is nothing in the program called unicycle
  
    console.log('End of try runs -- never reached'); //since the error was reached, it never goes to this statement
  
  } catch(err) {
  
    console.log('Error has occured: ' + err); 
    //err: when a error occurs, JS generates an object containing the details about it.
  
  } finally {
    console.log('This is always run'); 
  }
  
  console.log('...Then the execution continues');
  
  
  
  
  let json = '{ "age": 30 }';
   
  try {
   
    let user = JSON.parse(json); 
    if (!user.name) {
      throw new SyntaxError("-------------Inside throw - Incomplete data: no name!!!---------");
      //SyntaxError is the name of the error and after is the message
    }
   
    console.log( user.name );
   
  } catch(e) {
    console.log( "_______Inside catch - JSON Error: _____" + e ); 
  }
  
  
  
  
  var employeeId = "1";
  (function Employee() {
    try {
      throw "2";//what you throw here will be passed to catch as the error
    } catch (employeeId) {
      console.log('inside console.log of catch: ', employeeId);
    }
    console.log('outside error handling: ', employeeId);
  })();
  
  // inside console.log of catch:  2
  // outside error handling:  1