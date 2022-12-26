const _ = require("lodash");

console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(_.compact([0, 1, false, 2, "", 3]));
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);
console.log(_.difference([2, 1], [2, 3]));
console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x"));
// Drops Number of elements from front of array the number is specified in
// second argument if not given then by default will drop the number 1 element from front of array
console.log(_.drop([1, 2, 3],2));

_.dropRight([1, 2, 3]);
// => [1, 2]
_.dropRight([1, 2, 3], 2);
// => [1]
_.dropRight([1, 2, 3], 5);
// => []
_.dropRight([1, 2, 3], 0);

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.dropRightWhile(users, function(o) { return !o.active; });
// => objects for ['barney']
 
// The `_.matches` iteratee shorthand.
_.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['barney', 'fred']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropRightWhile(users, ['active', false]);
// => objects for ['barney']
 
// The `_.property` iteratee shorthand.
_.dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
 
// The `_.matches` iteratee shorthand.
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']
 
// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']

// params => The array to fill , The value to fill with, start position , end position
var array = [1, 2, 3];
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
_.fill(Array(3), 2);
// => [2, 2, 2]
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0
 
// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0
 
// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2
 
// The `_.matches` iteratee shorthand.
_.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0
 
// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ['active', false]);
// => 2
 
// The `_.property` iteratee shorthand.
_.findLastIndex(users, 'active');
// => 0
// Gets First Element of the array
_.head([1, 2, 3]);
// => 1
// Flattens array at first level
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
//Flattens at all levels
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
// Flattens with specified depth
var array = [1, [2, [3, [4]], 5]];
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
_.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
// Params => The array, The value to search, the index to search from
_.indexOf([1, 2, 1, 2], 2);
// => 1
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
// removes the last element from the array
_.initial([1, 2, 3]);
// => [1, 2]
//Returns the new array of intersecting values.
_.intersection([2, 1], [2, 3]);
// => [2]
_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [2.1]
// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
// Joins array with specified value
console.log(_.join(['a', 'b', 'c'], ','));
//gets last element
_.last([1, 2, 3]);
// => 3
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
var array = ['a', 'b', 'c', 'd'];
_.nth(array, 1);
// => 'b'
_.nth(array, -2);
// => 'c';
// Unlike _.without, this method mutates array. Use _.remove to remove elements from an array by predicate.
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
//  Unlike _.difference, this method mutates array.
_.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);
console.log(array);
// => ['a', 'c']
console.log(pulled);
// => ['b', 'd']var array = [1, 2, 3, 4];
// Unlike _.filter, this method mutates array. Use _.pull to pull elements from an array by value.
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
console.log(array);
// => [1, 3]
console.log(evens);
// => [2, 4]
var array = [1, 2, 3];
_.reverse(array);
// => [3, 2, 1]
console.log(array);
// => [3, 2, 1]
console.log(_.slice(array, [start=0], [end=array.length]))
_.sortedIndex([30, 50], 40);
// => 1
var objects = [{ 'x': 4 }, { 'x': 5 }];
// The _.sortedIndexBy() method is used to return the lowest index of the array where an element can be inserted and maintain its sorted order. In addition, it accepts iteratee which is invoked for value and each element of array to compute their sort ranking.It uses the binary search.
_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 0
// The `_.property` iteratee shorthand.
_.sortedIndexBy(objects, { 'x': 4 }, 'x');
// => 0
// The _.sortedIndexOf() method is used to get the index of first occurrence of the particular element in the sorted array. It uses the binary search to sort an array.
_.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
var objects = [{ 'x': 4 }, { 'x': 5 }]; 
_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 1
// The `_.property` iteratee shorthand.
_.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
// => 1
_.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
// => 3
_.sortedUniq([1, 1, 2]);
// => [1, 2]
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
_.tail([1, 2, 3]);
// => [2, 3]
_.take([1, 2, 3]);
// => [1]
_.take([1, 2, 3], 2);
// => [1, 2]
_.take([1, 2, 3], 5);
// => [1, 2, 3]
_.take([1, 2, 3], 0);
// => []
_.takeRight([1, 2, 3]);
// => [3]
_.takeRight([1, 2, 3], 2);
// => [2, 3]
_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]
_.takeRight([1, 2, 3], 0);
// => []
var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
_.takeRightWhile(users, function (o) {
  return !o.active;
});
// => objects for ['fred', 'pebbles'
// The `_.matches` iteratee shorthand.
_.takeRightWhile(users, { user: "pebbles", active: false });
// => objects for ['pebbles']
// The `_.matchesProperty` iteratee shorthand.
_.takeRightWhile(users, ["active", false]);
// => objects for ['fred', 'pebbles']
// The `_.property` iteratee shorthand.
_.takeRightWhile(users, "active");
// => []
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
_.takeWhile(users, function(o) { return !o.active; });
// => objects for ['barney', 'fred']
// The `_.matches` iteratee shorthand.
_.takeWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['barney']
// The `_.matchesProperty` iteratee shorthand.
_.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']
// The `_.property` iteratee shorthand.
_.takeWhile(users, 'active');
// => []
// Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
_.union([2], [1, 2]);
// => [2, 1]
// This method is like _.union except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed. Result values are chosen from the first array in which the value occurs. The iteratee is invoked with one argument:
_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
// The `_.property` iteratee shorthand.
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
// This method is like _.union except that it accepts comparator which is invoked to compare elements of arrays. Result values are chosen from the first array in which the value occurs. The comparator is invoked with two arguments: (arrVal, othVal).
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.unionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]_.uniq([2, 1, 2]);
// Returns the new duplicate free array.
_.uniq([2, 1, 2]);
// => [2, 1] 
 _.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
// The `_.property` iteratee shorthand.
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
_.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]
_.unzipWith(zipped, _.add);
// => [3, 30, 300]
//  Unlike _.pull, this method returns a new array.
_.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
_.without([2, 1, 2, 3], 1, 2);
// => [3]
// It returns an array of symmetric difference of given arrays.
let x = [3, 10, 100];
let y = [100, 10, 2];
let symmetricDifference = _.xor(x, y);
console.log(symmetricDifference);
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]
// The `_.property` iteratee shorthand.
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]