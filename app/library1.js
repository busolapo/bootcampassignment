module.exports = {

	aritGeo : function(myArray){

		arrLength = myArray.length;

		if(arrLength === 0){
			return 0;
		}

		var AP_Count = 0,
		    GP_Count = 0,
		    diff = myArray[1] - myArray[0],
		    ratio = myArray[1] / myArray[0];
		for(var i = arrLength -1; i > 0; i--){
			if((myArray[i] - myArray[i - 1]) == diff){
				AP_Count++;
			}
			if((myArray[i] / myArray[i - 1]) == ratio){
				GP_Count++;
			}
		}
		if(AP_Count == arrLength - 1){
			return "Arithmetic";
		}
		else if(GP_Count == arrLength - 1){
			return "Geometric";
		}
		else{
			return -1;
		}

	}
}