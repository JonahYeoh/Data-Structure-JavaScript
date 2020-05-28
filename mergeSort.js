
//	MAIN
let ary = [7,6,3,2,1,1,0,-1,-2];

console.log(ary);
mergeSort(ary, 0, ary.length-1);
console.log(ary);
// function

function mergeSort(array, start, end){
	// if size of array <3
	if( start == end )
		return;
	else if( start+1 == end ){
		if(array[start] > array[end])
			array[start] = array[end] + (array[end] = array[start]) - array[start];
	}	
	else{
		mergeSort(array, start, Math.floor((start+end)/2) );
		mergeSort(array, Math.floor((start+end)/2)+1, end);
		merge(array, start, Math.floor((start+end)/2), Math.floor((start+end)/2)+1, end)
		console.log(`process: ${array}`);	
	}
}

function merge(ary, a1_s, a1_e, a2_s, a2_e){
	let ret = [];
	let len_1 = a1_e - a1_s + 1;
	let len_2 = a2_e - a2_s + 1;
	let i = j = 0;
	while(i<len_1 || j<len_2){
		if( (i<len_1 && j<len_2 && ary[a1_s+i] < ary[a2_s+j]) || (i<len_1&&j==len_2)){
			ret.push(ary[a1_s+i]);
			i++;
		}
		else if( (i<len_1 && j<len_2 && ary[a1_s+i] > ary[a2_s+j]) || (j<len_2&&i==len_1)){
			ret.push(ary[a2_s+j]);
			j++;			
		}
		else if(i<len_1 && j<len_2 && ary[a1_s+i] == ary[a2_s+j]){
			ret.push(ary[a1_s+i]);
			ret.push(ary[a2_s+j]);
			i++;
			j++;
		}
	}
	for(let i=0;i<a2_e - a1_s + 1;i++)
		ary[a1_s+i] = ret[i];	
}



