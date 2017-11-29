// curried functions

let add = function (x) {
  return function (y) {
    return x + y;
  };
};

add(3)(5);

// eqiv to:

let add = x => y => x + y;
add(3)(5);






