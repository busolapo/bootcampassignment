module.exports = {
	fizzBuzz : function(num){
		if((num % 3 == 0) && (num % 5 == 0)){
			return 'FizzBuzz';
		}
		if(num % 5 == 0){
			return 'Buzz';
		}
		if(num % 3 == 0){
			return 'Fizz';
		}
		else{
			return num;
		}
	}
}