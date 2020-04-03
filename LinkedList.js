
//=== MAIN ===
{
	// variable annoucement and initialize
	let head = new LinkedListNode('[ im head ]');
	// insert element
	for(let i=1;i<15;i++) 
		head = addLink(head,i);
	// print linked list
	printLink(head);
	// remove linked element in linked list
	removeLink(head,1);
	// print linked list
	printLink(head);
}
//=== END MAIN ===

//*** FUNCTION ***
// linked list struct
function LinkedListNode(data){
    this.data = data;
    this.next = null;	
}
// add element to linked list
function addLink(head, element){
	let ret = head;
	while(head.next!=null) head = head.next;
	head.next = new LinkedListNode(element);
	return ret;
}
// remove element in linked list
function removeLink(head, target){
	let pre=head;
	while(head!=null){
		if(head.data == target){
			pre.next = head.next;
			break;
		}
		pre=head;
		head=head.next;
	}
}
// print linked list
function printLink(head){
	console.log('\n===== Print Link =====');
	while(head!=null){ console.log('\t'+head.data); head=head.next; }
	console.log('===== END print =====\n');
}
//*** END FUNCTION ***

