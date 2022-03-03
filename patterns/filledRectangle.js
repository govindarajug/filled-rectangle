const row = function (length) {
  return "*".repeat(length);
}

const filledRectangle = function (length, breadth) {
  if (length > 0) {
    return row(length).padEnd(length + 1, "\n").repeat(breadth);
  }
  return "";
}

const main = function () {
  const length = 3;
  const breadth = 4;
  console.log(filledRectangle(length, breadth));
}

main();