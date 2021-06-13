export interface LipsumOptions {
	startWithLoremIpsum?: boolean,
	wordsDefault?: number,
	sentencesDefault?: number,
	paragraphsDefault?: number
}

export class Lipsum {
	constructor(options?: LipsumOptions);
}
