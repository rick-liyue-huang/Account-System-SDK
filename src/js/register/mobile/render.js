
const tpl = (opts = {}) => {
	return `
		<div id='register-mobile-wrapper' class='register-mobile-wrapper'>
			<form id='register-mobile-form' onsubmit='return false'>
				<label>
					<span>mobile number</span>
					<input type='text' placeholder='${opts.mobileHolder}' valid='present, mobile' />
				</label>
				<label>
					<span>validation</span>
					<div id='register-verify-wrapper'></div>
				</label>
			</form>
		</div>
	`;
}

export default (conf) => {
	conf.container.innerHTML = tpl(conf);
}