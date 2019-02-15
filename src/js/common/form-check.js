
// 1. export a function

// 2. API design 
// 2.1 check($input, 'mobile', cb)
// 2.2 <input type='text' valid='mobile, present'>

const rules = {
	mobile: (v) => {
		return
	},
	email: (v) => {
		return
	},
	// present means that some contents in 'input', v is the value of input
	present: (v) => {
		// if value is null
		if(!v.trim()) {
			return {
				// return some error message
				type: 'present',
				message: 'necessary'
			}
		}
	}
};

const check = (form) => {
	// valid form and verify form has children
	if(!form || !form.elements) {
		return
	}
	// get all elements under form
	const elements = form.elements;
	// console.log(elements);
	// set the results
	let checkResults = [];

	// transfer array-like to array by 'Array.from()',
	Array.from(elements).filter(item => {
		// and then filter all elements witg 'valid' attribute,
		return item.getAttribute('valid');
	}).map(item => {
		// for each element with 'valid' attribute, get all valid
		const valids = item.getAttribute('valid').split(', ');
		console.log('valids', valids); // ['present']
		const value = item.value;
		console.log('value', value) // input value
		
		// set error message
		let errorArray = [];
		// 
		valids.forEach(valid => {
			// validation
			// errorArr.push(result)
			if(rules[valid]) {
				// if present(!value) return {}
				let result = rules[valid](value);
				// get errors
				result && errorArray.push(result);
			}

		});

		// if get errors, get checkResults
		if(errorArray.length) {
			checkResults.push({
				dom: item,
				errorArray: errorArray,
				name: item.name,
				message: errorArray[0].message,
				type: errorArray[0].type
			})
		}
	});
	return checkResults;
}

export { check };







