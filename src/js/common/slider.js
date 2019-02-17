
import { getId as $ } from '../common/utils.js';

// Symbol used to create solo key, Symbol is function,
// different Symbol('same') call getting different solo ouput.
// here use Symbol to get private method, because it is solo.
const render = Symbol('render');
const event = Symbol('event');
const style =
`<style>
    .vs-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .vs-moved-bg {
        background: green;
        width: 0;
        position: absolute;
        z-index: 999;
        height: 100%;
    }

    .vs-unmoved-bg {
        background: gray;
        width: 100%;
        position:absolute
        z-index: 998;
        height: 100%;
    }

    .vs-text {
        position: absolute;
        width: 100%;
        top: 0;
        z-index: 1000;
        backgound: rgba(0,0,0,0);
        text-align: center;
    }

    .vs-move-btn {
        height: 100%;
        width: 30px;
        background: #333333;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1001;
    }
</style>`;

// console.log(Symbol('render') === render); // false

class Slider {

	constructor(opts) {
		this.opts = opts;
		if(!opts.container) {
			throw 'pls add container config'
		}
		else {
			// console.log(opts.container);
			this[render](opts);
			this[event](opts);
		}

		// this.test = this.test.bind(this);
	}

	// private method
	[render](opts) {
		// console.log('render');
		const unsuccessTip = opts.unsuccessTip || 'please hold and drag to right side';

		const tpl = style + `
			<div id='vs-wrapper' class='vs-wrapper'>
				<div id='vs-moved-bg' class='vs-moved-bg'></div>
				<span id='vs-move-btn' class='vs-move-btn'></span>
				<div id='vs-unmoved-bg' class='vs-unmoved-bg'></div>
				<span id='vs-text' class='vs-text' ondrag='return false;'>
					${unsuccessTip}
				</span>
			</div>
		`;
		opts.container.innerHTML = tpl;
	}

	// private method
	[event](opts) {
		const $btn = $('vs-move-btn');
		const $moved = $('vs-moved-bg');
		const $wrapper = $('vs-wrapper');
		const $text = $('vs-test');

		const reset = () => {
			this.startX = 0;
			this.startY = 0;
			this.start = false;
			this.end = false;
			this.offsetArr = [];
			$btn.style.left = '0px';
			$moved.style.width = '0px';
		}

		$btn.onmousedown = (e) => {
			this.start = true;
			this.startX = e.pageX;
			this.startY = e.pageY;
			this.offsetArr = [];
			// records: 
		}

		window.onmousemove = () => {
			if(this.start && !this.end) {
				let offsetX = e.pageX - this.startX;
				let offsetY = e.pageY - this.startY;
				this.offsetArr.push(offsetX + ',' + offsetY);
				$btn.style.left = offsetX + 'px';
				$moved.style.width = offsetX + 'px';

				let r1 = $moved.offsetLeft + parseInt(window.getComputedStyle($moved).width);

				// the 
				let r2 = parseInt(window.getComputedStyle($wrapper).width) - parseInt(window.getComputedStyle($btn).width);

				if(r1 >= r2) {
					this.end = true;
					this.start = false;
					$btn.style.left = r2 + 'px';
					$moved.style.width = r2 + 'px';

					opts.success && opts.success($wrapper, $text, this.offsetArr)
				}
			}
		}		

		window.onmouseup = () => {
			if(!this.end) {
				reset();
			}
		}
	}

	reset() {
		this[render](this.opts);
		this[event](this.opts);
	}

	/* know Symbol
	  test() {
		// list all the key names in Object, key can be em
		console.log(Object.keys(this)); // ["opts"]
		console.log(Object.keys(this.__proto__)); // []
		console.log(Object.getOwnPropertyNames(this.__proto__)); //  ["constructor", "test"]
		console.log(Object.getOwnPropertySymbols(this.__proto__)); // [Symbol(render), Symbol(event)]
	}*/
	/*test() {
		console.log(this);
	}*/

	// class mehtod
	// static test2() {
	// 	console.log('test2');
	// }
}

/*const slider = new Slider({
	container: 1
});*/

/*slider.test();
const test = slider.test;
test(); // this.test = this.test.bind(this);

console.log(slider);*/

// slider.test();
/*

	test how to get Symbol private methods
slider[Object.getOwnPropertySymbols(slider.__proto__)[0]]();
slider[Object.getOwnPropertySymbols(slider.__proto__)[0]] = function() {
	alert('render');
}
slider[Object.getOwnPropertySymbols(slider.__proto__)[0]]();*/

// Slider.test2();


/*function Slider() {
	this.opts = opts;
		if(!opts.container) {
			throw 'pls add container config'
		}
		else {
			this[render](opts);
			this[event](opts);
		}
}
Slider.prototype.test = function() {}
Slider.test2 = function() {}*/

export default Slider











