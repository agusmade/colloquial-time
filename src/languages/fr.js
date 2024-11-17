module.exports = {
	numbers: ['', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze'],
	minutePrepositions: {
		5: 'cinq',
		10: 'dix',
		20: 'vingt',
		25: 'vingt-cinq',
	},
	halfHourPrepositions: {
		15: 'quart',
		30: 'et demie',
	},
	timeOfDay: [
		[0, 11, 'du matin'],
		[12, 17, "de l'après-midi"],
		[18, 23, 'du soir'],
	],
	words: {
		timePrefix: '',
		hourPrefix: '',
		hourSuffix: ' heures',
		less: 'moins',
		more: 'et',
		minutePrefix: '',
		minuteSuffix: '',
		midnight: 'minuit', // Add specific phrase for midnight
		noon: 'midi', // Add specific phrase for noon
	},
	format: {
		exactHour: '{hour}{hourSuffix} {timeOfDay}',
		pastMinutes: '{hour}{hourSuffix} {more} {minutes} {timeOfDay}',
		toMinutes: '{hour}{hourSuffix} {less} le {minutes} {timeOfDay}',
		halfPast: '{hour}{hourSuffix} {halfHourPrepositions} {timeOfDay}',
		quarterPast: '{hour}{hourSuffix} et {quarterPreposition} {timeOfDay}',
	},
};
