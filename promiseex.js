function abc() {
  return new Promise((resolve, rejected) => {
    let num = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (num % 2 == 0) {
        resolve("Resolved");
      } else {
        rejected("Rejected");
      }
    }, 3000);
  });
}

abc()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
