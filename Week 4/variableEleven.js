const x = {
    genie: "Jindo dog" 
}; // Declare and initialize 'x' as an object

console.log(x); // Log the initial value of 'x' to the console

x.genie = "Husky dog"; // Modify the 'genie' property
console.log(x); // Log the updated value of 'x' to the console

x.BC = "human"; // Add a new property 'BC'
console.log(x); // Log the updated value of 'x' to the console

delete x.BC; // Delete the 'BC' property
console.log(x); // Log the updated value of 'x' to the console
