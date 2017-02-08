/**
 *
 * This example adds the "M." and "Mme"
 * which means Monsieur. and Madame. respectively in French.
 * before adding the abbreviations
 * 
**/

const Lexed = require("../dist/index.js").Lexed;
const beforeExtending = new Lexed("Alex et ADA. Pierre Dubois sont allés à la tribune hier soir.").sentenceLevel();
/**
 * The above will be equal to
 * ["M. et Mme.","Pierre Dubois sont allés à la tribune hier soir."]
**/
// Now let's add the abbreviations:
Lexed.extend.abbreviations(["m","ada"]);
// Note: The abbreviations should be passed as an array
// and when detected, the detection will be case-insensitive
// calling the same function with the same input:
const afterExtending = new Lexed("Alex et ADA. Pierre Dubois sont allés à la tribune hier soir.").sentenceLevel();
// The above will be equal to
// ["M. et Mme. Pierre Dubois sont allés à la tribune hier soir."]


// EXAMPLE ENDS HERE ----------- the following are assertion test
const assert = require("assert");
describe('Extending the abbreviations', function () {
	it('Before extending', function () {
		assert.equal(beforeExtending.length,2);
	});
	it('After extending', function () {
		assert.equal(afterExtending.length,1);
	});
});