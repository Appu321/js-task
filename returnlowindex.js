function getIndexToIns(arr, num) {
	var items = [];
	arr.sort(function(a, b) {
		return a - b;
	});
	items.forEach(function(number, index) {
		if (num <= number) {
			return index;
		}
	});
	return arr.length;
}
getIndexToIns([10, 20, 30, 40, 50], 35);
