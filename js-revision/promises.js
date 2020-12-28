let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("fail");
  }
});

//if resolve, then...
p.then((message) => {
  console.log("this is in the then " + message);
}).catch((message) => {
  console.log("this is in the catch " + message);
});

//promises are cleaner than callbacks
//They are great to do something that will take time on the background

//-------------------------------------------------------------------
//Callback

function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingCatMeme = false;

  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "WebDevSimplified < Cat",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

//Promise
function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}
//Callback

watchTutorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

//Promise
watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
//no callback hell, just put .then instead of a callback inside of a callback inside of a callback
//-------



const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

//Promise.all runs every promise at the same time, so you don't have to wait.
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);
//Promise.race runs and gives the answer to the promise as soon as the first promise is ran
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);

//----------------------------
//Promise
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      post.push(post);
  
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
 }

 //Async Await
//  to use await inside the function you need to label it async:
// Async / Await
async function init() {
   await createPost({ title: "Post three", body: "This is post three" });
   getPosts();
   //await until createPost is done to call getPosts()
}
init()
// It waits for an asynchronous processor action to complete


// Async Await with fetch:
// Async / Await / Fetch
async function fetchUsers () {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
 
   const data = await res.json();
   console.log(data);
}
fetchUsers();
// It has two await, because fetch has two steps (format and get data) before you can console.log


//------------------


//Fire Base fetch() and .then()

const addIngredientHandler = (ingredient) => {
  fetch(
    "https://react-hooks-update-gd-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
    {
      method: "POST",
      body: JSON.stringify(ingredient), //axios does it automatically
      headers: { "Content-Type": "application/json" }, //axios does it automatically
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      setUserIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: responseData.name, ...ingredient }, //name is for firebase to give you a unique id
      ]);
    });
};