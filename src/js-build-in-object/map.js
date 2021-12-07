// + Before ES6
const cityList = [
  { id: 1, name: 'Vietnam' },
  { id: 2, name: 'New York' },
];

const studentList = [
  { id: 123, name: 'Alice', cityId: 1 },
  { id: 321, name: 'Bob', cityId: 2 },
];

// Question: how to show city name for each student?
const cityMap = cityList.reduce((map, city) => {
  map[city.id] = city;
  return map;
}, {});

console.log(`cityMap`, cityMap);

// {
//   "1": {
//       "id": 1,
//       "name": "Vietnam"
//   },
//   "2": {
//       "id": 2,
//       "name": "New York"
//   }
// }

cityMap[1].name; // Vietnam
cityMap[2].name; // New York

// + Since ES6
// - Create a new Map
const map = new Map();
map.size; // 0
const map = new Map([
  ['a', 1],
  ['b', 2],
  [3, 3],
]);
map.size; // 3

// - Get / Set
map.set('a', 1);
map.set('a', 2);
map.size; // 1
map.get('a'); // 2
map.get('b'); // undefined
map.delete('b'); // false
map.delete('a'); // true
map.get('a'); // undefined
map.size; // 0

// - Loop through Map
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (const [key, value] of map) {
  console.log(key, value);
}
map.forEach((value, key) => {
  console.log(key, value);
});
// a 1
// b 2
// c 3

// - Show city name using Map
const cityList = [
  { id: 1, name: 'Vietnam' },
  { id: 2, name: 'New York' },
];
const studentList = [
  { id: 123, name: 'Alice', cityId: 1 },
  { id: 321, name: 'Bob', cityId: 2 },
];
// Question: how to show city name for each student?
// using forEach
const cityMap = new Map();
cityList.forEach((city) => {
  cityMap.set(city.id, city);
});
// or using reduce
const cityMap = cityList.reduce((map, city) => {
  map.set(city.id, city);
  return map;
}, new Map());
cityMap.get(1).name; // Vietnam
cityMap.get(2).name; // New York
