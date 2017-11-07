// Day 23 HackerRank - traverse across each level of binary tree
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
    
    // Start of function traverse
    this.traverse = function(root) {
        var travArr = [];
        var result = [];
        travArr[0] = [root.data];
        
        getLR(1, root);
        
        for (var i = 0; i < travArr.length -1 ; i++) {
            result = result.concat(travArr[i]);
        }

        return result.join(' ');
        
        function getLR(level, node) {
            
            if (!travArr[level]) {
                travArr[level] = [];
            }
            
            if (node.left) {
                travArr[level].push(node.left.data);
                getLR(level + 1, node.left);                
            }

            if (node.right) {
                travArr[level].push(node.right.data);
                getLR(level + 1, node.right);
            }
        }
    }; // End of function traverse
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
    console.log(tree.traverse(root));
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


