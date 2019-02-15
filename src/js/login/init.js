
// 初始化
import '../common/polyfill.js';
import render from './render.js';
import bindEvent from './event.js';
// import _ from 'lodash';

// 给出默认值，防止客户自己输入错误的形式
const login = (opts = {}) => {
	
	// 默认值
	const defaultOpts = {
		loginBtnText: 'Login',
		accountPlaceholder: 'mobile/email/accountnumber',
		passwordPlaceholder: 'type password',
		accountLabel: '',
		passwordLabel: '',
		showRemember: ''
	};
	// 用户传入的值，且用户输入值优先,进行merge
	const options = Object.assign(defaultOpts, opts);
	// const options = _.assign(defaultOpts, opts);
	/*const d = Symbol('d');
	Object.assign({a: 1, b: 2}, {c: 3, [d]: 4})*/

	render(options);
	bindEvent(options);
}

export { login }
// export const login =...
// module.exports = login;
// export default login








