
// encapsulate getElementById method, and set the random for id.
const getId = (id) => {
	const dom = document.getElementById(id);
	dom && dom.setAttribute('id', dom.id + '-' + Math.floor(Math.random() * 10000));
	return dom;
}

const hasClass = (obj, cls) => {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '\\s|$)'));
} 

const addClass = (obj, cls) => {
	obj.className.trim();
	if(!hasClass(obj, cls)) obj.className += ' ' + cls;
}

const removeClass = (obj, cls) => {
	if(hasClass(obj, cls)) {
		const reg = new RegExp('(\\s|^)' + cls + '\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}

export { getId, addClass, removeClass }







