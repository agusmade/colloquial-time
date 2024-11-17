# Colloquial Time 🕒

**Making time human-friendly with natural, everyday expressions.**

Why stick with "07:15" when you can say "quarter past seven" or "setengah delapan"? This library helps you express time the way people actually talk—casual, natural, and easy to understand.

---

## What’s This About? 🤔

`colloquial-time` is a lightweight JavaScript library for formatting time into everyday, spoken expressions. It focuses on practicality and real-world use, steering away from overly formal or robotic language.

### Features ✨

-   **Localized Expressions**: Supports multiple languages, from English to Indonesian, Japanese, Russian, and more.
-   **Zero Dependencies**: Simple and efficient—no external dependencies required.
-   **Natural Style**: Prioritizes spoken language for casual conversations.
-   **Special Cases**: Includes "midnight" and "noon" handling where relevant.
-   **Customizable**: Create or tweak configurations to fit specific languages or regional dialects.

---

## Installation 🚀

Install via npm or yarn:

```bash
npm install colloquial-time
```

or

```bash
yarn add colloquial-time
```

---

## Usage 💻

Get started in seconds:

```javascript
const {colloquial, languages} = require('colloquial-time');

// English Example
console.log(colloquial(new Date(), languages.en)); // "quarter past seven in the morning"

// Indonesian Example
console.log(colloquial(new Date(), languages.id)); // "jam tujuh lewat seperempat pagi"
```

---

## Supported Languages 🌍

-   🇮🇩 **Indonesian** (Bahasa Indonesia)
-   🇬🇧 **English**
-   🇩🇪 **German** (Deutsch)
-   🇷🇺 **Russian** (Русский)
-   🇫🇷 **French** (Français)
-   🇪🇸 **Spanish** (Español)
-   🇯🇵 **Japanese** (日本語)
-   🇨🇳 **Chinese** (中文)

### Bonus Examples 🎉

While not a primary focus, the library also supports:

-   **Balinese** (Bahasa Bali)
-   **Javanese** (Bahasa Jawa)
-   **Sundanese** (Bahasa Sunda)

These examples highlight how the library can accommodate regional and underrepresented languages, showcasing its flexibility.

---

## API 📚

### `colloquial(date: Date, langConfig: LanguageConfig): string`

**Parameters:**

-   `date`: A JavaScript `Date` object or a date string.
-   `langConfig`: Language configuration object (e.g., `languages.en`).

**Returns:**

-   A human-readable, colloquial time expression.

---

## Custom Language Configurations 🛠️

Add your own language or modify existing ones. Here’s an example configuration for English:

```javascript
module.exports = {
  numbers: ['', 'one', 'two', 'three', ...],
  minutePrepositions: { 5: 'five', 10: 'ten', ... },
  halfHourPrepositions: { 15: 'quarter', 30: 'half' },
  timeOfDay: [
    [0, 11, 'in the morning'],
    [12, 17, 'in the afternoon'],
    [18, 23, 'in the evening']
  ],
  words: {
    timePrefix: '',
    hourSuffix: " o'clock",
    less: 'to',
    more: 'past',
  },
  format: {
    exactHour: '{hour}{hourSuffix} {timeOfDay}',
    pastMinutes: '{minutes} {more} {hour} {timeOfDay}',
    toMinutes: '{minutes} {less} {hour} {timeOfDay}',
  },
};
```

---

## Why Colloquial? 🤷

This library isn’t just about showing time; it’s about making time relatable. Whether you're coding for chatbots, smart devices, or just having fun with time formats, `colloquial-time` keeps things friendly and easy to understand.

---

## Limitations and Contributions ✋

-   **Not Perfect Yet**: While the library supports many languages, the phrasing may not always align perfectly with everyday local expressions. Contributions are welcome to refine this! 🌍
-   **Got Feedback?**: Found a better way to phrase time in your language? Share it! Let’s make this better together.
-   **Add New Languages**: Want to see your language represented? Feel free to submit a configuration for it! Even lesser-known or regional languages are more than welcome. 🗣️
-   **Expand Features**: Have ideas for improving functionality or making the library more flexible? Contributions for additional features or edge cases are encouraged. ✨

Your input helps us make this library truly relatable across diverse cultures and communities! 🙌

### How to Contribute 🛠️

Want to help improve `colloquial-time`? Awesome! Here’s how you can pitch in:

1. **Fork the Repository**: Start by forking this repo to your GitHub account.

2. **Clone Your Fork**: Clone the forked repo to your local machine:

    ```bash
    git clone https://github.com/your-username/colloquial-time.git
    ```

3. **Create a Branch**: Create a branch for your contribution:
    ```bash
    git checkout -b feature/new-language
    ```
4. **Make Your Changes**: Add or update language configurations, improve phrasing, or suggest new features.
5. **Test Your Changes**: Run the test suite to ensure everything works:

    ```bash
    yarn test
    ```

    Example Output:

    ```
    Running tests...
    ✓ Indonesian - Exact hour
    ✓ Indonesian - Quarter past
    ✓ Japanese - Half past
    ✓ French - Midnight
    ✅ All 63 tests passed!
    ```

6. **Commit Your Work**: Write a meaningful commit message:
    ```bash
    git commit -m "Add support for Klingon language 🖖"
    ```
7. **Push Your Branch**: Push the branch to your fork:
    ```bash
    git push origin feature/new-language
    ```
8. **Open a Pull Request**: Go to the original repo and open a pull request. Be sure to include a clear description of what you’ve added or fixed.

---

## License 📄

MIT. Feel free to use, share, and improve.

---

## Author 🎨

Created with care by **Agus Made**. For feedback or inquiries, feel free to reach out via [GitHub](https://github.com/agusmade).

---

## Examples in Action 🎬

```javascript
const {colloquial, languages} = require('colloquial-time');

// Russian
console.log(colloquial(new Date('2024-11-16T07:15:00'), languages.ru)); // "четверть восьмого утра"

// Japanese
console.log(colloquial(new Date('2024-11-16T07:30:00'), languages.ja)); // "七時三十分 午前"

// French
console.log(colloquial(new Date('2024-11-16T07:45:00'), languages.fr)); // "huit heures moins le quart du matin"
```

---

Let’s make telling time fun again! 🕰️
