const {colloquial, languages} = require('../src/index');

let failedTests = 0; // Track the number of failed tests
let totalTests = 0;

// Helper function for testing
function test(description, input, lang, expected) {
	totalTests++;
	const result = colloquial(input, lang);
	if (result !== expected) {
		failedTests++;
		console.error(`✕ ${description}\n  Expected: "${expected}"\n  Got: "${result}"\n`);
	} else {
		console.log(`✓ ${description}`);
	}
}

// Running tests
console.log('Running tests...');

// Indonesian (Bahasa Indonesia)
test('Indonesian - Exact hour', '2024-11-16T07:00:00', languages.id, 'jam tujuh pagi');
test('Indonesian - Quarter past', '2024-11-16T07:15:00', languages.id, 'jam tujuh seperempat pagi');
test('Indonesian - Half past', '2024-11-16T07:30:00', languages.id, 'jam setengah delapan pagi');
test('Indonesian - Quarter to', '2024-11-16T07:45:00', languages.id, 'jam delapan kurang seperempat pagi');

// English
test('English - Exact hour', '2024-11-16T07:00:00', languages.en, "seven o'clock in the morning");
test('English - Quarter past', '2024-11-16T07:15:00', languages.en, 'quarter past seven in the morning');
test('English - Half past', '2024-11-16T07:30:00', languages.en, 'half past seven in the morning');
test('English - Quarter to', '2024-11-16T07:45:00', languages.en, 'quarter to eight in the morning');

// German (Deutsch)
test('German - Viertel nach', '2024-11-16T07:15:00', languages.de, 'viertel nach sieben morgens');
test('German - Halb', '2024-11-16T07:30:00', languages.de, 'halb acht morgens');
test('German - Viertel vor', '2024-11-16T07:45:00', languages.de, 'viertel vor acht morgens');

// Chinese (中文)
test('Chinese - Exact hour', '2024-11-16T07:00:00', languages.zh, '七点 早上');
test('Chinese - Quarter past', '2024-11-16T07:15:00', languages.zh, '七点 一刻 早上');
test('Chinese - Half past', '2024-11-16T07:30:00', languages.zh, '七点 半 早上');
test('Chinese - Quarter to', '2024-11-16T07:45:00', languages.zh, '八点 差 一刻 早上');
test('Chinese - Midnight', '2024-11-16T00:00:00', languages.zh, '十二点 凌晨');
test('Chinese - Noon', '2024-11-16T12:00:00', languages.zh, '十二点 下午');

// Spanish (Español)
test('Spanish - Exact hour', '2024-11-16T07:00:00', languages.es, 'siete de la mañana');
test('Spanish - Quarter past', '2024-11-16T07:15:00', languages.es, 'siete y cuarto de la mañana');
test('Spanish - Half past', '2024-11-16T07:30:00', languages.es, 'siete y media de la mañana');
test('Spanish - Quarter to', '2024-11-16T07:45:00', languages.es, 'ocho menos cuarto de la mañana');
test('Spanish - Noon', '2024-11-16T12:00:00', languages.es, 'doce de la tarde');
test('Spanish - Midnight', '2024-11-16T00:00:00', languages.es, 'doce de la noche');

// Russian (Русский)
test('Russian - Exact hour', '2024-11-16T07:00:00', languages.ru, 'семь часов утра');
test('Russian - Quarter past', '2024-11-16T07:15:00', languages.ru, 'четверть восьмого утра'); // Colloquial expression
test('Russian - Half past', '2024-11-16T07:30:00', languages.ru, 'половина восьмого утра');
test('Russian - Quarter to', '2024-11-16T07:45:00', languages.ru, 'без четверти восемь утра');
test('Russian - Noon', '2024-11-16T12:00:00', languages.ru, 'двенадцать часов дня');
test('Russian - Midnight', '2024-11-16T00:00:00', languages.ru, 'двенадцать часов ночи');

