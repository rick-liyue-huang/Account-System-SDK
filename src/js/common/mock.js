
import FetchMock from 'fetch-mock';

FetchMock.mock('/login', (url, opts) => {
	const params = opts.params;
	if(params.account === '18812345678') {

		if(params.password === '123456') {
			return {code: 200, message: 'success'};
		} else {
			return {code: 401, message: 'password wrong'};
		}

	} else {
		return { code: 400, message: 'username wrong' };
	}
})






