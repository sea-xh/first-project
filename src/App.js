import { BrowserRouter as Router, Route, useHistory, Redirect } from 'react-router-dom';
import { KeepaliveRouterSwitch, KeepaliveRoute } from './component';
import Detail from './page/input';
import TheIndex from './page/home';
import myPromise from './promise';

// new myPromise((resolve, reject) => {
// 	// resolve('解决');
// 	// reject('拒绝');
// }).then(
// 	(res) => {
// 		// console.log(res, 'then');
// 	},
// 	(reason) => {
// 		// console.log(reason, 'catch');
// 		return '嘻嘻哈哈';
// 	},
// );

// const p1 = new myPromise((resolve, reject) => {
// 	resolve('解决1');
// });

// const p2 = new myPromise((resolve, reject) => {
// 	resolve('解决2');
// });

const menusList = [
	{
		name: '首页',
		path: '/home',
	},
	{
		name: '表单demo',
		path: '/detail',
	},
];

function Meuns() {
	const history = useHistory();
	return (
		<div>
			{menusList.map((item) => (
				<span
					style={{ color: 'blue', marginRight: 5 }}
					className="routerLink"
					onClick={() => {
						history.push(item.path);
					}}
					key={item.path}
				>
					{item.name}
				</span>
			))}
		</div>
	);
}

const App = () => {
	return (
		<div style={{ margin: '0 auto', width: 300 }}>
			<Router>
				<Meuns />
				<KeepaliveRouterSwitch>
					<KeepaliveRoute path="/detail" component={Detail}></KeepaliveRoute>
					<Route path={'/home'} component={TheIndex} />
					<Redirect from="/*" to="/home" />
				</KeepaliveRouterSwitch>
			</Router>
		</div>
	);
};

export default App;
