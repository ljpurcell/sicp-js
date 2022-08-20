// Exercise 1.32

// Helper functions
function identity(n)    { return n; }
function inc(n)         { return n + 1; }
function add(x, y)      { return x + y; }
function multiply(x, y) { return x * y; }

// Generalised accumulation function
function accumulate(combiner, null_value, term, a, next, b) {
    return a > b
           ? null_value
           : combiner(term(a), accumulate(combiner, null_value, term, next(a), next, b));
}

// Sum and Product defined in terms of Accumulate
function sum(term, a, next, b) {
    return accumulate(add, 0, term, a, next, b);
}

function product(term, a, next, b) {
    return accumulate(multiply, 1, term, a, next, b);
}
