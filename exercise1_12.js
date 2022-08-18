// Exercise 1.12

function pascal_number(row, index) {
    return index > row
           ? false
           : row === 1 || index === 1 || row === index
             ? 1
             : pascal_number(row-1, index-1) + pascal_number(row-1, index);
}

pascal_number(3, 4);