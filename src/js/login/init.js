
/*
	all the component includes: init.js, render.js and event.js.
	init.js is the main entry.
 */
// 
import '../common/polyfill.js';
import render from './render.js';
import bindEvent from './event.js';
// import _ from 'lodash';

// given the default user setting value style.
const login = (opts = {}) => {
	
	// default value for some opts object
	const defaultOpts = {
		loginBtnText: 'Login',
		accountPlaceholder: 'mobile/email/accountnumber',
		passwordPlaceholder: 'type password',
		accountLabel: 'user',
		passwordLabel: 'pw',
		showRemember: ''
	};
	// merge defaultOpts and user opts, and prefer for user opts
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









