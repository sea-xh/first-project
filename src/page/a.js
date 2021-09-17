// console.log(Person.prototype.constructor === Person);
// // 在原型上添加方法或者属性只创建一次

// new关键字做了什么
// 一个继承自Person.prototype的新对象p1被创建
// 1. p1.__proto__ === Persion.prototype
// 2. 将this指向新创建的对象p1
// 3. 返回新的对象
// 如果构造函数没有显示的返回值，那么返回this
// 如果构造函数显示返回的是基本类型，那么返回的还是this
// 如果构造函数有显示的返回值， 是对象类型，比如{a:1},那么返回{a:1}

// function _new() {
// 	const obj = Object.create();
// 	const constructorFn = [].shift.call(arguments);
// 	obj.__proto__ === constructorFn.prototype;
// 	const result = constructorFn.apply(obj, arguments);
// 	return typeof result === 'object' ? result : obj;
// }

// function Person(name) {
// 	this.name = name;
// 	// return { a: 1 };
// }

// function objectFactory() {
// 	let o = new Object();
// 	let objConstrurtor = [].shift.call(arguments);
// 	o.__proto__ === objConstrurtor.prototype;
// 	let resultObj = objConstrurtor.apply(o, arguments);
// 	return typeof resultObj === 'object' ? resultObj : o;
// }

// // const p1 = new Person('xh1');
// const p1 = new objectFactory(Person, 'xh1');

// console.log(p1);

// 原型链继承

// 问题 ： 无法传参 如果实例是引用类型，会互相影响

function Person() {
	this.name = ['嘻嘻', '哈哈'];
	// this.gteName = function(){
	// 	console.log(this.)
	// }
}

Person.prototype.getName = function () {
	console.log(this.name);
};

function Child() {}

Child.prototype = new Person();
Child.prototype.constructor = Child;

const p1 = new Child();
const p2 = new Child();

console.log(p1.name);
p1.name.pop();
console.log(p1.name);
console.log(p2.name);

// 构造函数继承

// 问题： 每创建一次实例对象，方法和属性都要创建一次。浪费内存

function Person(name) {
	this.name = name;
}

// Person.prototype.getName = function () {
// 	console.log(this.name);
// };

function Child() {
	Person.call(this, Array.from(arguments).slice());
}

Child.prototype = new Person();
Child.prototype.constructor = Child;

const p1 = new Child('嘻嘻');

console.log(p1.name);

// 寄生继承;

function Person(name) {
	this.name = name;
}

function Child() {
	Person.apply(this, Array.from(arguments).slice());
}

let TempFunc = function () {};
TempFunc.prototype = Person.prototype;
Child.prototype = new TempFunc();
// Child.prototype = Object.create(Person.prototype);

const p1 = new Child('嘻嘻');

console.log(Person.prototype, 233);

Child.prototype.addFun = function () {};

console.log(Person.prototype, 244);

for (var a = 0; a <= 3; a++) {
	(function (a) {
		setTimeout(() => {
			console.log(a);
		});
	})(a);
	// setTimeout(() => {
	// 	console.log(a);
	// });
}

//let 引入了块级作用域;
console.log(a);
let a = 1;

const teacher = {
	name: 'xh',
	getName: () => {
		return this.name;
	},
};

console.log(teacher.getName());

class Test {
	_name = '';
	constructor() {
		this.name = 'hah';
	}
	static getName() {
		return this.name;
	}
}
console.log(Test.getName());

function render(templete) {
	return function (content) {
		return templete.replace(/\$\{(.*?)\}/g, (math, key) => content[key]);
	};
}

const { f1, f2 } = { f1: 1, f2: 2 };
console.log(f1);

// 结构的原理 Iterator接口

const obj = { f1: 1, f2: 2 };

const obj = {
	count: 0,
	[Symbol.iterator]: () => {
		return {
			next: () => {
				obj.count++;

				if (obj.count < 10) {
					return {
						value: obj.count,
						done: false,
					};
				} else {
					return {
						value: undefined,
						done: true,
					};
				}
			},
		};
	},
};

// const obj = {
// 	count: 0,
// 	[Symbol.iterator]: () => {
// 		return {
// 			next: () => {
// 				obj.count++;
// 				if (obj.count < 10) {
// 					return {
// 						value: obj.count,
// 						done: false,
// 					};
// 				} else {
// 					return {
// 						value: undefined,
// 						done: true,
// 					};
// 				}
// 			},
// 		};
// 	},
// };

// for (let a of obj) {
// 	console.log(a);
// }

const arr1 = [1, 2, [3, 4, [5]]];

// function flatDeep(arr, d = 1) {
// 	if (d > 0) {
// 		return arr.reduce((res, val) => {
// 			if (Array.isArray(val)) {
// 				res = res.concat(flatDeep(val, d - 1));
// 			} else {
// 				res = res.concat(val);
// 			}
// 			return res;
// 		}, []);
// 	} else {
// 		return arr.slice();
// 	}
// }

const arr = [1, 2, [6, 6], 3, 4];

function flatDeep(arr, d) {
	if (d <= 0) {
		return arr;
	}

	return arr.reduce((res, val) => {
		if (Array.isArray(current)) {
			res = res.concat(flatDeep(val, d - 1));
		} else {
			res = res.concat(val);
		}
		return res;
	}, []);
}
