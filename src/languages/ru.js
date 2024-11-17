// Russian Language Configuration
// Because even in Russia, time waits for no one!

module.exports = {
	numbers: [
		'', // Placeholder for 0
		'один', // Just one
		'два', // Two's company
		'три', // Three's a crowd
		'четыре', // Four seasons
		'пять', // High five!
		'шесть', // Six pack... of hours
		'семь', // Lucky seven
		'восемь', // Infinity sideways
		'девять', // Almost ten
		'десять', // Double digits
		'одиннадцать', // Eleven (not Eleven from Stranger Things)
		'двенадцать', // The clock strikes twelve
	],
	genitiveNumbers: [
		'', // Placeholder for genitive 0
		'первого', // "of the first hour"
		'второго', // "of the second hour"
		'третьего', // Keep counting...
		'четвертого',
		'пятого',
		'шестого',
		'седьмого',
		'восьмого',
		'девятого',
		'десятого',
		'одиннадцатого',
		'двенадцатого',
	],
	// Time chunks for minutes
	minutePrepositions: {
		5: 'пять', // Five minutes
		10: 'десять', // Ten minutes
		20: 'двадцать', // A solid twenty
		25: 'двадцать пять', // Almost half an hour
	},
	// Halves and quarters
	halfHourPrepositions: {
		15: 'четверть', // Quarter past
		30: 'половина', // Half past
	},
	// Special genitive case for "quarter to"
	genitiveHalfHourPrepositions: {
		15: 'четверти',
	},
	// The time of day, because no one wants to say "вечера" at 3 AM
	timeOfDay: [
		[0, 5, 'ночи'], // Night owl hours
		[6, 11, 'утра'], // Morning rush
		[12, 17, 'дня'], // Daylight hustle
		[18, 23, 'вечера'], // Evening chill
	],
	// Words that make everything tick
	words: {
		timePrefix: '', // Not needed; Russians are direct
		hourPrefix: '', // Plain and simple
		hourSuffix: 'час', // Just "hour," unless...
		getHourSuffix: hour => {
			const lastDigit = hour % 10;
			const lastTwoDigits = hour % 100;

			if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'часов'; // Special plurals
			if (lastDigit === 1) return 'час'; // Singular
			if (lastDigit >= 2 && lastDigit <= 4) return 'часа'; // Two to four
			return 'часов'; // Everything else
		},
		less: 'без', // Without, or "to"
		more: '', // Russians don't "add" minutes often
		minutePrefix: '', // Who needs this?
		minuteSuffix: '', // Suffix when needed
		getMinuteSuffix: minute => {
			const lastDigit = minute % 10;
			const lastTwoDigits = minute % 100;

			if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'минут'; // Genitive plural
			if (lastDigit === 1) return 'минута'; // Singular
			if (lastDigit >= 2 && lastDigit <= 4) return 'минуты'; // Two to four
			return 'минут'; // Everything else
		},
		excludeMinuteSuffixOnPrepositions: true, // Keep it casual
	},
	// How we format everything
	format: {
		exactHour: '{hour} {hourSuffix} {timeOfDay}', // It's exactly...
		pastMinutes: '{hour} {more} {minutes} {minuteSuffix} {timeOfDay}', // It's past...
		toMinutes: '{less} {minutes} {minuteSuffix} {hour} {timeOfDay}', // It's to...
		halfPast: '{halfHourPrepositions} {genitiveNextHour} {timeOfDay}', // Half past
		quarterPast: '{quarterPreposition} {genitiveNextHour} {timeOfDay}', // Quarter past
	},
};
