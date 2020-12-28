//Beginner React.js Coding Interview (ft. Clément Mihailescu)
import React from "react";
import axios from "axios";
const { useState } = React;

// Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

//https://randomuser.me/api



// const fetchRandomData = ():Promise<any> => {

    const fetchRandomData = () => {
        return axios
          .get("https://randomuser.me/api")
          .then((response) => {
            // handle success
            console.log(response);
            return response;
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
          // .then(function () {
          //   // always executed
          // });
      };
      


function FetchApi() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1> Hello Code</h1>
      <h2>Start clicking!!!</h2>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>

      <button
        onClick={() => {
          fetchRandomData();
        }}
      >
        Fetch Random Data
      </button>
    </div>
  );
}

export default FetchApi;
