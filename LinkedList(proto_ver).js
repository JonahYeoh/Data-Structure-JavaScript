// 定義node物件
function Node(element){
	this.value = element;
	this.next = null;
}
// linked list 方法
var func = {
	// 新增新元素 (加在link第一個位置)
	add : function(element){ 
		var newnode = new Node(element);
		newnode.next = this.next;
		this.next = newnode;
	},
	// 印出link
	show : function(){
		var head = this;	
		while(head != null){
			process.stdout.write(`[${head.value}]-`);
			head = head.next;
		}
		console.log('|END');
	}
}
// 將 node 物件的prototype新增 linked list方法 
Node.prototype = Object.create(func);
// 宣告一個頭節點
var head = new Node('head');
// 新增元素到link中
for(let i=0;i<10;i+=2)
	head.add(i);
// 印出linked list
head.show();
// 印出頭節點
console.log(head);


