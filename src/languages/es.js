module.exports = {
	numbers: ['', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'],
	minutePrepositions: {
		5: 'cinco',
		10: 'diez',
		20: 'veinte',
		25: 'veinticinco',
	},
	halfHourPrepositions: {
		15: 'cuarto',
		30: 'media',
	},
	timeOfDay: [
		[0, 5, 'de la noche'], // Midnight to early morning
		[6, 11, 'de la mañana'], // Morning
		[12, 17, 'de la tarde'], // Afternoon
		[18, 23, 'de la noche'], // Evening
	],
	words: {
		timePrefix: '',
		hourPrefix: '',
		hourSuffix: '',
		less: 'menos',
		more: 'y',
		minutePrefix: '',
		minuteSuffix: '',
	},
	format: {
		exactHour: '{hour} {timeOfDay}',
		pastMinutes: '{hour} {more} {minutes} {timeOfDay}',
		toMinutes: '{hour} {less} {minutes} {timeOfDay}',
		halfPast: '{hour} y media {timeOfDay}',
		quarterPast: '{hour} y {quarterPreposition} {timeOfDay}',
	},
};
