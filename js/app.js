$(document).ready(function() {
	
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

var userNumber = +$('.user-input').val();

//function for making sure user enters a number
var numCheck = function() {
	console.log(userNumber);
	if(isNaN(userNumber)) {
		alert('Please choose a NUMBER! :)')
	} else if (userNumber %1 !=0) {
		alert('Please choose an INTEGER or WHOLE NUMBER! ;)')
	} else {
		runFizzBuzz();
	}
}; 

//function that runs fizzbuzz
var runFizzBuzz = function(userNumber) {
		var sum = 0;
		for (i=1; i<=userNumber; i++) {
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
