const getProducto = async(idProducto) => {
	const body = {
		idProducto
	}
	try {
		const res = await fetch('https://distribuidas-backend.herokuapp.com/api/productos/'+idProducto, {
			method: 'GET',
			//body: JSON.stringify(body)
		});
		const dataRes = await res.json();
		return dataRes;
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	getProducto
}