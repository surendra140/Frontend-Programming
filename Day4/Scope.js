var global_x = 1; // global variable
console.log('Outside of functions global_x = ', global_x);

function foo() {
    
    var local_foo_x = 2;
    console.log("inside foo, global_x = ", global_x);
    console.log("inside foo, local_x = ", local_foo_x);
}
foo();

console.log("outside of fuction, local_x = ", local_foo_x)



