const s1 = (cb) => {
			setTimeout(() => cb && cb('s1'), 1000);
		}

		const s2 = (cb) => {
			setTimeout(() => cb && cb('s2'), 3000);
		}

		s1(v1 => {
			console.log(v1);
			s2(v2 => {
				console.log(v2);
			})
		})

		const p1 = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve('p1')
				}, 1000)
			})
		}

		const p2 = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve('p1')
				}, 3000)
			})
		}

		// fetch 返回的是promise

		p1().then(v1 => console.log(v1))
			.then(p2)
			.then(v2 => console.log(v2))

		const a1 = await p1();
		const a2 = await p2();