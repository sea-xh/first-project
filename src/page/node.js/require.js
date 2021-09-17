const vm = require('vm');

const path = require('path');

const fs = require('fs');

function r(filename) {
	const pathToFile = path.resolve(__dirname, filename);

	const content = fs.readFileSync(pathToFile, 'utf-8');

	const wrapper = ['(function (require, moudle, exports) {', '})'];

	const wrapperContent = wrapper[0] + content + wrapper[1];

	const script = new vm.Script(wrapperContent, { filename: 'index.js' });

	const result = script.runInThisContext();

	const moudle = {
		exports: {},
	};

	result(r, moudle, moudle.exports);

	return moudle.exports;
}

global.r = r;
