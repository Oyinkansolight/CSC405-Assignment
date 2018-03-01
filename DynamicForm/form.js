function formValidation(){
	var str = document.getElementById('show').value;

	switch(str){
			case 'No I am definately not':
					document.getElementById('error').style.display = 'none';
				break;

			case 'Always have been curious but never found out':
					document.getElementById('age') .style.display = 'block';
				break;

			case 'Yes, but I do not know too much about it':
					document.getElementById('age') .style.display = 'show';
				break;

			case 'Yes I am all about them blackholes':
					document.getElementById('age') .style.display = 'show';
				break;

			default:
				document.getElementById('error');



	}
}


