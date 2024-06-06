// Ques #1 Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".
let fruit: string[] = ["apple", "banana", "mango", "orange"];
console.log(fruit);

// Ques #2 Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.
let numbers: number[] = [10, 20, 30, 40];
console.log(numbers);

// QUes #3 Access the third element of the fruits array and assign it to a variable named thirdFruit.
let thirdFruit: string[] = ["apple", "banana", "mango", "orange"];
console.log(thirdFruit[2]);

// Ques # 4 Change the second element of the numbers array to 25.
let secondNumber: number[] = [10, 20, 30, 40];
secondNumber[2] = 25;
console.log(secondNumber);

// Ques # 5 Add the element "grape" to the end of the fruits array using the method.
let addFruit: string[] = ["apple", "banana", "mango", "orange"];
addFruit.push("grape");
console.log(addFruit);

// Ques # 6 Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
let deleteFruit: string[] = ["apple", "banana", "mango", "orange"];
deleteFruit.pop();
console.log(deleteFruit);

// QUes # 7 Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
let deleteFirstFruit: string[] = ["apple", "banana", "mango", "orange"];
deleteFirstFruit.shift();
console.log(deleteFirstFruit);

// Ques # 8 Add the element "kiwi" to the beginning of the fruits array using the method.
let addFirstFruit: string[] = ["apple", "banana", "mango", "orange"];
addFirstFruit.unshift("kiwi");
console.log(addFirstFruit);

// Ques # 9 Remove 2 elements from the fruits array starting from index 1 using the method.
let fruits = ["apple", "banana", "mango", "orange"]
fruits.splice(1,2);
console.log(fruits);

// QUes # 10 Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
let indexFruit = ["apple", "banana", "mango", "orange"]
indexFruit.splice(0,2 ,"pineapple","pear");
console.log(indexFruit);

// Ques # 11 Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
let citrusFruits= ["orange", "kiwi", "apple", "banana"]
citrusFruits.splice(2,1);
citrusFruits.splice(2,1);
console.log (citrusFruits);

// Ques # 12 Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
let lastTwoFruits = ["apple", "banana", "mango", "orange"];
lastTwoFruits.shift();
lastTwoFruits.shift();
console.log(lastTwoFruits);