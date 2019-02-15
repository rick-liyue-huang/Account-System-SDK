
/*
	set all events here, 
	firstly, get all elements by getId method,
	secondly, set form-check method,
	last, complete logic application
 */
import { getId as $ } from '../common/utils.js';
import { fetchPost } from '../common/fetch.js';
import { check } from '../common/form-check.js';

export default (opts = {}) => {
	const $loginForm = $('login-form');
	const $loginBtn = $('login-btn');
	const $remember = $('login-remember');
	const $account = $('login-account');
	const $password = $('login-password');
	const $clearAccount = $('clear-account');
	// const $clearPassword = $('clear-password');
	const $error = $('login-error');

	// need form validation
	$loginForm.onsubmit = async (e) => {
		e.preventDefault(e);
		/*
		enter to longin
		*/
		
		const checkResults = check($loginForm);
		console.log(checkResults);
		// if has not any error message results
		if(!checkResults.length) {

			// set remember for furture
			let remember = '0';
			if($remember.getAttribute('checked')) {
				remember = '1';
			}

			// async / await
			const data = await fetchPost('/login', {
				account: $account.value,
				password: $password.value,
				remember: remember
			});
			console.log(data);
			
			// after submit
			if(data.code === 200) {
				opts.success && opts.success();

			} else {
				$error.innerHTML = data.message
			}
		}
		// validation fail
		else {
			const name = checkResults[0].name;
			const type = checkResults[0].type;
			if(type === 'present') {
				if(name === 'account') {
					$error.innerHTML = 'pls enter username';
				}
				if(name === 'password') {
					$error.innerHTML = 'pls enter password';
				}
			}
		}
	}

	$account.oninput = () => {
		if($account.value.length) {
			$clearAccount.style.display = 'block'
		} else {
			$clearAccount.style.display = 'none'
		}

		$error.innerHTML = '';
	}

	$clearAccount.onclick = () => {
		$account.value = '';
		$clearAccount.style.display = 'none';
		$error.innerHTML = '';
	}

	$password.oninput = () => {
		$error.innerHTML = '';
	}
}









