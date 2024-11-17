module.exports = {
	numbers: ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
	minutePrepositions: {
		5: '五',
		10: '十',
		20: '二十',
		25: '二十五',
	},
	halfHourPrepositions: {
		15: '一刻',
		30: '半',
	},
	timeOfDay: [
		[0, 5, '凌晨'], // Early morning
		[6, 11, '早上'], // Morning
		[12, 17, '下午'], // Afternoon
		[18, 23, '晚上'], // Evening
	],
	words: {
		timePrefix: '',
		hourPrefix: '',
		hourSuffix: '点',
		less: '差',
		more: '',
		minutePrefix: '',
		minuteSuffix: '',
	},
	format: {
		exactHour: '{hour}{hourSuffix} {timeOfDay}',
		pastMinutes: '{hour}{hourSuffix} {minutes}{minuteSuffix} {timeOfDay}',
		toMinutes: '{hour}{hourSuffix} {less} {minutes}{minuteSuffix} {timeOfDay}',
		halfPast: '{hour}{hourSuffix} {halfHourPrepositions} {timeOfDay}',
		quarterPast: '{hour}{hourSuffix} {quarterPreposition} {timeOfDay}',
	},
};
