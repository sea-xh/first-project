class EventEmittle {
	constructor(options) {
		this.events = {};
		this.maxListeners = options.maxListeners;
	}

	on(event, cb) {
		if (!this.events[event]) {
			this.events[event] = [];
		}
		if (this.events[event].length >= this.maxListeners) {
			console.log('监听过多');
		}
		this.events[event].push(cb);
		return this;
	}

	emit(event, ...args) {
		if (!this.events[event]) {
			new TypeError('当前事件还没有注册');
		}
		this.events[event].forEach((cb) => {
			cb.apply(this, args);
		});
	}

	off(event, cb) {
		if (!cb) {
			this.events = null;
		}
		this.events[event].filter((fn) => fn !== cb);
		return this;
	}

	once(event, cb) {
		const fun = (...args) => {
			this.off(event, fun);
			cb.apply(this, args);
		};
		this.on(event, fun);
		return this;
	}
}

// const event = new EventEmittle();
const event = new EventEmittle({ maxListeners: 3 }); // 设置最大监听数
const add = (a, b) => console.log(a + b);

event.on('add', add); // 监听
event.on('add', add); // 监听
event.on('add', add); // 监听

// event.emit('add', 1, 2); // 触发 3
// event.off('add', add); //取消监听
// event.once('add', add); //取消监听
// event.emit('add', 1, 2); // 触发 3

// event.once('add', (value) => console.log(value, '监听')); // 只监听一次
