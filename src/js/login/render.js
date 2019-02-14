
export default (container) => {
	const tpl = `<form id='form'>
		<input id='input' name='username' type='text' />
		<input name='password' type='password' />
		<input id='submit' value='Login' type='submit' />
	</form>`

	container.innerHTML = tpl;
}