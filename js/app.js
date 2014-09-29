$(document).ready(function() {

	//var userNumber = $('user-input').val();

	$('.initiate').click(function() {
		//console.log(+userNumber);
		numCheck();
	});
	$('.user-input').on('keypress', function(event) {
		if( event.which == 13) {
			event.preventDefault();
			//console.log(+userNumber);
			numCheck();
		}
	});

//function for making sure user enters a number
var numCheck = function() {
	var userNumber = $(+'user-input').val();
	console.log(userNumber);
	//userNumber = +userNumber;
	if(isNaN(userNumber)) {
		alert('Please choose a NUMBER! :)')
	} else if (userNumber %1 !=0) {
		alert('Please choose an INTEGER aka WHOLE NUMBER! ;)')
	} else {
		runFizzBuzz(userNumber);
	}
}; 

//function that runs fizzbuzz
var runFizzBuzz = function() {
		var sum = 0;
		for (i=1; i<=999; i++) {
			if ((i%3) === 0) {
				if ((i%5) === 0) {
					$('.results').append('<p>FIZZBUZZ!!</p>');	
				} else $('.results').append('<p>FIZZ!</p>');
			}
			else if ((i%5) === 0) {
				$('.results').append('<p>BUZZ!</p>');
			} else {
				sum = i;
				$('.results').append('<p>' + sum + '</p>');
			}
		}
	}
});
