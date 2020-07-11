const SIZE = 6;
let list = [7,6,5,4,3,2,1];

function QUICK_SORT(list, left, right){
	let base=left, i=left, j=right;
	if(i<j){
		do{
			do i++; while(list[i]<list[base]&&i<j-1);
			do j--; while(list[j]>list[base]&&i<=j);
			if(i<j) list[i]=list[j]+list[i]-(list[j]=list[i]);
		}while(i<j);
		list[base]=list[j]+list[base]-(list[j]=list[base]);
		QUICK_SORT(list, left, j);
		QUICK_SORT(list, j+1, right);
	}
}

console.log(list);
QUICK_SORT(list,0,list.length);
console.log(list);
