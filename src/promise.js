class MyPromise {
	static PENGING = 'pending';
	static FULFILLED = 'fulfilled';
	static REJECTED = 'rejected';
	static _status = MyPromise.PENGING;

	constructor(executeFn) {
		this.status = MyPromise.PENGING;
		this.value = null;
		this.reason = null;
		this.onFulfilledCallbacks = [];
		this.onRejectCallBacks = [];
		try {
			executeFn(this.resolve.bind(this), this.reject.bind(this));
		} catch (error) {
			this.reject(error);
		}
	}

	resolve(value) {
		if (this.status === MyPromise.PENGING) {
			this.status = MyPromise.FULFILLED;
			this.value = value;
			queueMicrotask(() => {
				this.onFulfilledCallbacks.forEach((callback) => callback(value));
			});
		}
	}

	reject(reason) {
		if (this.status === MyPromise.PENGING) {
			this.status = MyPromise.REJECTED;
			this.reason = reason;
			queueMicrotask(() => {
				this.onRejectCallBacks.forEach((callback) => callback(this.reason));
			});
		}
	}

	isFunction(fn) {
		return typeof fn === 'function';
	}

	then(onFulfilled, onRejected) {
		const realonFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => value;
		const realonRejected = this.isFunction(onRejected)
			? onRejected
			: (reason) => {
					throw reason;
			  };

		const promise2 = new MyPromise((resolve, reject) => {
			const microOnFulfilledtask = () => {
				try {
					const x = realonFulfilled(this.value);
					this.resolvePromise(promise2, x, resolve, reject);
				} catch (error) {
					reject(error);
				}
			};

			const microOnRejectedtask = () => {
				try {
					realonRejected(this.reason);
				} catch (error) {
					reject(error);
				}
			};

			switch (this.status) {
				case MyPromise.FULFILLED:
					microOnFulfilledtask();
					break;
				case MyPromise.REJECTED:
					microOnRejectedtask();
					break;
				case MyPromise.PENGING:
					this.onFulfilledCallbacks.push(microOnFulfilledtask);
					this.onRejectCallBacks.push(microOnRejectedtask);
					break;
			}
		});

		return promise2;
	}

	// resolvePromise(promise, x, resolve, reject)
	// 解偶then返回的promise实例

	/*
	1. x === promise 相当于循环嵌套
	2. x instanceof promise x是promise的实例 ,继续用resolvePromise处理

	3. x === function ，保证只调用一次 let called = false
	let then = x.then
	then.call(x, (y) => {
		if(called) return
		resolvePromise(promise, y, resolve,reject)
		called = true
	})
	*/

	resolvePromise(promise2, x, resolve, reject) {
		debugger;
		if (promise2 === x) {
			// 禁止循环嵌套
			reject(new TypeError('禁止循环嵌套'));
		}
		if (x instanceof MyPromise) {
			console.log(233);
			// 如果x是promise的实例
			if (x.status === MyPromise.PENGING) {
				x.then(
					(y) => {
						this.resolvePromise(promise2, y, resolve, reject);
					},
					(r) => {
						reject(r);
					},
				);
			} else {
				x.then(resolve, reject);
			}
		} else {
			const then = x.then;
			// x 不是promise实例
			if (this.isFunction(x)) {
				let called = false;
				try {
					then.call(
						x,
						(y) => {
							if (called) return;
							called = true;
							this.resolvePromise(promise2, y, resolve, reject);
						},
						(r) => {
							if (called) return;
							called = true;
							reject(r);
						},
					);
				} catch (error) {
					if (called) return;
					called = true;
					reject(error);
				}
			} else {
				resolve(x);
			}
		}
	}
}

export default MyPromise;
