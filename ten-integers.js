function createPhoneNumber(arrayNumbers) {
	return (
		'(' +
		arrayNumbers[0] +
		arrayNumbers[1] +
		arrayNumbers[2] +
		') ' +
		arrayNumbers[3] +
		arrayNumbers[4] +
		arrayNumbers[5] +
		'-' +
		arrayNumbers[6] +
		arrayNumbers[7] +
		arrayNumbers[8] +
		arrayNumbers[9]
	);

	createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
}