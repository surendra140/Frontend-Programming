var  numbers = [0.125,0.236, 0.256, 0.110, 0.049 ];

function sort(a,b) { 
    return b - a; 
}
numbers.sort(sort);

console.log(numbers);