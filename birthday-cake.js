function birthdayCakeCandles(arr) {
	var maximum = 0;
	var i = 0;
	arr.forEach(item => {
		if (item > maximum) {
			max = item;
			i = 1;
		} else if (item === maximum) {
			i++;
		}
	});

	return i;
}
