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