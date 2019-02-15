
// encapsulate getElementById method, and set the random for id.
const getId = (id) => {
	const dom = document.getElementById(id);
	dom && dom.setAttribute('id', dom.id + '-' + Math.floor(Math.random() * 10000));
	return dom;
}

export { getId }