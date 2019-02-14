
// template
const template = (opts = {}) => {
	return '<div>hello</div>'
}

export default (conf = {}) => {
	conf.container.innerHTML = template(conf);
}