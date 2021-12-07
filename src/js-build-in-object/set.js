// Create a new Set
const set = new Set();
// Set(0) {}
const set = new Set([1, 1, 2, 2, 3, 3]);
// Set(3) { 1, 2, 3}
const set = new Set('aabbcc');
// Set(3) { 'a', 'b', 'c' }
const set = new Set(new Set([1, 2, 3]));
// Set(3) { 1, 2, 3 }

// Add/Delete
const set = new Set();
set.size; // 0
set.add(1);
set.add(2);
set.size; // 2
set.has(1); // true
set.has(3); // false
set.delete(1); // true
set.delete(3); // false as 3 is not existed
set.clear();
set.size; // 0

// Loop through set
const numberSet = new Set([1, 2, 3, 3]);
for (const number of numberSet) {
  console.log(number); // 1, 2, 3
}
numberSet.forEach((number) => console.log(number)); // 1, 2, 3

// + Demo
// Remove duplicated numbers
function uniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const uniqueNumberSet = new Set(numberList);
  // return Array.from(uniqueNumberSet);
  return [...uniqueNumberSet];
}
console.log(uniqueNumbers([1, 1, 3, 3, 2, 2, 2]));

// Remove duplicated letters
function uniqueLetters(str) {
  if (str.length === 0) return '';
  const uniqueLetterSet = new Set(str);
  return [...uniqueLetterSet].join('');
}
console.log(uniqueLetters('abcabcabc'));

// Intersection : https://www.thoughtco.com/intersection-in-set-theory-3126587
function getIntersectionSet(set1, set2) {
  const intersectionSet = new Set();
  for (const item of set1) {
    if (set2.has(item)) intersectionSet.add(item);
  }
  return intersectionSet;
}
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4, 5]);
console.log(getIntersectionSet(set1, set2));
