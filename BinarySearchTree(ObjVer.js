
// Main
let head = new BinaryTree(10);
for(let i = 1; i<20; i+=2)
  head.add(i);
head.show(head);

// object
function BinaryTree(val){
  this.val = val;
  this.left = null;
  this.right = null;

  this.add = function(element){
    let tmp = this;
    while(true){
      if(element < tmp.val){
        if(tmp.left == null){
          tmp.left = new BinaryTree(element);
          break;
        }
        tmp = tmp.left;
      }
      else if(element > tmp.val){
        if(tmp.right == null){
          tmp.right = new BinaryTree(element);
          break;
        }
        tmp = tmp.right;        
      }
      else{
        console.log('element already exist');
        break;
      }
    }
  }

  this.show = function(root){
    if(root != null){
      root.show(root.left);
      console.log(root.val);
      root.show(root.right);
    }
  }
};

