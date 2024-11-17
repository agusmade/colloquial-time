module.exports = {
	numbers: ['', 'besik', 'dua', 'telu', 'papat', 'lima', 'enem', 'pitu', 'kutus', 'sia', 'dasa', 'solas', 'roras'],
	minutePrepositions: {
		5: 'lima',
		10: 'dasa',
		20: 'duang dasa',
		25: 'selae',
	},
	halfHourPrepositions: {
		15: 'seprapat',
		30: 'setengah',
	},
	timeOfDay: [
		[0, 11, 'semeng'],
		[12, 15, 'tengai'],
		[16, 18, 'sanja'],
		[19, 23, 'peteng'],
	],
	words: {
		timePrefix: 'jam',
		hourPrefix: '',
		hourSuffix: '',
		less: 'kuang',
		more: 'lewat',
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
