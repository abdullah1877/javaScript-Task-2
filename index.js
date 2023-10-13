//                            6th Question:

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have atleat two elements";
    }
    arr.sort((a, b) => b - a);
    return arr[1];
}

//  Example:
const numbers = [5, 8, 9, 10, 12, 14];
const result = findSecondLargest(numbers);
console.log("Second largst number is:", result);


//                             7th Quetion:

function countVowles(str) {
    str = str.toLowerCase();

    let count = 0;

    for (let char of str) {
        if ('aeiou'.includes(char)) {
            count++;

        }
    }

    return count;

}

// Example:
const inputString = "Hello, World!";
const vowelCount = countVowles(inputString);
console.log("Number of vowles:", vowelCount);


//                               8th Question:

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Example:
const num = 15;
if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is not a prime number.`);
}


//                                  9th Question:

function generateFibonacci(n) {
    const fibonacciSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextValue = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextValue);
    }
    return fibonacciSequence.slice(0, n)

}

//  Example:
const numTerms = 10;
const fibonacciSeries = generateFibonacci(numTerms);
console.log("Fibonacci sequence:", fibonacciSeries);

//                                    10th Question

function capitalizeWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    const capitalizedWords = words.map(word => {
      if (word.length === 0) {
        return word; 
      }
      return word[0].toUpperCase() + word.slice(1);
    });
  
    const capitalizedSentence = capitalizedWords.join(' ');
  
    return capitalizedSentence;
  }
  
  // Example:
  const sentence = "halo my name is abdullah";
  const capitalized = capitalizeWords(sentence);
  console.log(capitalized); 
  