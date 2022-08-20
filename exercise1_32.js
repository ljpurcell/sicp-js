// Exercise 1.32

// Helper functions
function identity(n)    { return n; }
function inc(n)         { return n + 1; }
function add(x, y)      { return x + y; }
function multiply(x, y) { return x * y; }

// Generalised accumulation functions -- iterative and recursive
function accumulate_i(combiner, null_value, term, a, next, b) {
    function iter(count, result) {
        return count > b
               ? result
               : iter(next(count), combiner(term(count), result));
    }
    return iter(a, null_value);
}

function accumulate_r(combiner, null_value, term, a, next, b) {
    return a > b
           ? null_value
           : combiner(term(a), accumulate_r(combiner, null_value, term, next(a), next, b));
}


// Sum and Product defined in terms of Accumulate
function sum(term, a, next, b) {
    return accumulate_r(add, 0, term, a, next, b);
}

function product(term, a, next, b) {
    return accumulate_r(multiply, 1, term, a, next, b);
}

product(identity, 3, inc, 5);
