const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://admin/serivce'); // 建立链接

xhr.onreadystatechange = function () {
	if (xhr.readyState !== 4) {
		return;
	}
	if (xhr.status === 200) {
		console.log(xhr.responseText);
	} else {
		console.error(xhr.status, xhr.statusText);
	}
};

// 处理超时
xhr.timeout = 3000;
xhr.ontimeout = () => {
	console.log('当前页面超时了');
};

// 文件上传
xhr.upload.onprogress = p = () => {
	
};

xhr.send(); //监听完成再去发送
