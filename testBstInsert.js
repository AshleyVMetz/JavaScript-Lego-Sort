var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('BST', function() {
	describe('#insert(data)', function() {
		it('just a root', function() {
			bst = new BST();
			bst.insert(new Brick(5,"blue"));
			assert.equal(bst.root.show().size,5);
		});
		it('root plus a left child', function() {
			bst = new BST();
			bst.insert(new Brick(5,"blue"));
			assert.equal(bst.root.show().size,5);
			bst.insert(new Brick(4,"blue"));
			assert.equal(bst.root.left.show().size,4);
		});
		it('root plus a right child', function() {
			bst = new BST();
			bst.insert(new Brick(5,"blue"));
			assert.equal(bst.root.show().size,5);
			bst.insert(new Brick(6,"blue"));
			assert.equal(bst.root.right.show().size,6);
		});
		it('root plus a left and right child', function() {
			bst = new BST();
			bst.insert(new Brick(5,"blue"));
			assert.equal(bst.root.show().size,5);
			bst.insert(new Brick(4,"blue"));
			assert.equal(bst.root.left.show().size,4);
			bst.insert(new Brick(6,"blue"));
			assert.equal(bst.root.right.show().size,6);
		});
		it('general case', function() {
			bst = new BST();

			// Level 1
			bst.insert(new Brick(4,"blue"));
			assert.equal(bst.root.show().size,4);

			// Level 2
			bst.insert(new Brick(2,"blue"));
			assert.equal(bst.root.left.show().size,2);
			bst.insert(new Brick(6,"blue"));
			assert.equal(bst.root.right.show().size,6);

			// Level 3
			bst.insert(new Brick(1,"blue"));
			assert.equal(bst.root.left.left.show().size,1);
			bst.insert(new Brick(3,"blue"));
			assert.equal(bst.root.left.right.show().size,3);
			bst.insert(new Brick(5,"blue"));
			assert.equal(bst.root.right.left.show().size,5);
			bst.insert(new Brick(7,"blue"));
			assert.equal(bst.root.right.right.show().size,7);
		});
	});
	describe('#count()', function() {
		it('count the number of nodes in a tree with 0 nodes', function() {
			bst = new BST();
			assert.equal(bst.count(),0);
		});
		it('count the number of nodes in a tree with 1 nodes', function() {
			bst = new BST();
			bst.insert(new Brick(4,"blue"));
			assert.equal(bst.count(),1);
		});
		it('count the number of nodes in a tree with 7 nodes', function() {
			bst = new BST();

			// Level 1
			bst.insert(new Brick(4,"blue"));
			assert.equal(bst.root.show().size,4);

			// Level 2
			bst.insert(new Brick(2,"blue"));
			assert.equal(bst.root.left.show().size,2);
			bst.insert(new Brick(6,"blue"));
			assert.equal(bst.root.right.show().size,6);

			// Level 3
			bst.insert(new Brick(1,"blue"));
			assert.equal(bst.root.left.left.show().size,1);
			bst.insert(new Brick(3,"blue"));
			assert.equal(bst.root.left.right.show().size,3);
			bst.insert(new Brick(5,"blue"));
			assert.equal(bst.root.right.left.show().size,5);
			bst.insert(new Brick(7,"blue"));
			assert.equal(bst.root.right.right.show().size,7);

			assert.equal(bst.count(),7);
		});
	});
});
