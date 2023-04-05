/* -------------------------------------------------------------------------- */
/*                                Async & Await                               */
/* -------------------------------------------------------------------------- */

// Error

// async function stuff() {
//   // returning a simple value
//   // return [1, 2, 3];
//   // return a fulfilled promise
//   // return Promise.resolve("Success!");
//   //return a rejected promise
//   return Promise.reject("Failed");
// }

// const promise = stuff();
// promise.then((data) => console.log(data)).catch((error) => console.log(error));

// async function getTodoItem() {
//   // await keyword
//   // await on the promise
//   // await returns the resolved value of the fulfilled promise
//   // fetch("https://jsonplaceholder.typicode.com/todos/1")
//   //   .then((response) => response.json())
//   //   .then((data) => console.log(data));
//   // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   // const data = await response.json();
//   // console.log(data);

//   try {
//     console.log("Inside try block");
//     throw new Error("Failed");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getTodoItem();


async function getTodoItem() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/incorrect/1"
      );
  
      // response.ok -> true -> successful
      // response.ok -> false -> unsuccessful
  
      // If an error occurred
      if (!response.ok) {
        throw new Error(`An error occured with status code : ${response.status}`);
      }
  
      const data = await response.json();
    } catch (error) {
      console.log(error.message);
    }
  }
  
  getTodoItem();