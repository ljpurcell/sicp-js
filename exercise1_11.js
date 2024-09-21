// Exercise 1.11

// Recursive solution
function f_rec(n) {
    return n < 3 
           ? n
           : f_rec(n-1) + 2 * f_rec(n-2) + 3 * f_rec(n-3);
}

// Iterative solution
function f_iter(n) {
    function f(one_back, two_back, three_back, count) {
        return count === n + 1
               ? one_back
               : f(one_back + 2*two_back + 3*three_back, 
                   one_back, 
                   two_back, 
                   count+1);
               
    }
    
    return n < 3
           ? n
           : f(2, 1, 0, 3);
}

f_rec(120);