Array.prototype.myMap = function (cb) {
    const result = [];
    const arrayToLoop = this;
    for (let i = 0; i < arrayToLoop.length; i++) {
      const element = arrayToLoop[i];
      const returnedValue = cb(element);
      result.push(returnedValue);
    }
    return result;
  };