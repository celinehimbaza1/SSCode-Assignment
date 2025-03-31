//String Transformations
//string capitalization

const capitalizeName = (name) => name.charAt(0).toUpperCase() + name.slice(1)
const result = capitalizeName('celine')
console.log(`My name is ${result}`)

// reverse a string

const stringReverse = (name) => name.split('').reverse().join('')
const rever = stringReverse('himbaza')
console.log(`Reversed string is ${rever}`)

//checks if a string is a palindrome(when you reverse it you will read it the same way as the origin)

const checkPolindrome = (word) => word === word.split('').reverse().join('')
const pol = checkPolindrome('madam')
console.log(`Is this string a polindrome? ${pol}`)

//counting the number of words in a given string
const wordCount = (str) => str.trim().split(/\s+/).length;
console.log(`The number of words is`);
console.log(wordCount("Good morning"));

//converts a string to snake_case(using underscore)
const snakeCase = (str) => str.replace(/\s+/g, '_').toLowerCase()
console.log(snakeCase("Hello World"));

// using carmel case
const toCamelCase = (str) => str.split(/[^a-zA-Z0-9]/).map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
console.log(toCamelCase("first name"));

// Find the longest word
const longestWord = (str) =>
    str.split(/\s+/) // Split the string into words using spaces
        .reduce((longest, current) => current.length > longest.length ? current : longest, "");

console.log(longestWord("Good evenning"));

//count the number of times a specific letter appears in a string

const countLetter = (str, letter) =>
    str.split('').filter(char => char === letter).length;

console.log(countLetter("banana", "a"));


// Array Transformations
//function that doubles every number in an array.

const doubleNumbers = (arr) => arr.map(num => num * 2);
console.log(doubleNumbers([1, 2, 3, 4]));

// Filter out even numbers:
const filterOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
console.log(filterOddNumbers([1, 2, 3, 4, 5]));

//calculate sum of numbers in an array
const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);
console.log(sum([1, 2, 3, 4]));

//calculate average
const average = (arr) => arr.reduce((acc, num) => acc + num, 0) / (arr.length);
console.log(average([1, 2, 3, 4]));

//returns the largest number in an array
const findLargest = (arr) => Math.max(...arr);
console.log(findLargest([1, 2, 3, 4]));

//returns the smallest number in an array
const findSmallest = (arr) => Math.min(...arr);
console.log(findSmallest([1, 2, 3, 4]));

//remove duplicate values from an array
const removeDuplicate = (arr) => [...new Set(arr)];//set return unique numbers only
console.log(removeDuplicate([5, 2, 1, 4, 2, 3, 4]))

//finding the index of a given value in an array
const findIndex = (arr, value) => arr.indexOf(value);
console.log(findIndex([1, 2, 3, 4], 3));

//Object Transformations
//returns the full name of a person object  
const fullName = (person) => `${person.firstName} ${person.lastName}`;
const person = { firstName: "celine", lastName: "himbaza" };
console.log(fullName(person));

//checks if a person is 18 or older
const isAdult = (person) => person.age >= 18;
const person1 = { name: "anne", age: 20 };
console.log(isAdult(person1));

//a function that adds a new property to an object
const addProperty = (obj, key, value) => ({ ...obj, [key]: value });
const persn = { name: "Alice", age: 25 };
const updatedPerson = addProperty(persn, "city", "Kigali");
console.log(persn);
console.log(updatedPerson);

//a function that checks if an object has a specific property
const hasProperty = (obj, key) => key in obj;
const pern = { name: "Alice", age: 25 };
console.log(hasProperty(pern, "name"));

//returns the number of properties in an object
const countProperties = (obj) => Object.keys(obj).length;
const per = { name: "john", age: 10, city: "Kigali" };
const emptyObj = {};
console.log(countProperties(person));
console.log(countProperties(emptyObj));

//Function Composition & Higher-Order Functions
//Create a function to reverse and capitalize a string.

const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);
const reverseString = (str) => str.split("").reverse().join("");
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const reverseAndCapitalize = compose(capitalize, reverseString);

console.log(reverseAndCapitalize("hello"));
console.log(reverseAndCapitalize("world"));

//a function to double all the even numbers in an array
const composes = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

const filterEvens = (arr) => arr.filter((num) => num % 2 === 0);
const doubleNumber = (arr) => arr.map((num) => num * 2);

const doubleEvens = composes(doubleNumber, filterEvens);

console.log(doubleEvens([1, 2, 3, 4, 5, 6]));

//sorts an array of objects by a given key 
const sortByKey = (arr, key) => arr.sort((a, b) => a[key] - b[key]);
const people = [
    { name: "celine", age: 25 },
    { name: "arka", age: 10 },
    { name: "peter", age: 20 },
];

console.log(sortByKey(people, "age"));

// returns only the products in a specified category
const filterByCategory = (products, category) =>
    products.filter(product => product.category === category);

const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
];

console.log(filterByCategory(products, "Electronics"));

// store results of previous calculations to avoid recomputation
// Caching function
const cacheFunction = (fn) => {
    const cache = {};
    return (...args) => {
        const key = args.join(",");
        if (cache[key]) {
            console.log('Returning cached result');
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
};

// Function to add two numbers
const add = (a, b) => a + b;
const cachedAdd = cacheFunction(add);
console.log(cachedAdd(2, 3));
console.log(cachedAdd(2, 3));
