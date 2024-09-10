// Exercise 1.4
function plus(a, b) { return a + b; }

function minus(a, b) { return a - b; }

function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
}

/**
 * Answer:
 * 
 * The observation that the model of application allows for function 
 * expressions that are compound expressions can be seen above.
 * 
 * In order to evaluate the above application we must evaluate argument 
 * expressions and function expressions. The arguments are already values,
 * so we can move onto the function expression. 
 * 
 * We do this by replacing the parameters with their corresponding values
 * and evaluating the return statement.
 * 
 * This contains a conditional expression, which when replaced with the
 * argument values will result in one of two functions then being applied
 * the arguments.
 * 
 * The process then repeats. We would take the resulting function application,
 * plus in the true case, and then evaluate its argument expression and 
 * function expression via its return statement.
 * /
