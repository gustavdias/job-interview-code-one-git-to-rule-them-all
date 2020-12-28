//each digit should be transformed into its exponential

function squareDigits(num){
    //may the code be with you
    let strDigits = num.toString().split('');
    const squareDigits = strDigits.map(n => n*n)
  const squaredNumber = squareDigits.join('')
  return +squaredNumber
  }
  
  squareDigits(9119)
  
  //-----------------
  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }
  //-------------
  function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
      var i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join(""));
  }
  //--------
  function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
  };

  //*-------------------------------------