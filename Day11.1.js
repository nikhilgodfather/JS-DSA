var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0"; // Handle zero case

    const result = Array(num1.length + num2.length).fill(0); // Array to store intermediate results

    // Reverse both numbers to make multiplication easier
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    // Perform multiplication digit by digit
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            const product = num1[i] * num2[j];
            const sum = result[i + j] + product;
            
            result[i + j] = sum % 10; // Store the remainder in the current position
            result[i + j + 1] += Math.floor(sum / 10); // Carry over the remainder to the next position
        }
    }

    // Remove leading zeros and reverse back the result array to form the final string
    while (result[result.length - 1] === 0) {
        result.pop();
    }

    return result.reverse().join('');
};

console.log(multiply("123", "456"));  // Output: "56088"
