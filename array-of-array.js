const numbers = [1, 2, 5, 4, 6];
const tournament_runs = [[], [], []];

const exam_marks = [
  [98, 34, 54, 67],
  [54, 89, 74, 23, 11],
  [45, 23, 23, 67, 90],
  [87, 78, 32, 87, 56],
];

// console.log(exam_marks[1], exam_marks[2]);
// console.log(exam_marks[1][3]);

console.log(exam_marks);
exam_marks[1][4] = 12;
console.log(exam_marks);
exam_marks[2].pop();
console.log(exam_marks);
