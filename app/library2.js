module.exports = {
	findMinMax : function(arr){
		var answer = [];
		var min = arr[0];
		var max = arr[0];

		for(var i = 1; i < arr.length; i++){
			if(arr[i] < min){
				min = arr[i];
			}

			if(arr[i] > max){
				max = arr[i];
			}

			if(min == max){
				answer.push(min);
				return answer;
			}
		}

		answer.push(min);
		answer.push(max);
		return answer;
	}
}