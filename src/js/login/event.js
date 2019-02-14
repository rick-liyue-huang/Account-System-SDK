
import formCheck from '../common/formCheck.js';

export default () => {
	const btn = document.getElementById('submit');
	const input = document.getElementById('input');
	const check = formCheck(document.getElementById('form'));

	btn.onclick = () => {
		check();
	}

	input.oninput = () => {
		check();
	}
}