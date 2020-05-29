
// Main
let head = new link('head');
for(let i = 1; i<20; i+=2)
  head.add(i);
head.print();
head.remove(5);
head.remove(6);
head.print();

// object
function link(val){
  this.value = val;
  this.next = null;

  this.add = function(value){
    let tmp = this;
    while(tmp.next != null)
    	tmp = tmp.next;
    tmp.next = new link(value);
  }

  this.remove = function(target){
    let tmp = this;
    while(tmp.next != null){
      if(tmp.next.value == target){
        tmp.next = tmp.next.next;
        return;
      }
      tmp = tmp.next;
    }
    console.log(`\twarning : Can't find target(${target})`);
  }

  this.print = function(){
  	let tmp = this;
  	while(tmp){
  		process.stdout.write(`[${tmp.value}]-`);
  		tmp = tmp.next;
  	}
  	console.log('|END');
  }

};

