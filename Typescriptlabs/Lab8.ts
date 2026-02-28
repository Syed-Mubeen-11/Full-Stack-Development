type Point = {
  x: number;
  y: number;
};
function printPoint(p: Point): void {
  console.log(`x: ${p.x}, y: ${p.y}`);
}
printPoint({ x: 10, y: 20 });
