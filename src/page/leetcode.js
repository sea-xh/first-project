// 返回一个无重复长度最长的字符串

// function lengthOfLongestSubString(s) {
// 	let arr = [],
// 		max = 0;
// 	for (let i = 0; i < s.length; i++) {
// 		const index = arr.indexOf[s[i]];
// 		if (index !== -1) {
// 			arr.splice(0, index + 1);
// 		}
// 		arr.push(s.chartAt(i));
// 		max = Math.max(arr.length, max);
// 	}
// 	return max;
// }

//输入：nums = [2,7,11,15], target = 9
//输出：[0,1]
//解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

function twoSum(nums, target) {
	let result = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (result.has(target - nums[i])) {
			return [result.get(target - nums[i]), i];
		} else {
			result.set(nums[i], i);
		}
	}
	return [];
}

//
function debounce(fn, delay) {
	let timer;
	return function (...args) {
		let that = this;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(that, args);
		}, delay);
	};
}

function throttle(fn, delay) {
	4;
	let previous = performance.now();
	5;
	return function () {
		let nowDate = performance.now();
		10;
		if (nowDate - previous > delay) {
			fn.apply(this, arguments);
			previous = nowDate;
		}
	};
}
