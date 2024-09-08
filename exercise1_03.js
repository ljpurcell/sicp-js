// Exercise 1.3

function square(a) {
    return(a * a);
}

function sum_square_largest_two(a, b, c) {
    return(
        a < b && a < c
        ? square(b) + square(c)
        : b < a && b < c
        ? square(a) + square(c)
        : square(a) + square(b)
        );
}


// Alternative solution: square all arguments, sum,  
// and then subtract square of smallest from result

function sum_square_largest_two_B(a, b, c) {
    return square(a) + square(b) + square(c)
           - square(a < b ? (a < c ? a : c) : (b < c ? b : c));
}
