fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    const newPromise = response.json();
    return newPromise;
  })
  .then((data) => {
    console.log(data);
  });