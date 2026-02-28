enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

function printStatusOrDirection(value: Direction | Status): void {
  console.log(value)
}

let d: Direction = Direction.Left
let s: Status = Status.SUCCESS

printStatusOrDirection(d)
printStatusOrDirection(s)
