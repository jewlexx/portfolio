const array = new Array(101).fill(0).map((_, i) => i);

const classes = array.map((i) => {
  return `.width-${i} {
        width: ${i}%;
    }`;
});

console.log(classes.join("\n"));
