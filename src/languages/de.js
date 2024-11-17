module.exports = {
	numbers: ['', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf'],
	minutePrepositions: {
		5: 'fünf',
		10: 'zehn',
		20: 'zwanzig',
		25: 'fünfundzwanzig',
	},
	halfHourPrepositions: {
		15: 'viertel',
		30: 'halb',
	},
	timeOfDay: [
		[0, 11, 'morgens'],
		[12, 17, 'nachmittags'],
		[18, 23, 'abends'],
	],
	words: {
		timePrefix: '',
		hourPrefix: '',
		hourSuffix: '',
		less: 'vor',
		more: 'nach',
		minutePrefix: '',
		minuteSuffix: '',
	},
	format: {
		exactHour: '{hour} Uhr {timeOfDay}',
		pastMinutes: '{minutes} {more} {hour} {timeOfDay}',
		toMinutes: '{minutes} {less} {hour} {timeOfDay}',
		halfTo: 'halb {nextHour} {timeOfDay}',
		quarterPast: 'viertel {more} {hour} {timeOfDay}',
	},
};
