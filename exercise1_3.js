
function sum_square_largest_two(a, b, c) {
    return(
        a < b && a < c
        ? (b*b) + (c*c)
        : b < a && b < c
        ? (a*a) + (c*c)
        : (a*a) + (b*b)
        );
}


sum_square_largest_two(10, 4, 10);

// Alternative solution: square all arguments, sum,  
// and then subtract square of smallest from result
