const array = [
    {name:'Laptop',price:800, category:'Electronics'},
    {name:'Phone',price:500,category:'Electronics'},
    {name:'Table',price:200,category:'Furniture'},
    {name:'chair',price:100,category:'Furniture'},
    {name:'Headfone',price:50,category:'Electronics'},
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
]

console.log(array)

//Part1 Javascript operation
 // using push() array method to add a new product

 const addProduct= {name:'Desk',price:150,category:'Furniture'}
  array.push(addProduct)
  console.log(array)
// array.push({name:'Desk',price:150,category:'Furniture'}) this also can work

//Using find() method to get the details of the product"Watch" and display them

const findProduct= array.find(product => product.name==='Watch')
console.log(findProduct)
  
// Using map to create an array of names only

const productNames= array.map(items => items.name)
console.log(productNames)

// Using filter to get all products that cost more than 100

const items= array.filter(product => product.price > 100)
console.log(items)

//using foreach to display each product's name and price
array.forEach(item =>{
 console.log (`Product:${item.name},price:$${item.price}`)
} 
)
//using reduce() method to calculate total cost of the products

const calculateSum= array.reduce((sum,tot) => sum+tot.price , 0)
  console.log(`The total cost of all product is:${calculateSum}`)

//Part 2 Simple UI in HTML
  //using (forEach) to loop through the products array and display each product



