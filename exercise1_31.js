// Exercise 1.31

// Helper functions
function inc(n)      { return n + 1; }
function identity(n) { return n; }

// Recurcive product method
function rec_product(term, a, next, b) {
    return a > b
           ? 1
           : term(a) * rec_product(term, next(a), next, b);
}

// Iterative product method
function iter_product(term, a, next, b) {
    function iter(count, total) {
        return count === 0
               ? 0
               : count > b
                   ? total
                   : iter(next(count), term(count) * total);
    }
    return iter(a, 1);
}

// Factorial in terms of product
function factorial(n) {
    return rec_product(identity, 1, inc, n);  
}


