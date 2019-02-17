
import Slider from '../../common/slider.js';
import { getId as $, addClass, removeClass } from '../../common/utils.js';
import { fetchPost } from '../../common/fetch.js'

export default (conf) => {

	let getMobileVerifyToken;

	const slider = new Slider({
		container: $('register-verify-wrapper'),
		success: async ($wrapper, $text, offsetArr) => {
				const offsetMsg = offsetArr.join(':');
				let data = await fetchPost('/getMobileVerifyToken', {
					offsetMsg: offsetMsg
				});

				if(data.code === 200) {
					getMobileVerifyToken = data.getMobileVerifyToken;
					addClass($wrapper, 'success');
					$text.innerHTML = 'verify successful';
				}
				else {
					addClass($wrapper, 'failed');
					$text.innerHTML = 'verify failed';
				}
		}
	})
}










