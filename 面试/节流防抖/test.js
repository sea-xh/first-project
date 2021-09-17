// debounce

// 输入框

// 一段时间内多次触发，只有最后一次响应
function debounce(fn, wait) {
	let timer = null;
	return function () {
		let args = arguments;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, wait);
	};
}

// throttle

// 一段时间只执行一次

// function throttle(fn, delay) {
// 	let timer = null;
// 	return function () {
// 		if (!timer) {
// 			timer = setTimeout(() => {
// 				fn.apply(this, arguments);
// 			}, delay);
// 		}
// 	};
// }

// function throttle(fn, delay) {
// 	let last = performance.now();

// 	return function () {
// 		const current = performance.now();
// 		if (current - last >= delay) {
// 			fn.apply(this, arguments);
// 			last = current;
// 		}
// 	};
// }

// function throttle(fn, delay) {
// 	let timer = null;
// 	return function () {
// 		if (!timer) {
// 			timer = setTimeout(() => {
// 				fn.apply(this, arguments);
// 				timer = null;
// 			}, delay);
// 		}
// 	};
// }

// 最后一次立即执行

// function throttle(fn, delay) {
// 	let timer = null;
// 	let startTimer = performance.now();

// 	return function () {
// 		const currentTimer = performance.now();
// 		const remainTime = delay - (currentTimer - startTimer); // 还剩多少时间执行

// 		const contetn = this;
// 		const args = arguments;
// 		clearTimeout(timer);
// 		if (remainTime <= 0) {
// 			fn.apply(contetn, args);
// 			startTimer = performance.now();
// 		} else {
// 			timer = setTimeout(() => {
// 				fn.apply(this.arguments);
// 			}, remainTime);
// 		}
// 	};
// }
