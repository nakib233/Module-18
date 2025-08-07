const numbers = [6, 1, 8, 2, 3, 5];
console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = ["sakib", "nakib", "akib", "bakib"];
friends.sort();
// console.log(friends);

const ages = [1, 5, 100, 15, 8, 2, 28];
// console.log(ages);
// ages.sort();
// console.log(ages);

// const sorted_ages = ages.sort(function (a, b) {
//   return a - b;
// });
// console.log(sorted_ages);

const sorted_ages = ages.sort(function (a, b) {
  return a - b;
});
console.log(sorted_ages);

// Descending

const sorted_ages_desc = ages.sort(function (a, b) {
  return b - a;
});
console.log(sorted_ages_desc);
