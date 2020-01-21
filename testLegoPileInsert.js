var assert = require('assert');
var lego = require('../legos');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;

describe('LegoPile', function() {
        describe('#insertLp(brick)', function() {
                it('insert one brick', function() {
                        b = new Brick(4,"blue");
			lp = new LegoPile();
			lp.insertLp(b);
			assert.equal(lp.subPile['blue'].root.show().color,'blue');
			assert.equal(lp.subPile['blue'].root.show().size,4);
                });
                it('insert one brick of each color', function() {
			lp = new LegoPile();

                        redBrick    = new Brick(4, "red");
                        greenBrick  = new Brick(6, "green");
                        blueBrick   = new Brick(10,"blue");
                        yellowBrick = new Brick(12,"yellow");
                        blackBrick  = new Brick(14,"black");
                        whiteBrick  = new Brick(16,"white");

			lp.insertLp(redBrick);
			lp.insertLp(greenBrick);
			lp.insertLp(blueBrick);
			lp.insertLp(yellowBrick);
			lp.insertLp(blackBrick);
			lp.insertLp(whiteBrick);

			assert.equal(lp.subPile['red'].root.show().color,'red');
			assert.equal(lp.subPile['red'].root.show().size,4);
			assert.equal(lp.subPile['green'].root.show().color,'green');
			assert.equal(lp.subPile['green'].root.show().size,6);
			assert.equal(lp.subPile['blue'].root.show().color,'blue');
			assert.equal(lp.subPile['blue'].root.show().size,10);
			assert.equal(lp.subPile['yellow'].root.show().color,'yellow');
			assert.equal(lp.subPile['yellow'].root.show().size,12);
			assert.equal(lp.subPile['black'].root.show().color,'black');
			assert.equal(lp.subPile['black'].root.show().size,14);
			assert.equal(lp.subPile['white'].root.show().color,'white');
			assert.equal(lp.subPile['white'].root.show().size,16);
                });
                it('insert several bricks of one color', function() {
			lp = new LegoPile();

                        lp.insertLp(new Brick(4,"blue"));
                        assert.equal(lp.subPile['blue'].root.show().size,4);

                        lp.insertLp(new Brick(2,"blue"));
                        assert.equal(lp.subPile['blue'].root.left.show().size,2);
                        lp.insertLp(new Brick(6,"blue"));
                        assert.equal(lp.subPile['blue'].root.right.show().size,6);

                        lp.insertLp(new Brick(1,"blue"));
                        assert.equal(lp.subPile['blue'].root.left.left.show().size,1);
                        lp.insertLp(new Brick(3,"blue"));
                        assert.equal(lp.subPile['blue'].root.left.right.show().size,3);
                        lp.insertLp(new Brick(5,"blue"));
                        assert.equal(lp.subPile['blue'].root.right.left.show().size,5);
                        lp.insertLp(new Brick(7,"blue"));
                        assert.equal(lp.subPile['blue'].root.right.right.show().size,7);
                });
        });
        describe('#hasBrick(size,color)', function() {
                it('check if pile has brick', function() {
			lp = new LegoPile();
                        b = new Brick(4,"blue");
			lp.insertLp(b);
			assert.equal(lp.hasBrick(4,"blue"),true);
                });
                it('check if pile does not have brick', function() {
			lp = new LegoPile();
                        r = new Brick(4,"red");
			lp.insertLp(r);
			assert.equal(lp.hasBrick(4,"blue"),false);
                });
        });
        describe('#countLp()', function() {
                it('count all bricks with 3 in pile', function() {
			lp = new LegoPile();
                        b1 = new Brick(4,"blue");
                        b2 = new Brick(6,"blue");
                        b3 = new Brick(8,"blue");
			lp.insertLp(b1);
			lp.insertLp(b2);
			lp.insertLp(b3);
			assert.equal(lp.countLp(),3);
                });
                it('count all bricks with 3 blue and 4 red', function() {
			lp = new LegoPile();
                        b1 = new Brick(4,"blue");
                        b2 = new Brick(6,"blue");
                        b3 = new Brick(8,"blue");
                        r1 = new Brick(4,"red");
                        r2 = new Brick(6,"red");
                        r3 = new Brick(8,"red");
                        r4 = new Brick(10,"red");
			lp.insertLp(b1);
			lp.insertLp(b2);
			lp.insertLp(b3);
			lp.insertLp(r1);
			lp.insertLp(r2);
			lp.insertLp(r3);
			lp.insertLp(r4);
			assert.equal(lp.countLp(),7);
                });
                it('count bricks with one of each of the 6 colors', function() {
			lp = new LegoPile();
                        redBrick = new Brick(4,"red");
                        greenBrick = new Brick(6,"green");
                        blueBrick = new Brick(8,"blue");
                       	yellowBrick = new Brick(4,"yellow");
                        blackBrick = new Brick(6,"black");
                        whiteBrick = new Brick(8,"white");
			lp.insertLp(redBrick);
			lp.insertLp(greenBrick);
			lp.insertLp(blueBrick);
			lp.insertLp(yellowBrick);
			lp.insertLp(blackBrick);
			lp.insertLp(whiteBrick);
			assert.equal(lp.countLp(),6);
                });


        });
});


