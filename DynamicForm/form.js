function formValidation(str){
	if(str === 0){
					document.getElementById('error').style.display = 'block';
				}

			else if(str === 1){
			
					document.getElementById('Age').style.display = 'block';
				}

			else if(str === 2){
					document.getElementById('Age').style.display = 'block';
				}

			else if(str === 3){
					document.getElementById('Age').style.display = 'block';
				}

			else if(str === 4){
					document.getElementById('Age').style.display = 'block';
				}

			else{
				document.getElementById('error');
			}



	}

function ageBracket(str){
	if (str > 0 && str <=12) {
		document.getElementById('underage').style.display = 'block';
	}

		else if(str >=13){
					document.getElementById('email').style.display = 'block';
				}

			else if(str <= 0){
				document.getElementById('error').style.display = 'block';
			}
}


function afterEmail(){
	
	document.getElementById('sex').style.display = 'block';
}


function afterGender(){
	
	document.getElementById('update').style.display = 'block';
}


function afterQuest(){
	
	document.getElementById('update2').style.display = 'block';
}


function afterQuest2(){
	
	document.getElementById('reset').style.display = 'block';
}
