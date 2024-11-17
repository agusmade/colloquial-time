const languages = require('./languages');
const {sebut} = require('./sebut');

function colloquial(input, langRef) {
	const date = new Date(input);
	return sebut(date, langRef);
}

module.exports = {
	colloquial,
	languages,
};
