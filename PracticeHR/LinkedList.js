// Linked list
// adapted from https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
// TBD see above link for more code on remove, search & Doubly Linked Lists

function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){
    this._length = 0;
    this.head = null;
    
    this.insert = function(data){
        var node = new Node(data);
        var curNode = this.head;
        
        // If list is empty, set head to first node
        if (!curNode) {
            this.head = node;

        } else {
 
            // 2nd use-case: a non-empty list
            while (curNode.next) {
                curNode = curNode.next;
            }
        
            curNode.next = node;
        }
        
        this._length++;
    };
    
	this.display = function(){
        var curNode = this.head;
        while (curNode) {
            console.log(curNode.data + " ");
            curNode = curNode.next;
        }
    };
}

function main(arr){
    var T = arr.length;
    var mylist = new Solution();

    for(var i = 0; i < T; i++){
        var data = parseInt(arr[i]);
        mylist.insert(data);
    }

    mylist.display();
}	

console.log(main([2, 3, 4, 1]));
