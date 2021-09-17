fetch('http://admin/serivce', {
	method: 'GET',
	credentials: 'same-origin', //同域的请求携带cookie
})
	.then((response) => {
		if (response.ok) {
			// 通过response.ok 判断请求状态
		}
	})
	.then(() => {})
	.catch(() => {});

function fetchTimeout(url, init, timeout = 3000) {
	return new Promise((resolve, reject) => {
		fetch(url, init).then(resolve).catch(reject);
		setTimeout(reject, timeout);
	});
}

let controller = new AbortController(); // 中断请求
