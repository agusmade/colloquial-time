declare module 'colloquial-time' {
	/**
	 * Main function to format time into colloquial expressions.
	 * @param input - A date string or JavaScript Date object to format.
	 * @param langConfig - The language configuration to use for formatting.
	 * @returns The formatted colloquial time expression.
	 */
	export function colloquial(input: string | Date, langConfig: LanguageConfig): string;

	/**
	 * Predefined language configurations.
	 */
	export const languages: {
		id: LanguageConfig; // Indonesian
		en: LanguageConfig; // English
		de: LanguageConfig; // German
		fr: LanguageConfig; // French
		ja: LanguageConfig; // Japanese
		es: LanguageConfig; // Spanish
		ru: LanguageConfig; // Russian
		zh: LanguageConfig; // Chinese
		bali: LanguageConfig; // Balinese
		jawa: LanguageConfig; // Javanese
		sunda: LanguageConfig; // Sundanese
	};

	/**
	 * Type definition for a language configuration.
	 */
	export interface LanguageConfig {
		numbers: string[]; // Array of numbers in the language
		genitiveNumbers?: string[]; // Array of genitive numbers in the language
		minutePrepositions: Record<number, string>; // Object mapping numbers to minute prepositions
		halfHourPrepositions: Record<number, string>; // Object mapping numbers to half-hour prepositions
		genitiveHalfHourPrepositions?: Record<number, string>; // Object mapping numbers to genitive half-hour prepositions
		timeOfDay: [number, number, string][]; // Array of time of day ranges and their corresponding strings
		words: {
			timePrefix: string; // Prefix for time
			hourPrefix: string; // Prefix for hour
			hourSuffix?: string; // Suffix for hour
			getHourSuffix?: (hour: number) => string; // Function to get hour suffix
			less: string; // String for "less"
			more: string; // String for "more"
			minutePrefix: string; // Prefix for minute
			minuteSuffix: string; // Suffix for minute
			getMinuteSuffix?: (minute: number) => string; // Function to get minute suffix
			midnight?: string; // String for midnight
			noon?: string; // String for noon
		};
		format: {
			exactHour: string; // String for exact hour
			pastMinutes: string; // String for past minutes
			toMinutes: string; // String for to minutes
			halfPast?: string; // String for half past
			halfTo?: string; // String for half to
			quarterPast?: string; // String for quarter past
		};
	}
}
