module.exports.Node = Node;
module.exports.BST = BST;


function Node(data, left, right) {
   this.data = data;
   this.left = left;
   this.right = right;
   this.show = show;
}

function show() {
   return this.data;
}

function BST() {
   this.root = null;
   this.insert = insert;
   this.count = count;
}

function insert(data) {
   var n = new Node(data, null, null);
   if(this.root === null) {
    this.root = n;
   }
   else {
     var current = this.root;
     var parent;
     while (true) {
        parent = current;
        if (data.size < current.data.size) {
           current = current.left;
           if (current === null) {
               parent.left = n;
               break;
           }
        }
        else 
        {
           current = current.right;
           if (current === null) {
               parent.right = n;
               break;
           }
        }
     }
   }
}

function count() {
	return countSubtree(this.root);
}

function countSubtree(node) 
{
	if(node == null)
	{
		return 0;
	}
	else
	{
		return countSubtree(node.left) + 1 + countSubtree(node.right);
	}
}
