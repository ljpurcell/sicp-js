// Exercise 1.11

// Recursive solution
function f_recursive(n) {
    return n < 3
           ? n
           : f_r(n-1) + 2*f_r(n-2) + 3*f_r(n-3);
}


// Iterative solution