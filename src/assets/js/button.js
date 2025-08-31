let count = 0;

const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const counter = document.getElementById("counter");

// Increment
increment.addEventListener("click", () => {
  count++;
  counter.value = count;
});

// Decrement (only if > 0)
decrement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.value = count;
  }
});
