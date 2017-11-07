// CodeWars - DMZ submitted
// splits a linked list

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  var n = new Context(new Node(), new Node());
  var curFirst;
  var curSecond;  
  var cur = head;
    
    if (head === null || head.next.data === undefined) {
        throw 'Error: List must contain at least two nodes.'
    }
    
  while (cur !== null) {
      
      // Put odd els in first
      if (n.first.data === undefined) {
        n.first.data = cur.data;
        curFirst = n.first ;
      } else {
        curFirst.next = new Node(cur.data);
        curFirst = curFirst.next;
      }
      cur = cur.next;
      
      if (cur === null) {
          break;
      }

      // Put even els in second
      if (n.second.data === undefined) {
        n.second.data = cur.data;
        curSecond = n.second ;
      } else {
        curSecond.next = new Node(cur.data);
        curSecond = curSecond.next;
      }
      cur = cur.next;
    }
  
  // Remember to return the context.
    return n;
}

// DMZ, to test in console:
var head;
var cur;

for (var i = 1; i < 10 ; i++) {
    
    if (i === 1) {
        head = new Node(i);
        cur = head;
    } else {
        cur.next = new Node(i);
        cur = cur.next;
    }
}

console.log(head);
console.log(alternatingSplit(head));

///////////////////////////////////////////////
// Best practices solution from CodeWars:
function alternatingSplit(head) {
  if (arguments.length == 0 || head == null || head.next == null) throw new Error('nope')
  return new Context(split(head), split(head.next))
}

const split = (head) => {
  if (head == null) return null
  const result = new Node(head.data)
  result.next = head.next == null ? null : split(head.next.next)    
  return result
}