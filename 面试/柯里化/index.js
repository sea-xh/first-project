// function add(a, b) {
// 	return a + b;
// }

// function square(a) {
// 	return a * a;
// }

// function plusOnce(c) {
// 	return c + 1;
// }

// var addSquareAndPlusOne = composite(add, square, plusOnce);
// console.log(addSquareAndPlusOne(1, 2));
// composite(add, square, plusOnce)(1,2);

// function composite(...args) {
// 	return function (...arguments) {
// 		return args.reduce((memo, current) => {
// 			 // memo 上一个值，curren 当前值
// 			return current(typeof memo === 'function' ? memo.apply(memo,arguments) : memo)
// 		})
// 	}
// }
