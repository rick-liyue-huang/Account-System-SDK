
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
	present: (v) => {
		if(!v.trim()) {
			return {
				type: 'present',
				message: 'necessary'
			}
		}
	}
};

const check = (form) => {

	if(!form || !form.elements) {
		return
	}
	const elements = form.elements;
	// console.log(elements);
	let checkResults = [];

	Array.from(elements).filter(item => {
		return item.getAttribute('valid');
	}).map(item => {
		const valids = item.getAttribute('valid').split(', ');
		const value = item.value;
		
		let errorArray = [];
		valids.forEach(valid => {
			// validation
			// errorArr.push(result)
			if(rules[valid]) {
				let result = rules[valid](value);
				result && errorArray.push(result);
			}

		});

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







