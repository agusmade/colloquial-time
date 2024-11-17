/**
 * English (Colloquial Time Configuration)
 *
 * Keeping it chill and conversational. Perfect for casual chats,
 * planning meet-ups, or just telling time with a touch of flair. 😎
 */

module.exports = {
	numbers: [
		'', // Zero isn't really a time, is it?
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
	],
	minutePrepositions: {
		5: 'five', // Snack break vibes. 🥪
		10: 'ten',
		20: 'twenty', // Enough time to brew a coffee.
		25: 'twenty five', // Close to thirty, but not quite.
	},
	halfHourPrepositions: {
		15: 'quarter', // The magic number for tea and chit-chat. ☕
		30: 'half', // Halfway there—whatever "there" means. 😜
	},
	timeOfDay: [
		[0, 11, 'in the morning'], // Breakfast and early birds. 🐦
		[12, 17, 'in the afternoon'], // The golden hours of productivity—or naps.
		[18, 23, 'in the evening'], // Time to relax, unwind, or maybe Netflix. 🎬
	],
	words: {
		timePrefix: '', // Because "time" is implied, right?
		hourPrefix: '',
		hourSuffix: " o'clock", // Classic, timeless, and classy.
		less: 'to', // Less time = more urgency.
		more: 'past', // Chill, you're just a bit late. 😏
		minutePrefix: '',
		minuteSuffix: '', // Why complicate it?
	},
	format: {
		exactHour: '{timePrefix} {hour}{hourSuffix} {timeOfDay}', // Perfectly on time. No drama.
		pastMinutes: '{timePrefix} {minutes} {more} {hour} {timeOfDay}', // Casual lateness is fine.
		toMinutes: '{timePrefix} {minutes} {less} {hour} {timeOfDay}', // A little anticipation never hurts.
		halfPast: '{timePrefix} half past {hour} {timeOfDay}', // Midpoint moments—reflect on life. ✨
		quarterPast: '{timePrefix} quarter past {hour} {timeOfDay}', // Just enough time for a quick catch-up. 🕒
	},
};
