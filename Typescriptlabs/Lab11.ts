interface Student {
  name: string;
  marks: number;
}

type StudentList = Student[];

const students: StudentList = [
  { name: "Mubeen", marks: 85 },
  { name: "Ayaan", marks: 90 },
  { name: "Sara", marks: 78 }
];

students.forEach(student => {
  console.log(student.name, student.marks);
});



type PointType = {
  x: number
  y: number
}

interface PointInterface {
  x: number
  y: number
}

function printPoint(point: PointType | PointInterface): void {
  console.log(point.x, point.y)
}

printPoint({ x: 10, y: 20 })
printPoint({ x: 5, y: 15 })
