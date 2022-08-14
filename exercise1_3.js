function square(a) {
    return(a * a)
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


sum_square_largest_two(10, 4, 10);

// Alternative solution: square all arguments, sum,  
// and then subtract square of smallest from result
