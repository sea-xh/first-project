// [2, 4, 3][(5, 6, 4)];

// head: [('0', null)];

// cur: [('0', null)]; [(7, null)] [(0, null)];  [(8, null)];

// cary: 0,1,0

// sum : 7,10  sum.next:[7, null];  sum.next:[0, null];  sum.next:[8, null];

// function ListNode(val, next) {
// 	this.val = val === undefined ? 0 : val;
// 	this.next = next === undefined ? null : next;
// }
// let l1 = [2, 4, 3],
// 	l2 = [5, 6, 4];
// const addTwoNumbers = (l1, l2) => {
// 	let heade = new ListNode(0);
// 	let cur = heade;
// 	let carry = 0;
// 	while (l1 || l2) {
// 		let x = l1 ? l1.val : 0;
// 		let y = l2 ? l2.val : 0;
// 		let sum = x + y + carry;
// 		sum.next = new ListNode(sum % 10);
// 		cur = cur.next;
// 		carry = Math.floor(sum / 10);
// 		if (l1) {
// 			l1 = l1.next;
// 		}
// 		if (l2) {
// 			l2 = l2.next;
// 		}
// 	}
// 	return cur;
// };

// console.log(addTwoNumbers(l1, l2));

// A 继承自B

function B() {
	this.b = 'b';
}

B.prototype.fn = function () {
	console.log(this.b);
};

function A() {
	B.apply(this, Array.from(arguments).slice());
}

let tempFn = function () {};
tempFn.prototype = B.prototype;
A.prototype = new tempFn();

const a = new A();

console.log(a.b);
