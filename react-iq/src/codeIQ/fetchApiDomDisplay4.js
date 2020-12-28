//Beginner React.js Coding Interview (ft. Clément Mihailescu)
//I stopped at 20m, need to add TypeScript
import React from "react";
import axios from "axios";
const { useEffect, useState } = React;

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

interface UserName {
  first: string;
  last: string;
  title: string;
}
interface UserInfo {
  name: UserName;
}

// const fetchRandomData = ():Promise<any> => {
//destructuring with {data}
    const fetchRandomData = () => {
        return axios
          .get("https://randomuser.me/api")
          .then(({data}) => {
            // handle success
            // console.log(response);
            return data;
            // return JSON.stringify(data,null,2);
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
          // .then(function () {
          //   // always executed
          // });
      };
      

const getFullUserName = (userInfo) => {
  const {name: {first,last}} = userInfo;
  returns `${first} ${last}`;
}

function FetchApiDom() {
  const [counter, setCounter] = useState(0);
  const [userInfos, setUserInfos] = useState([])
  // const [userInfos, setUserInfos] = useState<any>([])//TS

  const [randomUserDataJSON, setRandomUserDataJSON] = useState('');
  useEffect(()=>{
fetchRandomData().then(randomData=>{
    setRandomUserDataJSON(JSON.stringify(randomData,null,2) || 'no user data found');
setUserInfos(randomData.results);
})
  },[])//why [] mimics componentDidMount???
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
      {
      userInfos.map(userInfo, idx)=> (
        <div key={idx}>
        <p>{getFullUserName(userInfo)}</p>
        {/* <img></img> */}
        </div>
      )
}
      <pre>
          {randomUserDataJSON}
      </pre>
    </div>
  );
}
//what is pre?????
export default FetchApiDom;
