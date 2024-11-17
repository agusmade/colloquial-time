/**
 * Colloquial Time - Core Functionality
 *
 * Yo! This is where the magic happens.
 * We're talking about formatting time into natural, chill expressions in multiple languages. 🕒
 *
 * Highlights:
 * - Converts time into words you’d actually use with friends. Not your boss. 🙃
 * - Handles cool phrases like "quarter past" or "half past."
 * - Understands "midnight" and "noon" — because they’re special. 🌙☀️
 * - Works with customizable language setups. Fancy, right?
 *
 * For Developers:
 * - The function uses a `LanguageConfig` for language-specific rules.
 * - Keeps it casual, no Shakespearean stuff here.
 *
 * Example:
 * const formattedTime = sebut(new Date(), languages.en);
 * console.log(formattedTime); // "quarter past seven in the morning"
 *
 * License: MIT
 * Author: Agus Made <krisnaparta@gmail.com>
 */

/**
 * Decides the vibe of the day based on the hour.
 * Is it morning? Afternoon? Midnight snack time? 🍕
 * @param {number} hour - The current hour (0-23).
 * @param {LanguageConfig} langRef - Language setup that knows what "morning" means.
 * @returns {string} - The part of the day (like "morning" or "pagi").
 */
function ofDay(hour, langRef) {
	const {timeOfDay} = langRef;
	for (const [start, end, part] of timeOfDay) {
		if (hour >= start && hour <= end) return part;
	}
}

/**
 * Converts army time (24-hour) to civilian time (12-hour).
 * @param {number} hour - The current hour (0-23).
 * @returns {number} - The hour in 12-hour format (1-12).
 */
function to12(hour) {
	return ((hour + 11) % 12) + 1; // Math magic 🧙
}

/**
 * Fills in placeholders in a template string.
 * It’s like Mad Libs but for time. 🕰️
 * @param {string} template - String with placeholders like {key}.
 * @param {Object} replacements - Key-value pairs to replace placeholders.
 * @returns {string} - Formatted string with replacements.
 */
function formatString(template, replacements) {
	const result = template.replace(/\{(\w+)\}/g, (_, key) => replacements[key] || '');
	return result.replace(/\s+/g, ' ').trim(); // Clean up the mess. 🧹
}

/**
 * Handles special times like "midnight" and "noon."
 * Because not all times are created equal. 🌟
 * @param {number} h - The current hour (0-23).
 * @param {number} rm - Rounded minutes (0, 5, 10, ..., 60).
 * @param {Object} words - Special words for "noon" and "midnight."
 * @returns {string|null} - The special case word, or null if boring time.
 */
function handleSpecialCases(h, rm, words) {
	if (h === 0 && rm === 0 && words.midnight) return words.midnight;
	if (h === 12 && rm === 0 && words.noon) return words.noon;
	return null;
}

/**
 * The main function to translate time into human-friendly phrases.
 * For when "07:15" feels too robotic. 🤖
 * @param {Date} date - A Date object representing the time.
 * @param {LanguageConfig} langRef - Language configuration object.
 * @returns {string} - A time expression your friends will get.
 */
function sebut(date, langRef) {
	const h = date.getHours();
	const m = date.getMinutes();
	const rm = Math.round(m / 5) * 5;

	const {numbers, minutePrepositions, halfHourPrepositions, genitiveHalfHourPrepositions, words, format} = langRef;

	const hour = numbers[to12(h)];
	const nextHour = numbers[to12(h + 1)];
	const genitiveNextHour = langRef.genitiveNumbers ? langRef.genitiveNumbers[to12(h + 1)] : nextHour;
	const minutes = minutePrepositions[rm] || numbers[rm];
	const timeOfDay = ofDay(h, langRef);

	// Midnight or noon — they’re too cool for regular rules.
	const specialCase = handleSpecialCases(h, rm, words);
	if (specialCase) return specialCase;

	// Straight-up exact hour.
	const hourSuffix = words.getHourSuffix ? words.getHourSuffix(to12(h)) : words.hourSuffix || '';
	if (rm === 0) return formatString(format.exactHour, {...words, hourSuffix, hour, timeOfDay});

	const minuteSuffix = words.getMinuteSuffix ? words.getMinuteSuffix(rm) : words.minuteSuffix || '';

	// Minutes less than 30 — still pretty chill.
	if (rm < 30) {
		if (halfHourPrepositions[rm]) {
			return formatString(format.quarterPast, {
				...words,
				hour,
				nextHour,
				genitiveNextHour,
				hourSuffix,
				quarterPreposition: halfHourPrepositions[rm],
				timeOfDay,
			});
		}
		return formatString(format.pastMinutes, {...words, hourSuffix, hour, minutes, minuteSuffix, timeOfDay});
	}

	// Bang-on 30 minutes.
	if (rm === 30) {
		if (format.halfTo) {
			// For Indonesian or similar languages
			return formatString(format.halfTo, {
				...words,
				halfHourPrepositions: halfHourPrepositions[rm],
				nextHour,
				timeOfDay,
			});
		}
		if (format.halfPast) {
			// For languages like English
			return formatString(format.halfPast, {
				...words,
				hour,
				genitiveNextHour,
				timeOfDay,
				halfHourPrepositions: halfHourPrepositions[rm],
			});
		}
	}

	// Over 30 minutes — let’s wrap it up.
	const toMinutes = 60 - rm;
	const _halfHourPrepositions = genitiveHalfHourPrepositions?.[toMinutes] || halfHourPrepositions[toMinutes];
	const toPreposition = _halfHourPrepositions || minutePrepositions[toMinutes] || numbers[toMinutes];

	const includeMinuteSuffix = !!_halfHourPrepositions && words.excludeMinuteSuffixOnPrepositions ? false : true;

	return formatString(format.toMinutes, {
		...words,
		hour: nextHour,
		hourSuffix,
		minutes: toPreposition,
		minuteSuffix: includeMinuteSuffix ? minuteSuffix : '',
		timeOfDay,
	});
}

module.exports = {sebut};
