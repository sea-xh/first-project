import React from 'react';
import { useState, useRef, memo, Component, useMemo, useCallback } from 'react';

// function useMemo<T>(factor: () => T, deps: any[]): T

// export default function Usememo(children) {
// 	return (
// 		<>
// 			{/* {useMemo(() => {
// 				<ExpensiveTree />;
// 			}, [])} */}
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
// 			<p style={{ color: color }}>Hello, world!</p>
// 			{children}
// 		</>
// 	);
// }

// function Children({ children }) {
// 	let [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
// 			<p style={{ color: color }}>Hello, world!</p>
// 			{children}
// 		</>
// 	);
// }

// this.props.children
// const ExpensiveTree = () => {
// 	console.log('昂贵的渲染');
// 	let now = performance.now();
// 	while (performance.now() - now < 100) {
// 		// 在这100ms啥也不做
// 	}
// 	return <p>I am a very slow component tree.</p>;
// };

// const ExpensiveTree = () => {
// 	console.log('昂贵的渲染');
// 	let now = performance.now();
// 	while (performance.now() - now < 100) {
// 		// 在这100ms啥也不做
// 	}
// 	return <p>I am a very slow component tree.</p>;
// };

// memo
// const NotUpdate = memo(
// 	({ children }) => (typeof children === 'function' ? children() : children),
// 	() => true,
// );
// const ExpensiveTree = () => (
// 	<NotUpdate>
// 		{() => {
// 			console.log('昂贵的渲染');
// 			let now = performance.now();
// 			while (performance.now() - now < 100) {
// 				// 在这100ms啥也不做
// 			}
// 			return <p>I am a very slow component tree.</p>;
// 		}}
// 	</NotUpdate>
// );

// useMemo

/* this.props.children */
// export default function Usememo() {
// 	return (
// 		<App>
// 			<ExpensiveTree />
// 		</App>
// 	);
// }
// function App({ children }) {
// 	let [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
// 			<p style={{ color }}>Hello, world!</p>
// 			{children}
// 		</>
// 	);
// }

/* 把state分离出来 */
// function From() {
// 	let [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
// 			<p style={{ color: color }}>Hello, world!</p>
// 		</>
// 	);
// }

// export default function Usememo() {
// 	return (
// 		<>
// 			<From />
// 			<ExpensiveTree />
// 		</>
// 	);
// }

// react 16架构
// Reconciler阶段 :'协调器'， 负责找出变化的组件

/* useMemo */
// export default function Usememo() {
// 	let [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
// 			<p style={{ color: color }}>Hello, world!</p>
// 			{useMemo(
// 				() => (
// 					<ExpensiveTree /> // jsx对象 —— babel转react.createElement(type,config,children)
// 				),
// 				[],
// 			)}
// 		</>
// 	);
// }

// react 更新流 自顶向下 数据驱动视图 （state props）触发render

// const ExpensiveTree = () => {
// 	console.log('我不关心color变化，别让我渲染');
// 	let now = performance.now();
// 	while (performance.now() - now > 100) {
// 		// 认为制造100ms时间 ，啥也不做
// 	}
// 	return <p>i am a expesivetree</p>;
// };

// const App = () => {
// 	const [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<p style={{ color: color }}>Hello World</p>
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
// 			<ExpensiveTree />
// 		</>
// 	);
// };

// // 把state分离出来
// const Input = () => {
// 	const [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<p style={{ color: color }}>Hello World</p>
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
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
// const Input = () => {
// 	const [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<p style={{ color: color }}>Hello World</p>
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
// 		</>
// 	);
// };

// const ExpensiveTree = () => {
// 	console.log('我不关心color变化，别让我渲染');
// 	let now = performance.now();
// 	while (performance.now() - now > 100) {
// 		// 认为制造100ms时间 ，啥也不做
// 	}
// 	return <p>i am a expesive tree</p>;
// };

// const ColorApp = ({ children }) => {
// 	return <div>{children}</div>;
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

// this.props.childern

// //  useMomo
// const ExpensiveTree = () => {
// 	console.log('我不关心color变化，别让我渲染');
// 	let now = performance.now();
// 	while (performance.now() - now > 100) {
// 		// 认为制造100ms时间 ，啥也不做
// 	}
// 	return <p>i am a expesive tree</p>;
// };

// function useMemo<T>(factor: () => T, deps?: any[] | undefined):T {
// 	return {} as any
// }

// const App = () => {
// 	const [color, setColor] = useState('red');
// 	return (
// 		<>
// 			<p style={{ color: color }}>Hello World</p>
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
// 			{useMemo(
// 				() => (
// 					<ExpensiveTree />
// 				),
// 				[],
// 			)}
// 		</>
// 	);
// };

// export default App

// // memo
// const NotUpdate = memo(
// 	({ children }) => (typeof children === 'function' ? children() : children),
// 	() => true,
// );

// const ExpensiveTree = () => (
// 	<NotUpdate>
// 		{() => {
// 			console.log('我不关心color变化，别让我渲染');
// 			let now = performance.now();
// 			while (performance.now() - now > 100) {
// 				// 认为制造100ms时间 ，啥也不做
// 			}
// 			return <p>i am a expesive tree</p>;
// 		}}
// 	</NotUpdate>
// );

// const App = () => {
// 	const [color, setColor] = useState('red');

// 	return (
// 		<>
// 			<p style={{ color: color }}>Hello World</p>
// 			<input value={color} onChange={(e) => setColor(e.target.value)} />
// 			<ExpensiveTree />
// 		</>
// 	);
// };

// export default function App() {
// 	if (Math.random() > 0.5) {
// 		useState(10000);
// 	}
// 	const [value, setValue] = useState(0);

// 	return (
// 		<div>
// 			<button onClick={() => setValue(value + 1)}>+</button>
// 			{value}
// 		</div>
// 	);
// }

// export default App;
