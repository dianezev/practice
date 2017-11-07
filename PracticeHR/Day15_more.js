// Day 15 - Linked list
// (see LinkedList.js for example where head is 
// property of Solution & not returned to main)


// Sample input (cli):
// 4
// 2
// 3
// 4
// 1

// Sample output:
// 2 3 4 1



function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){
//    this._length = 0;
//    this.head = null;
    
	this.insert=function(head,data){
        var node = new Node(data);
        var curNode = head;
        
        //console.log(head);  // to see nested nodes
        
        if (!curNode) {
            //curNode = node;
            head = node;
            
        } else {
        
            while (curNode.next) {
                curNode = curNode.next;
            }

            curNode.next = node;
        }
        return head;
    };
    
	this.display = function(head){
        var curNode = head;
        while (curNode) {
            console.log(curNode.data + " ");
            curNode = curNode.next;
        }
    };
}

function main(arr){
    var T = arr.length;
    var head = null;
    var mylist = new Solution();
    for(var i = 0; i < T; i++){
        var data = parseInt(arr[i]);
        head = mylist.insert(head, data);
    }
    console.log(mylist);
    console.log(head);  // to see nested nodes
    mylist.display(head);
}	

console.log(main([2, 3, 4, 1]));



