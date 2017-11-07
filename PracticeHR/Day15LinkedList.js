// Day 15 - Linked list

// Sample input (cli):
// 4
// 2
// 3
// 4
// 1

// Sample output:
// 2 3 4 1

// For cli:
//process.stdin.resume();
//process.stdin.setEncoding('ascii');
//
//var input_stdin = "";
//var input_stdin_array = "";
//var input_currentline = 0;
//
//process.stdin.on('data', function (data) {
//    input_stdin += data;
//});
//
//process.stdin.on('end', function () {
//    input_stdin_array = input_stdin.split("\n");
//    main();    
//});
//function readLine() {
//    return input_stdin_array[input_currentline++];
//}

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
        
        return this.head;
    };
    
	this.display = function(head){
        var curNode = head;
        while (curNode) {
            console.log(start.data + " ");
            curNode = curNode.next;
        }
    };
}

function main(arr){
    var T = arr.length;
    var head = null;
    var mylist = new Solution();
    console.log(mylist);
    for(var i = 0; i < T; i++){
        var data = parseInt(arr[i]);
        head = mylist.insert(data);
    }
    mylist.display(head);
}	

console.log(main([2, 3, 4, 1]));

// For cli:
//function main(){
//    var T=parseInt(readLine());
//    var head=null;
//    var mylist=new Solution();
//    for(i=0;i<T;i++){
//        var data=parseInt(readLine());
//        head=mylist.insert(head,data);
//    }
//    mylist.display(head);
//}	

