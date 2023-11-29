// Import required module

// Create a readline input fun


// const readline = require('readline');

// const Solution = () => {
//   const interface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   interface.question("Enter the first number: ", (num1) => {
//     interface.question("Enter the second number: ", (num2) => {

//       const maxNumber = Math.max(Number(num1), Number(num2));

//       console.log(`The maximum of the two numbers is: ${maxNumber}`);
          
//       interface.close();
//     });
//   });
// };

// Solution();

// module.exports = Solution;

const readline = require("readline");

const Solution = () => {
  // Create a readline interface
  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt the user for input
  qInterface.question("Enter the first number: ", (n1) => {
    qInterface.question("Enter the second number: ", (n2) => {
      const maxi = Math.max(Number(n1), Number(n2));
      console.log(`The maximum of the two numbers is: ${maxi}`);

      // Close the readline interface
      qInterface.close();
    });
  });
};

Solution();
module.exports = Solution;