test('Russian - Exact hour - Morning', '2024-11-16T07:00:00', languages.ru, 'семь часов утра');
test('Russian - Quarter past - Morning', '2024-11-16T07:15:00', languages.ru, 'четверть восьмого утра');
test('Russian - Half past - Morning', '2024-11-16T07:30:00', languages.ru, 'половина восьмого утра');
test('Russian - Quarter to - Morning', '2024-11-16T07:45:00', languages.ru, 'без четверти восемь утра');
test('Russian - Noon', '2024-11-16T12:00:00', languages.ru, 'двенадцать часов дня');
test('Russian - Midnight', '2024-11-16T00:00:00', languages.ru, 'двенадцать часов ночи');
test('Russian - Exact hour - Evening', '2024-11-16T18:00:00', languages.ru, 'шесть часов вечера');
test('Russian - Quarter past - Evening', '2024-11-16T18:15:00', languages.ru, 'четверть седьмого вечера');
test('Russian - Half past - Evening', '2024-11-16T18:30:00', languages.ru, 'половина седьмого вечера');
test('Russian - Quarter to - Evening', '2024-11-16T18:45:00', languages.ru, 'без четверти семь вечера');

// French (Français)
test('French - Exact hour', '2024-11-16T07:00:00', languages.fr, 'sept heures du matin');
test('French - Quarter past', '2024-11-16T07:15:00', languages.fr, 'sept heures et quart du matin');
test('French - Half past', '2024-11-16T07:30:00', languages.fr, 'sept heures et demie du matin');
test('French - Quarter to', '2024-11-16T07:45:00', languages.fr, 'huit heures moins le quart du matin');
test('French - Midnight', '2024-11-16T00:00:00', languages.fr, 'minuit');
test('French - Noon', '2024-11-16T12:00:00', languages.fr, 'midi');

// Japanese (日本語)
test('Japanese - Exact hour', '2024-11-16T07:00:00', languages.ja, 'しちじ ごぜん');
test('Japanese - Quarter past', '2024-11-16T07:15:00', languages.ja, 'しちじじゅうごふん ごぜん');
test('Japanese - Half past', '2024-11-16T07:30:00', languages.ja, 'しちじさんじゅっぷん ごぜん');
test('Japanese - Quarter to', '2024-11-16T07:45:00', languages.ja, 'はちじじゅうごふんまえ ごぜん');
test('Japanese - Noon', '2024-11-16T12:00:00', languages.ja, 'じゅうにじ ごご');
test('Japanese - Midnight', '2024-11-16T00:00:00', languages.ja, 'れいじ ごぜん');

// Balinese (Bahasa Bali)
test('Balinese - Exact hour', '2024-11-16T07:00:00', languages.bali, 'jam pitu semeng');
test('Balinese - Quarter past', '2024-11-16T07:15:00', languages.bali, 'jam pitu seprapat semeng');
test('Balinese - Half past', '2024-11-16T07:30:00', languages.bali, 'jam setengah kutus semeng');
test('Balinese - Quarter to', '2024-11-16T07:45:00', languages.bali, 'jam kutus kuang seprapat semeng');

// Javanese (Bahasa Jawa)
test('Javanese - Exact hour', '2024-11-16T07:00:00', languages.jawa, 'jam pitu esuk');
test('Javanese - Quarter past', '2024-11-16T07:15:00', languages.jawa, 'jam pitu seprapat esuk');
test('Javanese - Half past', '2024-11-16T07:30:00', languages.jawa, 'jam setengah wolu esuk');
test('Javanese - Quarter to', '2024-11-16T07:45:00', languages.jawa, 'jam wolu kurang seprapat esuk');

// Sundanese (Bahasa Sunda)
test('Sundanese - Exact hour', '2024-11-16T01:00:00', languages.sunda, 'tabuh hiji isuk');
test('Sundanese - Quarter past', '2024-11-16T01:15:00', languages.sunda, 'tabuh hiji saparapat isuk');
test('Sundanese - Half past', '2024-11-16T01:30:00', languages.sunda, 'tabuh satengah dua isuk');
test('Sundanese - Quarter to', '2024-11-16T01:45:00', languages.sunda, 'tabuh dua kurang saparapat isuk');

// Check results
if (failedTests === 0) {
	console.log(`✅ All ${totalTests} tests passed!`);
} else {
	console.error(`❌ ${failedTests} test(s) failed.`);
}
