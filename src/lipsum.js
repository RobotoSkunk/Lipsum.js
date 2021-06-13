'use strict';

const data = require('./data.json');

class Lipsum {

	constructor(options = { startWithLoremIpsum: true, wordsDefault: 8, sentencesDefault: 5, paragraphsDefault: 5 }) {
		if (typeof options.startWithLoremIpsum != "boolean") 
			throw("options.startWithLoremIpsum needs to be a boolean.");
			
		else if (!Number.isInteger(options.wordsDefault))
			throw("options.wordsDefault needs to be an integer.");

		else if (!Number.isInteger(options.sentencesDefault))
			throw("options.sentencesDefault needs to be an integer.");

		else if (!Number.isInteger(options.paragraphsDefault))
			throw("options.paragraphsDefault needs to be an integer.");
			
		this.options = options;
	}

	words(quantity = this.options.wordsDefault) {
		var toReturn = [];
		
		for (var i = 0; i < quantity; i++) {
			toReturn.push("word");
		}

		return toReturn;
	}

	test() {
		console.log("WORKS!!!");
	}
}

module.exports = Lipsum;
