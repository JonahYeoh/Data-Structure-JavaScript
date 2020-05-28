
//	MAIN
let tree = new createTree(5);
for(let i=1;i<10;i++)
	add(tree, i);

print(tree);

// function

function createTree(element){
	this.val = element;
	this.left = null;
	this.right = null;
}

function add(root, element){
	while(true){
		if(element > root.val){
			if(root.right == null)
				{ root.right = new createTree(element); return; }
			root = root.right;
		}
		else if(element < root.val){
			if(root.left == null)
				{ root.left = new createTree(element); return; }
			root = root.left;
		}
		else
			{ console.log("element exist"); return; }
	}
}

function print(root){
	if(root != null){
		print(root.left);
		console.log(root.val);
		print(root.right);
	}
}



