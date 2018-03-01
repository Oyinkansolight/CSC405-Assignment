// function addChar(){
// 	if (document.getElementById() === null){
// 		('screen').value = 0;
// 	}

// 	else{
// 		('screen').value = document.getElementById();	
// 	}
// }

// function cos(){
// 	document.getElementById('cos');
// 	onclick = Math.cos('screen')
// }

// function sin(){
// 	document.getElementById('sin');
// }

// function tan(){
// 	document.getElementById('tan');
// }

// function log(){
// 	document.getElementById('log');
// }

// function mod(){
// 	document.getElementById('mod');
// }

// function sin-1(){
// 	document.getElementById('sin-1');
// }

// function cos-1(){
// 	document.getElementById('cos-1');
// }

// function tan-1(){
// 	document.getElementById('tan-1');
// }

// function clear(){
// 	document.getElementById('clear');
// }

// function clearAll(){
// 	document.getElementById('clearAll');
// }

// function delete(){
// 	document.getElementById('delete');
// }

// function squareRoot(){
// 	document.getElementById('squareRoot');
// }

// function negate(){
// 	document.getElementById('negate');
// }

// function square(){
// 	document.getElementById('square');
// }

// function exponent(){
// 	document.getElementById('exponent');
// }

// function percent(){
// 	document.getElementById('percent');
// }

// function multiply(){
// 	document.getElementById('multiply');
// }

// function minus(){
// 	document.getElementById('minus');
// }

// function factorial(){
// 	document.getElementById('factorial');
// }

// function rightBracket(){
// 	document.getElementById('rightBracket');
// }

// function leftBracket(){
// 	document.getElementById('leftBracket');
// }

// function point(){
// 	document.getElementById('point');
// }

// function plus(){
// 	document.getElementById('plus');
// }

// function equals(){
// 	document.getElementById('equals');
// }





function addChar(character) {
	if($('screen').value == null || $('screen').value == "0")
		$('screen').value = character
	else
		$('screen').value += character
}

function cos() {
	$('screen').value = Math.cos($('screen').value);
}

function sin() {
	$('screen').value = Math.sin($('screen').value);
}

function tan() {
	$('screen').value = Math.tan($('screen').value);
}

function sqrt() {
	$('screen').value = Math.sqrt($('screen').value);
}

function ln() {
	$('screen').value = Math.log($('screen').value);
}

function exp() {
	$('screen').value = Math.exp($('screen').value);
}

function deleteChar() {
	$('screen').value = $('screen').value.substring(0, $('screen').value.length - 1);
}

function negate() {
	if($('screen').value.substring(0, 1) == "-")
		$('screen').value = $('screen').value.substring(1, $('screen').value.length);
	else
		$('screen').value = "-" + $('screen').value;
}

function compute() {
	$('screen').value = eval($('screen').value);
}

function square() {
	$('screen').value = eval($('screen').value) * eval($('screen').value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

function clearInput(){
	$('screen').value = "";
}

function $(docId){
	return document.getElementById(docId);
}
