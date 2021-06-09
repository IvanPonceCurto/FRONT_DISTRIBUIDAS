const login = async(mail, password) => {
	const body = {
		mail,
		password
	}
	try {
		const res = await fetch('https://distribuidas-backend.herokuapp.com/api/clientes/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body)
		});
		const dataRes = await res.json();
		return dataRes;
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	login
}