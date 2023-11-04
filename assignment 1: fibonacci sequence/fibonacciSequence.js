//fibonacci sequence, two approach
//recursion and dynamic programming (bottom-up approach)

//recursion
function fibonacci(n) {
  try {
    if (n < 0) {
      throw new Error("Out of range");
    } else if (n === 0) {
      return 0;
    } else if (n <= 2) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  } catch (error) {
    console.log(error);
  }
}
console.log(fibonacci(41));
