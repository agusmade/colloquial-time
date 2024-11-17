module.exports = {
	numbers: ['', 'siji', 'loro', 'telu', 'papat', 'lima', 'enem', 'pitu', 'wolu', 'sanga', 'sepuluh', 'sewelas', 'rolas'],
	minutePrepositions: {
		5: 'lima',
		10: 'sepuluh',
		20: 'rong puluh',
		25: 'selawe',
	},
	halfHourPrepositions: {
		15: 'seprapat',
		30: 'setengah',
	},
	timeOfDay: [
		[0, 11, 'esuk'],
		[12, 15, 'awan'],
		[16, 18, 'sore'],
		[19, 23, 'bengi'],
	],
	words: {
		timePrefix: 'jam',
		hourPrefix: '',
		hourSuffix: '',
		less: 'kurang',
		more: 'lewih',
		minutePrefix: '',
		minuteSuffix: '',
	},
	format: {
		exactHour: '{timePrefix} {hour} {timeOfDay}',
		pastMinutes: '{timePrefix} {hour} {more} {minutes} {minuteSuffix} {timeOfDay}',
		toMinutes: '{timePrefix} {hour} {less} {minutes} {minuteSuffix} {timeOfDay}',
		quarterPast: '{timePrefix} {hour} {quarterPreposition} {timeOfDay}',
		halfTo: '{timePrefix} {halfHourPrepositions} {nextHour} {timeOfDay}',
	},
};
