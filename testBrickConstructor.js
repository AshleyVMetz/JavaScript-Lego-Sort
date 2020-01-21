var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('Brick', function() {
	describe('#Brick(size,color)', function() {
		it('should save size and color within object', function() {
			b = new Brick(4,"blue");
			assert.equal(b.color,"blue");
			assert.equal(b.size,4);
		});
	});
});
