module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

var bst = require('./bst');
const BST = bst.BST;

function Brick(size,color)
{
	this.size = size;
	this.color = color;
}

function LegoPile()
{

	this.insertLp = insertLp;
	this.hasBrick = hasBrick;
	this.countLp = countLp;

	this.colorList = ['red','blue','green','yellow','black','white'];
	this.subPile = [];
	for (let color of this.colorList) 
	{
		this.subPile[color] = new BST();
	}
}

function insertLp(brick)
{
	return (this.subPile[brick.color]).insert(brick);
}

function hasBrick(size, color)
{
	var current = this.subPile[color].root;
	while (current != null && current.data.size != size)
	{
		if(size < current.data.size) 
		{
			current = current.left;
		}
		else
		{
			current = current.right;
		}
	}
	if(current == null)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function countLp()
{
	var sum = 0;
	for (let color of this.colorList) 
	{
		sum += this.subPile[color].count();
	}
	return sum;
}
