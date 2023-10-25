const x = {
    genie: "Jindo dog" 
}; // Declare and initialize 'x' as an object

Object.freeze(x); // Freeze the object 'x'

console.log(x); // Log the initial value of 'x' to the console

x.genie = "Husky dog"; // Attempt to modify 'genie' property (will result in an error)
console.log(x); // Log the frozen value of 'x' to the console

x.BC = "human"; // Attempt to add a new property 'BC' (will result in an error)
console.log(x); // Log the frozen value of 'x' to the console

delete x.BC; // Attempt to delete the 'BC' property (will result in an error)
console.log(x); // Log the frozen value of 'x' to the console
