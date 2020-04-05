/* 
* === MAIN ===
*/ 
{
	const list = [3,5,6,2,7,1,8];
	let otherSpace= [];
	let queue = new QueueNode('(im head)');
		queue.pos = queue;
	// enqueue
	for(let i in list) queue = enqueue(queue, list[i]);
	// print
	printQueue(queue);
	// dequeue
	otherSpace[0] = dequeue(queue);
	otherSpace[1] = dequeue(queue);
	//print
	printQueue(queue);
	console.log(otherSpace);
}
/*
* === END_MAIN ===
*/

/* 
* *** FUNCTION ***
*/
// Queue struct
function QueueNode(data){
    this.data = data;
    this.pos = null; // site for new node
    this.next = null;	
}
// add element to queue
function enqueue(head, element){
	let ret = head;

	head = head.pos;
	head.next = new QueueNode(element);
	ret.pos = head.next;

	return ret;
}
// remove element from queue
function dequeue(head){
	let ret = head.next.data;
	head.next = head.next.next;
	return ret;
}
// print queue
function printQueue(head){
	console.log('\n===== Print Queue =====');
	while(head!=null){ console.log('\t'+head.data); head=head.next; }
	console.log('===== END print =====\n');
}
/* 
* *** END_FUNCTION ***
*/

