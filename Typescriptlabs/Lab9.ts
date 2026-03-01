  function move(direction: "up" | "down" | "left" | "right"): void {
  console.log(`Moving ${direction}`);
}
move("up");
move("left");

function formatValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(Math.round(value));
  }
}
formatValue("hello");
formatValue(12.6);
