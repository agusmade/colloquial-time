// module.exports = {
// 	numbers: ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
// 	minutePrepositions: {
// 		5: '五',
// 		10: '十',
// 		20: '二十',
// 		25: '二十五',
// 	},
// 	halfHourPrepositions: {
// 		15: '十五',
// 		30: '三十',
// 	},
// 	timeOfDay: [
// 		[0, 11, '午前'],
// 		[12, 23, '午後'],
// 	],
// 	words: {
// 		timePrefix: '',
// 		hourPrefix: '',
// 		hourSuffix: '時',
// 		less: '前',
// 		more: '',
// 		minutePrefix: '',
// 		minuteSuffix: '分',
// 		midnight: '零時 午前', // Special case for midnight
// 		noon: '十二時 午後', // Special case for noon
// 	},
// 	format: {
// 		exactHour: '{hour}{hourSuffix} {timeOfDay}',
// 		pastMinutes: '{hour}{hourSuffix}{minutes}{minuteSuffix} {timeOfDay}',
// 		toMinutes: '{hour}{hourSuffix} {minutes}{minuteSuffix}{less} {timeOfDay}',
// 		halfPast: '{hour}{hourSuffix}三十分 {timeOfDay}',
// 		quarterPast: '{hour}{hourSuffix}十五分 {timeOfDay}', // Simplify
// 	},
// };

module.exports = {
	numbers: ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'しち', 'はち', 'きゅう', 'じゅう', 'じゅういち', 'じゅうに'],
	minutePrepositions: {
		5: 'ご',
		10: 'じゅう',
		20: 'にじゅう',
		25: 'にじゅうご',
	},
	halfHourPrepositions: {
		15: 'じゅうご',
		30: 'さんじゅう',
	},
	timeOfDay: [
		[0, 11, 'ごぜん'],
		[12, 23, 'ごご'],
	],
	words: {
		timePrefix: '',
		hourPrefix: '',
		hourSuffix: 'じ',
		less: 'まえ',
		more: 'すぎ',
		minutePrefix: '',
		minuteSuffix: 'ふん',
		midnight: 'れいじ ごぜん', // Midnight in hiragana
		noon: 'じゅうにじ ごご', // Noon in hiragana
	},
	format: {
		exactHour: '{hour}{hourSuffix} {timeOfDay}',
		pastMinutes: '{hour}{hourSuffix}{minutes}{minuteSuffix} {timeOfDay}',
		toMinutes: '{hour}{hourSuffix}{minutes}{minuteSuffix}{less} {timeOfDay}',
		halfPast: '{hour}{hourSuffix}さんじゅっぷん {timeOfDay}',
		quarterPast: '{hour}{hourSuffix}じゅうごふん {timeOfDay}', // Simplify
	},
};
