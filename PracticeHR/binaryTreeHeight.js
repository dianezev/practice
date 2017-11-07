// Day 22 HackerRank - find height of binary tree
// Uses recursion

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function getHeight
    this.getHeight = function(root) {
        var termArr = [];        
        var maxHt = checkForEnd(root, 0);
        return maxHt;
        
        function checkForEnd(node, ht) {
            
            console.log(node.data);
            
            if (node.left) {
            
                console.log('calling LEFT with ' + (ht + 1));
                checkForEnd(node.left, ht + 1);
                
            }
            if (node.right) {
                
                console.log('calling RIGHT with ' + (ht + 1));
                checkForEnd(node.right, ht + 1);
            }
            if (!node.left && !node.right) {
                console.log('PUSHING ' + ht + ' onto arr');
                termArr.push(ht);
            }
            return Math.max(...termArr);

        }
    }; // End of function getHeight
}; // End of function BinarySearchTree



/////////////////////////////////////////////////////////////
// to run from console:
/////////////////////////////////////////////////////////////
function buildTree(values) {
    var tree = new BinarySearchTree();
    var root = null;
    
    //var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    console.log(tree);
    console.log(tree.getHeight(root));
}
buildTree([7,3,5,2,1,4,6,7]);

buildTree([9,3,5,10, 2,1,9, 4,6,7]);


/////////////////////////////////////////////////////////////
// to run from cli:
/////////////////////////////////////////////////////////////
process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    console.log(tree.getHeight(root));
});
//////////////////////////////////////
//        function checkForEnd(node) {
//            height++;
//            console.log(node.data);
//            var res;
//            
//            var lHt = 0;
//            var rHt = 0;
//            
//            
//            if (node.left) {
//                lHt = checkForEnd(node.left);
//            }
//            if (node.right) {
//                rHt = checkForEnd(node.right);
//            }
//            return Math.max(lHt, rHt);
//
//        }
//////////////////////////////////////
//        function checkForEnd(node, l, r) {
//            height++;
//            console.log(node.data);
//            //var res = 0;
//            
//            var lHt = l;
//            var rHt = r;
//            
//            
//            if (node.left) {
//                lHt++;
//                console.log('in LEFT: lHt is ' + lHt + ' and rHt is ' + rHt);
//                lHt = checkForEnd(node.left, lHt, rHt);
//                
//            }
//            if (node.right) {
//                rHt++;
//                console.log('in RIGHT: lHt is ' + lHt + ' and rHt is ' + rHt);
//                rHt = checkForEnd(node.right, lHt, rHt);
//            }
//            if (!node.left) {
//                
//                lHt--;
//                console.log('left is null and lHt is ' + lHt);
//            }
//            if (!node.right) {
//                rHt--;
//                console.log('right is null and rHt is ' + rHt);
//            }
//            //res++;
//            //console.log('res is ' + res);
//            return Math.max(lHt, rHt);
//
//        }
