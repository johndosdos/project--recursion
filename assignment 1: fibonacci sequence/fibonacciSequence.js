//fibonacci sequence, two approach
//recursion and dynamic programming (bottom-up approach)

//we'll use the 41st fibonacci number as an example

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

/* //dynamic programming (bottom-up approach)
function fibonacci(n, memo = [0, 1, 1]) {
  try {
    if (n < 0) {
      throw new Error("Out of range");
    } else if (memo[n] !== undefined) {
      return memo[n];
    } else if (n === 0) {
      return memo[n];
    } else if (n <= 2) {
      return memo[n];
    } else {
      for (let i = 3; i <= n; i += 1) {
        memo[i] = memo[i - 1] + memo[i - 2];
      }
      return memo[n];
    }
  } catch (error) {
    console.log(error);
  }
}
console.log(fibonacci(41)); */
