
import { getId } from '../common/utils.js';
// template
const template = (opts = {}) => {

	const autocompleteTpl = `
		<div id='no-autocomplete'>
			<input type='text' />
			<input type='password' />
		</div>`;

	const autocompleteAdapter = opts.autocomplete ? '' : autocompleteTpl;

	const autocompleteValue = opts.autocomplete ? 'on' : 'off';

	const showRemember = opts.showRemember ? 'block' : 'none';

	const tpl = `
		<div id='login-wrapper'>
			<form id='login-form' onsubmit='return false'>
				${autocompleteAdapter}
				<label id='login-error' class='login-error'></label>
				<label class='login-account-wrapper'>
					<span class='account-label'>${opts.accountLabel}</span>
					<input id='login-account' name='account' type='text' placeholder='${opts.accountPlaceholder}' autocomplete='${autocompleteValue}' valid='present' />
					<span id='clear-account' class='del'>
				</label>

				<label class='login-account-wrapper'>
					<span class='password-label'>${opts.passwordLabel}</span>
					<input id='login-password' name='password' type='password' placeholder='${opts.passwordPlaceholder}' autocomplete='${autocompleteValue}' valid='present' />

				</label>

				<label class='login-remember-wrapper' style='display: ${ showRemember }'>
					<span>Rember Password:</span>
					<input id='login-remember' name='remember' type='checkbox' />
				</label>

				<input id='login-btn' class='login-btn' type='submit' value='${opts.loginBtnText}' />

				<div class='login-extra-wrapper'>
					<a href='forget.html'>Forget Password</a>
					<a href='register-mobile.html'>Register Free</a>
				</div>
			</form>
		</div>
	`;
	return tpl;
}

export default (conf = {}) => {
	// document.getElementById('login-wrapper')
	conf.container.innerHTML = template(conf);
	const $noAutocomplete = getId('no-autocomplete');
	if($noAutocomplete) {
		$noAutocomplete.style.opacity = '0';
		$noAutocomplete.style.height = '0';
	}
}










