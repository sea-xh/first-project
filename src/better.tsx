import React, { useMemo, useState, memo } from 'react';

// const ExpensiveTree = () => {
// 	console.log('我不关心color的变化');
// 	let now = Date.now();
// 	while (Date.now() - now > 100) {}
// 	return <p> i an a expensive tree</p>;
// };

// const App = () => {
// 	const [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<p style={{ color: color }}>{color}</p>
// 			<input onChange={(e) => setColor(e.target.value)} />
// 			<ExpensiveTree />
// 		</>
// 	);
// };

// export default App;

// 把state抽离出来

// const ExpensiveTree = () => {
// 	console.log('我不关心color的变化');
// 	let now = Date.now();
// 	while (Date.now() - now > 100) {}
// 	return <p> i an a expensive tree</p>;
// };

// const Input = () => {
// 	const [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<p style={{ color: color }}>{color}</p>
// 			<input onChange={(e) => setColor(e.target.value)} />
// 		</>
// 	);
// };

// const App = () => {
// 	return (
// 		<>
// 			<Input />
// 			<ExpensiveTree />
// 		</>
// 	);
// };

// export default App;

// this.props.children
// const ExpensiveTree = () => {
// 	console.log('我不关心color的变化');
// 	let now = Date.now();
// 	while (Date.now() - now > 100) {}
// 	return <p> i an a expensive tree</p>;
// };

// const Input = () => {
// 	const [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<p style={{ color: color }}>{color}</p>
// 			<input onChange={(e) => setColor(e.target.value)} />
// 		</>
// 	);
// };

// const ColorApp = (props: any) => {
// 	return <div>{props.children}</div>;
// };
// const App = () => {
// 	return (
// 		<ColorApp>
// 			<Input />
// 			<ExpensiveTree />
// 		</ColorApp>
// 	);
// };

// export default App;

// useMemo  // 变量级别
// const ExpensiveTree = () => {
// 	console.log('我不关心color的变化');
// 	let now = Date.now();
// 	while (Date.now() - now > 100) {}
// 	return <p> i an a expensive tree</p>;
// };

// const App = () => {
// 	const [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<p style={{ color: color }}>{color}</p>
// 			<input onChange={(e) => setColor(e.target.value)} />
// 			{useMemo(
// 				() => (
// 					<ExpensiveTree />
// 				),
// 				[],
// 			)}
// 		</>
// 	);
// };

// export default App;

// memo 组件级别

// const NotUpdate = memo(
// 	({ children }) => (typeof children === 'function' ? children() : children),
// 	() => true,
// );

// const ExpensiveTree = () => (
// 	<NotUpdate>
// 		{() => {
// 			console.log('我不关心color的变化');
// 			let now = Date.now();
// 			while (Date.now() - now > 100) {}
// 			return <p> i an a expensive tree</p>;
// 		}}
// 	</NotUpdate>
// );

// const App = () => {
// 	const [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<p style={{ color: color }}>{color}</p>
// 			<input onChange={(e) => setColor(e.target.value)} />
// 			<ExpensiveTree />
// 		</>
// 	);
// };

// export default App;
