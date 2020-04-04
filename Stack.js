/* 
* === MAIN ===
*/
{
	const list = [3,5,6,2,7,1,8];
	let stack = new StackNode('(im head)');
	let otherSpace= [];
	// push
	for(let i in list) stack = push(stack, list[i]);
	// print
	printStack(stack);
	//pop
	otherSpace[0] = pop(stack);
	otherSpace[1] = pop(stack);
	//print
	printStack(stack);
	console.log(otherSpace);
}
/*
* === END_MAIN ===
*/

/* 
* *** FUNCTION ***
*/
// Stack struct
function StackNode(data){
    this.data = data;
    this.next = null;	
}
// add element to stack
function push(head, element){
	let ret = head;
	let tmp = head.next;
	head.next = new StackNode(element);
	head.next.next = tmp;
	return ret;
}
// pop element from stack 
function pop(head){
	let ret = head.next.data;
	head.next = head.next.next;
	return ret;
}
// print stack
function printStack(head){
	console.log('\n===== Print Stack =====');
	while(head!=null){ console.log('\t'+head.data); head=head.next; }
	console.log('===== END print =====\n');
}
/* 
* *** END_FUNCTION ***
*/

