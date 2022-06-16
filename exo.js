const multiply = (number) => number * 3;

// console.log(multiply(2));

const multiplyTest = () => {
  const result = multiply(4);

  if (result === 8) {
    return true;
  } else {
    return false;
  }
};

multiplyTest()
  ? console.log("Test multiply ok")
  : console.error("test multiply failed");
