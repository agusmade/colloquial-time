/**
 * Bahasa Indonesia - Konfigurasi Waktu
 *
 * Santai aja, ini ceritanya ngomongin waktu
 * pakai bahasa sehari-hari. Biasa dipake buat ngobrol sama teman,
 * atau sekedar ngingetin jadwal makan siang. 😎
 */

module.exports = {
	numbers: [
		'', // Karena jam kosong itu cuma waktu gak ada dosen.
		'satu',
		'dua',
		'tiga',
		'empat',
		'lima',
		'enam',
		'tujuh',
		'delapan',
		'sembilan',
		'sepuluh',
		'sebelas',
		'dua belas',
	],
	minutePrepositions: {
		5: 'lima', // Pas banget buat nyebut waktu ngemil.
		10: 'sepuluh',
		20: 'dua puluh',
		25: 'dua puluh lima', // Hampir aja setengah jam, tapi belum.
	},
	halfHourPrepositions: {
		15: 'seperempat', // Udah seperempat, santai dulu bentar. ☕
		30: 'setengah', // Sekalipun mesti sepenuh hati, gak boleh setengah-setengah 😜
	},
	timeOfDay: [
		[0, 11, 'pagi'], // Waktu sarapan dan ngobrol santai.
		[12, 15, 'siang'], // Waktunya makan besar!
		[16, 18, 'sore'], // Waktu nongkrong di warung kopi.
		[19, 23, 'malam'], // Jangan lupa tidur.
	],
	words: {
		timePrefix: 'jam', // Mirip gelang di tangan, atau tempelan dinding.
		hourPrefix: '', // Karena "jam" udah cukup.
		hourSuffix: '', // Simplicity is key. ✨
		less: 'kurang', // Yang kurang tuh cuma waktu liburan.
		more: 'lewat', // Iya nih, lewat doang, lirik-lirik kek. :)
		minutePrefix: '',
		minuteSuffix: '', // Biar gak lebay.
	},
	format: {
		exactHour: '{timePrefix} {hour} {timeOfDay}', // Pas banget, nggak kurang, nggak lebih.
		pastMinutes: '{timePrefix} {hour} {more} {minutes} {minuteSuffix} {timeOfDay}', // Lewat sedikit nggak apa-apa.
		toMinutes: '{timePrefix} {hour} {less} {minutes} {minuteSuffix} {timeOfDay}', // Kurang dikit juga wajar.
		quarterPast: '{timePrefix} {hour} {quarterPreposition} {timeOfDay}', // Seperempat itu titik balik.
		halfTo: '{timePrefix} {halfHourPrepositions} {nextHour} {timeOfDay}', // Setengah jalan menuju masa depan.
	},
};
