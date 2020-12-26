/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
}
// 从网络上读取某个excel文件，url必须同域，否则报错
function readWorkbook(sheet, callback) {
	var url = "config.xlsx";
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.responseType = 'arraybuffer';
	xhr.onload = function () {
		if (xhr.status === 200) {
			var data = new Uint8Array(xhr.response);
			var workbook = XLSX.read(data, {type: 'array'});
			var json = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
			if (callback) {
				callback(json);
			}
			// console.log(workbook);
			// console.log(json);
		}
	};
	xhr.send();
}